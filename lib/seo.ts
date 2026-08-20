import type { Metadata } from "next";
import { env } from "./env";

const SITE_NAME = "Omni Path Marketing";
const SITE_URL = env().NEXT_PUBLIC_SITE_URL;
const DEFAULT_DESCRIPTION =
  "Full-service digital growth partner. SEO, paid ads, branding, content, web — done for you or white-labeled under your brand. From $200/client.";

export interface BuildMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Build Next.js `Metadata` with consistent defaults: canonical, OG, Twitter, robots.
 * Use this on every page.
 */
export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const url = opts.path ? new URL(opts.path, SITE_URL).toString() : SITE_URL;
  const image = opts.image ?? `${SITE_URL}/og/default.png`;
  const description = opts.description ?? DEFAULT_DESCRIPTION;

  return {
    title: opts.title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }],
      locale: "en",
      type: opts.type ?? "website",
      publishedTime: opts.publishedTime,
      modifiedTime: opts.modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description,
      images: [image],
    },
    robots: opts.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

/* ============================================================
   JSON-LD Schema helpers — drop into pages as <script type="application/ld+json">
   ============================================================ */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Social profile URLs. Used in:
 * - Organization schema `sameAs` (entity disambiguation + Knowledge Graph)
 * - Footer + contact page icon row
 * - any "follow us" surface
 *
 * Keep in sync with the actual brand accounts. GEO engines (Google AI Overviews,
 * ChatGPT, Perplexity) and brand SERP both lean on this list to identify the
 * canonical entity.
 */
export const SOCIAL_PROFILES = {
  x: "https://x.com/omnipathmarket",
  instagram: "https://www.instagram.com/omnipathmarketing/",
  facebook: "https://www.facebook.com/people/Omni-Path-Marketing/61593348218794/",
  linkedin: "https://www.linkedin.com/company/omni-path-marketing/about/",
  pinterest: "https://www.pinterest.com/omnipathmarketing/",
} as const;

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Omni Path",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.svg`,
      width: 512,
      height: 512,
    },
    description: DEFAULT_DESCRIPTION,
    foundingDate: "2024-01-01",
    slogan: "Stop hiring five agencies. Hire us once.",
    areaServed: [{ "@type": "Place", name: "Worldwide" }],
    knowsAbout: [
      "White-label SEO",
      "AI SEO",
      "AI Marketing",
      "Marketing Automation",
      "Paid Media",
      "Web Design",
      "Branding",
      "Content Marketing",
      "Email Marketing",
      "Marketing Analytics",
    ],
    sameAs: [
      SOCIAL_PROFILES.x,
      SOCIAL_PROFILES.instagram,
      SOCIAL_PROFILES.facebook,
      SOCIAL_PROFILES.linkedin,
      SOCIAL_PROFILES.pinterest,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@omnipathmarketing.com",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "partners@omnipathmarketing.com",
        availableLanguage: ["English"],
      },
    ],
    address: { "@type": "PostalAddress", addressCountry: "US" },
    priceRange: "$$",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  priceRange?: string;
  areaServed?: string;
  provider?: string;
}

export function serviceSchema(opts: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    serviceType: opts.serviceType ?? "Digital Marketing",
    provider: {
      "@type": "Organization",
      name: opts.provider ?? SITE_NAME,
      url: SITE_URL,
    },
    areaServed: opts.areaServed ?? "Worldwide",
    priceRange: opts.priceRange ?? "$$",
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: i.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export interface ArticleSchemaOptions {
  title: string;
  description: string;
  path: string;
  author?: string;
  publishedTime?: string;
  image?: string;
}

export function articleSchema(opts: ArticleSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    image: opts.image ?? `${SITE_URL}/og/default.png`,
    author: {
      "@type": "Person",
      name: opts.author ?? "Omni Path Marketing",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
    },
    datePublished: opts.publishedTime,
    dateModified: opts.publishedTime,
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    description: "Get in touch with the Omni Path team. Replies within 4 business hours.",
  };
}
