import { Youtube, Instagram, Facebook, Twitter, Pin, ArrowRight, Film } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 md:py-24 px-6 md:px-12 border-t border-border bg-surface z-10 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        
        {/* Core Identity */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="relative h-10 w-48">
            <Image 
              src="/AskMysuru_Color.png" 
              alt="Ask Mysuru Official Logo" 
              fill
              sizes="(max-width: 768px) 192px, 192px"
              className="object-contain transition-all duration-500 dark:brightness-0 dark:invert opacity-80 hover:opacity-100" 
            />
          </div>
          <p className="text-primary-dim font-body text-sm max-w-sm leading-relaxed">
            Pioneering a digital renaissance for Karnataka's history. A curated visual archive where academic rigor seamlessly meets cinematic storytelling.
          </p>
          <div className="flex flex-col gap-1 mt-4">
            <p className="text-primary font-label uppercase tracking-widest text-[10px]">
              © {currentYear} PRASHANTH P. — DIRECTED BY VISION
            </p>
            <p className="font-label text-[9px] uppercase tracking-[0.2em] text-accent font-bold">
              Recipient: Nalwadi Raja Venkatappa Nayaka Award (2025)
            </p>
          </div>
        </div>

        {/* Studio Portals */}
        <div className="md:col-span-2 md:col-start-6 flex flex-col gap-6">
          <h3 className="font-label text-xs uppercase tracking-widest text-primary-dim">Studio Portals</h3>
          <div className="flex flex-col gap-4">
            <a href="https://askmysuru.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-headline italic text-lg transition-colors flex items-center justify-between group">
              AskMysuru.com
              <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
            <div className="text-primary-dim font-headline italic text-lg opacity-50 cursor-not-allowed">
              P2 ADD Agency
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <h3 className="font-label text-xs uppercase tracking-widest text-primary-dim">Navigation</h3>
          <div className="flex flex-col gap-3">
            {[
              { name: "The Vision", href: "/#vision" },
              { name: "The Architect", href: "/about" },
              { name: "Film Archive", href: "/cinematography" },
              { name: "Visual Gallery", href: "/gallery" },
              { name: "Awards & Recognition", href: "/certificates" },
            ].map((link) => (
              <a key={link.name} href={link.href} className="text-primary-dim hover:text-accent font-label text-[10px] uppercase tracking-widest transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Global Connections */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h3 className="font-label text-xs uppercase tracking-widest text-primary-dim">Professional Connect</h3>
          <div className="flex flex-col gap-4">
            <a href="mailto:lets@askmysuru.com" className="text-primary hover:text-accent font-headline italic text-lg transition-colors">lets@askmysuru.com</a>
            <a href="tel:+919742974234" className="text-primary hover:text-accent font-headline italic text-lg transition-colors">+91 97429 74234</a>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://youtube.com/@AskMysuru" target="_blank" rel="noopener noreferrer" className="bg-surface-elevated hover:bg-border p-2.5 rounded-full transition-colors flex items-center justify-center" aria-label="YouTube">
                <Youtube size={16} className="text-primary" />
              </a>
              <a href="https://instagram.com/askmysuru_official" target="_blank" rel="noopener noreferrer" className="bg-surface-elevated hover:bg-border p-2.5 rounded-full transition-colors flex items-center justify-center" aria-label="Instagram">
                <Instagram size={16} className="text-primary" />
              </a>
              <a href="https://facebook.com/askmysuru" target="_blank" rel="noopener noreferrer" className="bg-surface-elevated hover:bg-border p-2.5 rounded-full transition-colors flex items-center justify-center" aria-label="Facebook">
                <Facebook size={16} className="text-primary" />
              </a>
              <a href="https://twitter.com/ask_mysuru" target="_blank" rel="noopener noreferrer" className="bg-surface-elevated hover:bg-border p-2.5 rounded-full transition-colors flex items-center justify-center" aria-label="Twitter">
                <Twitter size={16} className="text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Massive Typographic Anchor */}
      <div className="max-w-[1600px] mx-auto mt-24 mb-8 overflow-hidden">
        <h2 className="text-[clamp(3rem,12vw,14rem)] leading-[0.8] font-headline italic text-primary/40 tracking-tighter text-center select-none block w-full">
          DIRECTOR'S VISION
        </h2>
      </div>

      {/* Technical Film Badge */}
      <div className="w-full border-t border-border pt-8 flex flex-wrap justify-center md:justify-between items-center gap-4 px-6 md:px-12 relative z-20">
        <div className="h-px bg-border flex-grow hidden md:block"></div>
        <div className="flex items-center gap-4 opacity-100 px-6 mx-auto md:mx-0">
          <Film size={12} className="text-primary-dim" />
          <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary-dim">35MM DIGITAL PROCESS</span>
          <Film size={12} className="text-primary-dim" />
        </div>
        <div className="h-px bg-border flex-grow hidden md:block"></div>
      </div>
    </footer>
  );
}
