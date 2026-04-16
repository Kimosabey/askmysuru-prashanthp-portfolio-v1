"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: [string, string, string];
}

export function GradientText({
  children,
  className = "",
  colors = ["#206fc0", "#1d4ed8", "#206fc0"],
}: GradientTextProps) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
      }}
    >
      {children}
    </span>
  );
}
