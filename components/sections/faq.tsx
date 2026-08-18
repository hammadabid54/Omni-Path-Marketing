import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { FaqAccordion } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import type { FaqItem } from "@/lib/seo";

interface FaqSectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  subhead?: string;
  items: FaqItem[];
  defaultOpen?: number;
  /** JSON-LD id for the schema block. */
  schemaId?: string;
}

export function FaqSection({ eyebrow, title, subhead, items, defaultOpen = 0 }: FaqSectionProps) {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <ScrollReveal>
          {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">{title}</h2>
          {subhead && <p className="mt-4 text-white/70 max-w-md">{subhead}</p>}
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <FaqAccordion
            items={items.map((i) => ({ question: i.question, answer: <p>{i.answer}</p> }))}
            defaultOpen={defaultOpen}
          />
        </ScrollReveal>
      </div>
    </Section>
  );
}
