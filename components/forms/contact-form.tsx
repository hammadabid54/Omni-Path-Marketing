"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkButton } from "@/components/ui/button";

const schema = z.object({
  type: z.enum(["agency", "business"], { required_error: "Pick one" }),
  name: z.string().min(2, "Your name"),
  email: z.string().email("Valid email"),
  company: z.string().min(2, "Company or agency name"),
  website: z.string().optional(),
  phone: z.string().optional(),
  services: z.array(z.string()).optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  note: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const SERVICES = [
  "SEO",
  "Paid Ads",
  "Branding",
  "Web & CRO",
  "Social Media",
  "TikTok + LinkedIn",
  "Email & Lifecycle",
  "Analytics",
];

const BUDGETS = ["Under $2,000", "$2,000-5,000", "$5,000-15,000", "$15,000+", "Not sure yet"];

export function ContactForm({ initialType }: { initialType?: "agency" | "business" } = {}) {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { type: initialType ?? "business", services: [] },
  });

  const selectedServices = watch("services") ?? [];
  const type = watch("type");

  async function onSubmit(values: FormValues) {
    setState("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Submission failed. Please try again.");
      }
      setState("success");
    } catch (e) {
      setState("error");
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong.");
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
        <CheckCircle2 className="h-8 w-8 text-lime-400 mx-auto" />
        <h3 className="mt-3 text-xl font-semibold text-white">Got it. We&apos;ll reply within 4 hours.</h3>
        <p className="mt-2 text-white/65 text-sm">
          Check your inbox for a confirmation. In the meantime, want to skip the queue?
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/audit" variant="primary" size="md">
            Run a free audit
          </LinkButton>
          <LinkButton href="/pricing" variant="ghost" size="md">
            See pricing
          </LinkButton>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-white/10 bg-white/2 p-6 md:p-8"
    >
      <fieldset>
        <legend className="label">I&apos;m interested as a…</legend>
        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { v: "agency", t: "Agency (white-label)", s: "I resell marketing services" },
            { v: "business", t: "Business (direct)", s: "I need marketing for my brand" },
          ].map((opt) => {
            const selected = type === opt.v;
            return (
              <label
                key={opt.v}
                className={
                  "cursor-pointer rounded-xl border p-4 transition-colors " +
                  (selected
                    ? "border-lime-400 bg-lime-400/5"
                    : "border-white/10 bg-white/2 hover:border-white/20")
                }
              >
                <input
                  type="radio"
                  value={opt.v}
                  className="sr-only"
                  checked={selected}
                  onChange={() => setValue("type", opt.v as "agency" | "business")}
                />
                <div className="text-sm font-semibold text-white">{opt.t}</div>
                <div className="mt-1 text-xs text-white/55">{opt.s}</div>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name?.message}>
          <input id="name" type="text" autoComplete="name" className="input" {...register("name")} />
        </Field>
        <Field id="email" label="Work email" required error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className="input" {...register("email")} />
        </Field>
        <Field id="company" label={type === "agency" ? "Agency" : "Company"} required error={errors.company?.message}>
          <input id="company" type="text" autoComplete="organization" className="input" {...register("company")} />
        </Field>
        <Field id="website" label="Website (optional)" error={errors.website?.message}>
          <input id="website" type="text" placeholder="example.com" className="input" {...register("website")} />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="label">Services you&apos;re interested in</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const active = selectedServices.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => {
                  const next = active
                    ? selectedServices.filter((x) => x !== s)
                    : [...selectedServices, s];
                  setValue("services", next, { shouldValidate: true, shouldDirty: true });
                }}
                className={
                  "pill cursor-pointer transition-colors " +
                  (active ? "pill-accent" : "hover:border-white/30")
                }
                aria-pressed={active}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field id="budget" label="Monthly budget">
          <select id="budget" className="select" {...register("budget")}>
            <option value="">Select…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field id="timeline" label="Timeline">
          <input id="timeline" type="text" placeholder="e.g. 30 days" className="input" {...register("timeline")} />
        </Field>
      </div>

      <div className="mt-6">
        <label htmlFor="note" className="label">Anything else? (optional)</label>
        <textarea id="note" className="textarea" rows={4} placeholder="Goals, current challenges, specific questions…" {...register("note")} />
      </div>

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

      <button
        type="submit"
        disabled={state === "submitting" || !isValid}
        className="btn btn-primary btn-lg mt-6 w-full sm:w-auto"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-3 text-xs text-white/45">Replies within 4 business hours · No spam, ever</p>
    </form>
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
