"use client";

interface ModernBadgeProps {
  label: string;
  variant?: "primary" | "accent" | "secondary" | "success";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export function ModernBadge({
  label,
  variant = "primary",
  size = "md",
  icon,
}: ModernBadgeProps) {
  const variantClasses = {
    primary:
      "bg-primary/10 text-primary border border-primary/20 hover:border-primary/40",
    accent:
      "bg-accent/10 text-accent border border-accent/20 hover:border-accent/40",
    secondary:
      "bg-secondary/10 text-secondary border border-secondary/20 hover:border-secondary/40",
    success:
      "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 hover:border-green-500/40",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-[10px]",
    md: "px-3 py-1.5 text-xs",
    lg: "px-4 py-2 text-sm",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full font-label tracking-[0.2em] uppercase
        transition-all duration-200 backdrop-blur-sm
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {label}
    </span>
  );
}
