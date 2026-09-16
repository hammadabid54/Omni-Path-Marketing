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

/**
 * Brand contact info. Used in:
 * - Organization schema `contactPoint.telephone` and `email`
 * - Footer + contact page (tel: link + email link)
 * - privacy-policy + terms
 *
 * Canonical email: contact@omnipathmarketing.com (replaces the old hello@)
 * Canonical phone:  +92 305 400 4001 (Pakistan, mobile)
 *   E.164 raw:      +923054004001  — used in tel: links and schema
 */
export const BRAND_EMAIL = "contact@omnipathmarketing.com";
export const BRAND_PHONE_DISPLAY = "+92 305 400 4001";
export const BRAND_PHONE_E164 = "+923054004001";
export const BRAND_PHONE_TEL = `tel:${BRAND_PHONE_E164}`;

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
        email: BRAND_EMAIL,
        telephone: BRAND_PHONE_E164,
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: BRAND_EMAIL,
        telephone: BRAND_PHONE_E164,
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

export interface HowToStep {
  /** Short label (used for the HowToStep `name` field). */
  name: string;
  /** Full step text (used for `text`). Plain prose; inline links are fine. */
  text: string;
  /** Optional URL the step points to (e.g. a section anchor on the same page). */
  url?: string;
}

export interface HowToSchemaOptions {
  name: string;
  description: string;
  /** Page path where the HowTo is embedded (e.g. "/blog/dental-google-business-profile-optimization"). */
  path: string;
  steps: HowToStep[];
}

/**
 * Build a Schema.org `HowTo` JSON-LD object. Use for how-to guides where the
 * H2 questions map cleanly to ordered steps (claim, complete, post, etc.).
 *
 * Render via `<Script type="application/ld+json">` in the page component.
 *
 * Schema reference: https://schema.org/HowTo
 */
export function howtoSchema(opts: HowToSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    inLanguage: "en",
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: s.url ? `${SITE_URL}${s.url}` : undefined,
    })),
  };
}

export interface ItemListItem {
  /** Item label as shown to users. */
  name: string;
  /** Optional description / supporting text. */
  description?: string;
  /** Optional URL (relative path) for the item, e.g. a section anchor. */
  url?: string;
}

export interface ItemListSchemaOptions {
  name: string;
  description?: string;
  /** Page path where the ItemList is embedded. */
  path: string;
  items: ItemListItem[];
}

/**
 * Build a Schema.org `ItemList` JSON-LD object. Use for checklists where the
 * item order matters (e.g. "The Google Business Profile checklist").
 *
 * Render via `<Script type="application/ld+json">` in the page component.
 *
 * Schema reference: https://schema.org/ItemList
 */
export function itemListSchema(opts: ItemListSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    inLanguage: "en",
    itemListElement: opts.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      description: it.description,
      url: it.url ? `${SITE_URL}${it.url}` : undefined,
    })),
  };
}
