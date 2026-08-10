"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
  return (
    <section id="events" className="relative py-32 md:py-48 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Stacked Photos */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square"
        >
          {/* Back image (shifted up and left) */}
          <div className="absolute top-0 left-0 w-[70%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-0 ring-1 ring-white/10">
            <Image
              src="/images/events-2.png"
              alt="Luxurious dining room at night"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Front image (shifted down and right) */}
          <div className="absolute bottom-0 right-0 w-[65%] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10 ring-1 ring-white/10">
            <Image
              src="/images/events-1.png"
              alt="Busy high-end kitchen"
              fill
              className="object-cover"
            />
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
              Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-text-dark font-bold leading-tight mb-6">
              Upcoming Events.
            </h2>
            <p className="text-text-dark/70 text-lg leading-relaxed mb-10 max-w-md">
              Join us for exclusive culinary journeys, from intimate wine pairings 
              with our sommelier to grand cuts carved tableside. Spaces are highly limited.
            </p>
            
            {/* Event Detail Line */}
            <div className="mb-10 py-6 border-t border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-display text-2xl font-bold text-text-dark">Wagyu & Whiskey</h4>
                <p className="text-sm text-text-dark/60 font-medium tracking-wide uppercase mt-1">Steak House Main Room</p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-accent font-semibold tracking-wider">NOV 18</span>
                <p className="text-sm text-text-dark/60 mt-1">7:00 PM</p>
              </div>
            </div>

            <Link
              href="#reservations"
              className="inline-flex items-center gap-2 text-text-dark font-medium uppercase tracking-widest text-sm hover:text-accent transition-colors group"
            >
              View All Events 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
