import { Section } from "@/components/ui/section";
import { StatCounter } from "@/components/ui/stat-counter";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

interface StatsStripProps {
  stats: StatItem[];
  caption?: string;
}

export function StatsStrip({ stats, caption }: StatsStripProps) {
  return (
    <Section spacing="tight" container="default" className="!pt-2">
      <ScrollReveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200/8 bg-neutral-900/5 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-6 md:p-7">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">
                <StatCounter
                  value={s.value}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  decimals={s.decimals}
                />
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-neutral-900/50">{s.label}</div>
            </div>
          ))}
        </div>
        {caption && <p className="mt-3 text-center text-xs text-neutral-900/40">{caption}</p>}
      </ScrollReveal>
    </Section>
  );
}
