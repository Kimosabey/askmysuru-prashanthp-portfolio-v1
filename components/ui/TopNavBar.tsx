"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowRight, Instagram, Youtube, Twitter, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function TopNavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeMobileMenu();
      };
      window.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    setIsScrolled(window.scrollY > 50);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    let observer: IntersectionObserver | null = null;
    if (pathname === "/") {
      const sections = [
        "vision", "about", "cinematography", "gallery", "units", 
        "certificates", "clients", "archive", "social", "contact", "arsenal",
      ];

      observer = new IntersectionObserver(
        (entries) => {
          const active = entries.find((e) => e.isIntersecting);
          if (active) {
            setActiveSection(active.target.id);
            window.history.replaceState(null, "", `#${active.target.id}`);
          }
        },
        { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
      );

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
    { name: "Vision", href: "/#vision" },
    { name: "About", href: "/#about" },
    { name: "Films", href: "/#cinematography" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Units", href: "/#units" },
    { name: "Awards", href: "/#certificates" },
    { name: "Ecosystem", href: "/#clients" },
  ];

  const mobileLinks = [...navLinks, { name: "Contact", href: "/contact" }];

  const isActive = (href: string) => {
    // On home page: check active section
    if (pathname === "/" && href.startsWith("/#")) {
      return activeSection === href.slice(2); // Remove "/#" prefix
    }
    // On sub-pages: match pathname directly
    return pathname !== "/" && pathname === href;
  };

  // --- Bottom Sheet Animations ---
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const sheetVariants: Variants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: {
      y: "100%",
      transition: { type: "spring", damping: 30, stiffness: 400 },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  };

  const linkItem: Variants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  return (
    <>
      {/* ── Header Bar ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-[40] transition-all duration-500 ${
          isScrolled
            ? "py-3 md:py-4 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-cinematic"
            : "py-3 md:py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="group relative flex items-center gap-3">
              <div className="relative w-8 h-8 md:w-12 md:h-12 overflow-hidden rounded-sm border border-border group-hover:border-accent transition-all duration-500">
                <Image
                  src="/AskMysuru_Color.png"
                  alt="AskMysuru Logo"
                  width={48}
                  height={48}
                  priority
                  className="w-full h-full object-contain p-0.5 md:p-1 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-xl md:text-3xl italic text-primary leading-none group-hover:text-accent transition-colors">
                  Prashanth P.
                </span>
                <span className="hidden sm:block font-label text-[9px] tracking-[0.4em] uppercase text-primary-dim group-hover:text-primary transition-colors">
                  Directorial Portfolio
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ThemeToggle />
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-label text-[10px] uppercase tracking-[0.3em] transition-colors relative group py-2 ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-primary-dim hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-500 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="relative group px-6 py-3 overflow-hidden border border-primary hover:border-accent transition-colors"
            >
              <div className="absolute inset-0 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary group-hover:text-background transition-colors">
                Start Project
              </span>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="relative z-[60] min-w-[44px] min-h-[44px] flex items-center justify-center text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Bottom Sheet Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50]"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Sheet */}
            <motion.div
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              className="fixed bottom-0 left-0 right-0 z-[51] max-h-[85dvh] overflow-y-auto rounded-t-2xl bg-surface border-t border-border"
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-2 sticky top-0 bg-surface rounded-t-2xl z-10">
                <div className="w-10 h-1 rounded-full bg-border" />
              </div>

              <div className="px-6 pb-8">
                {/* Nav Links */}
                <motion.nav
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col"
                >
                  {mobileLinks.map((link, i) => (
                    <motion.div key={link.name} variants={linkItem}>
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-4 py-3.5 border-b border-border/50 group transition-colors ${
                          isActive(link.href)
                            ? "text-accent"
                            : "text-primary active:text-accent"
                        }`}
                      >
                        <span className="font-label text-[10px] text-accent/60 w-5 text-right tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-headline text-lg italic flex-1">
                          {link.name}
                        </span>
                        <ArrowRight
                          size={16}
                          className="text-primary-dim group-active:text-accent group-active:translate-x-1 transition-all"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* CTA */}
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="mt-5 flex items-center justify-center gap-2 w-full py-4 bg-accent text-background font-label text-xs uppercase tracking-[0.2em] font-bold rounded-lg active:scale-[0.98] transition-transform"
                >
                  Start a Project
                  <ArrowRight size={14} />
                </Link>

                {/* Footer row */}
                <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between">
                  <a
                    href="mailto:lets@askmysuru.com"
                    className="flex items-center gap-2 text-primary-dim active:text-accent transition-colors"
                  >
                    <Mail size={16} />
                    <span className="font-body text-sm">lets@askmysuru.com</span>
                  </a>

                  <div className="flex items-center gap-1">
                    {[
                      { icon: Instagram, label: "Instagram", href: "https://instagram.com/askmysuru_official" },
                      { icon: Youtube, label: "YouTube", href: "https://youtube.com/@AskMysuru" },
                      { icon: Twitter, label: "Twitter", href: "https://twitter.com/ask_mysuru" },
                    ].map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="p-3 text-primary-dim active:text-accent transition-colors"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
