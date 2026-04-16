"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  blur?: "sm" | "md" | "lg" | "xl";
}

export function GlassmorphismCard({
  children,
  className = "",
  blur = "md",
}: GlassmorphismCardProps) {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  return (
    <motion.div
      className={`relative group overflow-hidden rounded-2xl ${className}`}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-2xl -z-10" />

      {/* Glass effect */}
      <div
        className={`relative bg-white/5 ${blurClasses[blur]} border border-white/10 rounded-2xl p-6 md:p-8`}
      >
        {children}
      </div>
    </motion.div>
  );
}
