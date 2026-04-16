"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  animate?: boolean;
}

export function SectionContainer({
  id,
  children,
  className = "",
  borderTop = false,
  borderBottom = false,
  animate = true,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 px-4 md:px-12 bg-background relative ${
        borderTop ? "border-t border-border" : ""
      } ${borderBottom ? "border-b border-border" : ""} ${className}`}
    >
      <div className="max-w-[1600px] mx-auto relative z-10">
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  subtitle?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-20">
      {eyebrow && (
        <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase block mb-6">
          {eyebrow}
        </span>
      )}
      <h2 className="fluid-h2 font-headline italic text-primary leading-none tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="font-body text-lg text-primary-dim max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      {subtitle && <div className="mt-6">{subtitle}</div>}
    </div>
  );
}
