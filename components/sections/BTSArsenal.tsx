"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gearList } from "@/lib/mockData";
import { ArrowRight } from "lucide-react";

export default function BTSArsenal() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  const btsImages = [
    "/bts_1.png", 
    "/bts_2.png",
    "/bts_3.png"
  ];

  return (
    <div className="w-full relative bg-background">
      <section ref={targetRef} className="relative h-[150vh] w-full bg-background border-t border-border" id="arsenal">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute top-24 px-6 md:px-12 z-20">
            <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase mb-4 block">On Location</span>
            <h2 className="fluid-h2 font-headline italic text-primary drop-shadow-cinematic">Behind the Lens</h2>
          </div>

          <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 md:px-32 w-[max-content]">
            {btsImages.map((src, idx) => (
              <div key={idx} className="relative w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 bg-surface-elevated border border-border group overflow-hidden">
                <img src={src} alt="Behind the scenes on set" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-[2s] ease-out" />
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-background/80 backdrop-blur-md px-4 py-2 border border-accent/20 text-accent font-label text-[10px] tracking-widest uppercase rounded-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    Exposure_00{idx + 1}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative pt-12 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto z-10 bg-background border-t border-b border-border w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5">
            <span className="font-label text-[10px] text-primary-dim tracking-[0.4em] uppercase mb-4 block">The Arsenal</span>
            <h2 className="fluid-h2 font-headline italic text-primary mb-8 leading-none tracking-tight">Tools of the trade.</h2>
            <p className="font-body text-primary-dim max-w-sm text-base leading-relaxed">
              True craft requires precision tools. The arsenal relies entirely on high-fidelity lenses, robust camera bodies, and aerial stabilizers tailored for untamed heritage and wildlife environments.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-4">
              {gearList.map((gear, idx) => (
                <motion.div 
                  key={idx} 
                  whileTap={{ scale: 0.97 }}
                  className="flex justify-between items-center py-6 border-b border-border hover:border-accent transition-colors group cursor-default"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-headline italic text-2xl md:text-3xl text-primary group-hover:text-accent transition-colors">{gear.name}</span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-primary-dim">{gear.category}</span>
                  </div>
                  <div className="hidden sm:block font-body text-sm text-primary-dim max-w-[200px] text-right group-hover:text-primary transition-colors">
                    {gear.usage}
                  </div>
                  <ArrowRight size={16} className="text-border group-hover:translate-x-2 group-hover:text-accent transition-all" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
