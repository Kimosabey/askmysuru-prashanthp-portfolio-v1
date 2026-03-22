"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, X } from "lucide-react";

export default function ShowreelHook() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative w-full py-24 bg-background flex flex-col items-center justify-center border-t border-border">
        <div className="max-w-4xl text-center px-6">
          <h2 className="font-sans text-sm tracking-widest text-accent uppercase mb-8">The 60-Second Hook</h2>
          <p className="font-headline text-3xl md:text-5xl text-primary leading-relaxed mb-12">
            Every frame is a painted canvas of <span className="italic text-accent">culture, heritage, and the silence of nature.</span>
          </p>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center justify-center gap-4 mx-auto"
          >
            <span className="relative flex items-center justify-center w-24 h-24 rounded-full border border-primary/40 bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 backdrop-blur-md">
              <Play className="w-8 h-8 text-white ml-2 group-hover:scale-110 transition-transform duration-300" />
            </span>
            <span className="absolute -bottom-8 font-sans text-xs tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-300">
              Play Showreel
            </span>
          </button>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
            <div className="w-full max-w-7xl aspect-video bg-zinc-900 border border-white/10 relative overflow-hidden">
               {/* Replace with actual video embed or player */}
               <span className="absolute inset-0 flex items-center justify-center text-white/20 font-sans tracking-widest uppercase text-sm">
                 [ Cinematic Showreel Video Area ]
               </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
