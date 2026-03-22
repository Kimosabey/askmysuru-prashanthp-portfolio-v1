"use client";

import { motion } from "framer-motion";

export default function IdentityHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Cinematic heritage site background" 
          className="w-full h-full object-cover opacity-60 grayscale scale-105 brightness-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW64z2_TH0FRXk9culj1slSOp6z6Lam137J4QxIrYhB-8on_vNlUXECobx1tRqLE3DVl9kNJiGqF7tMGw2iYBr6JwehztH2Ia0qyRqb4qA0dHqFkgAlqy4DoQ0w0SJvxl7_m1TJH0pP_ZvMTlwK5SQN6Uf2PuWkSSWaaKSKtfTowR86R4ldKMrvL-O6MLERWxlubX-ZytRY-GltZ-cnE9SxC6u2Mavr0F_ROxW-aBTV_gPcO41xWcDGwzmFusdDsbbIqDZxeL-og" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
      </div>

      {/* Content Canvas */}
      <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
        <div className="mb-4 overflow-hidden">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="inline-block text-[10px] font-label tracking-[0.5em] text-primary uppercase animate-pulse"
          >
            Currently in Production
          </motion.span>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="text-6xl md:text-9xl font-headline italic tracking-tighter text-on-surface mb-6 drop-shadow-2xl"
        >
          PRASHANTH P.
        </motion.h1>

        <div className="flex flex-col items-center gap-8">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 1 }}
            className="text-lg md:text-2xl font-body tracking-[0.2em] text-on-surface-variant uppercase font-light"
          >
            Director. Storyteller. Visionary.
          </motion.p>
          
          <div className="h-px w-24 bg-primary/30"></div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 1 }}
            className="space-y-4"
          >
            <p className="text-on-surface/80 max-w-lg mx-auto font-body italic leading-relaxed text-lg">
              "Crafting visual narratives that bridge the gap between ancient heritage and modern cinematic precision."
            </p>
            <p className="text-on-surface/40 font-kannada text-xl leading-relaxed tracking-wide">
              ಪುರಾತನ ಪರಂಪರೆ ಮತ್ತು ಆಧುನಿಕ ಚಿತ್ರಕಲೆಯ ನಡುವಿನ ಕೊಂಡಿಯನ್ನು ದೃಶ್ಯ ಕಥೆಗಳ ಮೂಲಕ ಹೆಣೆಯುವುದು.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 1 }}
            className="mt-12"
          >
            <button className="magnetic-pull group relative px-10 py-4 bg-primary-container text-on-primary-container rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl">
              <span className="relative z-10 font-label tracking-[0.2em] uppercase text-xs flex items-center gap-3">
                View Showreel
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">play_arrow</span>
              </span>
              <div className="absolute inset-0 bg-surface-bright/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40"
      >
        <span className="text-[10px] font-label tracking-[0.3em] uppercase">Scroll to Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>

      {/* Layout Accents: Film Corners */}
      <div className="absolute top-24 left-12 w-12 h-12 border-t border-l border-outline-variant/30 hidden lg:block"></div>
      <div className="absolute top-24 right-12 w-12 h-12 border-t border-r border-outline-variant/30 hidden lg:block"></div>
    </section>
  );
}
