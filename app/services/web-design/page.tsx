import type { Metadata } from "next";
import Script from "next/script";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { TldrBox } from "@/components/sections/tldr-box";
import { webDesignFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { LayoutTemplate, Layers, ShoppingBag, BarChart2, Wrench } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Web Design & CRO Services · From $300 | Omni Path",
  description:
    "White-label web design for agencies. Landing pages, full sites, conversion optimization. 3-7 day turnaround. 60-70% margin.",
  path: "/services/web-design",
});

export default function WebDesignServicePage() {
  return (
    <>
      <ServicePageTemplate
        heroEyebrow="Web & CRO · design + build + optimize"
        heroTitle={
          <>
            High-converting sites.{" "}
            <em className="font-serif not-italic text-lime-400">Built in days.</em>
          </>
        }
        heroSubhead="White-label web design for agencies. Landing pages, full sites, conversion optimization. 3-7 day turnaround. 60-70% margin."
        heroPrimaryCta={{ label: "Get a free conversion audit", href: "/contact" }}
        heroSecondaryCta={{ label: "Book a call", href: "/contact" }}

        whatWeDoEyebrow="What we do"
        whatWeDoTitle={<>Every page type. <em className="font-serif not-italic text-lime-400">Mobile-first.</em></>}
        features={[
          { title: "Landing pages", description: "1 page, 1 goal, high-converting.", icon: <LayoutTemplate className="h-5 w-5" /> },
          { title: "Standard sites", description: "5-8 pages, mobile-first, fast.", icon: <Layers className="h-5 w-5" /> },
          { title: "Custom sites", description: "10-20 pages, custom design, CMS-ready.", icon: <LayoutTemplate className="h-5 w-5" /> },
          { title: "E-commerce", description: "Shopify, WooCommerce, BigCommerce.", icon: <ShoppingBag className="h-5 w-5" /> },
          { title: "CRO audits", description: "Analytics review, A/B test plan, conversion fixes.", icon: <BarChart2 className="h-5 w-5" /> },
          { title: "Maintenance", description: "Hosting, updates, security, content edits.", icon: <Wrench className="h-5 w-5" /> },
        ]}

        whiteLabelEyebrow="White-label pricing"
        whiteLabelTitle={<>For agencies. <em className="font-serif not-italic text-lime-400">60-70% margin.</em></>}
        whiteLabelTiers={[
          { tier: "Landing Page", price: "$300", includes: "3-day turnaround, resell at $1,000-2,000" },
          { tier: "Standard Site", price: "$900", includes: "7-day turnaround, resell at $3,000-5,500", popular: true },
          { tier: "Custom Site", price: "$2,000", includes: "14-day turnaround, resell at $6,000-10,000" },
          { tier: "E-commerce", price: "$1,800", includes: "14-day turnaround, resell at $5,500-9,000" },
        ]}

        directEyebrow="Direct pricing"
        directTitle={<>For businesses. <em className="font-serif not-italic text-lime-400">No agency markup.</em></>}
        directTiers={[
          { tier: "Landing Page", price: "$1,000", includes: "5-day turnaround" },
          { tier: "Standard Site", price: "$2,500", includes: "10-day turnaround", popular: true },
          { tier: "Custom Site", price: "$5,000+", includes: "14-day turnaround" },
          { tier: "CRO Audit", price: "$2,500 one-time", includes: "7-day turnaround" },
        ]}

        faqEyebrow="FAQ"
        faqTitle={<>Web design <em className="font-serif not-italic text-lime-400">questions.</em></>}
        faqItems={webDesignFaq}

        finalCtaTitle={<>Ready for a site that <em className="font-serif not-italic text-lime-400">converts?</em></>}
        finalCtaSubhead="Get a free conversion audit, or book a 15-min call."
        finalCtaPrimary={{ label: "Get a free audit", href: "/contact" }}
        finalCtaSecondary={{ label: "Book a call", href: "/contact" }}
      />

      <TldrBox
        items={[
          "White-label web design from $300 per project. 60-70% margin.",
          "Direct web design from $1,000. 5-14 day turnaround.",
          "Built on Next.js, Webflow, WordPress, or Shopify — you choose.",
        ]}
      />

      <Script
        id="ld-service-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Web Design & CRO", description: "White-label and direct web design, CRO, e-commerce builds.", path: "/services/web-design", serviceType: "Web Design", priceRange: "$300-$5000" })) }}
      />
      <Script
        id="ld-faq-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(webDesignFaq)) }}
      />
      <Script
        id="ld-bc-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Web Design", url: "/services/web-design" }])) }}
      />
    </>
  );
}
