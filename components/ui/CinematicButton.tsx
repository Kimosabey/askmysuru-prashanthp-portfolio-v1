"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CinematicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function CinematicButton({ children, onClick, className = "", variant = "primary" }: CinematicButtonProps) {
  const baseStyles = "relative group overflow-hidden px-8 py-4 font-label text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ease-out rounded-sm";
  
  const variants = {
    primary: "bg-accent text-white border border-accent hover:border-accent",
    secondary: "bg-surface-elevated text-primary border border-border hover:border-accent",
    outline: "bg-transparent text-primary border border-primary/20 hover:border-accent"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Magnetic Fill Effect */}
      <div className={`absolute inset-0 w-0 transition-all duration-500 ease-out group-hover:w-full ${variant === 'primary' ? 'bg-background' : 'bg-accent'}`}></div>
      
      {/* Hover Light Leak */}
      <div className="absolute -inset-1 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-accent via-white to-accent blur-md transition-opacity" />
      
      <span className="relative z-10 flex items-center justify-center gap-3 transition-colors duration-500">
        {children}
      </span>

      {/* Underline Hook */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-1/2" />
    </motion.button>
  );
}
