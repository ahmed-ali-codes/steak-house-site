"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const dishes = [
  {
    name: "Tomahawk Steak",
    subtitle: "45-day dry-aged, bone-in",
    image: "/images/plate-spin-1.png",
    speed: 25, // seconds per full rotation
  },
  {
    name: "Butter Lobster",
    subtitle: "Grilled & basted in herb butter",
    image: "/images/plate-spin-2.png",
    speed: 30,
  },
  {
    name: "Seared Scallops",
    subtitle: "Oak-coal seared, yuzu brown butter",
    image: "/images/plate-appetizer.png",
    speed: 20,
  },
];

export default function SignatureDishes() {
  return (
    <section className="py-32 bg-background-deep relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20 relative z-10 px-6">
        <span className="font-script text-accent text-3xl mb-4 block italic">
          Our Pride
        </span>
        <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
          Signature Dishes
        </h2>
        <p className="text-text-muted text-lg max-w-xl mx-auto leading-relaxed">
          Each dish is a masterpiece — fire-kissed, slow-aged, and plated with
          obsessive precision.
        </p>
      </div>

      {/* 3 spinning plates in a row */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
        {dishes.map((dish, i) => (
          <div key={i} className="flex flex-col items-center gap-8">
            {/* Circular mask with spinning plate inside */}
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-white/10" />

              {/* Second subtle ring */}
              <div className="absolute -inset-6 rounded-full border border-white/5" />

              {/* The circular viewport — clips the image to a perfect circle */}
              <div className="w-full h-full rounded-full overflow-hidden relative bg-background">
                {/* The plate image spins continuously inside the circle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: dish.speed,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover scale-110"
                  />
                </motion.div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[0_0_60px_rgba(201,139,125,0.15)]" />
            </div>

            {/* Label below */}
            <div className="text-center">
              <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                {dish.name}
              </h3>
              <p className="text-text-muted text-sm font-sans tracking-wide">
                {dish.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
