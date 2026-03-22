"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gearList } from "@/lib/mockData";

export default function BTSArsenal() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Create a strict horizontal scroll mapping natively linked to exact 100vh scrolling down
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]); // Magic number -66% depends on exact slide count width

  // BTS placeholder images based on theme
  const btsImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAMsZ5lINnN847Z19I-h1pIu33Xy2VvE2z105F_q3-Z75u8f7BmVqU1oBtbS-_4oG5f_aXY2T6Y7B5wZ3o9W-w0j4hWf_pB7g-_jR-T2I-q2p8R1nKZYH-rN2-XfNq4N2C_5U3HXZH3W1h7x-L2T4v6y2J2p3W1r7W9r6F_VqT3q6zX_vN3P5xV1F7W4yY8P8L9xN3yP_9y", 
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB3M8_Jt1k3F87Bf5K-p1zG4-p9FjHw4Z55u4F4JpZ8FmV4X8nQ_5FmVq_pPtb5S-_4pG5f_a5V1I3W8-y9Yj4H3gW_p3hB7-_g_jT2x2M-X_q9j8R1Z1z8F5H-vN_V_XfN4H2C_5W1U3_Tq7X5T4v6H2L_X_Xw1Wp7N9H-F_VqT_z6v3_pN3X5P1F7W4H8y_8Y9L9V1yJ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcRkML4Y6jPCVzbN_RnzTurZeHJzamTw7jM303h4Y5onWCnIoQ1GjvD82eCxiseH2bqidX11lXAy4mxbKKkz1E8pCn9yPjQaP4652-69v2TX-34dIXtmIInov_0_S9Uz-LNGQIUvkumtFJlkQFCWGc0Q0yNFG8r3waaIHX424Lm4UFR9-D53uMNL8IhTJsJw8DRjmB9vCDOTGzJJ4k489AHv0qkDvFq4uNIvKNRbrwYjT1VJp27GXMvF12qrLXKfMzq5bfA4KCgQ"
  ];

  return (
    <div className="w-full relative bg-background">
      
      {/* Horizontal Scrub Gallery wrapper (requires massive height to generate native scroll depth) */}
      <section ref={targetRef} className="relative h-[400vh] w-full bg-surface">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          {/* Header Block fixed within sticky container */}
          <div className="absolute top-24 left-6 md:left-12 z-20">
            <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase mb-4 block">On Location</span>
            <h2 className="fluid-h2 font-headline italic text-primary drop-shadow-cinematic">Behind the Lens</h2>
          </div>

          <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 md:px-32 w-[300vw] sm:w-[250vw] md:w-[200vw]">
            {btsImages.map((src, idx) => (
              <div key={idx} className="relative w-full h-[60vh] md:h-[70vh] flex-shrink-0 bg-surface-elevated border border-border">
                <img src={src} alt="Behind the scenes on set" className="w-full h-full object-cover opacity-80 grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700" />
                <div className="absolute top-6 right-6">
                  <div className="bg-background/90 backdrop-blur-lg px-4 py-2 border border-border text-primary font-label text-[10px] tracking-widest uppercase rounded-sm">
                    Exposure_00{idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </section>

      {/* Static Arsenal (Gear) Block - Appears after the horizontal scroll finishes */}
      <section className="relative py-32 px-6 md:px-12 max-w-[1600px] mx-auto z-10 bg-background border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5">
            <span className="font-label text-[10px] text-primary-dim tracking-[0.4em] uppercase mb-4 block">The Arsenal</span>
            <h2 className="font-headline italic text-5xl md:text-7xl text-primary mb-8 leading-none tracking-tight">Tools of the trade.</h2>
            <p className="font-body text-primary-dim max-w-sm text-base leading-relaxed">
              True craft requires precision tools. The arsenal relies entirely on high-fidelity lenses, robust camera bodies, and aerial stabilizers tailored for untamed heritage and wildlife environments.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-4">
              {gearList.map((gear, idx) => (
                <div key={idx} className="flex justify-between items-center py-6 border-b border-border hover:border-accent transition-colors group cursor-default">
                  <div className="flex flex-col gap-1">
                    <span className="font-headline italic text-2xl md:text-3xl text-primary group-hover:text-accent transition-colors">{gear.name}</span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-primary-dim">{gear.category}</span>
                  </div>
                  <div className="hidden sm:block font-body text-sm text-primary-dim max-w-[200px] text-right group-hover:text-primary transition-colors">
                    {gear.usage}
                  </div>
                  <span className="material-symbols-outlined text-border group-hover:translate-x-2 group-hover:text-accent transition-all">east</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
