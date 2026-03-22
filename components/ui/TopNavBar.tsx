"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function TopNavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Reel", path: "/" },
    { name: "Work", path: "/#archive" },
    { name: "Leadership", path: "/leadership" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-2xl shadow-cinematic py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 max-w-[1600px] mx-auto">
          
          {/* Logo Identity */}
          <Link href="/" className="hover:opacity-80 transition-opacity flex items-center z-50">
            <img 
              src="/AskMysuru_Color.png" 
              alt="Ask Mysuru Official Logo" 
              className="h-6 md:h-8 w-auto object-contain filter brightness-0 dark:invert transition-all" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path.includes('#') && pathname === '/');
              return (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className={`font-headline italic text-lg tracking-wide transition-colors relative group ${
                    isActive ? "text-primary" : "text-primary-dim hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-accent transition-transform origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-6">
            <ThemeToggle />
            <Link href="/#contact" className="bg-primary text-background px-6 py-2.5 rounded-sm font-label text-[10px] font-bold tracking-widest uppercase hover:bg-accent hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent">
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-4 z-50">
            <ThemeToggle />
            <button 
              className="text-primary p-2 focus-visible:outline-2 focus-visible:outline-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-3xl">
                {mobileMenuOpen ? "close" : "sort"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Mesh */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-10 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="w-full text-center border-b border-border pb-4"
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-headline italic text-4xl tracking-tight text-primary hover:text-accent transition-colors block w-full"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link 
                  href="/#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-accent text-primary px-12 py-4 rounded-sm font-label text-xs tracking-widest uppercase block text-center"
                >
                  Start Inquiry
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
