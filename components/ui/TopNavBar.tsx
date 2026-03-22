"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function TopNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Archive", href: "/#archive" },
    { name: "About", href: "/about" },
    { name: "Cinematography", href: "/cinematography" },
    { name: "Gallery", href: "/gallery" },
    { name: "Certificates", href: "/certificates" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="group relative flex items-center gap-4">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-sm border border-border group-hover:border-accent transition-colors">
            <img 
              src="/AskMysuru_Color.png" 
              alt="AskMysuru Logo" 
              className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-2xl md:text-3xl italic text-primary leading-none group-hover:text-accent transition-colors">Prashanth P.</span>
            <span className="font-label text-[9px] tracking-[0.4em] uppercase text-primary-dim group-hover:text-primary transition-colors">Visual Storyteller</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ThemeToggle />
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="font-label text-[10px] uppercase tracking-[0.3em] text-primary-dim hover:text-primary transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
          <Link 
            href="/contact"
            className="bg-primary text-background px-6 py-3 font-label text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-primary transition-all rounded-sm"
          >
            Start Inquiry
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-background z-40 md:hidden px-6 py-12 flex flex-col gap-4 text-center overflow-y-auto"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="font-headline text-3xl italic text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 pt-8 border-t border-border">
              <span className="font-label text-[10px] tracking-widest text-primary-dim uppercase block mb-4">Follow the Feed</span>
              <div className="flex justify-center gap-8">
                <span className="font-label text-xs text-primary">IG</span>
                <span className="font-label text-xs text-primary">YT</span>
                <span className="font-label text-xs text-primary">LI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
