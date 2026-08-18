import { Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export interface Testimonial {
  quote: string;
  /** Last clause wrapped in <em> is italic. */
  attribution: string;
  role?: string;
  highlight?: string;
}

interface TestimonialsProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subhead?: string;
  items: Testimonial[];
}

export function Testimonials({ eyebrow, title, subhead, items }: TestimonialsProps) {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <ScrollReveal>
          {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
          {title && <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">{title}</h2>}
          {subhead && <p className="mt-4 text-white/70">{subhead}</p>}
        </ScrollReveal>
        <div className="flex flex-col gap-5">
          {items.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <figure className="bento">
                <Quote className="h-5 w-5 text-lime-400" />
                <blockquote className="mt-4 text-lg md:text-xl leading-relaxed text-white/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm text-white/55">
                  <span className="text-white/85 font-medium">{t.attribution}</span>
                  {t.role && <> · {t.role}</>}
                  {t.highlight && (
                    <span className="ml-2 pill pill-accent">{t.highlight}</span>
                  )}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
