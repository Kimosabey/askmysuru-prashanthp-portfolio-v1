"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter, ModernBadge } from "@/components/effects";

export default function AboutConsensus() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background max-w-[1600px] mx-auto overflow-hidden relative" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase block mb-6">About Ask Mysuru</span>
          <h2 className="fluid-h2 font-headline italic text-primary leading-[0.9] mb-4">
            Who we are & <span className="underline decoration-accent/30 underline-offset-8">what we do</span>.
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-headline text-accent italic text-xl mb-8 opacity-80"
          >
            "We create powerful videos, cover iconic events, and help brands grow online."
          </motion.p>
          <p className="font-body text-lg text-primary-dim max-w-xl leading-relaxed mb-10">
            Ask Mysuru is Mysuru's leading digital media and content agency. We've spent 5+ years covering Mysuru Dasara, producing official event content, collaborating with colleges and brands, and building a strong local audience reach. Our work has reached 4L+ people, generated hundreds of admission leads, and created viral event coverage that connects brands with their communities.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <AnimatedCounter 
              value={5} 
              label="Years Experience" 
              suffix="+"
              duration={2000}
            />
            <AnimatedCounter 
              value={100} 
              label="Projects Delivered" 
              suffix="+"
              duration={2500}
            />
            <AnimatedCounter 
              value={50} 
              label="Brands Worked With" 
              suffix="+"
              duration={2300}
            />
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {["Video Production", "Social Media Content", "Event Coverage", "College Promotions", "Digital Marketing"].map(tag => (
              <ModernBadge
                key={tag}
                label={tag}
                variant="primary"
                size="sm"
              />
            ))}
          </div>

          <Link href="/about" className="group flex items-center gap-4 font-label text-[10px] uppercase tracking-[0.3em] text-primary hover:text-accent transition-colors">
            Read Full Dossier
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute inset-0 border border-accent/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
          <div className="overflow-hidden aspect-[4/5] bg-surface-elevated border border-border shadow-cinematic relative">
            <img 
              src="/Prashanth_Profile.jpg" 
              alt="Prashanth P. Personal Profile" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border border-background bg-accent flex items-center justify-center text-[10px] text-background font-bold italic">AM</div>
                <div className="w-8 h-8 rounded-full border border-background bg-primary flex items-center justify-center text-[10px] text-background font-bold italic">P3</div>
              </div>
              <span className="font-label text-[9px] text-white tracking-widest uppercase font-bold">FOUNDER // DIRECTOR</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
