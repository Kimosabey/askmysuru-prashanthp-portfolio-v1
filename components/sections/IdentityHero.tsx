"use client";

import { motion } from "framer-motion";

export default function IdentityHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end items-center overflow-hidden pb-12 pt-32">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Cinematic heritage site background" 
          className="w-full h-full object-cover opacity-60 grayscale scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW64z2_TH0FRXk9culj1slSOp6z6Lam137J4QxIrYhB-8on_vNlUXECobx1tRqLE3DVl9kNJiGqF7tMGw2iYBr6JwehztH2Ia0qyRqb4qA0dHqFkgAlqy4DoQ0w0SJvxl7_m1TJH0pP_ZvMTlwK5SQN6Uf2PuWkSSWaaKSKtfTowR86R4ldKMrvL-O6MLERWxlubX-ZytRY-GltZ-cnE9SxC6u2Mavr0F_ROxW-aBTV_gPcO41xWcDGwzmFusdDsbbIqDZxeL-og" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Content Canvas */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        
        {/* Main Title Typography */}
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1], delay: 0.2 }}
            className="mb-4 overflow-hidden"
          >
            <span className="inline-block text-[10px] md:text-xs font-label tracking-[0.4em] text-accent uppercase">
              The Architect of Heritage
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.4 }}
            className="fluid-h1 font-headline italic text-primary leading-[0.85] tracking-tighter drop-shadow-cinematic"
          >
            The poetry of <br/> light & shadow.
          </motion.h1>
        </div>

        {/* Supporting Meta & CTA */}
        <motion.div 
          initial={{ opacity: 0, opacity: 0 }}
          animate={{ opacity: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto"
        >
          <p className="text-primary-dim max-w-sm font-body text-sm md:text-base leading-relaxed md:text-right">
            Documenting the soul of Karnataka through precision cinematography, capturing eras before they fade.
          </p>
          
          <div className="flex items-center gap-6 w-full md:w-auto">
            <button className="flex-1 md:flex-none relative px-8 py-4 bg-primary text-background rounded-sm overflow-hidden transition-all hover:bg-accent group">
              <span className="relative z-10 font-label tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold flex items-center justify-center gap-3 group-hover:text-primary">
                View Showreel
                <span className="material-symbols-outlined text-sm pt-0.5">play_arrow</span>
              </span>
            </button>
            <div className="hidden md:flex flex-col gap-1 opacity-40">
              <div className="w-1.5 h-3 bg-primary rounded-sm"></div>
              <div className="w-1.5 h-3 bg-primary rounded-sm"></div>
              <div className="w-1.5 h-3 bg-primary rounded-sm"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Global Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute bottom-4 md:bottom-12 left-6 md:left-12 flex items-center gap-4 opacity-40"
      >
        <span className="text-[9px] font-label tracking-[0.3em] uppercase rotate-[-90deg] origin-left translate-x-3 translate-y-8">Scroll</span>
        <div className="w-px h-16 md:h-24 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>

      {/* Layout Accents: Film Corners */}
      <div className="absolute top-32 left-8 md:top-40 md:left-12 w-8 h-8 md:w-16 md:h-16 border-t border-l border-border hidden sm:block"></div>
      <div className="absolute top-32 right-8 md:top-40 md:right-12 w-8 h-8 md:w-16 md:h-16 border-t border-r border-border hidden sm:block"></div>
    </section>
  );
}
