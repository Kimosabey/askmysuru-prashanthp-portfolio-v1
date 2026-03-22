"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading internal assets (images, fonts, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false);
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(32,111,192,0.15)_0%,_rgba(0,0,0,1)_100%)] opacity-50" />
      
      <div className="relative z-10 flex flex-col items-center overflow-hidden">
        <motion.h1 
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: isLoading ? "0%" : "-100%", opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif italic text-4xl tracking-widest text-white/90"
        >
          PRASHANTH P.
        </motion.h1>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isLoading ? 1 : 0 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="h-[1px] bg-primary w-24 mt-4 origin-left"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 font-kannada text-xs text-kannadaSubtitle tracking-[0.2em] uppercase"
        >
          ಸೌಂದರ್ಯದ ಹುಡುಕಾಟ
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
