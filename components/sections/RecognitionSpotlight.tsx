"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function RecognitionSpotlight() {
  return (
    <section className="py-24 md:py-32 bg-background relative border-y border-border overflow-hidden" id="certificates">
      {/* Abstract Light Leak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-6 mb-12 opacity-60">
            <div className="h-px w-12 bg-accent"></div>
            <Award size={32} className="text-accent" />
            <div className="h-px w-12 bg-accent"></div>
          </div>

          <span className="font-label text-[10px] text-accent tracking-[0.5em] uppercase mb-8 block">Distinguished Achievement</span>
          <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl italic text-primary mb-12 leading-[0.9] tracking-tighter drop-shadow-cinematic">
            Nalwadi Raja <br/>Venkatappa Nayaka Award
          </h2>

          <div className="max-w-3xl mx-auto glass-card p-10 md:p-16 border border-white/5 relative text-left">
            <div className="absolute top-0 right-12 translate-y-[-50%] bg-accent text-background px-6 py-2 font-label text-[10px] uppercase font-bold tracking-[0.3em]">Conferred 2025</div>
            
            <p className="font-body text-lg md:text-xl leading-relaxed text-primary-dim mb-8">
              Recognized for <span className="text-primary font-bold">Excellence in Historical Documentation</span> and for bridging the gap between historical preservation and digital age storytelling.
            </p>
            
            <div className="flex flex-col gap-1 items-start">
              <span className="font-label text-[9px] text-accent tracking-widest uppercase mb-1">Presented By</span>
              <span className="font-headline text-lg italic text-primary opacity-80">Surapura Samsthana & Vijayanagara Royal Lineage</span>
            </div>

            {/* Kannada Text Accent */}
            <div className="mt-12 pt-8 border-t border-white/5 font-kannada text-2xl text-primary/40 leading-relaxed italic">
              ಅತ್ಯುತ್ತಮ ಇತಿಹಾಸ ಸಂಶೋಧನೆ ಮತ್ತು ಸಾಕ್ಷ್ಯಚಿತ್ರ ನಿರ್ಮಾಣಕ್ಕಾಗಿ
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
