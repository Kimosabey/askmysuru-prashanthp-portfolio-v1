"use client";

import { useRef, useEffect } from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className = "", fill = "#206fc0" }: SpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!spotlightRef.current) return;

      const x = event.clientX;
      const y = event.clientY;

      spotlightRef.current.style.left = `${x}px`;
      spotlightRef.current.style.top = `${y}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={`pointer-events-none fixed z-0 w-96 h-96 rounded-full blur-3xl opacity-20 hidden lg:block ${className}`}
      style={{
        background: `radial-gradient(circle, ${fill} 0%, transparent 70%)`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
