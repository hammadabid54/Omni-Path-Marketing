import { z } from "zod";

/**
 * Env validation. We never throw at import time — only when values are *read*.
 * This lets `next build` succeed without a fully-populated .env.
 */
const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://omnipathmarketing.com"),
  NEXT_PUBLIC_CALCOM_URL: z.string().url().default("https://cal.com/omnipath"),
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().default("omnipathmarketing.com"),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().email().default("hello@omnipathmarketing.com"),
  RESEND_NOTIFY_EMAIL: z.string().email().default("team@omnipathmarketing.com"),
  NOTION_API_KEY: z.string().optional(),
  NOTION_LEADS_DB_ID: z.string().optional(),
});

type Env = z.infer<typeof envSchema>;

let cached: Env | null = null;

export function env(): Env {
  if (cached) return cached;
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_CALCOM_URL: process.env.NEXT_PUBLIC_CALCOM_URL,
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_NOTIFY_EMAIL: process.env.RESEND_NOTIFY_EMAIL,
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    NOTION_LEADS_DB_ID: process.env.NOTION_LEADS_DB_ID,
  });
  if (!parsed.success) {
    // Soft-fail with safe defaults; surface warning once.
    if (process.env.NODE_ENV !== "test") {
      console.warn("[env] validation issues:", parsed.error.flatten().fieldErrors);
    }
    cached = envSchema.parse({});
    return cached;
  }
  cached = parsed.data;
  return cached;
}

/** True when Notion CRM is configured. */
export function notionEnabled(): boolean {
  const e = env();
  return Boolean(e.NOTION_API_KEY && e.NOTION_LEADS_DB_ID);
}

/** True when Resend transactional email is configured. */
export function resendEnabled(): boolean {
  return Boolean(env().RESEND_API_KEY);
}
