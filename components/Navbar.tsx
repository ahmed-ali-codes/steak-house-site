"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] max-w-7xl rounded-full ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border border-white/10 py-3 px-6 shadow-xl"
          : "bg-transparent border-transparent py-4 px-6"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col z-50">
          <span className="font-display text-2xl font-semibold tracking-wide text-white">
            STEAK HOUSE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Story", "Menu", "Events", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium tracking-widest uppercase text-white/80 hover:text-accent transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <Link
            href="#reservations"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold tracking-widest uppercase text-white transition-all duration-300 hover:bg-accent-hover active:scale-95"
          >
            Book a Table
          </Link>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 min-h-[100dvh] w-full bg-black/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        } -z-10 flex flex-col items-center justify-center gap-8`}
      >
        {["Story", "Menu", "Events", "Contact"].map((item, i) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className={`font-display text-4xl text-white hover:text-accent transition-all duration-500 delay-${
              i * 100
            } ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            {item}
          </Link>
        ))}
        <Link
          href="#reservations"
          onClick={() => setMobileMenuOpen(false)}
          className={`mt-4 rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white transition-all duration-500 delay-400 ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Book a Table
        </Link>
      </div>
    </header>
  );
}
