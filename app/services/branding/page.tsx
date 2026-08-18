import type { Metadata } from "next";
import Script from "next/script";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { TldrBox } from "@/components/sections/tldr-box";
import { brandingFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { Palette, BookOpen, Layers, Compass, Presentation } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Branding & Identity Services · From $150 | Omni Path",
  description:
    "White-label branding for agencies. Logo, identity, messaging, pitch decks. 3-7 day turnaround. 60-70% margin.",
  path: "/services/branding",
});

export default function BrandingServicePage() {
  return (
    <>
      <ServicePageTemplate
        heroEyebrow="Branding · identity + strategy"
        heroTitle={
          <>
            Brand strategy + identity.{" "}
            <em className="font-serif not-italic text-lime-400">Delivered in days.</em>
          </>
        }
        heroSubhead="White-label branding for agencies. Logo, identity, messaging, pitch decks. 3-7 day turnaround. 60-70% margin."
        heroPrimaryCta={{ label: "Get a free brand audit", href: "/contact" }}
        heroSecondaryCta={{ label: "Book a call", href: "/contact" }}

        whatWeDoEyebrow="What we do"
        whatWeDoTitle={<>Every brand artifact. <em className="font-serif not-italic text-lime-400">One team.</em></>}
        features={[
          { title: "Logo design", description: "3 concepts, 2 revisions, all file formats.", icon: <Palette className="h-5 w-5" /> },
          { title: "Brand identity", description: "Logo + color + typography + 12-page style guide.", icon: <BookOpen className="h-5 w-5" /> },
          { title: "Full brand system", description: "Identity + messaging + voice + 30-page guide + pitch deck template.", icon: <Layers className="h-5 w-5" /> },
          { title: "Brand strategy", description: "Positioning, audience research, competitive analysis.", icon: <Compass className="h-5 w-5" /> },
          { title: "Pitch decks", description: "Investor, sales, partnership decks.", icon: <Presentation className="h-5 w-5" /> },
        ]}

        whiteLabelEyebrow="White-label pricing"
        whiteLabelTitle={<>For agencies. <em className="font-serif not-italic text-lime-400">60-70% margin.</em></>}
        whiteLabelTiers={[
          { tier: "Logo", price: "$150", includes: "3-day turnaround, resell at $500-900" },
          { tier: "Brand Identity", price: "$600", includes: "7-day turnaround, resell at $2,000-3,500", popular: true },
          { tier: "Full Brand System", price: "$1,500", includes: "14-day turnaround, resell at $4,500-7,500" },
        ]}

        directEyebrow="Direct pricing"
        directTitle={<>For businesses. <em className="font-serif not-italic text-lime-400">No studio overhead.</em></>}
        directTiers={[
          { tier: "Brand Starter", price: "$800", includes: "7-day turnaround" },
          { tier: "Brand Identity", price: "$2,500", includes: "14-day turnaround", popular: true },
          { tier: "Full Rebrand", price: "$5,000+", includes: "21-day turnaround" },
        ]}

        faqEyebrow="FAQ"
        faqTitle={<>Branding <em className="font-serif not-italic text-lime-400">questions.</em></>}
        faqItems={brandingFaq}

        finalCtaTitle={<>Ready for a <em className="font-serif not-italic text-lime-400">brand that works?</em></>}
        finalCtaSubhead="Tell us about your business. We'll send a 3-day concept."
        finalCtaPrimary={{ label: "Get a free brand audit", href: "/contact" }}
        finalCtaSecondary={{ label: "Book a call", href: "/contact" }}
      />

      <TldrBox
        items={[
          "White-label branding from $150 per project. 60-70% margin.",
          "Direct branding from $800. 3-21 day turnaround.",
          "Full IP transfer on final payment. Logo, identity, full system.",
        ]}
      />

      <Script
        id="ld-service-branding"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Branding & Identity", description: "White-label and direct branding: logo, identity, full system, pitch decks.", path: "/services/branding", serviceType: "Branding", priceRange: "$150-$5000" })) }}
      />
      <Script
        id="ld-faq-branding"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(brandingFaq)) }}
      />
      <Script
        id="ld-bc-branding"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Branding", url: "/services/branding" }])) }}
      />
    </>
  );
}
