/**
 * AmbientBackground — fixed, behind-everything atmospheric layer.
 *
 * Lives in the root layout. Adds:
 *  - Soft grid pattern (mask-faded toward the edges)
 *  - 4 slow-drifting lime + white orbs (different speeds, different positions)
 *  - Subtle SVG noise grain (mix-blend-mode: overlay)
 *
 * Performance:
 *  - All animations are transform-only (GPU-composited).
 *  - pointer-events: none so it never blocks clicks.
 *  - z-index: -1 + position: fixed so it sits behind all content.
 *  - Stops animating under prefers-reduced-motion.
 */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="ambient-bg">
      <div className="ambient-grid" />
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      <div className="ambient-orb ambient-orb-3" />
      <div className="ambient-orb ambient-orb-4" />
      <div className="ambient-grain" />
    </div>
  );
}
