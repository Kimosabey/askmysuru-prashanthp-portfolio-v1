"use client";

import { motion } from "framer-motion";

export const BorderBeam = ({
  size = 150,
  duration = 8,
  anchor = 90,
  colorFrom = "#206fc0",
  colorTo = "#3b82f6",
  delay = 0,
}: {
  size?: number;
  duration?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}) => {
  return (
    <div
      style={{
        "--size": `${size}px`,
        "--duration": `${duration}s`,
        "--anchor": `${anchor}%`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] [border:calc(var(--size)*0.01)_solid_transparent] [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(white,white)]"
    >
      <motion.div
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
        style={{
          offsetPath: "rect(0 auto auto 0 round calc(var(--size)*0.1))",
        }}
        className="absolute aspect-square w-[var(--size)] bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent opacity-100 [animation-delay:var(--delay)]"
      />
    </div>
  );
};
