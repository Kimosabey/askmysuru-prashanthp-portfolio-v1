"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MOCK_PROJECTS } from "@/lib/mockData";

export default function BentoArchive() {
  return (
    <section id="archive" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="fluid-h2 font-headline italic text-primary leading-none tracking-tight mb-4"
          >
            The Archive
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-label text-xs tracking-[0.3em] uppercase text-primary-dim max-w-sm"
          >
            A curated grid of documentary, heritage, and societal narratives.
          </motion.p>
        </div>
        <div className="hidden md:flex items-center gap-4 opacity-30 w-1/3">
          <div className="h-px bg-primary flex-grow"></div>
          <span className="font-label text-xs uppercase tracking-widest text-primary">Vol. 01</span>
        </div>
      </div>

      {/* Responsive Exact Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
        {MOCK_PROJECTS.map((project, index) => {
          // Compute complex grid spans based on index
          // 0: full width top header hero (col-span-12)
          // 1, 2: 6 col splits (col-span-6)
          // 3: 4 col split (col-span-4)
          // 4: 8 col massive (col-span-8)
          
          let gridClass = "lg:col-span-6"; // default
          if (index === 0) gridClass = "lg:col-span-12 row-span-2";
          else if (index === 3) gridClass = "lg:col-span-5";
          else if (index === 4) gridClass = "lg:col-span-7";
          else if (index > 4) gridClass = "lg:col-span-4";

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: [0.25, 0.8, 0.25, 1] }}
              className={`${gridClass} relative bg-surface-elevated rounded-sm overflow-hidden group border border-border hover:border-border-hover transition-colors`}
            >
              <Link href={`/project/${project.slug}`} className="absolute inset-0 z-20" aria-label={`View project ${project.title}`}></Link>
              
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-60 group-hover:opacity-100" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>

              <div className="absolute top-6 left-6 z-10">
                <span className="bg-background/80 backdrop-blur-md border border-border text-primary font-label text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-xl">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 z-10 pr-6">
                <h3 className="font-headline italic text-3xl md:text-5xl text-primary mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-3">
                  <span className="font-label text-[10px] tracking-widest uppercase text-accent font-bold">Explore Masterpiece</span>
                  <span className="material-symbols-outlined text-sm text-accent">arrow_forward</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
