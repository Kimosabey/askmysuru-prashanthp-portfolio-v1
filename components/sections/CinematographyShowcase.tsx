"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { GlowCard, ModernBadge } from "@/components/effects";

const films = [
  {
    title: "Surapura Dynasty Series",
    description: "46+ Episode Magnum Opus tracing the Nayaka Dynasty's colonial resistance and Vijayanagara connection.",
    id: "6j6rTem3JbA",
    tags: ["Magnum Opus", "Royal History", "46+ EP"]
  },
  {
    title: "The Srirangapatna Series",
    description: "15+ Episodes on Tipu Sultan's island fortress: Lal Mahal, Bangaradhoddi Kaluve, and Armouries.",
    id: "fmpTlHYzFQQ",
    tags: ["Military History", "15+ EP"]
  },
  {
    title: "Wildlife & Conservation",
    description: "Bandipur/Kabini Vana Sampada coverage alongside leading biologist Dr. Sanjay Gubbi.",
    id: "5V8FMTKRgTU",
    tags: ["Nature", "Wildlife Advocacy"]
  }
];

export default function CinematographyShowcase() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-t border-border" id="cinematography">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase block mb-4">Master Filmography</span>
          <h2 className="fluid-h2 font-headline italic text-primary leading-none tracking-tight">Directorial Vision.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {films.map((film, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlowCard glowColor="from-primary to-accent">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
                  <Image 
                    src={`https://img.youtube.com/vi/${film.id}/hqdefault.jpg`} 
                    alt={film.title}
                    width={480}
                    height={270}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={`https://youtube.com/watch?v=${film.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Watch ${film.title} on YouTube`}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                    >
                      <Play size={24} fill="currentColor" />
                    </a>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {film.tags.map(tag => (
                      <ModernBadge 
                        key={tag} 
                        label={tag}
                        variant="accent"
                        size="sm"
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-headline text-2xl italic text-primary mb-2 group-hover:text-accent transition-colors">{film.title}</h3>
                <p className="font-body text-xs text-primary-dim leading-relaxed">{film.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
