import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Omni Path Marketing collects, uses, and protects your information. Plain English, no legalese mazes.",
  path: "/privacy-policy",
  noindex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <Section spacing="default" container="narrow">
      <div className="prose-legal">
        <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">Last updated: August 2026</p>
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy explains how Omni Path Marketing (&ldquo;Omni Path&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and protects information when you use our website, tools, and services. We try to keep this short, honest, and in plain English.
        </p>

        <h2>1. What we collect</h2>
        <p>We collect three kinds of information:</p>
        <ul>
          <li><strong>Information you give us</strong> — name, email, company, phone, the details you submit on forms (audit tool, contact, partner signup).</li>
          <li><strong>Information from your use</strong> — pages viewed, links clicked, referrer, device type. We use Plausible Analytics for this, which is privacy-friendly and does not track you across sites.</li>
          <li><strong>Information from third parties</strong> — payment processors (Stripe), CRM (Notion), email (Resend). Each is governed by their own privacy policy.</li>
        </ul>

        <h2>2. What we use it for</h2>
        <ul>
          <li>To deliver the services you signed up for (audit reports, proposals, partner onboarding).</li>
          <li>To send transactional emails (audit delivery, contact confirmations, partner kit).</li>
          <li>To send occasional marketing emails (max ~1 per week) — you can unsubscribe any time.</li>
          <li>To improve the website and our service.</li>
        </ul>
        <p>We do not sell your information. Ever.</p>

        <h2>3. Where we store it</h2>
        <p>
          Data is stored with vetted third-party providers: Vercel (hosting), Resend (email), Notion (CRM), Stripe (payments). Each provider is GDPR-aware. We retain lead data for as long as you are an active client, plus 24 months, unless you ask us to delete it sooner.
        </p>

        <h2>4. Cookies</h2>
        <p>
          We use a single first-party cookie for session tracking (so the audit tool can show your result). Plausible Analytics does not use cookies. No third-party advertising cookies.
        </p>

        <h2>5. Your rights</h2>
        <p>You can ask us at any time to:</p>
        <ul>
          <li>Provide a copy of the data we hold about you</li>
          <li>Correct inaccurate data</li>
          <li>Delete your data</li>
          <li>Opt out of marketing emails (the unsubscribe link is in every email)</li>
        </ul>
        <p>Email <a href="mailto:hello@omnipathmarketing.com">hello@omnipathmarketing.com</a> — we reply within 4 business hours.</p>

        <h2>6. Children</h2>
        <p>Our services are not directed at children under 16. We do not knowingly collect data from children.</p>

        <h2>7. International transfers</h2>
        <p>
          We work with clients globally. Data may be processed in the United States, the European Economic Area, or other regions where our providers operate. By using our services you acknowledge this transfer.
        </p>

        <h2>8. Changes</h2>
        <p>If we update this policy, we&apos;ll post the change here and bump the &ldquo;Last updated&rdquo; date. Material changes will be announced by email if you&apos;re a client.</p>

        <h2>9. Contact</h2>
        <p>
          Omni Path Marketing · Fully remote · Working with clients globally
          <br />
          <a href="mailto:hello@omnipathmarketing.com">hello@omnipathmarketing.com</a>
        </p>
      </div>
    </Section>
  );
}
