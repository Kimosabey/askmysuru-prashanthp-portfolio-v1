"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VisionaryStatement() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-40 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-background to-background" />

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-5xl px-8 mx-auto text-center"
      >
        <span className="text-primary italic font-serif text-2xl lg:text-3xl mb-8 block">
          "
        </span>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-12">
          Through the lens, we don't just capture images; we <span className="italic text-slate-300">preserve the heartbeat</span> of our heritage for the generations yet to arrive.
        </h2>
        
        <div className="w-full flex justify-center mb-12">
           <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>

        <p className="font-kannada text-2xl md:text-3xl text-kannadaSubtitle leading-relaxed max-w-3xl mx-auto">
          ಕ್ಯಾಮೆರಾದ ಮೂಲಕ ನಾವು ಕೇವಲ ಚಿತ್ರಗಳನ್ನು ಸೆರೆಹಿಡಿಯುವುದಿಲ್ಲ; ಮುಂಬರುವ ಪೀಳಿಗೆಗಾಗಿ ನಮ್ಮ ಪರಂಪರೆಯ <span className="text-white">ಹೃದಯಬಡಿತವನ್ನು</span> ಸಂರಕ್ಷಿಸುತ್ತೇವೆ.
        </p>
        
        <p className="mt-16 font-sans text-xs tracking-[0.3em] uppercase text-white/40">
          — Prashanth P.
        </p>
      </motion.div>
    </section>
  );
}
