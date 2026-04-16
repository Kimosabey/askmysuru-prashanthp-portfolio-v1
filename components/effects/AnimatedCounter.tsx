"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  label,
  suffix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const increment = value / (duration / 16);
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [hasStarted, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="font-headline text-3xl md:text-5xl lg:text-7xl italic text-primary font-black tracking-tighter mb-3">
        {displayValue.toLocaleString()}
        {suffix}
      </span>
      <span className="font-label text-[9px] uppercase tracking-[0.3em] text-primary-dim">
        {label}
      </span>
    </div>
  );
}
