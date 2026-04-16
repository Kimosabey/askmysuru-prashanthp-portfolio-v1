"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const logos = [
  { name: "Karnataka Tourism", icon: "KT" },
  { name: "Archaeological Survey", icon: "AS" },
  { name: "P2 ADD Agency", icon: "P2" },
  { name: "Ask Mysuru", icon: "AM" },
];

export default function ClientEcosystem() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-y border-border w-full" id="clients">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="text-center md:text-left">
            <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase mb-4 block">Independent Media Houses</span>
            <h2 className="fluid-h2 font-headline italic text-primary leading-none tracking-tight">The Ecosystem.</h2>
          </div>
          <div className="max-w-md text-center md:text-right">
            <p className="font-body text-sm text-primary-dim leading-relaxed mb-6">
              Prashanth P operates through his registered paramount agency <span className="text-primary font-bold">P2 ADD Agency</span>. He has engineered a full-scale independent media brand dedicated to heritage, culture, and historical documentation.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-end">
              <div className="text-right">
                <span className="font-label text-[9px] text-accent uppercase tracking-widest block mb-1">Ask Mysuru</span>
                <span className="font-body text-[10px] text-primary-dim italic">"Hidden Stories of Karunadu"</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-12 items-center opacity-60">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ opacity: 1, scale: 1.1 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default"
            >
              <div className="font-headline text-3xl md:text-4xl italic text-primary-dim">{logo.icon}</div>
              <span className="sr-only">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
