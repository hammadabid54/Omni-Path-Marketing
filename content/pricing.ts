/**
 * Central pricing config — single source of truth for every pricing display
 * across the Omni Path site. Each service page imports from here so a
 * change to one file updates every surface.
 *
 * Pricing structure (locked 2026-08-22):
 *   - WHITE-LABEL (agencies): every tier ships the same SEO engine.
 *     Volume unlocks price ($250 / $200 / $150 per client/mo), not features.
 *   - DIRECT (businesses): Bronze / Silver / Gold per XPRT-Marketing
 *     Service & Pricing Guide, with the same deliverables at every tier.
 *
 * If you change a number here, grep for the literal in app/ and content/ —
 * the only places it should appear are this file and the rendered output.
 */

export type Tier = "Bronze" | "Silver" | "Gold" | "Starter" | "Growth" | "Scale";

export interface WlTier {
  id: "Starter" | "Growth" | "Scale";
  price: string;       // ourPrice, what the agency pays us
  per: string;         // "/client/mo"
  min: string;         // "1 client" / "5+ clients" / "15+ clients"
  popular?: boolean;
  ctaLabel: string;
}

/** White-label SEO — $150-250 per client/mo, 3 tiers, same engine at every tier. */
export const WL_SEO_TIERS: WlTier[] = [
  { id: "Starter", price: "$250", per: "/client/mo", min: "1 client",  ctaLabel: "Start with 1 client" },
  { id: "Growth",  price: "$200", per: "/client/mo", min: "5+ clients", popular: true, ctaLabel: "Start at 5 clients" },
  { id: "Scale",   price: "$150", per: "/client/mo", min: "15+ clients", ctaLabel: "Scale to 15+" },
];

/** The single white-label SEO offering — every tier gets this. */
export const WL_SEO_OFFERING: string[] = [
  "Monthly technical audit + on-page optimization",
  "2-4 blog posts / month",
  "4-8 backlinks / month",
  "1 location optimization",
  "Keyword tracking via SE Ranking (10 keywords)",
  "Monthly white-label report",
];

/**
 * All other white-label services — every one of them is priced the same
 * $150-250 tier structure, and every tier gets the same standardized
 * offering per service.
 */
export const WL_OTHER_SERVICES = [
  {
    id: "paid-ads",
    name: "Paid Ads (Google / Meta)",
    description: "Full campaign build, audience targeting, A/B testing, monthly optimization. Ad spend billed separately.",
    tierRange: "$150-250 / client / mo",
  },
  {
    id: "social-media",
    name: "Social Media Management",
    description: "Content calendar, posts, community management, monthly performance report.",
    tierRange: "$150-250 / client / mo",
  },
  {
    id: "web-design",
    name: "Web Design & CRO",
    description: "Custom landing pages, full sites, speed optimization, mobile-first builds.",
    tierRange: "$150-250 / client / mo",
  },
  {
    id: "branding",
    name: "Branding",
    description: "Logo, full identity system, brand book, social media kit.",
    tierRange: "$150-250 / client / mo",
  },
  {
    id: "email-lifecycle",
    name: "Email & Lifecycle",
    description: "Klaviyo / Mailchimp flows, segmentation, deliverability, monthly report.",
    tierRange: "$150-250 / client / mo",
  },
  {
    id: "analytics",
    name: "Analytics & Reporting",
    description: "GA4 dashboards, Looker Studio, attribution, monthly insights.",
    tierRange: "$150-250 / client / mo",
  },
] as const;

export type ServiceId =
  | "seo"
  | "social-media"
  | "paid-ads"
  | "web-design"
  | "branding"
  | "creative"
  // Site-only services (not in XPRT guide, but follow Bronze/Silver/Gold pattern)
  | "email-lifecycle"
  | "tiktok-linkedin-ads"
  | "analytics";

export interface DirectTier {
  id: "Bronze" | "Silver" | "Gold";
  price: string;
  popular?: boolean;
  features: string[];
}

export interface DirectService {
  id: ServiceId;
  name: string;
  tiers: DirectTier[];
}

/** Direct (business) pricing — Bronze / Silver / Gold per XPRT guide. */
export const DIRECT_SERVICES: DirectService[] = [
  {
    id: "seo",
    name: "SEO",
    tiers: [
      {
        id: "Bronze",
        price: "$250/mo",
        features: [
          "6 blog posts / month",
          "5 backlinks",
          "100 business listings (all-time)",
          "10 primary keywords",
          "On-page: meta + alt + header tags",
          "Monthly keyword rank tracking (10 kw)",
          "Monthly performance report",
          "Email support",
        ],
      },
      {
        id: "Silver",
        price: "$350/mo",
        popular: true,
        features: [
          "10 blog posts / month",
          "10 backlinks",
          "150 business listings (all-time)",
          "20 primary keywords",
          "On-page + internal linking structure",
          "Bi-weekly rank tracking (20 kw)",
          "Quarterly competitor snapshot",
          "Monthly report + review call",
          "Email & chat support",
        ],
      },
      {
        id: "Gold",
        price: "$450/mo",
        features: [
          "15 blog posts / month",
          "20 backlinks",
          "200 business listings (all-time)",
          "35 primary keywords",
          "Full technical SEO audit + schema markup",
          "Weekly rank tracking (35 kw)",
          "Monthly competitor analysis + gap report",
          "Monthly report + bi-weekly strategy call",
          "Priority support + dedicated SEO strategist",
        ],
      },
    ],
  },
  {
    id: "social-media",
    name: "Social Media Management",
    tiers: [
      {
        id: "Bronze",
        price: "$200/mo",
        features: [
          "2 platforms managed",
          "12 posts / month",
          "Custom graphics",
          "Basic content calendar",
        ],
      },
      {
        id: "Silver",
        price: "$300/mo",
        popular: true,
        features: [
          "3 platforms managed",
          "20 posts / month",
          "Custom graphics",
          "Content calendar + performance reporting",
        ],
      },
      {
        id: "Gold",
        price: "$400/mo",
        features: [
          "4+ platforms managed",
          "30 posts / month",
          "Custom graphics",
          "Video content + influencer outreach",
        ],
      },
    ],
  },
  {
    id: "paid-ads",
    name: "Paid Ads (PPC / Meta)",
    tiers: [
      {
        id: "Bronze",
        price: "$250/mo",
        features: [
          "1 platform (Google or Meta)",
          "Setup + monthly optimization",
          "3 ad copy variations, 2 static image ads",
          "Ad spend billed separately",
        ],
      },
      {
        id: "Silver",
        price: "$400/mo",
        popular: true,
        features: [
          "2 platforms",
          "+ A/B testing + retargeting",
          "5 ad copy variations, 4 static + 1 video ad",
          "Ad spend billed separately",
        ],
      },
      {
        id: "Gold",
        price: "$600/mo",
        features: [
          "3-4 platforms (+ TikTok / LinkedIn)",
          "Full-funnel strategy",
          "8 ad copy variations, 6 static + 3 video ads",
          "Ad spend billed separately",
        ],
      },
    ],
  },
  {
    id: "web-design",
    name: "Web Design & Development",
    tiers: [
      {
        id: "Bronze",
        price: "$150/mo",
        features: [
          "Up to 5 pages",
          "Domain + hosting setup",
          "Basic template design",
          "3 custom graphics / banners",
          "SSL + basic backup",
        ],
      },
      {
        id: "Silver",
        price: "$300/mo",
        popular: true,
        features: [
          "Up to 10 pages",
          "Custom (non-template) design",
          "Contact forms + mobile optimization",
          "8 custom graphics + 1 promo video",
          "SSL + weekly backups + malware scan",
        ],
      },
      {
        id: "Gold",
        price: "$500/mo",
        features: [
          "Up to 20 pages",
          "Full custom + e-com / booking integration",
          "Speed optimization",
          "15+ custom graphics + 2 promo videos",
          "SSL + daily backups + firewall + uptime monitoring",
        ],
      },
    ],
  },
  {
    id: "branding",
    name: "Branding",
    tiers: [
      {
        id: "Bronze",
        price: "$150/mo",
        features: [
          "1 logo concept, 2 revisions",
          "Basic brand color palette",
        ],
      },
      {
        id: "Silver",
        price: "$250/mo",
        popular: true,
        features: [
          "2 logo concepts, 4 revisions",
          "Color palette + typography guide + business card",
        ],
      },
      {
        id: "Gold",
        price: "$400/mo",
        features: [
          "3 logo concepts, unlimited revisions",
          "Full brand style guide + business card + letterhead",
          "Social media brand kit",
        ],
      },
    ],
  },
  {
    id: "creative",
    name: "Creative Services",
    tiers: [
      {
        id: "Bronze",
        price: "$200/mo",
        features: [
          "5 static designs",
          "1 short-form video edit (up to 30 sec)",
        ],
      },
      {
        id: "Silver",
        price: "$350/mo",
        popular: true,
        features: [
          "10 static designs",
          "3 short-form video edits",
          "1 campaign creative concept",
        ],
      },
      {
        id: "Gold",
        price: "$550/mo",
        features: [
          "20 static designs",
          "6 short-form video edits",
          "3 campaign creative concepts + storyboard / concept planning",
        ],
      },
    ],
  },
  // ----- Site-only services (XPRT-aligned, not in the 6-service XPRT guide) -----
  {
    id: "email-lifecycle",
    name: "Email & Lifecycle",
    tiers: [
      {
        id: "Bronze",
        price: "$200/mo",
        features: [
          "1 platform (Klaviyo, HubSpot, or ActiveCampaign)",
          "2 flows: Welcome + Abandoned Cart",
          "4 email campaigns / month",
          "1 A/B test / month",
          "List hygiene + deliverability monitoring",
        ],
      },
      {
        id: "Silver",
        price: "$300/mo",
        popular: true,
        features: [
          "1 platform, 4 flows: Welcome, Cart, Browse, Post-Purchase",
          "8 email campaigns / month",
          "4 A/B tests / month",
          "Segmentation strategy + maintenance",
          "Monthly 30-min strategy call",
        ],
      },
      {
        id: "Gold",
        price: "$400/mo",
        features: [
          "Multi-platform (Klaviyo + HubSpot or AC together)",
          "6+ flows with branching + behavioral triggers",
          "Unlimited campaigns",
          "Advanced segmentation + deliverability audit",
          "Weekly 30-min strategy call + dedicated strategist",
        ],
      },
    ],
  },
  {
    id: "tiktok-linkedin-ads",
    name: "TikTok + LinkedIn Ads",
    tiers: [
      {
        id: "Bronze",
        price: "$400/mo",
        features: [
          "1 platform (TikTok or LinkedIn)",
          "1 ad group with 3-5 creative variations",
          "Basic audience targeting + pixel + events",
          "Monthly performance report",
          "Ad spend billed separately to the platform",
        ],
      },
      {
        id: "Silver",
        price: "$600/mo",
        popular: true,
        features: [
          "Both platforms (TikTok + LinkedIn)",
          "3 ad groups, 8-12 creative variations",
          "Spark Ads / InMail / Conversation Ads",
          "Advanced lookalikes + retargeting",
          "Bi-weekly performance call",
        ],
      },
      {
        id: "Gold",
        price: "$900/mo",
        features: [
          "Multi-campaign structure across both platforms",
          "UGC creator sourcing + continuous A/B testing",
          "ABM audience lists on LinkedIn",
          "Multi-touch attribution + pipeline reporting",
          "Weekly call + dedicated B2B strategist",
        ],
      },
    ],
  },
  {
    id: "analytics",
    name: "Analytics & Reporting",
    tiers: [
      {
        id: "Bronze",
        price: "$200/mo",
        features: [
          "1 Looker Studio dashboard",
          "GA4 audit + cleanup (one-time)",
          "4 KPIs tracked",
          "Monthly email summary",
        ],
      },
      {
        id: "Silver",
        price: "$350/mo",
        popular: true,
        features: [
          "4 dashboards across all major channels (GA4, ads, email, social)",
          "Conversion tracking setup",
          "Custom KPI definitions",
          "Weekly written summary + monthly 30-min strategy call",
        ],
      },
      {
        id: "Gold",
        price: "$500/mo",
        features: [
          "6+ dashboards + multi-touch attribution modeling",
          "Server-side GA4 + conversion tracking",
          "4 hours of fractional CMO time / month",
          "Weekly strategy call + quarterly business review",
        ],
      },
    ],
  },
];

/** Helpers — these are the ONLY way other files should read pricing. */
export function getDirectService(id: ServiceId): DirectService | undefined {
  return DIRECT_SERVICES.find((s) => s.id === id);
}

/**
 * The "from" price shown on service cards / hero sections.
 * Source: smallest Bronze price per service.
 */
export const SERVICE_FROM_PRICES: Record<ServiceId, string> = {
  seo: "$150-250/client",
  "social-media": "From $200/mo",
  "paid-ads": "From $250/mo",
  "web-design": "From $150/mo",
  branding: "From $150/mo",
  creative: "From $200/mo",
  // Newer services on the site
  "tiktok-linkedin-ads": "From $250/mo",
  "email-lifecycle": "From $200/mo",
  analytics: "From $200/mo",
};

/** White-label price range per service (display only — actual price is $150/$200/$250). */
export const WL_PRICE_RANGE = "$150-250 / client / mo";
