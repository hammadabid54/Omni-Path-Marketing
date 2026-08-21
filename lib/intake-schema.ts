import { z } from "zod";
import { SERVICES } from "./intake-services";

/**
 * Intake form schema. Shared between client (react-hook-form + zodResolver)
 * and server (Zod safeParse) so the same rules apply in both places.
 *
 * Service ids are derived from the SERVICES config so the array literal
 * is the single source of truth.
 */
export const INTAKE_SERVICE_IDS = SERVICES.map((s) => s.id) as [
  (typeof SERVICES)[number]["id"],
  ...(typeof SERVICES)[number]["id"][]
];

export const TIMEZONES = [
  "UTC-12", "UTC-11", "UTC-10", "UTC-9", "UTC-8", "UTC-7", "UTC-6",
  "UTC-5", "UTC-4", "UTC-3", "UTC-2", "UTC-1", "UTC+0", "UTC+1", "UTC+2",
  "UTC+3", "UTC+4", "UTC+5", "UTC+5:30", "UTC+6", "UTC+7", "UTC+8",
  "UTC+9", "UTC+10", "UTC+11", "UTC+12",
] as const;

export const BUDGETS = [
  "Under $2,000 / mo",
  "$2,000-5,000 / mo",
  "$5,000-15,000 / mo",
  "$15,000+ / mo",
  "Project-based, not monthly",
  "Not sure yet",
] as const;

export const COMM_CHANNELS = ["Slack", "Email", "Calls", "WhatsApp"] as const;

export const intakeSchema = z.object({
  // Section 1 — Business basics
  businessName: z.string().min(2, "Business name").max(120),
  contactName: z.string().min(2, "Contact name").max(120),
  contactRole: z.string().min(2, "Role / title").max(120),
  contactEmail: z.string().email("Valid email"),
  contactPhone: z.string().min(5, "Phone").max(40),
  timezone: z.enum(TIMEZONES, { errorMap: () => ({ message: "Pick a timezone" }) }),
  websiteUrl: z
    .string()
    .min(2, "Website URL")
    .max(200)
    .refine(
      (v) => /^([a-z0-9-]+\.)+[a-z]{2,}/i.test(v.replace(/^https?:\/\//, "").replace(/\/$/, "")),
      "Use a real domain like example.com",
    ),
  industry: z.string().min(2, "Industry").max(120),
  geographicMarkets: z.string().min(2, "Geographic markets").max(200),
  topCompetitors: z.string().max(400).optional().default(""),

  // Section 2 — Goals & context
  primaryGoal90d: z.string().min(10, "Tell us your main goal").max(600),
  biggestChallenge: z.string().min(10, "What's the hardest part").max(600),
  idealCustomer: z.string().min(10, "Describe your ideal customer").max(600),
  monthlyBudget: z.enum(BUDGETS, { errorMap: () => ({ message: "Pick a budget" }) }),
  toolsInUse: z.string().max(800).optional().default(""),
  heardFrom: z.string().max(200).optional().default(""),

  // Section 3 — Services (multi-select)
  services: z
    .array(z.enum(INTAKE_SERVICE_IDS))
    .min(1, "Pick at least one service"),

  // Section 4 — Per-service credentials acknowledgment
  // Map of serviceId → { sendBy: 'YYYY-MM-DD', notes?: string }
  credentialsPlan: z
    .record(
      z.string(),
      z.object({
        sendBy: z.string().refine(
          (v) => /^\d{4}-\d{2}-\d{2}$/.test(v) && !isNaN(Date.parse(v)),
          "Pick a valid date",
        ),
        notes: z.string().max(500).optional().default(""),
      }),
    )
    .default({}),

  // Section 5 — Logistics
  projectStartDate: z.string().refine(
    (v) => /^\d{4}-\d{2}-\d{2}$/.test(v) && !isNaN(Date.parse(v)),
    "Pick a date",
  ),
  commChannel: z.enum(COMM_CHANNELS, { errorMap: () => ({ message: "Pick one" }) }),
  invoicingEmail: z.string().email("Valid billing email"),
  billingAddress: z.string().min(5, "Billing address").max(400),
  poNumber: z.string().max(60).optional().default(""),
  anythingElse: z.string().max(2000).optional().default(""),

  // Section 6 — Legal — boolean defaults so the form can render, with
  // a refinement that requires the value to be `true` on submit.
  ndaAccepted: z
    .boolean()
    .refine((v) => v === true, { message: "You must accept the NDA to continue" }),
  dpaAccepted: z
    .boolean()
    .refine((v) => v === true, { message: "You must accept the data processing agreement" }),
  signature: z.string().min(2, "Type your name to sign").max(120),

  // Anti-spam — server validates against Turnstile secret key.
  turnstileToken: z.string().optional(),
});

export type IntakeFormValues = z.infer<typeof intakeSchema>;

/** List of all valid service ids (re-exported for convenience). */
export const INTAKE_SERVICES = SERVICES;
