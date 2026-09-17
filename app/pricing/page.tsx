import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { PricingExplorer } from "@/components/sections/pricing-explorer";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { pricingFaq } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
export const metadata: Metadata = buildMetadata({title:"Marketing Pricing for Businesses & Agencies",description:"Compare monthly marketing plans for your business or white-label agency. Clear service scope, no setup fees, and volume pricing for partners.",path:"/pricing"});
const TERMS = [
  { term: "Contract length", value: "Month-to-month" },
  { term: "Annual commit discount", value: "20% off" },
  { term: "Payment terms", value: "Net 0 (charged on 1st of month)" },
  { term: "Setup fees", value: "$0" },
  { term: "Cancellation", value: "30-day notice, no penalty" },
  { term: "Refunds", value: "Pro-rata for unused months" },
  { term: "Ad spend", value: "Billed separately, not included in management fees" },
];

export default async function PricingPage({searchParams}: {searchParams: Promise<{audience?: string}>}) {
 const params = await searchParams;
 return <>
 <Hero eyebrow="Transparent pricing" title={<>The right support.<br/><em className="font-serif text-blue-600">A clear monthly price.</em></>} subhead="Choose your audience, select a service, and compare the scope. No setup fees. USD pricing with 20% off annual billing." />
 <PricingExplorer initialAudience={params.audience === "agency" ? "agency" : "business"} />
 <Section><h2 className="text-3xl font-semibold mb-6">Know what you’re signing up for.</h2><div className="overflow-x-auto rounded-2xl border border-blue-100"><table className="w-full text-sm text-left"><caption className="sr-only">Payment terms</caption><tbody>{TERMS.map(t=><tr key={t.term} className="border-b border-blue-50"><th scope="row" className="p-4 font-medium">{t.term}</th><td className="p-4 text-slate-600">{t.value}</td></tr>)}</tbody></table></div></Section>
 <FaqSection eyebrow="FAQ" title="Pricing questions." items={pricingFaq}/>
 <CtaSection title="Need a tailored scope?" subhead="Tell us what you want to achieve. We’ll help you choose a service and agree the deliverables before work begins." primaryCta={{label:"Request a proposal",href:"/contact#enquiry"}} />
 </>;
}
