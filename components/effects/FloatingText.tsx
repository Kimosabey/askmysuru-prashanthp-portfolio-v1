"use client";

import { motion } from "framer-motion";

interface FloatingTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingText({
  text,
  delay = 0,
  duration = 6,
  className = "",
}: FloatingTextProps) {
  return (
    <motion.span
      animate={{
        y: [0, -20, 0],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  );
}
