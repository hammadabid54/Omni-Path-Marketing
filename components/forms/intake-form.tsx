"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  Lock,
  XCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { LinkButton } from "@/components/ui/button";
import { intakeSchema, INTAKE_SERVICES, BUDGETS, COMM_CHANNELS, TIMEZONES, type IntakeFormValues } from "@/lib/intake-schema";
import { INBOX_GOOGLE, INBOX_SOCIAL, INBOXES, defaultSendByDate, getService } from "@/lib/intake-services";
import { turnstileEnabled } from "@/lib/env-client";

const STEPS = [
  { id: 0, title: "Business basics", short: "About you" },
  { id: 1, title: "Goals & context", short: "What you need" },
  { id: 2, title: "Services", short: "What we ship" },
  { id: 3, title: "Credentials handoff", short: "Access" },
  { id: 4, title: "Logistics", short: "How we work" },
  { id: 5, title: "Legal & sign", short: "NDA + DPA" },
] as const;

export function IntakeForm({ token }: { token: string }) {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [turnOk, setTurnOk] = useState(false);
  const [hasTurnstile, setHasTurnstile] = useState(false);

  const defaultSendBy = useMemo(() => defaultSendByDate(), []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<IntakeFormValues>({
    resolver: zodResolver(intakeSchema),
    mode: "onChange",
    defaultValues: {
      businessName: "",
      contactName: "",
      contactRole: "",
      contactEmail: "",
      contactPhone: "",
      timezone: "UTC+5",
      websiteUrl: "",
      industry: "",
      geographicMarkets: "",
      topCompetitors: "",
      primaryGoal90d: "",
      biggestChallenge: "",
      idealCustomer: "",
      monthlyBudget: "Not sure yet",
      toolsInUse: "",
      heardFrom: "",
      services: [],
      credentialsPlan: {},
      projectStartDate: "",
      commChannel: "Email",
      invoicingEmail: "",
      billingAddress: "",
      poNumber: "",
      anythingElse: "",
      ndaAccepted: false,
      dpaAccepted: false,
      signature: "",
      turnstileToken: "",
    },
  });

  // Load Turnstile script lazily (only on the final step, to avoid
  // loading on every step).
  useEffect(() => {
    if (step !== 5) return;
    const enabled = turnstileEnabled();
    setHasTurnstile(enabled);
    if (!enabled) {
      setTurnOk(true); // skip — server will skip if secret is also missing
      return;
    }
    if (document.getElementById("cf-turnstile-script")) {
      return;
    }
    const s = document.createElement("script");
    s.id = "cf-turnstile-script";
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";
    s.async = true;
    s.defer = true;
    (window as unknown as { onTurnstileLoad: () => void }).onTurnstileLoad = () => {
      const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
      if (!siteKey) return;
      const widgetId = (window as unknown as { turnstile: { render: (el: HTMLElement, opts: Record<string, unknown>) => string } }).turnstile.render(
        document.getElementById("turnstile-widget") as HTMLElement,
        {
          sitekey: siteKey,
          callback: (token: string) => {
            setValue("turnstileToken", token, { shouldDirty: true });
            setTurnOk(true);
          },
          "expired-callback": () => {
            setValue("turnstileToken", "", { shouldDirty: true });
            setTurnOk(false);
          },
          theme: "dark",
        },
      );
      (window as unknown as { __turnstileWidgetId?: string }).__turnstileWidgetId = widgetId;
    };
    document.body.appendChild(s);
  }, [step, setValue]);

  const selectedServices = watch("services") ?? [];
  const credentialsPlan = watch("credentialsPlan") ?? {};
  const watchedAll = watch();

  // Update credentialsPlan entries for newly-selected services.
  useEffect(() => {
    const plan = { ...(watchedAll.credentialsPlan ?? {}) };
    let changed = false;
    for (const sid of selectedServices) {
      if (!plan[sid]) {
        plan[sid] = { sendBy: defaultSendBy, notes: "" };
        changed = true;
      }
    }
    // Prune plan entries for unselected services.
    for (const sid of Object.keys(plan)) {
      if (!selectedServices.includes(sid as IntakeFormValues["services"][number])) {
        delete plan[sid];
        changed = true;
      }
    }
    if (changed) setValue("credentialsPlan", plan, { shouldDirty: true });
  }, [selectedServices, defaultSendBy, setValue, watchedAll.credentialsPlan]);

  const fieldsForStep = (s: number): (keyof IntakeFormValues)[] => {
    switch (s) {
      case 0:
        return ["businessName", "contactName", "contactRole", "contactEmail", "contactPhone", "timezone", "websiteUrl", "industry", "geographicMarkets", "topCompetitors"];
      case 1:
        return ["primaryGoal90d", "biggestChallenge", "idealCustomer", "monthlyBudget", "toolsInUse", "heardFrom"];
      case 2:
        return ["services"];
      case 3:
        return ["credentialsPlan"];
      case 4:
        return ["projectStartDate", "commChannel", "invoicingEmail", "billingAddress", "poNumber", "anythingElse"];
      case 5:
        return ["ndaAccepted", "dpaAccepted", "signature"];
      default:
        return [];
    }
  };

  const next = async () => {
    const ok = await trigger(fieldsForStep(step) as never);
    if (ok) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  async function onSubmit(values: IntakeFormValues) {
    setState("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, token }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Submission failed. Please try again.");
      }
      setState("success");
    } catch (e) {
      setState("error");
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong.");
    }
  }

  /**
   * Called by react-hook-form when the user clicks Submit and validation
   * fails. We figure out which step the first error is on, jump there,
   * and show a banner so the user knows what to fix.
   */
  function onInvalid(errors: Record<string, unknown>) {
    // Build a flat list of field names that have errors. We then check each
    // step in order — the first step that owns a failing field is the one
    // we jump to.
    const failingFields = Object.keys(errors);
    for (let s = 0; s < STEPS.length; s++) {
      const stepFields = fieldsForStep(s) as string[];
      if (failingFields.some((f) => stepFields.includes(f))) {
        setStep(s);
        break;
      }
    }
    setState("error");
    setErrorMsg(
      `Some fields need attention. We jumped you back to the first step that needs a fix. (${failingFields.length} field${failingFields.length === 1 ? "" : "s"}.)`,
    );
    // Scroll the error banner into view.
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-lime-400/30 bg-lime-400/5 p-8 text-center"
        role="status"
      >
        <CheckCircle2 className="h-10 w-10 text-lime-400 mx-auto" />
        <h3 className="mt-3 text-2xl font-semibold text-white">Intake received.</h3>
        <p className="mt-2 text-white/70 text-sm max-w-md mx-auto">
          We&apos;ve sent a recap to your contact email with the full credentials checklist. Send
          access by the dates you picked and we&apos;ll meet you on the kickoff call.
        </p>
        <p className="mt-4 text-xs text-white/45 max-w-md mx-auto">
          Reference: <span className="font-mono text-lime-400">{token}</span>
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      noValidate
      className="rounded-2xl border border-white/10 bg-white/2 p-6 md:p-8"
    >
      {/* Progress bar */}
      <ol className="mb-8 flex flex-wrap gap-2" aria-label="Form progress">
        {STEPS.map((s) => {
          const idx = s.id;
          const isActive = idx === step;
          const isDone = idx < step;
          return (
            <li
              key={s.id}
              className={
                "flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors " +
                (isActive
                  ? "bg-lime-400 text-[#0a0a0f]"
                  : isDone
                  ? "bg-lime-400/15 text-lime-400"
                  : "bg-white/5 text-white/55")
              }
              aria-current={isActive ? "step" : undefined}
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/30 text-[10px] font-semibold">
                {isDone ? <Check className="h-3 w-3" /> : idx + 1}
              </span>
              <span className="hidden sm:inline">{s.short}</span>
            </li>
          );
        })}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -8 }}
          transition={{ duration: 0.18 }}
        >
          {step === 0 && (
            <Section title="Tell us about your business" subhead="The basics. Plain English.">
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="businessName" label="Business / company name" required error={errors.businessName?.message}>
                  <input id="businessName" type="text" className="input" {...register("businessName")} />
                </Field>
                <Field id="websiteUrl" label="Website" required error={errors.websiteUrl?.message}>
                  <input id="websiteUrl" type="text" placeholder="example.com" className="input" {...register("websiteUrl")} />
                </Field>
                <Field id="contactName" label="Primary contact name" required error={errors.contactName?.message}>
                  <input id="contactName" type="text" autoComplete="name" className="input" {...register("contactName")} />
                </Field>
                <Field id="contactRole" label="Role / title" required error={errors.contactRole?.message}>
                  <input id="contactRole" type="text" placeholder="e.g. Marketing Director" className="input" {...register("contactRole")} />
                </Field>
                <Field id="contactEmail" label="Contact email" required error={errors.contactEmail?.message}>
                  <input id="contactEmail" type="email" autoComplete="email" className="input" {...register("contactEmail")} />
                </Field>
                <Field id="contactPhone" label="Contact phone" required error={errors.contactPhone?.message}>
                  <input id="contactPhone" type="tel" autoComplete="tel" className="input" {...register("contactPhone")} />
                </Field>
                <Field id="timezone" label="Timezone" required error={errors.timezone?.message}>
                  <select id="timezone" className="select" {...register("timezone")}>
                    {TIMEZONES.map((tz) => (
                      <option key={tz} value={tz}>{tz}</option>
                    ))}
                  </select>
                </Field>
                <Field id="industry" label="Industry / vertical" required error={errors.industry?.message}>
                  <input id="industry" type="text" placeholder="e.g. Dental, SaaS, e-com" className="input" {...register("industry")} />
                </Field>
                <div className="md:col-span-2">
                  <Field id="geographicMarkets" label="Geographic markets you serve" required error={errors.geographicMarkets?.message}>
                    <input id="geographicMarkets" type="text" placeholder="e.g. North America, ANZ, EU" className="input" {...register("geographicMarkets")} />
                  </Field>
                </div>
                <div className="md:col-span-2">
                  <Field id="topCompetitors" label="Top 3 competitors (optional)">
                    <textarea id="topCompetitors" rows={2} className="textarea" placeholder="One per line is fine" {...register("topCompetitors")} />
                  </Field>
                </div>
              </div>
            </Section>
          )}

          {step === 1 && (
            <Section title="Goals & context" subhead="What success looks like for you, in your words.">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Field id="primaryGoal90d" label="Primary goal for the next 90 days" required error={errors.primaryGoal90d?.message}>
                    <textarea id="primaryGoal90d" rows={3} className="textarea" placeholder="e.g. Hit 50 inbound demos/mo from organic" {...register("primaryGoal90d")} />
                  </Field>
                </div>
                <div className="md:col-span-2">
                  <Field id="biggestChallenge" label="Biggest marketing challenge right now" required error={errors.biggestChallenge?.message}>
                    <textarea id="biggestChallenge" rows={3} className="textarea" placeholder="e.g. CAC doubled in the last quarter" {...register("biggestChallenge")} />
                  </Field>
                </div>
                <div className="md:col-span-2">
                  <Field id="idealCustomer" label="Describe your ideal customer" required error={errors.idealCustomer?.message}>
                    <textarea id="idealCustomer" rows={3} className="textarea" placeholder="Role, company size, geography, pain point" {...register("idealCustomer")} />
                  </Field>
                </div>
                <Field id="monthlyBudget" label="Monthly marketing budget" required error={errors.monthlyBudget?.message}>
                  <select id="monthlyBudget" className="select" {...register("monthlyBudget")}>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </Field>
                <div className="md:col-span-2">
                  <Field id="toolsInUse" label="Tools / platforms already in use (optional)">
                    <textarea id="toolsInUse" rows={2} className="textarea" placeholder="e.g. HubSpot, Klaviyo, Ahrefs, GA4, Meta Ads" {...register("toolsInUse")} />
                  </Field>
                </div>
                <Field id="heardFrom" label="How did you hear about us? (optional)">
                  <input id="heardFrom" type="text" className="input" placeholder="Referral, Google, LinkedIn…" {...register("heardFrom")} />
                </Field>
              </div>
            </Section>
          )}

          {step === 2 && (
            <Section title="Which services are you signing up for?" subhead="Pick one or more. We'll tailor the credentials checklist to your selection.">
              <fieldset>
                <legend className="sr-only">Services</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {INTAKE_SERVICES.map((s) => {
                    const active = selectedServices.includes(s.id);
                    return (
                      <label
                        key={s.id}
                        className={
                          "cursor-pointer rounded-xl border p-4 transition-colors " +
                          (active
                            ? "border-lime-400 bg-lime-400/5"
                            : "border-white/10 bg-white/2 hover:border-white/20")
                        }
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={active}
                          onChange={() => {
                            const next = active
                              ? selectedServices.filter((x) => x !== s.id)
                              : [...selectedServices, s.id];
                            setValue("services", next, { shouldValidate: true, shouldDirty: true });
                          }}
                        />
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold text-white">{s.label}</div>
                            <div className="mt-1 text-xs text-white/55">{s.blurb}</div>
                          </div>
                          <div
                            className={
                              "h-5 w-5 rounded-md border flex items-center justify-center " +
                              (active ? "border-lime-400 bg-lime-400" : "border-white/20")
                            }
                          >
                            {active && <Check className="h-3 w-3 text-[#0a0a0f]" />}
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
                {errors.services && (
                  <p className="mt-3 text-sm text-rose-300" role="alert">
                    {errors.services.message}
                  </p>
                )}
              </fieldset>
            </Section>
          )}

          {step === 3 && (
            <Section
              title="Credentials handoff"
              subhead="Based on your services, here's what to send — and to which inbox. We don't ask for credentials in this form (more secure that way)."
            >
              {INBOXES.map((box) => (
                <div
                  key={box.email}
                  className="rounded-xl border border-white/8 bg-white/2 p-4 mb-4"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-lime-400 font-semibold">
                        {box.label}
                      </div>
                      <a href={`mailto:${box.email}`} className="text-sm font-mono text-white hover:text-lime-400">
                        {box.email}
                      </a>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-white/55">{box.description}</p>
                </div>
              ))}

              {selectedServices.length === 0 ? (
                <p className="text-sm text-white/55 italic">Pick at least one service in the previous step to see your tailored checklist.</p>
              ) : (
                <div className="mt-4 space-y-4">
                  {selectedServices.map((sid) => {
                    const svc = getService(sid);
                    if (!svc) return null;
                    const plan = credentialsPlan[sid] ?? { sendBy: defaultSendBy, notes: "" };
                    return (
                      <div
                        key={sid}
                        className="rounded-xl border border-white/8 bg-[#0d0d14] p-4"
                      >
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <div>
                            <div className="text-sm font-semibold text-white">{svc.label}</div>
                            <div className="mt-0.5 text-[11px] text-white/45">{svc.blurb}</div>
                          </div>
                        </div>

                        {svc.credentials.length > 0 ? (
                          <ul className="mt-3 space-y-1.5 text-xs">
                            {svc.credentials.map((c, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-white/75">
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-lime-400 shrink-0" />
                                <span>
                                  <strong className="text-white/90">{c.label}</strong> — {c.action}
                                  <span className="ml-1 text-white/40">→ {c.inbox}</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-3 text-xs text-white/55 italic">No credentials needed — kickoff call only.</p>
                        )}

                        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_2fr]">
                          <Field id={`sendBy-${sid}`} label="I will send by">
                            <input
                              id={`sendBy-${sid}`}
                              type="date"
                              className="input"
                              min={new Date().toISOString().slice(0, 10)}
                              {...register(`credentialsPlan.${sid}.sendBy` as const)}
                            />
                          </Field>
                          <Field id={`notes-${sid}`} label="Notes (optional)">
                            <input
                              id={`notes-${sid}`}
                              type="text"
                              placeholder='e.g. "We don&apos;t have a Google Ads account yet"'
                              className="input"
                              {...register(`credentialsPlan.${sid}.notes` as const)}
                            />
                          </Field>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </Section>
          )}

          {step === 4 && (
            <Section title="Logistics" subhead="How we work together after kickoff.">
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="projectStartDate" label="Desired project start date" required error={errors.projectStartDate?.message}>
                  <input id="projectStartDate" type="date" className="input" {...register("projectStartDate")} />
                </Field>
                <Field id="commChannel" label="Preferred communication channel" required error={errors.commChannel?.message}>
                  <select id="commChannel" className="select" {...register("commChannel")}>
                    {COMM_CHANNELS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field id="invoicingEmail" label="Invoicing email" required error={errors.invoicingEmail?.message}>
                  <input id="invoicingEmail" type="email" className="input" {...register("invoicingEmail")} />
                </Field>
                <Field id="poNumber" label="PO # (if required)">
                  <input id="poNumber" type="text" className="input" {...register("poNumber")} />
                </Field>
                <div className="md:col-span-2">
                  <Field id="billingAddress" label="Billing address" required error={errors.billingAddress?.message}>
                    <textarea id="billingAddress" rows={2} className="textarea" {...register("billingAddress")} />
                  </Field>
                </div>
                <div className="md:col-span-2">
                  <Field id="anythingElse" label="Anything else we should know? (optional)">
                    <textarea id="anythingElse" rows={3} className="textarea" {...register("anythingElse")} />
                  </Field>
                </div>
              </div>
            </Section>
          )}

          {step === 5 && (
            <Section title="Legal & sign" subhead="The last step. Two agreements to acknowledge.">
              <div className="space-y-4">
                <LegalBlock
                  title="Mutual NDA"
                  body={`Omni Path Marketing and the client agree to keep all information shared during this engagement confidential, including credentials, deliverables, internal communications, and any sensitive data. This NDA is mutual and survives the termination of the engagement for 2 years.`}
                  checked={watch("ndaAccepted") === true}
                  onChange={(v) => setValue("ndaAccepted", v, { shouldValidate: true, shouldDirty: true })}
                  error={errors.ndaAccepted?.message}
                  id="nda"
                />
                <LegalBlock
                  title="Data Processing Agreement (GDPR / global)"
                  body={`Omni Path Marketing processes client data only as needed to deliver the services. We do not sell or share client data with third parties except as required to deliver the services (e.g., submitting work to Google, Meta, etc.) or as required by law. Full DPA available on request.`}
                  checked={watch("dpaAccepted") === true}
                  onChange={(v) => setValue("dpaAccepted", v, { shouldValidate: true, shouldDirty: true })}
                  error={errors.dpaAccepted?.message}
                  id="dpa"
                />

                <Field id="signature" label="Type your full name to sign" required error={errors.signature?.message}>
                  <input
                    id="signature"
                    type="text"
                    className="input font-serif italic"
                    placeholder="Your full name"
                    {...register("signature")}
                  />
                </Field>

                <div className="rounded-xl border border-white/8 bg-[#0d0d14] p-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="text-[10px] uppercase tracking-widest text-white/45 font-semibold">
                      Anti-spam
                    </div>
                    {hasTurnstile ? (
                      turnOk ? (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-lime-400">
                          <Check className="h-3 w-3" /> Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-amber-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-300" /> Required
                        </span>
                      )
                    ) : null}
                  </div>
                  {hasTurnstile ? (
                    <div id="turnstile-widget" />
                  ) : (
                    <p className="text-xs text-white/45">
                      Anti-spam challenge not configured. (The form will still work — Turnstile is
                      optional during dev.)
                    </p>
                  )}
                </div>
              </div>
            </Section>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {state === "error" && (
          <motion.div
            key="err"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex items-start gap-2 rounded-lg border border-rose-400/30 bg-rose-400/8 p-3 text-sm text-rose-200"
            role="alert"
          >
            <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{errorMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={back}
          disabled={step === 0 || state === "submitting"}
          className="btn btn-ghost"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        {step < STEPS.length - 1 ? (
          <button type="button" onClick={next} className="btn btn-primary">
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={state === "submitting" || (hasTurnstile && !turnOk)}
            className="btn btn-primary btn-lg"
          >
            {state === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                <Lock className="h-4 w-4" /> Submit intake
              </>
            )}
          </button>
        )}
      </div>

      <p className="mt-4 text-xs text-white/45 flex items-center gap-1.5">
        <Lock className="h-3 w-3" />
        Private link · Single use · No public access · {hasTurnstile ? "Anti-spam enabled" : "No anti-spam (dev mode)"}
      </p>
    </form>
  );
}

/* =========================================================
   Small subcomponents
   ========================================================= */

function Section({ title, subhead, children }: { title: string; subhead?: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
      {subhead && <p className="mt-1 text-sm text-white/55">{subhead}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
        {required && <span aria-hidden className="text-lime-400 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-rose-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function LegalBlock({
  title,
  body,
  checked,
  onChange,
  error,
  id,
}: {
  title: string;
  body: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  id: string;
}) {
  return (
    <div
      className={
        "rounded-xl border p-4 transition-colors " +
        (checked ? "border-lime-400/40 bg-lime-400/5" : "border-white/8 bg-[#0d0d14]")
      }
    >
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-4 w-4 accent-lime-400"
        />
        <label htmlFor={id} className="flex-1 cursor-pointer">
          <div className="text-sm font-semibold text-white">{title}</div>
          <p className="mt-1 text-xs text-white/60 leading-relaxed">{body}</p>
        </label>
      </div>
      {error && (
        <p className="mt-2 ml-7 text-xs text-rose-300" role="alert">{error}</p>
      )}
    </div>
  );
}
