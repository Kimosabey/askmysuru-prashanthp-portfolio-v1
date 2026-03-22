"use client";

import { motion } from "framer-motion";
import { ExternalLink, Phone } from "lucide-react";

export default function ContactSynergy() {
  return (
    <div className="pt-0 pb-0 bg-background overflow-hidden relative" id="contact">
      {/* Section: Brand Synergy Teaser */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="font-label text-sm uppercase tracking-[0.3em] text-accent mb-6 block">Ecosystem Synergy</span>
            <h2 className="fluid-h2 font-headline italic leading-tight mb-8 text-primary drop-shadow-cinematic">
              Beyond the lens. <br/>A digital <span className="text-accent underline decoration-accent/30 underline-offset-[16px]">metropolis</span>.
            </h2>
            <p className="font-body text-lg text-primary-dim max-w-xl mb-12 leading-relaxed">
              Explore askmysuru.com — a collaborative portal dedicated to the heritage, culture, and evolving narrative of the Royal City. A curated visual archive powered by the vision of Prashanth P.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="https://askmysuru.com" target="_blank" rel="noopener noreferrer" className="bg-accent text-primary px-10 py-5 rounded-sm font-label tracking-widest text-[11px] font-bold hover:scale-105 transition-all flex items-center gap-3">
                VISIT THE PORTAL
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-border"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-border"></div>
            <div className="overflow-hidden aspect-[4/5] bg-surface relative">
              <img 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" 
                alt="Mysuru Palace at dusk" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB__tBX0JVJSYzbI7X9C6fiCmWHCxyikmtXTcyaN3N_H2EqlvnhnnzHqgkDIA-SnWhMHtLGPyKJpyv2jKqpgStYX6s73c8snA6R6Y-U9InYFnclIuRZgIP-aOXKcxrCAhM3Awk59MEv3fFpMzvmSm4pLuAijT1VMpR126vkN3bC_XgRZT24xg8KDE1_thTpKrIl2BKr_tU4h65Fd0SP9gfovWpFNonKzRBjG-UOClOKWIQPTa0gymlqk2ImuqKoZ0cUIkItaDYvog"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            {/* 35mm Sprocket Accent */}
            <div className="absolute top-1/2 -right-4 flex flex-col gap-2 transform -translate-y-1/2">
              <div className="w-1.5 h-3 bg-primary"></div>
              <div className="w-1.5 h-3 bg-primary"></div>
              <div className="w-1.5 h-3 bg-primary"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Contact & Form */}
      <section className="relative py-32 overflow-hidden bg-surface border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl italic mb-4 text-primary">Professional Inquiries</h2>
            <p className="font-label text-sm tracking-[0.2em] text-primary-dim uppercase">Start a collaboration or inquire about commissions</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-surface-elevated p-8 md:p-14 backdrop-blur-2xl rounded-sm border border-border shadow-cinematic text-primary relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-dim"></div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label htmlFor="name" className="font-label text-[10px] tracking-widest uppercase text-primary-dim">Full Name</label>
                  <input id="name" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-body text-base placeholder:text-primary/40 text-primary" placeholder="Enter your name" type="text" aria-required="true" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="font-label text-[10px] tracking-widest uppercase text-primary-dim">Email Address</label>
                  <input id="email" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-body text-base placeholder:text-primary/40 text-primary" placeholder="Enter your email" type="email" aria-required="true" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label htmlFor="project_type" className="font-label text-[10px] tracking-widest uppercase text-primary-dim">Project Classification</label>
                  <select id="project_type" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-body text-base cursor-pointer text-primary appearance-none">
                    <option className="bg-surface text-primary">Commercial Film</option>
                    <option className="bg-surface text-primary">Fine Art Photography</option>
                    <option className="bg-surface text-primary">Editorial / Journal</option>
                    <option className="bg-surface text-primary">Directorial Collaboration</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label htmlFor="message" className="font-label text-[10px] tracking-widest uppercase text-primary-dim">Vision & Details</label>
                  <textarea id="message" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-body text-base placeholder:text-primary/40 resize-none h-32 text-primary" placeholder="Briefly describe your vision..." aria-required="true"></textarea>
                </div>
                <div className="md:col-span-2 pt-8 flex flex-col md:flex-row gap-8 items-center justify-between">
                  <button className="w-full md:w-1/2 bg-primary text-background px-12 py-5 rounded-sm font-label tracking-widest text-[11px] font-bold hover:bg-accent hover:text-primary transition-all focus-visible:outline-2 focus-visible:outline-accent" type="submit">
                    SUBMIT INQUIRY
                  </button>
                  <div className="w-full md:w-px h-px md:h-12 bg-border"></div>
                  <a href="tel:+919742974234" className="w-full md:w-auto flex justify-center items-center gap-3 text-primary-dim hover:text-primary transition-colors font-label text-[11px] tracking-widest uppercase group px-6 py-5 border border-border rounded-sm hover:border-border-hover">
                    <Phone size={16} className="group-hover:scale-110 transition-transform" />
                    CALL DIRECTLY
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
