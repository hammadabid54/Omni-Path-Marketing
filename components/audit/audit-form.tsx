"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  url: z
    .string()
    .min(3, "Enter a valid URL")
    .refine(
      (v) => /^https?:\/\//i.test(v) || /^[a-z0-9-]+(\.[a-z0-9-]+)+/i.test(v),
      "Enter a valid URL like example.com",
    ),
  name: z.string().min(2, "Your name helps us personalize the report"),
  email: z.string().email("Enter a valid work email"),
  company: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function AuditForm() {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { url: "", name: "", email: "", company: "" },
  });

  async function onSubmit(values: FormValues) {
    setState("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      // Persist last result so the thank-you page can show it client-side.
      try {
        sessionStorage.setItem("audit_result", JSON.stringify(data));
      } catch {}
      setState("success");
      // Brief pause so the user sees the success state, then route.
      setTimeout(() => router.push("/audit/thank-you"), 600);
    } catch (e) {
      setState("error");
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-white/10 bg-white/2 p-6 md:p-8"
    >
      <div className="grid gap-5">
        <Field
          id="url"
          label="Website URL"
          required
          error={errors.url?.message}
          input={
            <input
              id="url"
              type="text"
              autoComplete="url"
              placeholder="example.com"
              aria-invalid={!!errors.url}
              className="input"
              {...register("url")}
            />
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            id="name"
            label="Your name"
            required
            error={errors.name?.message}
            input={
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Alex Chen"
                aria-invalid={!!errors.name}
                className="input"
                {...register("name")}
              />
            }
          />
          <Field
            id="email"
            label="Work email"
            required
            error={errors.email?.message}
            input={
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="alex@company.com"
                aria-invalid={!!errors.email}
                className="input"
                {...register("email")}
              />
            }
          />
        </div>

        <Field
          id="company"
          label="Company (optional)"
          error={errors.company?.message}
          input={
            <input
              id="company"
              type="text"
              autoComplete="organization"
              placeholder="Acme Co"
              className="input"
              {...register("company")}
            />
          }
        />

        <AnimatePresence>
          {state === "error" && (
            <motion.div
              key="err"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2 rounded-lg border border-rose-400/30 bg-rose-400/8 p-3 text-sm text-rose-200"
              role="alert"
            >
              <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </motion.div>
          )}
          {state === "success" && (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 rounded-lg border border-lime-400/30 bg-lime-400/8 p-3 text-sm text-lime-200"
            >
              <CheckCircle2 className="h-4 w-4" /> Audit complete. Loading your report…
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={state === "submitting" || state === "success" || !isValid}
          className="btn btn-primary btn-lg w-full sm:w-auto"
        >
          {state === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Running audit…
            </>
          ) : state === "success" ? (
            <>
              <CheckCircle2 className="h-4 w-4" /> Done
            </>
          ) : (
            <>
              Run my free audit <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="text-xs text-white/45">
          20-point audit · Delivered in 60s · No credit card · Unsubscribe anytime
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  input,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
        {required && <span aria-hidden className="text-lime-400 ml-1">*</span>}
      </label>
      {input}
      {error && (
        <p className="mt-1.5 text-xs text-rose-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
