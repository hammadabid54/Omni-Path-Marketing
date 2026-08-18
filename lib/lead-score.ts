/**
 * Lead scoring model (from PLAN.md §11).
 * Range: 0-120, with buckets hot / warm / cold.
 *
 *   - 70+  Hot   → call within 4h
 *   - 40-69 Warm → sequence
 *   - <40  Cold  → sequence only
 */
export interface LeadInput {
  email?: string;
  phone?: string;
  company?: string;
  agency?: string;
  services?: string[];
  budget?: string;
  timeline?: string;
  note?: string;
  submittedAudit?: boolean;
  agencyClients?: number;
  marketingSpend?: number;
}

export interface LeadScoreResult {
  score: number;
  bucket: "hot" | "warm" | "cold";
  signals: string[];
}

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com",
  "aol.com", "proton.me", "protonmail.com", "live.com", "msn.com",
  "me.com", "mail.com", "yandex.com", "gmx.com", "qq.com", "163.com",
]);

export function scoreLead(lead: LeadInput): LeadScoreResult {
  let score = 0;
  const signals: string[] = [];

  if (lead.submittedAudit) {
    score += 30;
    signals.push("audit-submitted");
  }

  if (lead.email) {
    const domain = lead.email.split("@")[1]?.toLowerCase() ?? "";
    if (domain && !FREE_EMAIL_DOMAINS.has(domain)) {
      score += 10;
      signals.push("work-email");
    }
  }

  if (lead.phone && lead.phone.trim().length >= 6) {
    score += 5;
    signals.push("phone");
  }

  if (lead.company || lead.agency) {
    score += 5;
    signals.push("company");
  }

  const servicesCount = lead.services?.length ?? 0;
  if (servicesCount >= 2) {
    score += 10;
    signals.push("multi-service");
  }

  const budget = (lead.budget ?? "").toLowerCase();
  if (
    budget.includes("15,000") ||
    budget.includes("15000") ||
    budget.includes("$15k") ||
    budget.includes("$15,000")
  ) {
    score += 20;
    signals.push("high-budget");
  } else if (
    budget.includes("5,000") ||
    budget.includes("5000") ||
    budget.includes("$5k") ||
    budget.includes("$5,000") ||
    budget.includes("10,000") ||
    budget.includes("10000")
  ) {
    score += 15;
    signals.push("mid-budget");
  } else if (budget.includes("2,000") || budget.includes("2000")) {
    score += 10;
    signals.push("low-budget");
  }

  if (lead.timeline && lead.timeline.trim().length > 0) {
    score += 10;
    signals.push("specific-timeline");
  }

  if ((lead.agencyClients ?? 0) >= 15) {
    score += 15;
    signals.push("agency-15plus");
  } else if ((lead.agencyClients ?? 0) >= 5) {
    score += 8;
    signals.push("agency-5plus");
  }

  if ((lead.marketingSpend ?? 0) >= 1000) {
    score += 10;
    signals.push("spend-1k-plus");
  }

  if (lead.note && lead.note.trim().length >= 50) {
    score += 5;
    signals.push("detailed-note");
  }

  const scoreCapped = Math.min(score, 120);
  const bucket: LeadScoreResult["bucket"] =
    scoreCapped >= 70 ? "hot" : scoreCapped >= 40 ? "warm" : "cold";

  return { score: scoreCapped, bucket, signals };
}
