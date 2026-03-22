"use client";

import { motion } from "framer-motion";

export default function ContactSynergy() {
  return (
    <>
      <main className="pt-32 pb-20 bg-background overflow-hidden relative">
        {/* Section: Brand Synergy Teaser */}
        <section className="max-w-7xl mx-auto px-8 mb-40 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="font-label text-sm uppercase tracking-[0.3em] text-secondary mb-6 block">Ecosystem Synergy</span>
              <h1 className="font-headline text-5xl md:text-7xl italic leading-tight mb-8 text-on-surface">
                Beyond the lens. <br/>A digital <span className="text-primary">metropolis</span>.
              </h1>
              <p className="font-body text-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                Explore askmysuru.com — a collaborative portal dedicated to the heritage, culture, and evolving narrative of the Royal City. A curated visual archive powered by the vision of Prashanth P.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-sm font-label tracking-widest text-[11px] font-bold hover:scale-105 transition-all flex items-center gap-3">
                  VISIT THE PORTAL
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-outline-variant/30"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-outline-variant/30"></div>
              <div className="overflow-hidden aspect-[4/5] bg-surface-container-low">
                <img 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  alt="Mysuru Palace at dusk" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB__tBX0JVJSYzbI7X9C6fiCmWHCxyikmtXTcyaN3N_H2EqlvnhnnzHqgkDIA-SnWhMHtLGPyKJpyv2jKqpgStYX6s73c8snA6R6Y-U9InYFnclIuRZgIP-aOXKcxrCAhM3Awk59MEv3fFpMzvmSm4pLuAijT1VMpR126vkN3bC_XgRZT24xg8KDE1_thTpKrIl2BKr_tU4h65Fd0SP9gfovWpFNonKzRBjG-UOClOKWIQPTa0gymlqk2ImuqKoZ0cUIkItaDYvog"
                />
              </div>
              {/* 35mm Sprocket Accent */}
              <div className="absolute top-1/2 -right-4 flex flex-col gap-2 transform -translate-y-1/2">
                <div className="w-1.5 h-3 bg-secondary-container"></div>
                <div className="w-1.5 h-3 bg-secondary-container"></div>
                <div className="w-1.5 h-3 bg-secondary-container"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Contact & Form */}
        <section className="relative py-24 overflow-hidden" id="contact">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,111,192,0.15)_0%,rgba(19,19,19,0)_70%)] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl md:text-5xl italic mb-4 text-on-surface">Professional Contact</h2>
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase">Start a collaboration or inquire about commissions</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-surface-container-lowest/40 p-8 md:p-12 backdrop-blur-[20px] rounded-lg border border-outline-variant/10 shadow-2xl text-on-surface">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Name</label>
                    <input className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-tertiary transition-colors font-body text-sm placeholder:text-on-surface/20" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Email</label>
                    <input className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-tertiary transition-colors font-body text-sm placeholder:text-on-surface/20" placeholder="john@example.com" type="email"/>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Project Type</label>
                    <select className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-tertiary transition-colors font-body text-sm cursor-pointer text-on-surface">
                      <option className="bg-surface text-on-surface">Commercial Film</option>
                      <option className="bg-surface text-on-surface">Fine Art Photography</option>
                      <option className="bg-surface text-on-surface">Editorial / Journal</option>
                      <option className="bg-surface text-on-surface">Collaboration</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Message</label>
                    <textarea className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-tertiary transition-colors font-body text-sm placeholder:text-on-surface/20 resize-none h-32" placeholder="Briefly describe your vision..."></textarea>
                  </div>
                  <div className="md:col-span-2 pt-6 flex flex-col md:flex-row gap-6 items-center">
                    <button className="w-full md:w-auto bg-on-surface text-surface px-12 py-4 rounded-sm font-label tracking-widest text-[11px] font-bold hover:bg-primary-container hover:text-on-primary-container transition-all" type="submit">
                      SEND INQUIRY
                    </button>
                    <div className="w-full md:w-px h-px md:h-10 bg-outline-variant/20"></div>
                    <button className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors font-label text-[11px] tracking-widest uppercase group" type="button">
                      <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform text-green-500">chat</span>
                      WHATSAPP CONNECT
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="font-label text-[9px] tracking-[0.2em] text-on-surface-variant uppercase mb-2">Location</p>
                  <p className="font-body text-xs text-on-surface">MYSURU, IND</p>
                </div>
                <div className="text-center">
                  <p className="font-label text-[9px] tracking-[0.2em] text-on-surface-variant uppercase mb-2">Availability</p>
                  <p className="font-body text-xs text-on-surface">Q4 — 2024</p>
                </div>
                <div className="text-center">
                  <p className="font-label text-[9px] tracking-[0.2em] text-on-surface-variant uppercase mb-2">Inquiries</p>
                  <p className="font-body text-xs text-on-surface">HELLO@PP.COM</p>
                </div>
                <div className="text-center">
                  <p className="font-label text-[9px] tracking-[0.2em] text-on-surface-variant uppercase mb-2">Social</p>
                  <p className="font-body text-xs text-on-surface">@PRASHANTH_P</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
