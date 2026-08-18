import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { ServicesIndexSection, type ServiceIndexRow } from "@/components/sections/services-page";
import {
  Search, Megaphone, PenTool, Globe, Share2, Tv, Mail, BarChart3,
} from "lucide-react";
import { servicesFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Eight Services. One Partner. | Omni Path",
  description:
    "SEO, paid ads, branding, content, web, email, social, analytics. Hire us direct or resell under your brand. From $200/client.",
  path: "/services",
});

const SERVICES: ServiceIndexRow[] = [
  {
    name: "SEO",
    icon: Search,
    href: "/services/seo",
    fromPrice: "$200",
    direct: "$400/mo",
    whiteLabel: "$200/client",
    description: "White-label, automated, AI-powered. From $200/client with full content engine.",
  },
  {
    name: "Paid Ads",
    icon: Megaphone,
    href: "/services/paid-ads",
    fromPrice: "$300",
    direct: "$500/mo",
    whiteLabel: "$300/mo",
    description: "Google + Meta. Flat management fee. No % of spend. 65% agency margin.",
  },
  {
    name: "Branding",
    icon: PenTool,
    href: "/services/branding",
    fromPrice: "$150",
    direct: "$800",
    whiteLabel: "$150",
    description: "Identity, logo, decks. 3-14 day turnaround. 60-70% margin.",
  },
  {
    name: "Web & CRO",
    icon: Globe,
    href: "/services/web-design",
    fromPrice: "$300",
    direct: "$1,000",
    whiteLabel: "$300",
    description: "Sites, landing pages, conversion optimization. 3-7 day turnaround.",
  },
  {
    name: "Social Media",
    icon: Share2,
    href: "/services/social-media",
    fromPrice: "$500",
    direct: "$1,500/mo",
    whiteLabel: "$500/mo",
    description: "Organic posts, community, short-form. 55% agency margin.",
  },
  {
    name: "TikTok + LinkedIn",
    icon: Tv,
    href: "/services/tiktok-linkedin-ads",
    fromPrice: "$500",
    direct: "$1,500/mo",
    whiteLabel: "$500/mo",
    description: "B2B and Gen Z ad buying. 55% agency margin.",
  },
  {
    name: "Email & Lifecycle",
    icon: Mail,
    href: "/services/email-lifecycle",
    fromPrice: "$500",
    direct: "$2,000/mo",
    whiteLabel: "$500/mo",
    description: "Klaviyo, HubSpot, automation. 55% agency margin.",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    href: "/services/analytics",
    fromPrice: "$500",
    direct: "$1,500/mo",
    whiteLabel: "$500/mo",
    description: "Dashboards, attribution, fractional CMO. 55% agency margin.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title={
          <>
            Eight services. <em className="font-serif not-italic text-lime-400">One partner.</em>
          </>
        }
        subhead="SEO, paid ads, branding, content, web, email, social, analytics. Hire us direct or resell under your brand."
      />

      <ServicesIndexSection
        eyebrow="The full stack"
        title={
          <>
            Hire us for one.{" "}
            <em className="font-serif not-italic text-lime-400">Resell them all.</em>
          </>
        }
        subhead="Every service is available white-label for agencies or done-for-you for businesses."
        rows={SERVICES}
      />

      <FaqSection eyebrow="FAQ" title="Service questions." items={servicesFaq} />

      <CtaSection
        title={<>Not sure where to start?</>}
        subhead="Get a free audit, or talk to us about your goals."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a call", href: "/contact" }}
      />

      <Script
        id="ld-faq-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(servicesFaq)) }}
      />
      <Script
        id="ld-bc-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }])) }}
      />
    </>
  );
}
