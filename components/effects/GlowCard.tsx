"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className = "",
  glowColor = "from-accent to-accent-dim",
}: GlowCardProps) {
  return (
    <motion.div
      className={`relative group overflow-hidden rounded-2xl ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect background */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${glowColor} rounded-2xl opacity-0 blur transition duration-1000 group-hover:opacity-75 group-hover:blur-md -z-10`}
      />

      {/* Content */}
      <div className="relative bg-surface border border-border rounded-2xl p-6 md:p-8 backdrop-blur-xl">
        {children}
      </div>
    </motion.div>
  );
}
