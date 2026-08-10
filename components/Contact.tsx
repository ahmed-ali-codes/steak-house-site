"use client";

import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        
        {/* Left Form */}
        <div className="w-full md:w-1/2 bg-white/5 border border-white/10 p-10 backdrop-blur-md">
          <span className="font-script text-accent text-3xl mb-2 block">Join Us</span>
          <h2 className="font-display text-5xl text-white mb-8">Reserve a Table</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent font-sans transition-colors" />
              <input type="text" placeholder="Phone" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent font-sans transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="date" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent font-sans transition-colors [color-scheme:dark]" />
              <input type="time" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent font-sans transition-colors [color-scheme:dark]" />
            </div>
            <select className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent font-sans transition-colors">
              <option value="2" className="bg-background-deep">2 Guests</option>
              <option value="3" className="bg-background-deep">3 Guests</option>
              <option value="4" className="bg-background-deep">4 Guests</option>
              <option value="5" className="bg-background-deep">5+ Guests</option>
            </select>
            <button type="submit" className="bg-accent text-background font-bold uppercase tracking-widest py-4 mt-8 hover:bg-accent-hover transition-colors">
              Request Reservation
            </button>
          </form>
        </div>

        {/* Right Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="font-display text-4xl text-white mb-10">Contact & Location</h3>
          <ul className="flex flex-col gap-8">
            <li className="flex items-start gap-6">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 shrink-0">
                <MapPin size={28} className="text-accent" />
              </div>
              <div className="flex flex-col justify-center pt-1">
                <strong className="block text-white font-sans text-lg font-medium mb-1">Steak House</strong>
                <span className="text-text-muted font-sans leading-relaxed">1245 Prime Cut Boulevard<br/>Downtown Culinary District<br/>New York, NY 10012</span>
              </div>
            </li>
            <li className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 shrink-0">
                <Phone size={28} className="text-accent" />
              </div>
              <span className="text-text-muted font-sans text-lg">+1 (212) 555-0198</span>
            </li>
            <li className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 shrink-0">
                <EnvelopeSimple size={28} className="text-accent" />
              </div>
              <span className="text-text-muted font-sans text-lg">reservations@steakhouse.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
