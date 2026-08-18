"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Your name"),
  email: z.string().email("Valid email"),
  agency: z.string().min(2, "Agency name"),
  website: z.string().optional(),
  phone: z.string().optional(),
  agencyClients: z.string().optional(),
  services: z.array(z.string()).min(1, "Pick at least one"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  note: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const SERVICES = ["SEO", "Paid Ads", "Branding", "Web & CRO", "Social Media", "Email & Lifecycle", "Analytics"];
const BUDGETS = ["Under $2,000", "$2,000-5,000", "$5,000-15,000", "$15,000+"];
const CLIENTS = ["1-4", "5-14", "15-39", "40+"];

export function PartnerForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { services: [] },
  });

  const servicesSelected = watch("services") ?? [];

  async function onSubmit(values: FormValues) {
    setState("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, type: "agency" }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Submission failed.");
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
        <h3 className="mt-3 text-xl font-semibold text-white">You&apos;re in. Partner manager will reach out within 4 hours.</h3>
        <p className="mt-2 text-white/65 text-sm">
          We&apos;ll send the partner kit, share next steps, and lock your onboarding window.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-2xl border border-white/10 bg-white/2 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="p-name" label="Name" required error={errors.name?.message}>
          <input id="p-name" type="text" autoComplete="name" className="input" {...register("name")} />
        </Field>
        <Field id="p-email" label="Work email" required error={errors.email?.message}>
          <input id="p-email" type="email" autoComplete="email" className="input" {...register("email")} />
        </Field>
        <Field id="p-agency" label="Agency" required error={errors.agency?.message}>
          <input id="p-agency" type="text" className="input" {...register("agency")} />
        </Field>
        <Field id="p-website" label="Agency website">
          <input id="p-website" type="text" placeholder="example.com" className="input" {...register("website")} />
        </Field>
        <Field id="p-phone" label="Phone (optional)">
          <input id="p-phone" type="tel" autoComplete="tel" className="input" {...register("phone")} />
        </Field>
        <Field id="p-clients" label="# of active clients">
          <select id="p-clients" className="select" {...register("agencyClients")}>
            <option value="">Select…</option>
            {CLIENTS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="label">Services you want to resell</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const active = servicesSelected.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => {
                  const next = active ? servicesSelected.filter((x) => x !== s) : [...servicesSelected, s];
                  setValue("services", next, { shouldValidate: true, shouldDirty: true });
                }}
                className={"pill cursor-pointer transition-colors " + (active ? "pill-accent" : "hover:border-white/30")}
                aria-pressed={active}
              >
                {s}
              </button>
            );
          })}
        </div>
        {errors.services && (
          <p className="mt-2 text-xs text-rose-300" role="alert">
            {errors.services.message as string}
          </p>
        )}
      </fieldset>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field id="p-budget" label="Monthly white-label budget">
          <select id="p-budget" className="select" {...register("budget")}>
            <option value="">Select…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
        <Field id="p-timeline" label="Timeline">
          <input id="p-timeline" type="text" placeholder="e.g. 30 days" className="input" {...register("timeline")} />
        </Field>
      </div>

      <div className="mt-6">
        <label htmlFor="p-note" className="label">Anything specific? (optional)</label>
        <textarea id="p-note" className="textarea" rows={4} placeholder="Niches, current pain, your goals…" {...register("note")} />
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

      <button type="submit" disabled={state === "submitting"} className="btn btn-primary btn-lg mt-6 w-full sm:w-auto">
        {state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Become a partner <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
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
