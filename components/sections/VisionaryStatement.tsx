"use client";

import { motion } from "framer-motion";
import { Quote, Film } from "lucide-react";

export default function VisionaryStatement() {
  return (
    <section className="py-20 md:py-24 px-6 max-w-[1200px] mx-auto relative overflow-hidden flex flex-col items-center text-center">
      
      {/* Abstract Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        <Quote size={48} className="text-accent mb-8 opacity-80" />
        
        <h2 className="fluid-h2 font-headline italic text-primary leading-tight tracking-tight max-w-[20ch] mb-12">
          "Crafting visual narratives that bridge the gap between ancient heritage and modern cinematic precision."
        </h2>

        <div className="flex items-center gap-6 mb-12 opacity-30">
          <div className="h-px w-16 md:w-32 bg-primary"></div>
          <Film size={16} className="text-primary" />
          <div className="h-px w-16 md:w-32 bg-primary"></div>
        </div>

        <p className="font-kannada text-xl md:text-3xl text-primary-dim leading-relaxed tracking-wide max-w-3xl">
          ಪುರಾತನ ಪರಂಪರೆ ಮತ್ತು ಆಧುನಿಕ ಚಿತ್ರಕಲೆಯ ನಡುವಿನ ಕೊಂಡಿಯನ್ನು ದೃಶ್ಯ ಕಥೆಗಳ ಮೂಲಕ ಹೆಣೆಯುವುದು.
        </p>

        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="font-label text-xs tracking-[0.3em] uppercase text-primary">Prashanth P.</span>
          <span className="font-body text-[10px] tracking-widest uppercase text-primary-dim">Director & Visionary</span>
        </div>
      </motion.div>
    </section>
  );
}
