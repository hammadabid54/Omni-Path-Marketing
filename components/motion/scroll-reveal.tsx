"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { scrollReveal, staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "li";
  y?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
  y,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const variants: Variants = y != null
    ? {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, delay, ease: [0.2, 0.8, 0.2, 1] } },
      }
    : {
        ...scrollReveal,
        show: {
          ...scrollReveal.show,
          transition: { ...scrollReveal.show.transition, delay },
        },
      };

  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol" | "section";
}

export function StaggerGroup({ children, className, stagger = 0.08, as = "div" }: StaggerGroupProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView={reduced ? undefined : "show"}
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer(stagger)}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={staggerItem}>
      {children}
    </MotionTag>
  );
}
