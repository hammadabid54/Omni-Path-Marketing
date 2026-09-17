import Image from "next/image";
import { Globe, PenTool, Share2 } from "lucide-react";

export function MarketingImage() {
  return <figure className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-900/5">
    <Image src="/images/marketing-workspace.png" width={1536} height={1024} sizes="(max-width: 1023px) 90vw, 480px" alt="Conceptual brand workspace with coordinated website, social media design, stationery and blue color swatches" className="w-full h-auto" priority />
    <figcaption className="p-5"><p className="text-lg font-semibold">One brand. Every touchpoint.</p><div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-600"><span className="flex gap-1.5 items-center"><Globe size={14} aria-hidden="true"/>Web</span><span className="flex gap-1.5 items-center"><PenTool size={14} aria-hidden="true"/>Identity</span><span className="flex gap-1.5 items-center"><Share2 size={14} aria-hidden="true"/>Social</span></div></figcaption>
  </figure>;
}
