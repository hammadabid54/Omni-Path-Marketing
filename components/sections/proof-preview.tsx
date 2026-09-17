import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { CASE_STUDY_PDFS } from "@/content/case-study-pdfs";

export function ProofPreview() {
  const report = CASE_STUDY_PDFS[0];
  return <Link href="/case-studies" className="block rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/5 group">
    <div className="flex items-center justify-between text-xs font-medium text-blue-800"><span className="flex items-center gap-2"><FileText size={16} aria-hidden="true" /> From our portfolio</span><ArrowUpRight size={18} aria-hidden="true" /></div>
    <div className="relative mt-4 h-64 overflow-hidden rounded-xl border border-blue-100 bg-blue-50">
      <Image src={report.cover} alt={`${report.name}: an excerpt from the SEO engagement report`} fill sizes="(max-width: 1023px) 90vw, 450px" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" priority />
    </div>
    <p className="mt-4 text-lg font-semibold">See the work behind the strategy.</p>
    <p className="mt-1 text-sm text-slate-600">Explore SEO engagement reports from dental and healthcare projects.</p>
  </Link>;
}
