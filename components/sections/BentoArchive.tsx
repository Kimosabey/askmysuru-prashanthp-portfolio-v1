"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/lib/mockData";
import { ArrowRight } from "lucide-react";

export default function BentoArchive() {
  return (
    <section className="pt-0 pb-24 px-6 md:px-12 bg-background max-w-[1600px] mx-auto" id="archive">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <span className="font-label text-xs tracking-[0.4em] uppercase text-accent mb-6 block">The Master Archive</span>
          <h2 className="fluid-h2 font-headline italic text-primary leading-tight">Selected works from a decade of <span className="underline decoration-accent/30 underline-offset-8">historical</span> preservation.</h2>
        </div>
        <Link href="/cinematography" className="font-label text-[10px] tracking-[0.3em] uppercase text-primary-dim hover:text-primary transition-all border-b border-border pb-2 group flex items-center gap-4">
          View All Projects
          <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[450px]">
        {MOCK_PROJECTS.slice(0, 4).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative group overflow-hidden glass-card hover:border-accent transition-colors duration-500 ${
              index === 0 ? "md:col-span-8 md:row-span-1" : 
              index === 1 ? "md:col-span-4 md:row-span-2" :
              index === 2 ? "md:col-span-4 md:row-span-1" :
              "md:col-span-4 md:row-span-1"
            }`}
          >
            <Link href={`/project/${project.id}`} className="absolute inset-0 z-20">
              <span className="sr-only">View {project.title}</span>
            </Link>
            
            <img 
              src={project.featuredImg} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-75 transition-all duration-[1.5s] ease-out mix-blend-luminosity group-hover:mix-blend-normal"
            />
            
            <div className="absolute inset-x-0 bottom-0 p-8 z-10 bg-gradient-to-t from-background via-background/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                <span className="font-label text-[9px] tracking-widest text-accent uppercase font-bold px-2 py-0.5 border border-accent/40">{project.category}</span>
                <div className="h-px w-8 bg-accent/40"></div>
              </div>
              <h3 className="font-headline text-3xl md:text-5xl italic text-white mb-2 leading-none drop-shadow-cinematic">{project.title}</h3>
              <p className="font-body text-xs text-white/60 uppercase tracking-widest mt-4 flex items-center gap-3 group-hover:gap-6 transition-all">
                Explore Masterpiece <ArrowRight size={14} />
              </p>
            </div>

            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20 group-hover:border-accent opacity-0 group-hover:opacity-100 transition-all"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20 group-hover:border-accent opacity-0 group-hover:opacity-100 transition-all"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
