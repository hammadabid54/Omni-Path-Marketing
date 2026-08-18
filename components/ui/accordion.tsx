"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { motionTokens } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface FaqAccordionProps {
  items: Array<{ question: string; answer: ReactNode }>;
  className?: string;
  defaultOpen?: number;
}

export function FaqAccordion({ items, className, defaultOpen = -1 }: FaqAccordionProps) {
  const [open, setOpen] = useState<number>(defaultOpen);
  const reduced = useReducedMotion();

  return (
    <div className={cn("divide-y divide-white/8 border-t border-white/8", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-2">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="text-base md:text-lg font-medium text-white">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={motionTokens.base}
                className="shrink-0 text-lime-400"
                aria-hidden
              >
                <Plus className="h-5 w-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={reduced ? undefined : { height: "auto", opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={motionTokens.slow}
                  className="overflow-hidden"
                >
                  <div className="pb-5 pr-8 text-white/70 leading-relaxed">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
