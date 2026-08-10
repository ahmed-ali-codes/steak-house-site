"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section id="story" className="relative py-32 md:py-48 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Image with scatter texture */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-background-deep p-1 ring-1 ring-white/5"
        >
          <div className="relative w-full h-full rounded-[calc(2rem-4px)] overflow-hidden">
            <Image
              src="/images/story-food.png"
              alt="Chef preparing dry-aged beef"
              fill
              className="object-cover"
            />
            {/* Scatter texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
              <Image
                src="/images/scatter-texture.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            {/* Inner shadow for physical feel */}
            <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] rounded-[calc(2rem-4px)] pointer-events-none" />
          </div>
        </motion.div>

        {/* Right: Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="bg-background-card rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <span className="font-script italic text-accent text-2xl mb-4 block">
              Discover
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-text-dark font-bold leading-tight mb-6">
              A Return to the Primal Art of Fire.
            </h2>
            <p className="text-text-dark/70 text-lg leading-relaxed mb-8 max-w-md">
              At Steak House, we honor the ancient tradition of live-fire cooking. 
              Our steaks are dry-aged in-house for 45 days, then kissed by the 
              intense heat of glowing white oak embers. It is not just a meal; 
              it is a primal return to flavor.
            </p>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 text-text-dark font-medium uppercase tracking-widest text-sm hover:text-accent transition-colors group"
            >
              More About Us 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Decorative Herb */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 pointer-events-none opacity-80 mix-blend-multiply">
              <Image
                src="/images/herbs-sprig.png"
                alt="Fresh rosemary sprig"
                fill
                className="object-contain -rotate-12"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
