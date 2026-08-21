/**
 * Per-service credential handoff config.
 *
 * The intake form doesn't ask clients to type credentials into a web form
 * (which is risky and would end up in a DB or email body). Instead, the
 * form shows a tailored checklist of what to send, and to which inbox.
 *
 * Two routing inboxes:
 *   - Google Workspace tools (Search Console, GA4, Google Ads, GTM,
 *     Google Business Profile, YouTube, hosting/DNS/CMS for Web & CRO)
 *     → hammadabid54@gmail.com
 *   - Social media accounts (Instagram, Facebook, LinkedIn, X, TikTok,
 *     Pinterest) → hammadabid54@outlook.com
 *
 * The client receives a recap email after submitting that mirrors this
 * checklist, so they can act on it without reloading the page.
 */
import type { IntakeService } from "./intake-tokens";

export const INBOX_GOOGLE = "hammadabid54@gmail.com";
export const INBOX_SOCIAL = "hammadabid54@outlook.com";

export interface CredentialItem {
  /** Short human label shown in the checklist. */
  label: string;
  /** One-line instruction explaining what the client should do. */
  action: string;
  /** Which inbox this credential goes to. */
  inbox: typeof INBOX_GOOGLE | typeof INBOX_SOCIAL;
}

export interface ServiceConfig {
  /** Stable id used in form data + URL. */
  id: IntakeService;
  /** Display name in the multi-select. */
  label: string;
  /** Short one-line description shown under the chip. */
  blurb: string;
  /**
   * Credentials required for this service. The form renders these as
   * a checklist. Empty array = no credentials needed (e.g. Branding
   * is creative work; no logins to share).
   */
  credentials: CredentialItem[];
}

export const SERVICES: ServiceConfig[] = [
  {
    id: "seo",
    label: "SEO",
    blurb: "Technical SEO, content, links, local.",
    credentials: [
      { label: "Google Search Console", action: "Add as a Full user", inbox: INBOX_GOOGLE },
      { label: "Google Analytics 4", action: "Add as an Editor", inbox: INBOX_GOOGLE },
      { label: "Google Tag Manager (if you have it)", action: "Add as an Admin", inbox: INBOX_GOOGLE },
      { label: "Google Business Profile (if local SEO)", action: "Add as a Manager", inbox: INBOX_GOOGLE },
      { label: "CMS (WordPress / Webflow / Shopify)", action: "Create an admin user, send credentials", inbox: INBOX_GOOGLE },
    ],
  },
  {
    id: "paid-ads",
    label: "Paid Ads",
    blurb: "Google + Meta. Flat fee, no % of spend.",
    credentials: [
      { label: "Google Ads account", action: "Add as an Admin", inbox: INBOX_GOOGLE },
      { label: "Meta Ads (Facebook) Business Manager", action: "Add as an Admin", inbox: INBOX_GOOGLE },
      { label: "Google Tag Manager", action: "Add as an Admin", inbox: INBOX_GOOGLE },
    ],
  },
  {
    id: "branding",
    label: "Branding",
    blurb: "Logo, identity, full brand system.",
    credentials: [],
  },
  {
    id: "web-cro",
    label: "Web & CRO",
    blurb: "Sites, landing pages, e-com.",
    credentials: [
      { label: "Domain registrar", action: "Add hammadabid54@gmail.com or send transfer instructions", inbox: INBOX_GOOGLE },
      { label: "Hosting / cPanel", action: "Create an account, send credentials", inbox: INBOX_GOOGLE },
      { label: "CMS (WordPress / Webflow / Shopify)", action: "Create an admin user, send credentials", inbox: INBOX_GOOGLE },
      { label: "FTP / SFTP (if applicable)", action: "Send credentials", inbox: INBOX_GOOGLE },
    ],
  },
  {
    id: "social-media",
    label: "Social Media",
    blurb: "Organic posts, community, short-form.",
    credentials: [
      { label: "Instagram (Business)", action: "Add hammadabid54@outlook.com as admin", inbox: INBOX_SOCIAL },
      { label: "Facebook Page + Business Manager", action: "Add hammadabid54@outlook.com as Page admin and BM user", inbox: INBOX_SOCIAL },
      { label: "LinkedIn Page", action: "Add hammadabid54@outlook.com as Page admin", inbox: INBOX_SOCIAL },
      { label: "X / Twitter", action: "Add hammadabid54@outlook.com as a team member", inbox: INBOX_SOCIAL },
      { label: "TikTok (Business)", action: "Add hammadabid54@outlook.com as a business account admin", inbox: INBOX_SOCIAL },
      { label: "YouTube", action: "Add hammadabid54@gmail.com as a Manager", inbox: INBOX_GOOGLE },
      { label: "Pinterest (Business)", action: "Add hammadabid54@outlook.com as a business account admin", inbox: INBOX_SOCIAL },
    ],
  },
  {
    id: "tiktok-linkedin",
    label: "TikTok + LinkedIn",
    blurb: "B2B LinkedIn + Gen Z TikTok ad buying.",
    credentials: [
      { label: "LinkedIn Campaign Manager", action: "Add hammadabid54@outlook.com with Campaign Manager access", inbox: INBOX_SOCIAL },
      { label: "TikTok Ads Manager", action: "Add hammadabid54@outlook.com as an Admin", inbox: INBOX_SOCIAL },
      { label: "LinkedIn Page", action: "Add hammadabid54@outlook.com as Page admin", inbox: INBOX_SOCIAL },
      { label: "TikTok organic (Business account)", action: "Add hammadabid54@outlook.com as admin", inbox: INBOX_SOCIAL },
    ],
  },
  {
    id: "email-lifecycle",
    label: "Email & Lifecycle",
    blurb: "Klaviyo, HubSpot, ActiveCampaign.",
    credentials: [
      { label: "ESP (Klaviyo / HubSpot / ActiveCampaign)", action: "Add hammadabid54@gmail.com as a user", inbox: INBOX_GOOGLE },
      { label: "Sender domain DNS access", action: "Add hammadabid54@gmail.com or send registrar credentials", inbox: INBOX_GOOGLE },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    blurb: "Custom dashboards, attribution.",
    credentials: [
      { label: "Google Analytics 4", action: "Add as an Editor", inbox: INBOX_GOOGLE },
      { label: "Google Tag Manager", action: "Add as an Admin", inbox: INBOX_GOOGLE },
    ],
  },
];

/** Lookup helper. */
export function getService(id: IntakeService): ServiceConfig | undefined {
  return SERVICES.find((s) => s.id === id);
}

/** All inboxes used in the form, in display order. */
export const INBOXES: Array<{
  email: typeof INBOX_GOOGLE | typeof INBOX_SOCIAL;
  label: string;
  description: string;
}> = [
  {
    email: INBOX_GOOGLE,
    label: "Google Workspace tools",
    description: "Search Console, GA4, Google Ads, GTM, Google Business Profile, YouTube, hosting/DNS/CMS for Web & CRO",
  },
  {
    email: INBOX_SOCIAL,
    label: "Social media accounts",
    description: "Instagram, Facebook, LinkedIn, X, TikTok, Pinterest",
  },
];

/** Per-service "I'll send by" default: +5 business days. */
export function defaultSendByDate(): string {
  const d = new Date();
  let added = 0;
  while (added < 5) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) added += 1;
  }
  return d.toISOString().slice(0, 10);
}
