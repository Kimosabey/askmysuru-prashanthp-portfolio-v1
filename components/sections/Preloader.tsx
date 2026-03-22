"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasCheckedSession, setHasCheckedSession] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // We removed the session check here so the preloader shows on every home page visit/reload
    // as per user request.

    // Simulate organic loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasCheckedSession(true);
      sessionStorage.setItem("portfolio-loaded", "true");
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (hasCheckedSession && !isLoading) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? "auto" : "none"
      }}
      transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(32,111,192,0.08)_0%,_rgba(0,0,0,0)_70%)] opacity-60" />
      
      {/* Shutter Effect Panels */}
      <motion.div 
        animate={{ y: isLoading ? "0%" : "-100%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="absolute top-0 left-0 w-full h-1/2 bg-black border-b border-white/5 z-20"
      />
      <motion.div 
        animate={{ y: isLoading ? "0%" : "100%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black border-t border-white/5 z-20"
      />

      <div className="relative z-[30] flex flex-col items-center">
        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: isLoading ? "0%" : "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="font-headline italic text-5xl md:text-7xl tracking-tighter text-white"
          >
            Prashanth P.
          </motion.h1>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-[1px] bg-accent w-64 origin-left"
          />
          
          <div className="flex justify-between w-64 font-label text-[9px] tracking-[0.3em] uppercase text-white/40 font-bold">
            <span>Archive Unit // 001</span>
            <span>{Math.round(progress)}% Loaded</span>
            <span>Frame // 450</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <span className="font-label text-[10px] text-accent tracking-[0.5em] uppercase block mb-2">Heritage Documentarian</span>
          <span className="font-body text-[10px] text-white/30 uppercase tracking-[0.2em]">Bengaluru — Mysuru — Karnataka</span>
        </motion.div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-12 left-12 w-12 h-12 border-t border-l border-white/10" />
      <div className="absolute top-12 right-12 w-12 h-12 border-t border-r border-white/10" />
      <div className="absolute bottom-12 left-12 w-12 h-12 border-b border-l border-white/10" />
      <div className="absolute bottom-12 right-12 w-12 h-12 border-b border-r border-white/10" />

      {/* Center Focus Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-white" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-white" />
      </div>
    </motion.div>
  );
}
