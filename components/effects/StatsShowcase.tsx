"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatsShowcaseProps {
  stats: Array<{
    value: string;
    label: string;
    icon?: ReactNode;
  }>;
  className?: string;
}

export function StatsShowcase({ stats, className = "" }: StatsShowcaseProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-4 rounded-lg bg-surface border border-border"
        >
          {stat.icon && <div className="mb-3 text-accent">{stat.icon}</div>}
          <div className="font-headline text-3xl italic text-primary mb-1">
            {stat.value}
          </div>
          <div className="font-label text-[9px] uppercase tracking-[0.2em] text-primary-dim">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
