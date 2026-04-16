"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  span?: "col-span-1" | "col-span-2" | "row-span-2";
}

function BentoItem({ children, className = "", span = "col-span-1" }: BentoItemProps) {
  return (
    <motion.div
      className={`${span} relative group overflow-hidden rounded-2xl bg-surface border border-border p-6 md:p-8`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hover glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-dim rounded-2xl opacity-0 blur transition duration-1000 group-hover:opacity-40 -z-10" />

      {children}
    </motion.div>
  );
}

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {children}
    </div>
  );
}

export { BentoItem };
