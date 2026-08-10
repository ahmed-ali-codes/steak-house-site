import Link from "next/link";
import { InstagramLogo, FacebookLogo, XLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
        
        {/* Brand */}
        <div className="lg:pr-8">
          <Link href="/" className="inline-block mb-6">
            <span className="font-display text-2xl font-semibold tracking-wide text-white uppercase">
              STEAK HOUSE
            </span>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed">
            A premium steakhouse honoring the primal art of live-fire cooking and dry-aged perfection.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-xl text-white mb-6 uppercase tracking-wider">Contact</h4>
          <address className="not-italic text-text-muted text-sm space-y-3">
            <p>1234 Ember Way</p>
            <p>Chicago, IL 60601</p>
            <p className="pt-2">
              <a href="tel:+13125550198" className="hover:text-accent transition-colors">
                (312) 555-0198
              </a>
            </p>
            <p>
              <a href="mailto:reservations@steakhouse.com" className="hover:text-accent transition-colors">
                reservations@steakhouse.com
              </a>
            </p>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-xl text-white mb-6 uppercase tracking-wider">Hours</h4>
          <ul className="text-text-muted text-sm space-y-3">
            <li className="flex justify-between max-w-[200px]">
              <span>Mon – Thu</span>
              <span>5PM – 10PM</span>
            </li>
            <li className="flex justify-between max-w-[200px]">
              <span>Fri – Sat</span>
              <span>5PM – 11PM</span>
            </li>
            <li className="flex justify-between max-w-[200px]">
              <span>Sunday</span>
              <span>4PM – 9PM</span>
            </li>
          </ul>
        </div>

        {/* Socials & CTA */}
        <div>
          <h4 className="font-display text-xl text-white mb-6 uppercase tracking-wider">Connect</h4>
          <div className="flex items-center gap-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors">
              <InstagramLogo size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors">
              <FacebookLogo size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors">
              <XLogo size={20} />
            </a>
          </div>
          
          <Link
            href="#reservations"
            className="inline-block w-full text-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold tracking-widest uppercase text-white hover:bg-white hover:text-background transition-all duration-300"
          >
            Make a Reservation
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-text-muted">
        <p>&copy; {new Date().getFullYear()} Steak House. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
