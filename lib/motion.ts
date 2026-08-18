/**
 * Motion timing tokens (mirrored in globals.css --motion-*).
 * Use these for framer-motion transitions; the brand is "subtle, never flashy."
 */
export const motionTokens = {
  fast:   { duration: 0.15, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
  base:   { duration: 0.25, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
  slow:   { duration: 0.4,  ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
  slower: { duration: 0.6,  ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
} as const;

/** Default scroll-reveal variant (24px y, fade up, once, -80px margin). */
export const scrollReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: motionTokens.slow },
} as const;

/** Stagger container for grouped reveals. */
export const staggerContainer = (stagger = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

/** Stagger item. */
export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: motionTokens.slow },
} as const;

/** Hero entrance — used for the line-by-line reveal at the top of each page. */
export const heroContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

export const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: motionTokens.slow },
} as const;
