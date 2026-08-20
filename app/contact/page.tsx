import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { ContactForm } from "@/components/forms/contact-form";
import { SocialLinks } from "@/components/social/social-links";
import { contactFaq } from "@/content/faqs";
import { buildMetadata, contactPageSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { Mail, Clock, Globe } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Omni Path Marketing · Reply within 4 hours",
  description:
    "Tell us about your agency or business. We reply within 4 business hours with the right strategist and a custom proposal.",
  path: "/contact",
});

const STEPS = [
  { t: "Auto-reply within 1 minute", d: "Confirmation email the moment you submit." },
  { t: "Free audit on your site", d: "If you&apos;re a direct business, we run an audit while we review your message." },
  { t: "15-30 min call", d: "We scope your needs and recommend the right tier." },
  { t: "Custom proposal within 24 hours", d: "With pricing, timeline, and a clear next step." },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title={
          <>
            Let&apos;s <em className="font-serif not-italic text-lime-400">talk.</em>
          </>
        }
        subhead="Tell us a bit about you. We'll match you with the right strategist and get back within 4 business hours."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <ScrollReveal>
            <Eyebrow className="mb-4">Get in touch</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Reach us <em className="font-serif not-italic text-lime-400">directly.</em>
            </h2>
            <ul className="mt-6 space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  <Mail className="h-4 w-4" />
                </span>
                <a href="mailto:hello@omnipathmarketing.com" className="hover:text-lime-400">
                  hello@omnipathmarketing.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  <Clock className="h-4 w-4" />
                </span>
                Mon-Fri 9am-6pm in your local timezone
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  <Globe className="h-4 w-4" />
                </span>
                Fully remote · Working with clients globally
              </li>
            </ul>

            <div className="mt-10">
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                Find us on social
              </h3>
              <p className="mt-2 text-sm text-white/60">
                We share original research, playbooks, and case studies on each channel.
              </p>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest">What happens after you submit</h3>
              <StaggerGroup className="mt-4 space-y-3" stagger={0.06}>
                {STEPS.map((s, i) => (
                  <StaggerItem key={s.t}>
                    <div className="flex gap-4">
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400/15 text-lime-400 text-sm font-semibold">
                        {i + 1}
                      </span>
                      <div>
                        <div className="text-white/85 font-medium" dangerouslySetInnerHTML={{ __html: s.t }} />
                        <p className="text-sm text-white/60 mt-0.5" dangerouslySetInnerHTML={{ __html: s.d }} />
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </Section>

      <FaqSection eyebrow="FAQ" title="Contact questions." items={contactFaq} />

      <CtaSection
        title={
          <>
            Still deciding? <em className="font-serif not-italic text-lime-400">Book a 15-min call.</em>
          </>
        }
        subhead="No pitch, no pressure. Just a chat to see if we're a fit."
        primaryCta={{ label: "Book a 15-min call", href: "/contact" }}
        secondaryCta={{ label: "Email us", href: "mailto:hello@omnipathmarketing.com" }}
      />

      <Script
        id="ld-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema()) }}
      />
      <Script
        id="ld-faq-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(contactFaq)) }}
      />
      <Script
        id="ld-bc-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])) }}
      />
    </>
  );
}
