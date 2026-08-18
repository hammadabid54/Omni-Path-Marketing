import type { Metadata } from "next";
import Script from "next/script";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { TldrBox } from "@/components/sections/tldr-box";
import { paidAdsFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { Target, TrendingUp, PenSquare, BarChart3 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Paid Ads Management · Google & Meta | From $300/mo",
  description:
    "White-label Google Ads and Meta Ads management for agencies. Direct paid ads management for businesses. From $300/mo management. 65% agency margin.",
  path: "/services/paid-ads",
});

export default function PaidAdsServicePage() {
  return (
    <>
      <ServicePageTemplate
        heroEyebrow="Paid Ads · Google + Meta"
        heroTitle={
          <>
            Paid ads that <em className="font-serif not-italic text-lime-400">actually convert.</em>
          </>
        }
        heroSubhead="White-label Google Ads and Meta Ads management for agencies. Direct for businesses. From $300/mo management fee. 65% agency margin."
        heroPrimaryCta={{ label: "Get a free audit", href: "/audit" }}
        heroSecondaryCta={{ label: "See pricing", href: "/pricing" }}
        heroTrustMicrocopy="$0 setup · 7-day onboarding · Cancel anytime"

        whatWeDoEyebrow="What we do"
        whatWeDoTitle={<>Every channel. <em className="font-serif not-italic text-lime-400">One team.</em></>}
        features={[
          { title: "Google Ads", description: "Search, Display, Shopping, Performance Max.", icon: <Target className="h-5 w-5" /> },
          { title: "Meta Ads", description: "Facebook + Instagram feed, stories, reels.", icon: <TrendingUp className="h-5 w-5" /> },
          { title: "Campaign strategy", description: "Audience research, keyword strategy, ad copy testing.", icon: <PenSquare className="h-5 w-5" /> },
          { title: "Creative", description: "Ad copy, image briefs, video scripts.", icon: <PenSquare className="h-5 w-5" /> },
          { title: "Optimization", description: "Bidding, targeting, placements, weekly iterations.", icon: <BarChart3 className="h-5 w-5" /> },
          { title: "Reporting", description: "White-labeled dashboards, monthly summaries.", icon: <BarChart3 className="h-5 w-5" /> },
        ]}

        whiteLabelEyebrow="White-label pricing"
        whiteLabelTitle={<>For agencies. <em className="font-serif not-italic text-lime-400">65% margin.</em></>}
        whiteLabelSubhead="Flat management fee. No % of spend."
        whiteLabelTiers={[
          { tier: "Starter", price: "$300/mo", includes: "Ad spend under $5k" },
          { tier: "Growth", price: "$500/mo", includes: "Ad spend $5-20k, weekly optimization", popular: true },
          { tier: "Scale", price: "$1,000/mo", includes: "Ad spend $20k+, 5% of spend above $20k" },
        ]}

        directEyebrow="Direct pricing"
        directTitle={<>For businesses. <em className="font-serif not-italic text-lime-400">Aligned incentives.</em></>}
        directSubhead="We profit when you profit, not when you spend more."
        directTiers={[
          { tier: "Starter", price: "$500/mo", includes: "+ $1,500/mo min spend" },
          { tier: "Growth", price: "$1,000/mo", includes: "+ $3,000/mo min spend", popular: true },
          { tier: "Scale", price: "$2,000/mo", includes: "+ $10,000/mo min spend" },
        ]}

        faqEyebrow="FAQ"
        faqTitle={<>Paid ads <em className="font-serif not-italic text-lime-400">questions.</em></>}
        faqItems={paidAdsFaq}

        finalCtaTitle={<>Ready to <em className="font-serif not-italic text-lime-400">scale your ad spend</em> profitably?</>}
        finalCtaSubhead="Get a free audit of your current campaigns, or book a strategy call."
        finalCtaPrimary={{ label: "Get a free audit", href: "/audit" }}
        finalCtaSecondary={{ label: "Book a call", href: "/contact" }}
      />

      <TldrBox
        items={[
          "White-label Google + Meta Ads management from $300/mo. 65% agency margin.",
          "Direct paid ads from $500/mo + ad spend. Aligned incentives — we profit when you profit.",
          "$0 setup fees, 7-day onboarding, weekly optimizations.",
        ]}
      />

      <Script
        id="ld-service-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Paid Ads Management", description: "White-label and direct Google + Meta Ads management. Flat management fee. 65% agency margin.", path: "/services/paid-ads", serviceType: "Paid Advertising", priceRange: "$300-$2000" })) }}
      />
      <Script
        id="ld-faq-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(paidAdsFaq)) }}
      />
      <Script
        id="ld-bc-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Paid Ads", url: "/services/paid-ads" }])) }}
      />
    </>
  );
}
