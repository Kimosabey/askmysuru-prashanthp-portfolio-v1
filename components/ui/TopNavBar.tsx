"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Instagram, Youtube, Twitter } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function TopNavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Only run IntersectionObserver on the Home Page
    let observer: IntersectionObserver | null = null;
    if (pathname === "/") {
      const sections = ["vision", "about", "units", "certificates", "cinematography", "gallery", "archive", "clients", "arsenal"];
      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Seamlessly update the URL hash without jumping
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && observer) observer.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  const navLinks = [
    { name: "Vision", href: "/" },
    { name: "About", href: "/about" },
    { name: "Films", href: "/cinematography" },
    { name: "Gallery", href: "/gallery" },
    { name: "Units", href: "/units" },
    { name: "Awards", href: "/certificates" },
    { name: "Ecosystem", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at 100% 0%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at 100% 0%)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }
  };

  const staggerLinks = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? "py-4 bg-background border-b border-border/50 shadow-cinematic" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="group relative flex items-center gap-4">
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-sm border border-border group-hover:border-accent transition-all duration-500">
                <img 
                  src="/AskMysuru_Color.png" 
                  alt="AskMysuru Logo" 
                  className="w-full h-full object-contain p-1 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-2xl md:text-3xl italic text-primary leading-none group-hover:text-accent transition-colors">Prashanth P.</span>
                <span className="font-label text-[9px] tracking-[0.4em] uppercase text-primary-dim group-hover:text-primary transition-colors">Directorial Portfolio</span>
              </div>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            <ThemeToggle />
            <div className="flex items-center gap-6">
              {navLinks.map((link, i) => (
                link.external ? (
                  <a 
                    key={link.name} 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label text-[10px] uppercase tracking-[0.3em] text-accent hover:text-primary transition-colors relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={`font-label text-[10px] uppercase tracking-[0.3em] transition-colors relative group py-2 ${
                      (pathname === link.href || (pathname === "/" && activeSection === link.href.replace("/", "").replace("#", "") || (pathname === "/" && link.name === "Vision" && activeSection === "vision"))) 
                        ? "text-accent" 
                        : "text-primary-dim hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-500 ${
                      (pathname === link.href || (pathname === "/" && activeSection === link.href.replace("/", "").replace("#", "") || (pathname === "/" && link.name === "Vision" && activeSection === "vision"))) 
                        ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </Link>
                )
              ))}
            </div>
            
            <Link 
              href="/contact"
              className="relative group px-6 py-3 overflow-hidden border border-primary hover:border-accent transition-colors"
            >
              <div className="absolute inset-0 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative z-10 font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary group-hover:text-background transition-colors">Start Project</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button 
              className="relative z-[60] w-12 h-12 flex items-center justify-center text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Cinematic Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-background text-primary z-[55] flex flex-col pt-32 px-8 overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <motion.div 
              variants={staggerLinks}
              className="flex flex-col gap-6 items-start"
            >
              {navLinks.concat([{ name: "Contact", href: "/contact" }]).map((link, i) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-headline text-5xl md:text-7xl italic hover:text-accent transition-colors flex items-center gap-4 group"
                  >
                    <span className="font-label text-xs not-italic opacity-30 mt-4">0{i + 1}</span>
                    {link.name}
                    <ArrowRight size={32} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-auto pb-12 border-t border-border pt-12 grid grid-cols-2 gap-8"
            >
              <div className="flex flex-col gap-4">
                <span className="font-label text-[10px] tracking-widest text-primary-dim uppercase">Inquiries</span>
                <a href="mailto:lets@askmysuru.com" className="font-body text-sm hover:text-accent transition-colors">lets@askmysuru.com</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-label text-[10px] tracking-widest text-primary-dim uppercase">Follow</span>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-accent transition-colors"><Instagram size={18} /></a>
                  <a href="#" className="hover:text-accent transition-colors"><Youtube size={18} /></a>
                  <a href="#" className="hover:text-accent transition-colors"><Twitter size={18} /></a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
