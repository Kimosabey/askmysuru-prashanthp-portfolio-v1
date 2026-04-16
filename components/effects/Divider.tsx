"use client";

interface DividerProps {
  variant?: "subtle" | "bold" | "gradient";
  className?: string;
}

export function Divider({ variant = "subtle", className = "" }: DividerProps) {
  const variantClasses = {
    subtle: "h-[1px] bg-border",
    bold: "h-1 bg-gradient-to-r from-transparent via-border to-transparent",
    gradient: "h-[2px] bg-gradient-to-r from-accent via-accent-dim to-accent",
  };

  return <div className={`${variantClasses[variant]} ${className}`} />;
}
