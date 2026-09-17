import { Search, Megaphone, PenTool, Globe, Share2, Mail, BarChart3, Layers, Check, ArrowUpRight, Users, FileText } from "lucide-react";

const themes = [
  { match: /seo|search|audit|dental|dentist|health|automated/i, title: "Make your next customer find you.", label: "Search & discovery", icon: Search, kind: "search" },
  { match: /paid|ads|tiktok|linkedin/i, title: "One idea. The right audience.", label: "Campaign studio", icon: Megaphone, kind: "ads" },
  { match: /brand|creative/i, title: "A brand that feels like you.", label: "Identity system", icon: PenTool, kind: "brand" },
  { match: /web|cro/i, title: "From first visit to next step.", label: "Website experience", icon: Globe, kind: "web" },
  { match: /social/i, title: "Show up with something to say.", label: "Content studio", icon: Share2, kind: "social" },
  { match: /email|lifecycle/i, title: "Keep the conversation going.", label: "Customer journey", icon: Mail, kind: "email" },
  { match: /analytics|pricing|tools/i, title: "A clearer picture of your growth.", label: "Planning & measurement", icon: BarChart3, kind: "analytics" },
  { match: /agenc|white-label/i, title: "Your brand. Our delivery team.", label: "Partner workspace", icon: Layers, kind: "agency" },
  { match: /about|contact|process|team/i, title: "Good work starts with a conversation.", label: "People & process", icon: Users, kind: "team" },
];

/** Editorial illustrations: diagrams, never fabricated client results. */
export function ServiceVisual({ topic = "growth", compact = false }: { topic?: string; compact?: boolean }) {
  const theme = themes.find(t => t.match.test(topic)) ?? { title: "One team. A connected growth plan.", label: "The growth workspace", icon: Layers, kind: "growth" };
  const Icon = theme.icon;
  return <div className={`service-visual ${compact ? "service-visual-compact" : ""}`}>
    <div className="visual-topline"><span><Icon size={16} aria-hidden="true" />{theme.label}</span><span className="visual-dots" aria-hidden="true">•••</span></div>
    <svg viewBox="0 0 440 250" fill="none" aria-hidden="true" className="visual-canvas">
      <circle cx="220" cy="126" r="110" fill="#eaf3ff" />
      <path d="M30 205H410M60 45V222M380 45V222" stroke="#dbe8f7" strokeDasharray="4 6" />
      {theme.kind === "brand" ? <>
        <rect x="53" y="48" width="190" height="160" rx="18" fill="#fff" stroke="#c8dcf5" />
        <path d="M147 70L208 174H171L147 132L122 174H86L147 70Z" fill="#0070f3" />
        <rect x="264" y="48" width="120" height="70" rx="12" fill="#eff6ff" />
        {["#0070f3", "#003a87", "#b8d8ff"].map((c,i)=><rect key={c} x={262+i*39} y="59" width="32" height="62" rx="9" fill={c} />)}
        <text x="264" y="164" fill="#173451" fontFamily="Georgia, serif" fontSize="40">Aa</text><path d="M266 189H366M266 201H330" stroke="#a9bfd9" strokeWidth="5" strokeLinecap="round" />
      </> : ["email","agency","team","growth"].includes(theme.kind) ? <>
        <path d="M117 124H324M220 78V178" stroke="#6aaafb" strokeWidth="2" strokeDasharray="6 6" />
        {[[49,89],[166,24],[166,162],[285,89]].map(([x,y],i)=><g key={i}><rect x={x} y={y} width="106" height="67" rx="14" fill="white" stroke="#bdd7f8" /><rect x={x+15} y={y+15} width="27" height="24" rx="6" fill={i===1?"#0070f3":"#dbeafe"}/><path d={`M${x+52} ${y+23}h36M${x+52} ${y+34}h23M${x+15} ${y+51}h72`} stroke="#a8bed7" strokeWidth="4" strokeLinecap="round" /></g>)}
        <circle cx="220" cy="124" r="29" fill="#0070f3" /><path d="m207 124 9 9 17-19" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </> : ["web","social","ads"].includes(theme.kind) ? <>
        <rect x="48" y="29" width="277" height="192" rx="15" fill="white" stroke="#bfd7f6" />
        <path d="M49 57H324" stroke="#dbe8f7" />{[65,76,87].map(x=><circle key={x} cx={x} cy="44" r="3" fill="#9cbedf" />)}
        <rect x="68" y="75" width="116" height="108" rx="9" fill="#dbeafe" />
        <circle cx="126" cy="116" r="27" fill="#0070f3" /><path d="m96 164 31-46 35 46" fill="#003a87" />
        <path d="M201 84H301M201 99H284M201 122H296M201 136H274" stroke="#aec5df" strokeWidth="6" strokeLinecap="round" /><rect x="200" y="157" width="78" height="23" rx="6" fill="#0070f3" />
        <rect x="297" y="95" width="93" height="139" rx="15" fill="white" stroke="#8db9ef" /><rect x="309" y="111" width="69" height="76" rx="7" fill="#dbeafe" /><path d="m334 132 24 17-24 17Z" fill="#0070f3" /><path d="M312 202H373M312 215H350" stroke="#aec5df" strokeWidth="5" strokeLinecap="round" />
      </> : <>
        <rect x="47" y="35" width="345" height="181" rx="16" fill="white" stroke="#bfd7f6" />
        {theme.kind === "search" ? <><rect x="65" y="52" width="309" height="34" rx="17" fill="#f2f7ff" /><circle cx="84" cy="68" r="7" stroke="#0070f3" strokeWidth="2" /><path d="m89 74 5 5M105 68H273" stroke="#9ebddd" strokeWidth="3" strokeLinecap="round" />{[108,149,190].map((y,i)=><g key={y}><rect x="69" y={y-9} width="21" height="21" rx="5" fill="#dbeafe" /><path d={`M104 ${y-4}h${149-i*18}M104 ${y+9}h${207-i*20}`} stroke={i===0?"#0070f3":"#abc3de"} strokeWidth="5" strokeLinecap="round" /></g>)}</> : <>{[0,1,2,3,4,5,6].map((v)=><rect key={v} x={77+v*41} y={174-v*13} width="23" height={22+v*13} rx="5" fill={v>3?"#0070f3":"#bfdbfe"} />)}<path d="M76 131 117 139 159 107 200 115 241 82 282 92 324 63" stroke="#003a87" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></>}
      </>}
    </svg>
    {!compact && <><p className="visual-title">{theme.title}</p><div className="visual-bottom"><span><Check size={14} aria-hidden="true" /> Strategy</span><span><FileText size={14} aria-hidden="true" /> Delivery</span><span><ArrowUpRight size={14} aria-hidden="true" /> Review</span></div></>}
  </div>;
}
