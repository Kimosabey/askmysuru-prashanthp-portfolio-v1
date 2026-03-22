"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { id: "vDEnb4fE9f4", title: "Surapura Heritage Trailer", category: "Documentary" },
  { id: "9v-E8I89vSg", title: "The Royal City Narratives", category: "Series" },
  { id: "bO8D_ZOni4w", title: "Cultural Preservation", category: "Social Impact" },
  { id: "6f9X_M8hFm0", title: "Ask Mysuru Shorts", category: "Micro-Doc" },
];

export default function CinematographyPage() {
  return (
    <main className="pt-40 pb-20 bg-background min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-24">
          <span className="font-label text-[10px] uppercase tracking-[0.5em] text-accent mb-6 block">Visual Archive</span>
          <h1 className="font-headline text-6xl md:text-9xl italic text-primary leading-[0.85] tracking-tighter">Moving <br/> Pictures.</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {videos.map((video, idx) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-surface overflow-hidden relative border border-border group-hover:border-accent/40 transition-colors duration-700">
                <img 
                  alt={video.title}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[2s] ease-out" 
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center text-primary backdrop-blur-md">
                    <Play size={32} className="fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm border border-border px-3 py-1 font-label text-[9px] uppercase tracking-widest text-primary-dim">
                  {video.category}
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-3xl md:text-4xl text-primary mb-2 italic">"{video.title}"</h3>
                  <div className="flex gap-4 items-center opacity-40">
                    <div className="h-px w-12 bg-primary"></div>
                    <span className="font-label text-[10px] uppercase tracking-[0.2em]">Youtube Original</span>
                  </div>
                </div>
                <div className="font-label text-[10px] text-accent tracking-tighter">0{idx + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
