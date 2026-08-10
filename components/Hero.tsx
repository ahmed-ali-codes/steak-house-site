"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Hero() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-bg",
        { scale: 1.1, filter: "blur(10px)" },
        { scale: 1, filter: "blur(0px)", duration: 2.5, ease: "power3.out" }
      )
        .fromTo(
          ".hero-title",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
          "-=1.8"
        )
        .fromTo(
          ".hero-tagline",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=1"
        )
        .fromTo(
          ".hero-cta",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.8"
        );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Glowing embers on a steakhouse grill"
          fill
          priority
          className="hero-bg object-cover object-center"
        />
        {/* Radial dark overlay for text legibility */}
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-black/20 via-black/60 to-background z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-5xl pt-16">
        <h1 className="hero-title font-display text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight text-white leading-none mb-6">
          Steak House
        </h1>
        <p className="hero-tagline font-script italic text-xl md:text-3xl text-accent mb-12 max-w-2xl">
          Fire-Kissed. Slow-Aged. Unforgettable.
        </p>
        
        <div className="hero-cta group relative">
          <Link
            href="#reservations"
            className="inline-flex items-center gap-4 rounded-full bg-white/5 backdrop-blur-md border border-white/20 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white transition-all duration-500 hover:bg-white/10 active:scale-95"
          >
            <span>Experience It</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white group-hover:bg-accent-hover transition-colors">
              <ArrowUpRight size={16} weight="bold" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
