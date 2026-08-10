"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export interface Course {
  kicker: string;
  title: string;
  description: string;
  image: string;
}

export default function MenuCourseAnimation({ courses }: { courses: Course[] }) {
  const containerRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const plateRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Initial explicit state (outside timeline) to guarantee clean start before scroll
      gsap.set(plateRefs.current[0], { autoAlpha: 1, scale: 1, x: 0, y: 0, rotation: 0 });
      gsap.set(textRefs.current[0], { autoAlpha: 1, y: 0 });

      for (let i = 1; i < courses.length; i++) {
        gsap.set(plateRefs.current[i], { autoAlpha: 0, scale: 0.6, x: 150, y: -150, rotation: -15 });
        gsap.set(textRefs.current[i], { autoAlpha: 0, y: 50 });
      }

      // 2. Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%", // 4 viewport heights of scroll
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // 3. Build transitions (1 tween per element using keyframes to prevent overwrite bugs)
      const dur = 1;
      const pause = 0.5;
      const stepDur = dur + pause;

      courses.forEach((_, i) => {
        const plate = plateRefs.current[i];
        const text = textRefs.current[i];
        const isLast = i === courses.length - 1;

        if (i === 0) {
          // First course - only animates OUT
          tl.to(plate, {
            scale: 0.6, x: -150, y: 150, rotation: 15, autoAlpha: 0,
            duration: dur, ease: "power2.inOut"
          }, 0);
          
          tl.to(text, {
            autoAlpha: 0, y: -50,
            duration: dur * 0.5, ease: "power2.in"
          }, 0);
        } else {
          // Subsequent courses
          const startTime = (i - 1) * stepDur;
          
          if (isLast) {
            // Last course - only animates IN
            tl.to(plate, {
              scale: 1, x: 0, y: 0, rotation: 0, autoAlpha: 1,
              duration: dur, ease: "power2.inOut"
            }, startTime);
            
            tl.to(text, {
              autoAlpha: 1, y: 0,
              duration: dur * 0.5, ease: "power2.out"
            }, startTime + dur * 0.5);
          } else {
            // Middle courses - animate IN, hold, animate OUT
            tl.to(plate, {
              keyframes: [
                { scale: 1, x: 0, y: 0, rotation: 0, autoAlpha: 1, duration: dur, ease: "power2.inOut" },
                { scale: 0.6, x: -150, y: 150, rotation: 15, autoAlpha: 0, duration: dur, ease: "power2.inOut", delay: pause }
              ]
            }, startTime);

            tl.to(text, {
              keyframes: [
                { autoAlpha: 1, y: 0, duration: dur * 0.5, ease: "power2.out" },
                { autoAlpha: 0, y: -50, duration: dur * 0.5, ease: "power2.in", delay: pause }
              ]
            }, startTime + dur * 0.5);
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [courses]);

  return (
    <section 
      id="menu"
      ref={containerRef} 
      className="relative min-h-[100dvh] w-full bg-background-deep overflow-hidden flex items-center justify-center"
    >
      {/* Mobile view (stack) */}
      <div className="md:hidden flex flex-col gap-24 py-24 px-6 w-full max-w-lg mx-auto">
        <h2 className="font-display text-4xl text-center text-white mb-8">Tasting Menu</h2>
        {courses.map((course, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-6">
            <div className="relative w-full aspect-square max-w-[280px]">
              <Image src={course.image} alt={course.title} fill className="object-contain" />
            </div>
            <div>
              <span className="font-script italic text-accent text-xl mb-2 block">{course.kicker}</span>
              <h3 className="font-display text-3xl text-white mb-3">{course.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view (pinned animation) */}
      <div className="hidden md:flex w-full max-w-7xl mx-auto px-6 h-[100dvh] relative items-center justify-between">
        
        {/* Background Texture Connector */}
        <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center z-0">
          <div className="w-[800px] h-[800px] relative -rotate-45">
            <Image src="/images/scatter-texture.png" alt="" fill className="object-contain" />
          </div>
        </div>

        {/* Text Container (Left) */}
        <div className="relative w-[45%] h-[400px] flex items-center z-20">
          {courses.map((course, i) => (
            <div 
              key={`text-${i}`}
              ref={(el) => { if (el) textRefs.current[i] = el; }}
              className={`absolute inset-0 flex flex-col justify-center ${i === 0 ? "" : "opacity-0 invisible"}`}
            >
              <span className="font-script italic text-accent text-3xl mb-4 block">
                {course.kicker}
              </span>
              <h3 className="font-display text-5xl lg:text-7xl text-white font-bold mb-6 leading-tight">
                {course.title}
              </h3>
              <p className="text-text-muted text-xl leading-relaxed max-w-md">
                {course.description}
              </p>
            </div>
          ))}
        </div>

        {/* Plates Container (Right) */}
        <div className="relative w-[50%] h-[700px] flex items-center justify-center pointer-events-none z-10">
          {courses.map((course, i) => (
            <div
              key={`plate-${i}`}
              ref={(el) => { if (el) plateRefs.current[i] = el; }}
              className={`absolute inset-0 flex items-center justify-center ${i === 0 ? "" : "opacity-0 invisible"}`}
            >
              <Image 
                src={course.image} 
                alt={course.title} 
                width={800} 
                height={800} 
                className="w-full h-full object-contain drop-shadow-2xl"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
