"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";

const visuals = [
  { 
    src: "https://img.youtube.com/vi/clga7SPzx2Q/hqdefault.jpg", 
    tag: "JAYAMARTHANDA GATE", 
    category: "Architecture", 
    aspect: "aspect-[4/5]", 
    url: "https://www.youtube.com/watch?v=clga7SPzx2Q" 
  },
  { 
    src: "https://img.youtube.com/vi/WWmaDl_l76Q/hqdefault.jpg", 
    tag: "GB HOLE", 
    category: "Architecture", 
    aspect: "aspect-[3/4]", 
    url: "https://www.youtube.com/watch?v=WWmaDl_l76Q" 
  },
  { 
    src: "https://img.youtube.com/vi/YAIzMGyWB2E/hqdefault.jpg", 
    tag: "SECRET ROUTE", 
    category: "Architecture", 
    aspect: "aspect-square", 
    url: "https://www.youtube.com/watch?v=YAIzMGyWB2E" 
  },
  { 
    src: "https://img.youtube.com/vi/TvZAU1pEoGU/hqdefault.jpg", 
    tag: "COL. BAILLIE'S DUNGEON", 
    category: "Architecture", 
    aspect: "aspect-[4/5]", 
    url: "https://www.youtube.com/watch?v=TvZAU1pEoGU" 
  },
  { 
    src: "/Prashanth_Profile.jpg", 
    tag: "DIRECTOR BTS", 
    category: "BTS", 
    aspect: "aspect-[3/4]", 
    url: "/about" 
  },
  { 
    src: "https://img.youtube.com/vi/UCx2-sIvdlY/hqdefault.jpg", 
    tag: "DELHI GATE LEGACY", 
    category: "Architecture", 
    aspect: "aspect-[4/5]", 
    url: "https://www.youtube.com/watch?v=UCx2-sIvdlY" 
  },
  { 
    src: "https://img.youtube.com/vi/YAIzMGyWB2E/hqdefault.jpg", 
    tag: "WILDLIFE STREAMS", 
    category: "Wildlife", 
    aspect: "aspect-[16/9]", 
    url: "https://www.youtube.com/watch?v=YAIzMGyWB2E" 
  },
];

const categories = ["All", "Architecture", "Wildlife", "BTS"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVisuals = activeCategory === "All" 
    ? visuals 
    : visuals.filter(v => v.category === activeCategory);

  return (
    <main className="pt-32 md:pt-48 pb-20 bg-background min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="font-label text-[10px] uppercase tracking-[0.5em] text-accent mb-6 block">Visual Stills</span>
          <h1 className="font-headline text-5xl md:text-7xl italic text-primary mb-6 tracking-tighter">The Gallery.</h1>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-4 mb-20 border-b border-border pb-8">
          <div className="flex items-center gap-2 mr-4 text-primary-dim opacity-50">
            <Filter size={14} />
            <span className="font-label text-[10px] uppercase tracking-widest">Sort Visuals</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-label text-[10px] uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? "bg-accent text-primary font-bold shadow-cinematic" 
                  : "text-primary-dim hover:text-primary hover:bg-surface"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 min-h-[600px]">
          <AnimatePresence mode="popLayout">
            {filteredVisuals.map((img, idx) => (
              <motion.a 
                key={`${img.tag}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                href={img.url} 
                target={img.url.startsWith("http") ? "_blank" : "_self"} 
                rel="noopener noreferrer" 
                className={`block w-full ${img.aspect} bg-surface border border-border flex items-end justify-center relative overflow-hidden group shadow-cinematic break-inside-avoid shadow-sm rounded-2xl`}
              >
                <img 
                  src={img.src} 
                  alt={img.tag} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                
                <div className="relative z-10 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-2">{img.category}</span>
                  <span className="font-headline text-2xl italic text-primary">{img.tag}</span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
