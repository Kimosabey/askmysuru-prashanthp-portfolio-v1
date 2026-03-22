"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function IdentityHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen min-h-[750px] flex flex-col items-center justify-center pt-[100px] lg:pt-[120px] overflow-hidden bg-background px-6">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

      <motion.div
        className="relative z-20 text-center max-w-5xl flex flex-col items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-bold">The Media House Builder's Dossier</span>
          <h1 className="fluid-h1 font-headline italic leading-[0.85] text-primary drop-shadow-cinematic">Visionary <br/> Direction.</h1>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-col gap-8 max-w-sm">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-accent/50"></div>
            <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary-dim">Media Franchise Core</span>
          </div>
          <p className="font-body text-base md:text-lg text-primary-dim leading-relaxed">
            Founder of <span className="text-primary font-medium">Ask Mysuru</span> & <span className="text-primary font-medium">Political360</span>. Architect of heritage and political media ecosystems across Karnataka.
          </p>
          <div className="flex items-center gap-6 pt-4 mx-auto">
            <div className="flex flex-col items-center">
              <span className="font-label text-[10px] text-accent tracking-widest uppercase mb-1">Status</span>
              <span className="font-body text-xs text-primary font-bold">Award-Winning Director</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-12 mt-4"
        >
          <button className="group relative px-10 py-5 overflow-hidden transition-all bg-accent text-background border border-accent hover:bg-transparent hover:text-accent">
            <div className="absolute inset-0 w-0 bg-background transition-all duration-500 ease-out group-hover:w-full"></div>
            <span className="relative z-10 font-label tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold flex items-center justify-center gap-3 group-hover:text-accent">
              Explore History
              <Play size={14} className="fill-current" />
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute bottom-4 md:bottom-12 left-6 md:left-12 flex items-center gap-4 opacity-40 hidden sm:flex"
      >
        <span className="text-[9px] font-label tracking-[0.3em] uppercase rotate-[-90deg] origin-left translate-x-3 translate-y-8 whitespace-nowrap">Scroll Experience</span>
        <div className="w-px h-16 md:h-24 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>

      {/* Frame Corners */}
      <div className="absolute top-32 left-8 md:top-40 md:left-12 w-8 h-8 md:w-16 md:h-16 border-t border-l border-border hidden sm:block pointer-events-none"></div>
      <div className="absolute top-32 right-8 md:top-40 md:right-12 w-8 h-8 md:w-16 md:h-16 border-t border-r border-border hidden sm:block pointer-events-none"></div>
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-8 h-8 md:w-16 md:h-16 border-b border-r border-border hidden sm:block pointer-events-none"></div>
    </section>
  );
}
