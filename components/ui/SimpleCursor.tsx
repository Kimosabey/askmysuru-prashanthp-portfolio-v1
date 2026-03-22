"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SimpleCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    // Disable on mobile where there's no physical mouse
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setHasMoved(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("magnetic-pull")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!hasMoved) return null;

  return (
    <>
      {/* Outer Ring / Viewfinder */}
      <motion.div
        className="fixed top-0 left-0 border border-accent rounded-full pointer-events-none z-[10000] hidden md:block"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 12),
          y: mousePosition.y - (isHovering ? 24 : 12),
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          opacity: isHovering ? 0.8 : 0.4,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
          mass: 0.5,
        }}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 bg-accent rounded-full pointer-events-none z-[10001] hidden md:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
        }}
        style={{ width: 4, height: 4 }}
      />
    </>
  );
}
