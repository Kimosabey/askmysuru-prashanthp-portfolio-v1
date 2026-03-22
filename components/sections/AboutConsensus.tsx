"use client";

import { motion } from "framer-motion";
import { Award, Youtube, ArrowRight, Users, Instagram } from "lucide-react";
import Link from "next/link";

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
          <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase block mb-6">The Architect of Heritage</span>
          <h2 className="fluid-h2 font-headline italic text-primary leading-[0.9] mb-4">
            Digital media entrepreneur <br/>
            & <span className="underline decoration-accent/30 underline-offset-8">documentarian</span>.
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-headline text-accent italic text-xl mb-8 opacity-80"
          >
            "Hidden stories of the Karunadu region"
          </motion.p>
          <p className="font-body text-lg text-primary-dim max-w-xl leading-relaxed mb-10">
            Prashanth P. has engineered two distinct, full-scale independent media brands: <span className="text-primary font-medium italic">Ask Mysuru</span> & <span className="text-primary font-medium italic">Political360</span>. Bridging the gap between historical preservation and modern political discourse.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col gap-2">
              <span className="font-headline text-4xl italic text-primary">63K+</span>
              <span className="font-label text-[9px] uppercase tracking-widest text-primary-dim">YouTube Base</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-headline text-4xl italic text-primary">160K+</span>
              <span className="font-label text-[9px] uppercase tracking-widest text-primary-dim">Digital Reach</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-headline text-4xl italic text-primary">450+</span>
              <span className="font-label text-[9px] uppercase tracking-widest text-primary-dim">Films Produced</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            {["Digital Media Entrepreneurship", "Heritage Documentation", "Socio-Political Analysis", "Cinematic Storytelling"].map(tag => (
              <span key={tag} className="font-label text-[8px] uppercase tracking-[0.2em] border border-border px-3 py-1 text-primary-dim">{tag}</span>
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
              src="/Prashanth_Bike.jpg" 
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
