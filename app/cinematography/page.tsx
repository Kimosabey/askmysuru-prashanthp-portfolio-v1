"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Filter } from "lucide-react";

const videos = [
  { 
    id: "clga7SPzx2Q", 
    title: "The Surapura Dynasty", 
    category: "Royal History", 
    tag: "46+ Episodes",
    description: "Unprecedented deep-dive into the Nayaka Dynasty’s colonial resistance."
  },
  { 
    id: "WWmaDl_l76Q", 
    title: "The Srirangapatna Series", 
    category: "Military History", 
    tag: "15+ Episodes",
    description: "Exhaustive structural documentary on the 18th-century island fortress."
  },
  { 
    id: "YAIzMGyWB2E", 
    title: "Wildlife & Conservation", 
    category: "Wildlife", 
    tag: "Bandipur / Kabini",
    description: "Extensive tiger conservation coverage alongside leading biologists."
  },
  { 
    id: "TvZAU1pEoGU", 
    title: "Cultural Heritage", 
    category: "Culture", 
    tag: "Melkote & Tulunadu",
    description: "Documenting the spiritual and coastal traditions of Karunadu."
  },
  { 
    id: "clga7SPzx2Q", 
    title: "Jayamarthanda Gate", 
    category: "Military History", 
    tag: "Archive",
    description: "Exploring the engineering and defensive architecture of Mysuru."
  },
];

const categories = ["All", "Royal History", "Military History", "Wildlife", "Culture"];

export default function CinematographyPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  return (
    <main className="pt-32 md:pt-48 pb-20 bg-background min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-24">
          <span className="font-label text-[10px] uppercase tracking-[0.5em] text-accent mb-6 block">Visual Archive</span>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-9xl italic text-primary leading-[0.85] tracking-tighter">Cinematic <br/> Archives.</h1>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-4 mb-20 border-b border-border pb-8">
          <div className="flex items-center gap-2 mr-4 text-primary-dim opacity-50">
            <Filter size={14} />
            <span className="font-label text-[10px] uppercase tracking-widest">Filter by</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, idx) => (
              <motion.div 
                key={`${video.id}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group"
              >
                <a
                  href={`https://youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video bg-surface overflow-hidden relative border border-border group-hover:border-accent/40 transition-colors duration-700 rounded-2xl"
                >
                  <img 
                    alt={video.title}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[2s] ease-out" 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:scale-90 md:group-hover:scale-100">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/90 flex items-center justify-center text-primary backdrop-blur-md">
                      <Play size={28} className="fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm border border-border px-3 py-1 font-label text-[9px] uppercase tracking-widest text-primary-dim rounded-sm">
                    {video.tag}
                  </div>
                </a>
                <div className="mt-8 flex justify-between items-start">
                  <div className="max-w-md">
                    <h3 className="font-headline text-3xl md:text-4xl text-primary mb-2 italic">"{video.title}"</h3>
                    <p className="font-body text-sm text-primary-dim leading-relaxed mb-4">
                      {video.description}
                    </p>
                    <div className="flex gap-4 items-center opacity-40">
                      <div className="h-px w-12 bg-primary"></div>
                      <span className="font-label text-[10px] uppercase tracking-[0.2em]">{video.category}</span>
                    </div>
                  </div>
                  <div className="font-label text-[10px] text-accent tracking-tighter">0{idx + 1}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
