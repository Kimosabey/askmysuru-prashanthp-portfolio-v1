"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("portfolio-loaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("portfolio-loaded", "true");
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_rgba(0,0,0,1)_100%)] opacity-80" />
      
      <div className="relative z-10 flex flex-col items-center overflow-hidden">
        <motion.h1 
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: isLoading ? "0%" : "-100%", opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-headline italic text-5xl tracking-widest text-white/90"
        >
          PRASHANTH P.
        </motion.h1>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isLoading ? 1 : 0 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="h-[1px] bg-accent w-48 mt-6 origin-left"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 font-label text-xs text-white/60 tracking-[0.4em] uppercase text-center leading-relaxed"
        >
          THE ARCHITECT OF HERITAGE <br/>
          <span className="opacity-50 text-[9px] mt-2 block">DIRECTOR // MEDIA HOUSE BUILDER</span>
        </motion.p>
      </div>

      {/* 35mm film strip progress simulation */}
      <div className="absolute top-0 left-0 w-full h-2 flex gap-1 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="h-full w-4 bg-white/40 skew-x-12" />
        ))}
      </div>
    </motion.div>
  );
}
