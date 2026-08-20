import Link from "next/link";
import { Mail } from "lucide-react";
import { FooterContactForm } from "@/components/forms/footer-contact-form";
import { SocialLinks } from "@/components/social/social-links";

const SERVICES = [
  { label: "SEO", href: "/services/seo" },
  { label: "Paid Ads", href: "/services/paid-ads" },
  { label: "Branding", href: "/services/branding" },
  { label: "Web & CRO", href: "/services/web-design" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "TikTok + LinkedIn", href: "/services/tiktok-linkedin-ads" },
  { label: "Email & Lifecycle", href: "/services/email-lifecycle" },
  { label: "Analytics", href: "/services/analytics" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Tools", href: "/tools" },
  { label: "Samples", href: "/samples" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const AUDIENCE = [
  { label: "For Agencies", href: "/for-agencies" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "White-Label SEO", href: "/white-label-seo" },
  { label: "Automated SEO", href: "/automated-seo" },
  { label: "Pricing", href: "/pricing" },
];

const LEGAL = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a0f] mt-24">
      <div className="container-page py-16">
        {/* Get in touch — contact form on every page */}
        <div className="grid gap-10 lg:grid-cols-5 pb-12 mb-12 border-b border-white/8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-white font-semibold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-lime-400 text-[#0a0a0f] font-bold">
                O
              </span>
              Omni Path
            </Link>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl text-white leading-[1.1]">
              Get in touch.{" "}
              <span className="italic text-lime-400">We reply fast.</span>
            </h2>
            <p className="mt-3 max-w-sm text-sm text-white/65">
              Tell us what you need — white-label fulfillment, a growth audit, a brand
              sprint. A human reads every message and replies within 4 business hours.
            </p>
            <a
              href="mailto:hello@omnipathmarketing.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-lime-400"
            >
              <Mail className="h-4 w-4" /> hello@omnipathmarketing.com
            </a>
            <p className="mt-4 text-xs text-white/45">Fully remote · Working with clients globally</p>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45 mb-3">
                Follow us
              </h3>
              <SocialLinks variant="compact" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <FooterContactForm />
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Services" items={SERVICES} />
          <FooterColumn title="For you" items={AUDIENCE} />
          <FooterColumn title="Company" items={COMPANY} />
          <div className="flex flex-col gap-6">
            <FooterColumn title="Legal" items={LEGAL} />
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/8 pt-6 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Omni Path Marketing. All rights reserved.</p>
          <p>USD pricing default · AUD/GBP/EUR on request</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45 mb-3">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-sm text-white/75 hover:text-lime-400">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
