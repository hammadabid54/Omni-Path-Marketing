import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms governing your use of Omni Path Marketing's website and services. Plain English where we can.",
  path: "/terms",
  noindex: true,
});

export default function TermsPage() {
  return (
    <Section spacing="default" container="narrow">
      <div className="prose-legal">
        <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">Last updated: August 2026</p>
        <h1>Terms of Service</h1>
        <p>
          These Terms govern your use of Omni Path Marketing&apos;s website and services. By using the site or signing up for a service you agree to these Terms. We&apos;ve tried to keep them short and clear.
        </p>

        <h2>1. The service</h2>
        <p>
          Omni Path Marketing provides digital growth services: SEO, paid ads management, branding, web design, social media, email/lifecycle, analytics, and related services. Services may be purchased directly (done-for-you) or through a white-label partner program.
        </p>
        <p>Specific deliverables, timelines, and pricing are defined in your signed proposal, statement of work, or order form.</p>

        <h2>2. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site or services to violate any law or third-party right.</li>
          <li>Submit content that is unlawful, infringing, or malicious.</li>
          <li>Attempt to disrupt or reverse-engineer the site, audit tool, or any related service.</li>
          <li>Resell or redistribute our services or deliverables outside an authorized white-label arrangement.</li>
        </ul>

        <h2>3. Payment</h2>
        <p>
          Payment terms are Net 0 — invoices are charged on the 1st of each month. Accepted methods: credit card (Stripe), bank transfer. We do not charge setup fees. Late payment may pause delivery after 7 days.
        </p>

        <h2>4. Cancellations &amp; refunds</h2>
        <p>
          You may cancel any monthly service with 30 days&apos; notice, no penalty. Annual commitments can be cancelled for pro-rata refund of unused months. White-label partners may cancel per their partner agreement.
        </p>

        <h2>5. Intellectual property</h2>
        <p>
          You retain ownership of your brand, content, and data. We retain ownership of our tools, internal processes, and the underlying platform. Deliverables we create for you are licensed to you (or assigned, per your agreement) on full payment.
        </p>

        <h2>6. Confidentiality</h2>
        <p>
          We treat your business information as confidential and only share it with vetted subprocessors (hosting, email, CRM, payment) needed to deliver the service. White-label work is doubly protected: your client&apos;s data is invisible to us, and our relationship with you is invisible to them.
        </p>

        <h2>7. Warranties &amp; liability</h2>
        <p>
          We commit to delivering the services with reasonable care and skill. We do not guarantee specific search rankings, ad performance, or revenue outcomes — no agency honestly can. To the maximum extent permitted by law, our total liability is limited to the fees you paid us in the 3 months preceding the claim.
        </p>

        <h2>8. Indemnification</h2>
        <p>You agree to indemnify us against third-party claims arising from your content, brand, or instructions provided to us in the course of the service.</p>

        <h2>9. Termination</h2>
        <p>
          We may suspend or terminate access for breach of these Terms, non-payment, or conduct that creates risk for us or other clients. We&apos;ll always try to resolve issues before terminating.
        </p>

        <h2>10. Changes</h2>
        <p>
          We may update these Terms from time to time. Material changes will be communicated by email. Continued use of the service after the effective date constitutes acceptance.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which Omni Path Marketing is registered, without regard to conflict-of-law principles. Disputes will be resolved through binding arbitration where permitted.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about these Terms? Email <a href="mailto:contact@omnipathmarketing.com">contact@omnipathmarketing.com</a>.
        </p>
      </div>
    </Section>
  );
}
