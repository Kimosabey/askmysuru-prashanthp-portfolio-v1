"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-500 hover:bg-accent/10 focus:outline-none border border-border group"
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, y: 10, rotate: -45 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -10, rotate: 45 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <Moon size={16} className="text-accent fill-accent/10" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, y: 10, rotate: -45 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -10, rotate: 45 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <Sun size={16} className="text-accent fill-accent/10" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative corners to match the cinematic vibe */}
      <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
