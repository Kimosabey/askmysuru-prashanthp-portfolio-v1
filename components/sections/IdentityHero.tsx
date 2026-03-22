"use client";

import { motion, AnimatePresence, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import { Play } from "lucide-react";
import CinematicButton from "@/components/ui/CinematicButton";

export default function IdentityHero() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skew = useTransform(smoothVelocity, [-1000, 1000], [-3, 3]);
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.8, // Wait for Preloader shutter to clear
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
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] dark:opacity-[0.05]"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_100%)] opacity-40"></div>

      <motion.div
        className="relative z-20 text-center max-w-5xl flex flex-col items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ skewY: skew, y: y1, opacity }}
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center">
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
          <CinematicButton>
            Explore History
            <Play size={14} className="fill-current" />
          </CinematicButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 2 }}
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
