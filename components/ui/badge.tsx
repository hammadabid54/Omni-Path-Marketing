import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "live";
  className?: string;
  dotClass?: string;
}

export function Badge({ children, variant = "default", className, dotClass }: BadgeProps) {
  return (
    <span className={cn("pill", variant === "accent" && "pill-accent", className)}>
      {(variant === "live" || dotClass) && (
        <span className={cn("dot", variant === "live" && "pulse-dot", dotClass)} />
      )}
      {children}
    </span>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("eyebrow", className)}>{children}</span>;
}
