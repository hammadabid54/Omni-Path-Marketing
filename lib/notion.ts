import { Client } from "@notionhq/client";
import { env, notionEnabled } from "./env";
import type { LeadScoreResult } from "./lead-score";

export interface NotionLeadInput {
  type: "audit" | "contact" | "partner";
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  url?: string;
  message?: string;
  services?: string[];
  budget?: string;
  timeline?: string;
  score: number;
  bucket: LeadScoreResult["bucket"];
  signals: string[];
  source?: string;
}

let cachedClient: Client | null = null;
function getClient() {
  if (cachedClient) return cachedClient;
  const key = env().NOTION_API_KEY;
  if (!key) return null;
  cachedClient = new Client({ auth: key });
  return cachedClient;
}

export async function pushLeadToNotion(lead: NotionLeadInput): Promise<{ ok: boolean; pageId?: string; reason?: string }> {
  if (!notionEnabled()) {
    console.warn("[notion] Not configured — skipping push for", lead.email);
    return { ok: false, reason: "not-configured" };
  }
  const client = getClient();
  const dbId = env().NOTION_LEADS_DB_ID;
  if (!client || !dbId) return { ok: false, reason: "missing-config" };

  try {
    const response = await client.pages.create({
      parent: { database_id: dbId },
      properties: {
        Name: {
          title: [{ text: { content: lead.name || lead.email } }],
        },
        Email: { email: lead.email },
        Type: { select: { name: lead.type } },
        Score: { number: lead.score },
        Bucket: { select: { name: lead.bucket } },
        Source: lead.source ? { rich_text: [{ text: { content: lead.source } }] } : { rich_text: [] },
        Company: lead.company ? { rich_text: [{ text: { content: lead.company } }] } : { rich_text: [] },
        URL: lead.url ? { url: lead.url } : { url: null },
        Phone: lead.phone ? { phone_number: lead.phone } : { phone_number: null },
        Services: lead.services?.length
          ? { multi_select: lead.services.map((s) => ({ name: s })) }
          : { multi_select: [] },
        Budget: lead.budget ? { select: { name: lead.budget } } : { select: null },
        Timeline: lead.timeline ? { rich_text: [{ text: { content: lead.timeline } }] } : { rich_text: [] },
        Signals: { multi_select: lead.signals.map((s) => ({ name: s })) },
        Message: lead.message ? { rich_text: [{ text: { content: lead.message.slice(0, 2000) } }] } : { rich_text: [] },
        Status: { select: { name: "New" } },
      },
    });
    return { ok: true, pageId: response.id };
  } catch (err) {
    console.error("[notion] push failed:", err);
    return { ok: false, reason: String(err) };
  }
}
