import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

interface TldrBoxProps {
  title?: string;
  items: string[];
  className?: string;
}

/** GEO: 150-word "direct answer" + TL;DR / Key Takeaways box per page. */
export function TldrBox({ title = "Key takeaways", items, className }: TldrBoxProps) {
  return (
    <Section spacing="tight" className={className}>
      <ScrollReveal>
        <div className="rounded-2xl border border-lime-400/25 bg-lime-400/4 p-6 md:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-lime-400">
            <span className="dot" /> {title}
          </div>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {items.map((it, i) => (
              <li key={i} className="text-sm text-white/85 leading-relaxed flex gap-2">
                <span className="text-lime-400 mt-1">→</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </Section>
  );
}
