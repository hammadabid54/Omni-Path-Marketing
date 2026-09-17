"use client";

import { useState } from "react";
import { Check, Building2, Layers } from "lucide-react";
import { DIRECT_SERVICES, WL_SEO_TIERS, WL_SEO_OFFERING, WL_OTHER_SERVICES } from "@/content/pricing";
import { LinkButton } from "@/components/ui/button";
import { ServiceVisual } from "./service-visual";

export function PricingExplorer({ initialAudience = "business" }: { initialAudience?: "agency" | "business" }) {
  const [audience, setAudience] = useState(initialAudience);
  const [serviceId, setServiceId] = useState("seo");
  const service = DIRECT_SERVICES.find(s => s.id === serviceId) ?? DIRECT_SERVICES[0];
  const other = WL_OTHER_SERVICES.find(s => s.id === serviceId);
  const agencyFeatures = serviceId === "seo" ? WL_SEO_OFFERING : [other?.description ?? "Campaign scope agreed in your proposal.", "Delivery under your brand", "Monthly reporting", "The same agreed scope at every volume tier"];
  const plans = audience === "agency" ? WL_SEO_TIERS.map(t => ({ name:t.id, price:t.price+t.per, popular:t.popular, detail:t.min === "1 client" ? "1–4 clients" : t.min === "5+ clients" ? "5–14 clients" : t.min, features:agencyFeatures })) : service.tiers.map(t => ({ name:t.id, price:t.price, popular:t.popular, detail:service.name, features:t.features }));
  return <section id="plans" className="section"><div className="container-page">
    <h2 className="text-3xl font-semibold tracking-tight mb-6">Find your fit.</h2>
    <div className="pricing-switch" role="group" aria-label="Pricing audience">
      <button aria-pressed={audience === "business"} onClick={()=>setAudience("business")}><Building2 className="inline mr-2" size={18} aria-hidden="true" />For my business</button>
      <button aria-pressed={audience === "agency"} onClick={()=>{setAudience("agency");setServiceId("seo");}}><Layers className="inline mr-2" size={18} aria-hidden="true" />For my agency</button>
    </div>
    <div className="grid gap-6 md:grid-cols-[1fr_240px] items-center mb-8">
      <div><label htmlFor="pricing-service" className="font-medium text-sm">Choose a service</label><select className="pricing-select" id="pricing-service" value={serviceId} onChange={e=>setServiceId(e.target.value)}>{DIRECT_SERVICES.filter(s=>audience === "business" || s.id === "seo" || WL_OTHER_SERVICES.some(w=>w.id===s.id)).map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select><p className="text-slate-600 max-w-xl">{audience === "agency" ? "Your client relationship. Our delivery team. Volume changes your price, not the agreed service scope." : "Choose the level of support your business needs. These are your direct monthly service fees."}</p></div>
      <div className="hidden md:block"><ServiceVisual topic={serviceId} compact /></div>
    </div>
    <div className="grid gap-4 md:grid-cols-3" aria-live="polite">
      {plans.map(p=><article key={`${audience}-${serviceId}-${p.name}`} className={`bento flex flex-col ${p.popular ? "border-blue-400 bg-blue-50/50" : ""}`}>
        <div className="flex items-center justify-between"><h3 className="text-xl font-semibold">{p.name}</h3>{p.popular && <span className="text-xs text-blue-700">Popular</span>}</div>
        <p className="my-4 text-3xl font-bold text-blue-700">{p.price}</p><p className="text-sm text-slate-600">{p.detail}</p>
        <ul className="mt-6 space-y-3 flex-1">{p.features.map(f=><li key={f} className="flex gap-2 text-sm text-slate-700"><Check size={16} className="shrink-0 mt-1 text-blue-600" aria-hidden="true" />{f}</li>)}</ul>
        <LinkButton className="mt-7 justify-center" variant={p.popular ? "primary":"ghost"} href={`/contact?type=${audience}&service=${encodeURIComponent(service.name)}&plan=${encodeURIComponent(p.name)}#enquiry`}>Choose {p.name}</LinkButton>
      </article>)}
    </div>
    <p className="mt-5 text-sm text-slate-600">USD · No setup fees · Ad spend is separate · 20% off annual billing.</p>
    {["web-design","branding"].includes(serviceId) && <p className="mt-3 rounded-xl bg-blue-50 p-4 text-sm text-slate-700">The listed scope describes the initial website or identity deliverables. Ask for the ongoing monthly scope, ownership, hosting and handover terms in your proposal before starting.</p>}
    {audience === "agency" && <p className="mt-3 text-sm text-slate-600">Illustrative SEO example: 10 clients at $200 costs $2,000/month. Reselling at $700 brings $7,000/month: $5,000 gross profit (71.4%) before your own operating costs.</p>}
  </div></section>;
}
