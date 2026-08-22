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
import { DIRECT_SERVICES, WL_PRICE_RANGE, getDirectService, type ServiceId } from "@/content/pricing";

export const metadata: Metadata = buildMetadata({
  title: "Eight Services. One Partner. | Omni Path",
  description:
    "SEO, paid ads, branding, content, web, email, social, analytics. Hire us direct or resell under your brand. From $150-250/client white-label.",
  path: "/services",
});

/* ============================================================
   Service index — pricing pulled from content/pricing.ts
   (single source of truth). Keep the icon + href + description
   here; the price columns come from DIRECT_SERVICES.
   ============================================================ */
interface IndexEntry {
  id: ServiceId;
  name: string;
  icon: ServiceIndexRow["icon"];
  href: string;
  description: string;
}

const INDEX: IndexEntry[] = [
  { id: "seo",                 name: "SEO",                 icon: Search,    href: "/services/seo",                  description: "White-label, automated, AI-powered. Same engine at every tier." },
  { id: "paid-ads",            name: "Paid Ads",            icon: Megaphone, href: "/services/paid-ads",             description: "Google + Meta. Flat management fee. No % of spend. 65% agency margin." },
  { id: "branding",            name: "Branding",            icon: PenTool,   href: "/services/branding",             description: "Identity, logo, decks. 3-14 day turnaround. 60-70% margin." },
  { id: "web-design",          name: "Web & CRO",           icon: Globe,     href: "/services/web-design",           description: "Sites, landing pages, conversion optimization. 3-7 day turnaround." },
  { id: "social-media",        name: "Social Media",        icon: Share2,    href: "/services/social-media",         description: "Organic posts, community, short-form. 60-70% agency margin." },
  { id: "tiktok-linkedin-ads", name: "TikTok + LinkedIn",   icon: Tv,        href: "/services/tiktok-linkedin-ads",  description: "B2B and Gen Z ad buying. 60-70% agency margin." },
  { id: "email-lifecycle",     name: "Email & Lifecycle",   icon: Mail,      href: "/services/email-lifecycle",      description: "Klaviyo, HubSpot, automation. 60-70% agency margin." },
  { id: "analytics",           name: "Analytics",           icon: BarChart3, href: "/services/analytics",            description: "Dashboards, attribution, fractional CMO. 60-70% agency margin." },
];

/** Strip the "/mo" suffix to display the From price cleanly. */
function stripMo(price: string): string {
  return price.replace(/\/mo$/i, "");
}

const SERVICES: ServiceIndexRow[] = INDEX.map((entry) => {
  const svc = getDirectService(entry.id)!;
  const bronzePrice = stripMo(svc.tiers[0]!.price);
  const goldPrice = stripMo(svc.tiers[svc.tiers.length - 1]!.price);
  return {
    name: entry.name,
    icon: entry.icon,
    href: entry.href,
    fromPrice: bronzePrice,
    direct: `${bronzePrice}–${goldPrice}/mo`,
    whiteLabel: WL_PRICE_RANGE,
    description: entry.description,
  };
});

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
