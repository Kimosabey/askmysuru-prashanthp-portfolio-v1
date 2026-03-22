"use client";

import UnitCategorization from "@/components/sections/UnitCategorization";
import { motion } from "framer-motion";

export default function UnitsPage() {
  return (
    <main className="pt-32 bg-background min-h-screen">
      <div className="px-6 md:px-12 pt-16 pb-8 max-w-[1600px] mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-label text-[10px] text-accent tracking-[0.4em] uppercase block mb-6"
        >
          Editorial Verticals
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-8xl italic text-primary mb-12"
        >
           The Seven Pillars of <br/> Media Excellence
        </motion.h1>
      </div>
      
      <UnitCategorization />
      
      <div className="pb-32"></div>
    </main>
  );
}
