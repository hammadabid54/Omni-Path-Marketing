import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ArrowRight } from "lucide-react";

interface MarginRow {
  label: string;
  value: string;
  highlight?: boolean;
}

interface MarginCardProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  rows: MarginRow[];
  footer?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function MarginCard({
  eyebrow,
  title,
  subtitle,
  rows,
  footer,
  ctaText,
  ctaHref,
  className,
}: MarginCardProps) {
  return (
    <div className={className}>
      <div className="bento bento-feature p-7 md:p-9">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
        {subtitle && <p className="mt-1 text-sm text-white/55">{subtitle}</p>}
        <ul className="mt-6 flex flex-col divide-y divide-white/8">
          {rows.map((r, i) => (
            <li key={i} className="flex items-baseline justify-between gap-4 py-3">
              <span className="text-sm text-white/65">{r.label}</span>
              <span
                className={
                  r.highlight
                    ? "text-2xl font-bold text-lime-400"
                    : "text-sm font-medium text-white/90"
                }
              >
                {r.value}
              </span>
            </li>
          ))}
        </ul>
        {footer && <p className="mt-4 text-sm text-white/70">{footer}</p>}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="mt-5 inline-flex items-center gap-1.5 text-sm text-lime-400 hover:gap-2.5 transition-all"
          >
            {ctaText} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

interface InlineMarginProps {
  title: string;
  intro: string;
  rows: MarginRow[];
  footer: string;
}

export function InlineMarginPanel({ title, intro, rows, footer }: InlineMarginProps) {
  return (
    <Section spacing="tight" className="!pt-12">
      <ScrollReveal>
        <div className="rounded-3xl border border-lime-400/20 bg-lime-400/4 p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                {title}
              </h3>
              <p className="mt-3 text-white/70 max-w-md">{intro}</p>
              <p className="mt-6 text-sm text-lime-400 font-medium">{footer}</p>
            </div>
            <ul className="rounded-2xl bg-[#0a0a0f]/60 border border-white/8 p-5 divide-y divide-white/8">
              {rows.map((r, i) => (
                <li key={i} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-sm text-white/65">{r.label}</span>
                  <span
                    className={
                      r.highlight
                        ? "text-2xl font-bold text-lime-400"
                        : "text-sm font-medium text-white/90"
                    }
                  >
                    {r.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
