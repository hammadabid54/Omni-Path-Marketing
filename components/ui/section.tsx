import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  /** "default" = 5-7rem vertical padding; "tight" = 3-4rem; "flush" = 0. */
  spacing?: "default" | "tight" | "flush";
  /** "default" = container-page inner; "wide" = larger container; "narrow" = 768px. */
  container?: "default" | "wide" | "narrow" | "full";
  as?: "section" | "div" | "article" | "main";
  ariaLabel?: string;
}

const containerMap = {
  default: "container-page",
  wide: "mx-auto w-full max-w-[1400px] px-5 md:px-8",
  narrow: "mx-auto w-full max-w-3xl px-5 md:px-8",
  full: "",
};

const spacingMap = {
  default: "section",
  tight: "py-12 md:py-16",
  flush: "",
};

export function Section({
  id,
  className,
  children,
  spacing = "default",
  container = "default",
  as: Tag = "section",
  ariaLabel,
}: SectionProps) {
  return (
    <Tag id={id} aria-label={ariaLabel} className={cn("relative", spacingMap[spacing], className)}>
      {container === "full" ? children : <div className={containerMap[container]}>{children}</div>}
    </Tag>
  );
}
