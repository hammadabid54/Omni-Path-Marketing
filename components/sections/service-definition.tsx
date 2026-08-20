import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

interface ServiceDefinitionProps {
  /**
   * 40-60 word direct answer that AI engines (Google AI Overviews, ChatGPT,
   * Perplexity, Claude) extract for citations. Format: "[Service] is [category]
   * that [primary function], [key characteristic]."
   */
  text: string;
  className?: string;
}

/**
 * GEO: C02 — Direct answer in the first 150 words of body content.
 *
 * Renders a self-contained, quotable definition immediately after the hero.
 * Self-contained so AI engines can extract the answer without needing context
 * from the rest of the page.
 */
export function ServiceDefinition({ text, className }: ServiceDefinitionProps) {
  return (
    <Section spacing="tight" className={className}>
      <ScrollReveal>
        <p className="max-w-3xl text-lg md:text-xl text-white/85 leading-relaxed">
          {text}
        </p>
      </ScrollReveal>
    </Section>
  );
}
