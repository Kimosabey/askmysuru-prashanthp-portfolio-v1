"use client";

import { motion } from "framer-motion";

const units = [
  { name: "Heritage", description: "History & Archaeology", color: "bg-[#FF5722]", id: "01" },
  { name: "Nature", description: "Wildlife & Vana Sampada", color: "bg-[#4CAF50]", id: "02" },
  { name: "Society", description: "Forensic & Rights", color: "bg-[#2196F3]", id: "03" },
  { name: "Health", description: "Agriculture & AYUSH", color: "bg-[#9C27B0]", id: "04" },
  { name: "Tech", description: "Ideas to Impact", color: "bg-[#FFC107]", id: "05" },
  { name: "World", description: "Geopolitics & Mind", color: "bg-[#607D8B]", id: "06" },
  { name: "Yatra", description: "Travel & Odyssey", color: "bg-[#795548]", id: "07" },
];

export default function UnitCategorization() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-t border-border" id="units">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase block mb-4">System Architecture</span>
            <h2 className="fluid-h2 font-headline italic text-primary leading-none tracking-tight mb-8">The Seven Units.</h2>
            <p className="font-body text-lg text-primary-dim leading-relaxed">
              Ask Mysuru is engineered across seven distinct editorial verticals, documented with academic precision and cinematic flair.
            </p>
          </div>
          <div className="hidden lg:block h-px w-32 bg-border translate-y-[-2rem]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {units.map((unit, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="relative aspect-[3/4] bg-surface-elevated border border-border p-6 flex flex-col justify-end group overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-16 h-16 ${unit.color} opacity-10 group-hover:opacity-30 transition-opacity blur-2xl`}></div>
              <span className="font-label text-[10px] text-primary-dim mb-2">{unit.id}</span>
              <h3 className="font-headline text-2xl italic text-primary mb-2">{unit.name}</h3>
              <p className="font-body text-[9px] uppercase tracking-widest text-primary-dim opacity-0 group-hover:opacity-100 transition-opacity duration-500">{unit.description}</p>
              
              {/* Cinematic Corner Mark */}
              <div className={`absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
