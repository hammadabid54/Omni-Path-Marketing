"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { BRAND_EMAIL } from "@/lib/seo";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(5, "Tell us a bit more"),
});

type FormData = z.infer<typeof schema>;

export function FooterContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "business",
          name: data.name,
          email: data.email,
          note: data.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      reset();
    } catch (err) {
      console.error("[footer contact] submit failed", err);
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/35 text-sm focus:border-lime-400 focus:outline-none focus:bg-white/8 transition";

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-xl border border-lime-400/30 bg-lime-400/5 p-5 flex items-start gap-3"
      >
        <CheckCircle2 className="h-5 w-5 text-lime-400 flex-shrink-0 mt-0.5" aria-hidden />
        <div>
          <p className="text-white font-medium">Message sent.</p>
          <p className="text-sm text-white/65 mt-1">
            We&apos;ll reply within 4 business hours. Want it faster?{" "}
            <a
              href={`mailto:${BRAND_EMAIL}`}
              className="text-lime-400 hover:underline"
            >
              Email us directly
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="footer-name" className="sr-only">
            Your name
          </label>
          <input
            id="footer-name"
            {...register("name")}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={errors.name ? "true" : "false"}
            className={inputClass}
          />
          {errors.name && (
            <p className="text-xs text-red-400 mt-1" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="footer-email" className="sr-only">
            Work email
          </label>
          <input
            id="footer-email"
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="Work email"
            aria-invalid={errors.email ? "true" : "false"}
            className={inputClass}
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="footer-message" className="sr-only">
          Message
        </label>
        <textarea
          id="footer-message"
          {...register("message")}
          rows={3}
          placeholder="How can we help? (services, timeline, goals…)"
          aria-invalid={errors.message ? "true" : "false"}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="text-xs text-red-400 mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
        <p className="text-xs text-white/40">
          Replies in &lt;4 business hours · We never share your info
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-lime-400 text-[#0a0a0f] font-semibold text-sm hover:bg-lime-300 active:scale-[0.98] transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden />
              Send message
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-400" role="alert">
          Something went wrong. Email{" "}
          <a
            href={`mailto:${BRAND_EMAIL}`}
            className="underline"
          >
            {BRAND_EMAIL}
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}
