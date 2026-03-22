"use client";

import { motion } from "framer-motion";

export default function CinematicAccents() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Top Right Light Leak */}
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.05, 0.03],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[120px] dark:opacity-100 opacity-20" 
      />
      
      {/* Bottom Left Subtle Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.02, 0.04, 0.02],
          scale: [1, 1.05, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[150px] dark:opacity-100 opacity-10" 
      />
    </div>
  );
}
