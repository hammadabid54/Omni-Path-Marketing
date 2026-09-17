"use client";

import { usePathname } from "next/navigation";
import { MarketingImage } from "./marketing-image";
import { ProofPreview } from "./proof-preview";
import { ServiceVisual } from "./service-visual";
import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroContainer, heroItem, motionTokens } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/cn";

interface HeroProps {
  /** Small uppercase line above the H1 (usually the section type). */
  eyebrow?: string;
  /** H1 — last phrase wrapped in <em> renders in Instrument Serif italic. */
  title: ReactNode;
  /** Subhead paragraph. */
  subhead?: string;
  /** Primary CTA — magnetic. */
  primaryCta?: { label: string; href: string };
  /** Secondary CTA. */
  secondaryCta?: { label: string; href: string };
  /** Optional badge text shown above eyebrow (e.g. live status). */
  liveBadge?: string;
  /** Optional content rendered to the right (e.g. card or stat strip). */
  rightRail?: ReactNode;
  /** Trust microcopy under CTAs. */
  trustMicrocopy?: string;
  className?: string;
}

export function Hero({
  eyebrow,
  title,
  subhead,
  primaryCta,
  secondaryCta,
  liveBadge,
  rightRail,
  trustMicrocopy,
  className,
}: HeroProps) {
  const reduced = useReducedMotion();
  const pathname = usePathname();
  const visual = rightRail ?? (/case-studies|samples/.test(pathname) ? <ProofPreview /> : /for-businesses|services\/(branding|web-design)/.test(pathname) ? <MarketingImage /> : <ServiceVisual topic={pathname} />);

  return (
    <section className={cn("relative isolate overflow-hidden pt-10 pb-10 md:pt-16 md:pb-12", className)}>
      {/* Soft lime radial backdrop (scoped to the hero via isolate) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute -top-20 right-[-10%] h-72 w-72 rounded-full bg-blue-600/8 blur-3xl drift-1" />
        <div className="absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-neutral-900/4 blur-3xl drift-2" />
      </div>

      <div className="container-page">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]"
          initial={reduced ? false : "hidden"}
          animate={reduced ? undefined : "show"}
          variants={heroContainer}
        >
          <div>
            {liveBadge && (
              <motion.div variants={heroItem} className="mb-6">
                <Badge variant="live">{liveBadge}</Badge>
              </motion.div>
            )}
            {eyebrow && (
              <motion.div variants={heroItem} className="mb-6">
                <span className="eyebrow">{eyebrow}</span>
              </motion.div>
            )}
            <motion.h1
              variants={heroItem}
              className="text-[40px] sm:text-5xl md:text-6xl lg:text-[60px] text-balance font-bold leading-[1.02] tracking-tight"
            >
              {title}
            </motion.h1>
            {subhead && (
              <motion.p
                variants={heroItem}
                className="mt-6 max-w-2xl text-lg text-neutral-900/70 leading-relaxed"
              >
                {subhead}
              </motion.p>
            )}
            {(primaryCta || secondaryCta) && (
              <motion.div variants={heroItem} className="mt-8 flex flex-wrap items-center gap-3">
                {primaryCta && (
                  <LinkButton href={primaryCta.href} variant="primary" size="lg" magnetic>
                    {primaryCta.label}
                  </LinkButton>
                )}
                {secondaryCta && (
                  <LinkButton href={secondaryCta.href} variant="ghost" size="lg">
                    {secondaryCta.label}
                  </LinkButton>
                )}
              </motion.div>
            )}
            {trustMicrocopy && (
              <motion.p
                variants={heroItem}
                className="mt-4 text-xs text-neutral-900/45 tracking-wide"
              >
                {trustMicrocopy}
              </motion.p>
            )}
          </div>

          {visual && (
            <motion.div
              variants={heroItem}
              transition={{ ...motionTokens.slow, delay: 0.3 }}
              className="lg:pl-4"
            >
              {visual}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
