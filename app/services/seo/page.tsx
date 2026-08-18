import type { Metadata } from "next";
import Script from "next/script";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { TldrBox } from "@/components/sections/tldr-box";
import { seoFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { Search, Wrench, FileText, Link2, MapPin, BarChart2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "SEO Services · White-Label & Direct | From $200/client",
  description:
    "White-label SEO for agencies at $200/client. Direct SEO for businesses at $400/mo. AI-powered, 70% lower cost than traditional agencies.",
  path: "/services/seo",
});

export default function SeoServicePage() {
  return (
    <>
      <ServicePageTemplate
        heroEyebrow="SEO · white-label + direct"
        heroTitle={
          <>
            SEO that ranks.{" "}
            <em className="font-serif not-italic text-lime-400">Without the agency overhead.</em>
          </>
        }
        heroSubhead="White-label for agencies at $200/client. Direct for businesses at $400/mo. AI-powered, 70% lower cost than traditional agencies. Same strategy, same deliverables."
        heroPrimaryCta={{ label: "Get a free audit", href: "/audit" }}
        heroSecondaryCta={{ label: "See pricing", href: "/pricing" }}
        heroTrustMicrocopy="Cancel anytime · No setup fees · 20% off annual"

        whatWeDoEyebrow="What we do"
        whatWeDoTitle={<>The full SEO stack. <em className="font-serif not-italic text-lime-400">One team.</em></>}
        features={[
          { title: "Technical SEO", description: "Site audits, Core Web Vitals, schema, crawl budget, site speed.", icon: <Wrench className="h-5 w-5" /> },
          { title: "On-page SEO", description: "Title tags, meta descriptions, H1s, internal links, content optimization.", icon: <FileText className="h-5 w-5" /> },
          { title: "Content", description: "2-16 blog posts/month, AI-drafted and human-edited.", icon: <Search className="h-5 w-5" /> },
          { title: "Links", description: "4-20 placements/month, DR 30+ domains.", icon: <Link2 className="h-5 w-5" /> },
          { title: "Local SEO", description: "Google Business Profile, citations, local pack ranking.", icon: <MapPin className="h-5 w-5" /> },
          { title: "Reporting", description: "White-labeled PDFs, real-time dashboards, monthly calls.", icon: <BarChart2 className="h-5 w-5" /> },
        ]}

        whiteLabelEyebrow="White-label pricing"
        whiteLabelTitle={<>For agencies. <em className="font-serif not-italic text-lime-400">70% margin.</em></>}
        whiteLabelSubhead="Resell at $500-1,500/client. Same deliverables, your logo."
        whiteLabelTiers={[
          { tier: "Starter", price: "$250/client", includes: "1 client, audit + on-page, 2-4 blogs/mo, 4-8 links/mo" },
          { tier: "Growth", price: "$200/client", includes: "5+ clients, dedicated strategist, 4-8 blogs/mo, 8-12 links/mo", popular: true },
          { tier: "Scale", price: "$150/client", includes: "15+ clients, custom dashboard, partner manager, 8-16 blogs/mo" },
        ]}

        directEyebrow="Direct pricing"
        directTitle={<>For businesses. <em className="font-serif not-italic text-lime-400">No agency overhead.</em></>}
        directSubhead="Same delivery team. No markup."
        directTiers={[
          { tier: "Local", price: "$400/mo", includes: "1 location, GBP, 2 blogs/mo, 4 links/mo, monthly report" },
          { tier: "Growth", price: "$800/mo", includes: "Multi-location, technical SEO, 4 blogs/mo, 8 links/mo, content strategy", popular: true },
          { tier: "Enterprise", price: "$2,000+/mo", includes: "Custom, multi-market, dedicated team, weekly calls" },
        ]}

        faqEyebrow="FAQ"
        faqTitle={<>SEO questions, <em className="font-serif not-italic text-lime-400">honestly.</em></>}
        faqItems={seoFaq}

        finalCtaTitle={<>Ready to <em className="font-serif not-italic text-lime-400">rank higher?</em></>}
        finalCtaSubhead="Get a free audit, or book a 15-min strategy call."
        finalCtaPrimary={{ label: "Get a free audit", href: "/audit" }}
        finalCtaSecondary={{ label: "Book a call", href: "/contact" }}
      />

      <TldrBox
        items={[
          "Omni Path runs the full SEO stack: technical, on-page, content, links, local, reporting.",
          "White-label for agencies at $200/client/month. Direct for businesses at $400/month.",
          "Same deliverables as a $1,500-3,000/mo traditional agency. 70% lower cost.",
        ]}
      />

      <Script
        id="ld-service-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "SEO Services", description: "White-label and direct SEO services. From $200/client for agencies. From $400/mo for businesses.", path: "/services/seo", serviceType: "SEO", priceRange: "$200-$2000" })) }}
      />
      <Script
        id="ld-faq-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(seoFaq)) }}
      />
      <Script
        id="ld-bc-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "SEO", url: "/services/seo" }])) }}
      />
    </>
  );
}
