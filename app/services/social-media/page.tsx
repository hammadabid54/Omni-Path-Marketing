import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { buildMetadata, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { Calendar, MessageCircle, BarChart3, Sparkles } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Social Media Management · From $1,500/mo",
  description:
    "Done-for-you social media management. Organic posts, community, short-form video. Fully remote. From $1,500/mo.",
  path: "/services/social-media",
});

const FEATURES = [
  { icon: Calendar, title: "Content calendar", d: "12-30 posts/month across your channels." },
  { icon: MessageCircle, title: "Community management", d: "Replies, DMs, engagement, mentions." },
  { icon: Sparkles, title: "Short-form video", d: "Reels, TikToks, Shorts — scripted + produced." },
  { icon: BarChart3, title: "Reporting", d: "Monthly performance, what worked, what's next." },
];

export default function SocialMediaServicePage() {
  return (
    <>
      <Hero
        eyebrow="Social Media Management"
        title={
          <>
            Social media that <em className="font-serif not-italic text-lime-400">builds a brand.</em>
          </>
        }
        subhead="Organic posts, community management, short-form video. From $1,500/mo."
        primaryCta={{ label: "Book a 15-min call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <TldrBox
        items={[
          "Done-for-you social media from $1,500/mo for businesses; $500/mo white-label for agencies.",
          "12-30 posts/month · community management · short-form video · monthly reporting.",
          "Cancel anytime. No setup fees. 20% off annual.",
        ]}
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What you get</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Everything in <em className="font-serif not-italic text-lime-400">one retainer.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <div className="bento h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{f.d}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            One transparent <em className="font-serif not-italic text-lime-400">monthly fee.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {[
            { tier: "Direct · Starter", price: "$1,500/mo", desc: "12-16 posts, community, monthly report" },
            { tier: "Direct · Growth", price: "$2,500/mo", desc: "20-24 posts + short-form video + engagement" },
            { tier: "Direct · Scale", price: "$3,500/mo", desc: "30 posts + multi-platform + dedicated lead" },
            { tier: "White-label", price: "$500/mo", desc: "Resell at $1,000-1,800/mo (55% margin)" },
          ].map((p) => (
            <StaggerItem key={p.tier}>
              <div className="bento h-full">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">{p.tier}</h3>
                  <span className="text-lg font-bold text-lime-400">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-white/65">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CtaSection
        title={<>Ready to <em className="font-serif not-italic text-lime-400">build a brand</em> on social?</>}
        subhead="Book a 15-min call. We'll send a 30-day content calendar as a free sample."
        primaryCta={{ label: "Book a 15-min call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <Script
        id="ld-service-social"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Social Media Management", description: "Done-for-you social media management and white-label social media for agencies.", path: "/services/social-media", serviceType: "Social Media", priceRange: "$500-$3500" })) }}
      />
      <Script
        id="ld-bc-social"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Social Media", url: "/services/social-media" }])) }}
      />
    </>
  );
}
