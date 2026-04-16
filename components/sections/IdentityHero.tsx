"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Play } from "lucide-react";
import CinematicButton from "@/components/ui/CinematicButton";
import { Spotlight } from "@/components/effects/Spotlight";
import { GradientText } from "@/components/effects/GradientText";

export default function IdentityHero() {
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasLoadedBefore(!!sessionStorage.getItem("portfolio-loaded"));
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: hasLoadedBefore ? 0.2 : 2.8,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-[160px] lg:pt-[180px] overflow-hidden bg-background px-6 md:px-12" id="vision">
      {/* Spotlight effect */}
      <Spotlight className="absolute top-0 left-1/4" />
      <Spotlight className="absolute top-1/2 right-0" fill="#1d4ed8" />

      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] dark:opacity-[0.05]"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_100%)] opacity-40"></div>

      <motion.div
        className="relative z-20 text-center max-w-5xl flex flex-col items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ y: y1 }}
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center">
          <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-bold">Digital Media & Content Agency</span>
          <h1 className="fluid-h1 font-headline italic leading-[0.85] text-primary drop-shadow-cinematic py-4">Mysuru's Leading <br/> Digital Media Agency.</h1>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-col gap-8 max-w-sm">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-accent/50"></div>
            <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary-dim">Media Franchise Core</span>
          </div>
          <p className="font-body text-base md:text-lg text-primary-dim leading-relaxed">
            We create powerful videos, cover iconic events, and help brands grow online. Pioneering digital heritage documentation across Karnataka.
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
            View Our Work
            <Play size={14} className="fill-current" />
          </CinematicButton>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 2 }}
        className="absolute bottom-4 md:bottom-12 left-6 md:left-12 flex items-center gap-4 opacity-40 hidden sm:flex"
      >
        <span className="text-[9px] font-label tracking-[0.3em] uppercase rotate-[-90deg] origin-left translate-x-3 translate-y-8 whitespace-nowrap">Scroll Experience</span>
        <div className="w-px h-16 md:h-24 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>

      <div className="absolute top-32 left-8 md:top-40 md:left-12 w-8 h-8 md:w-16 md:h-16 border-t border-l border-border hidden sm:block pointer-events-none"></div>
      <div className="absolute top-32 right-8 md:top-40 md:right-12 w-8 h-8 md:w-16 md:h-16 border-t border-r border-border hidden sm:block pointer-events-none"></div>
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-8 h-8 md:w-16 md:h-16 border-b border-r border-border hidden sm:block pointer-events-none"></div>
    </section>
  );
}
