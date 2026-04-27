import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Rick Barretto — Inventor, Founder, Platform Builder",
  description: "For more than three decades, Rick Barretto has built companies, platforms, and training systems across medical technology, entertainment, esports, workforce development, cybersecurity, and artificial intelligence.",
};

const ecosystem = [
  {
    name: "CyberHope AI",
    role: "Current Company",
    desc: "Company developing governed AI infrastructure for the AI-agent economy.",
    cta: { label: "Visit CyberHopeAI.com", href: "https://cyberhopeai.com", external: true },
    highlight: true,
  },
  {
    name: "PrecognitionOS",
    role: "Flagship Platform",
    desc: "Governed AI operating layer created to support attribution, provenance, human review, quality gates, and accountable autonomous work.",
    cta: { label: "Learn More at CyberHopeAI.com", href: "https://cyberhopeai.com", external: true },
    highlight: true,
  },
  {
    name: "The LAN Network",
    role: "Licensed Implementation Partner",
    desc: "Human-led AI technology development, cybersecurity, and apprenticeship-enabled delivery partner rooted in esports and technology training.",
    cta: { label: "Visit TheLANNetwork.com", href: "https://thelannetwork.com", external: true },
    highlight: false,
  },
  {
    name: "Hope Training Academy",
    role: "Training + Apprenticeship Pathway",
    desc: "Training and apprenticeship pathway for technology, cybersecurity, IT, and AI education.",
    cta: { label: "Visit HopeTrainingAcademy.org", href: "https://hopetrainingacademy.org", external: true },
    highlight: false,
  },
  {
    name: "Video Game Palooza",
    role: "Nonprofit Partner",
    desc: "Nonprofit education and community-impact lineage connecting games, technology, and youth opportunity. 2,000+ Hoosiers trained since 2018.",
    cta: { label: "Visit VideoGamePalooza.org", href: "https://videogamepalooza.org", external: true },
    highlight: false,
  },
  {
    name: "TLN Esports Archive",
    role: "Heritage",
    desc: "The original TLN esports site — origin story of the training house where Tyler 'Ninja' Blevins and others trained.",
    cta: { label: "Visit Archive", href: "https://esports.thelannetwork.com", external: true },
    highlight: false,
  },
];

const industries = [
  "Medical Documentation Technology",
  "Location-Based Entertainment",
  "Esports Training + Operations",
  "Youth Technology Education",
  "Cybersecurity",
  "Workforce Development",
  "AI Governance + Infrastructure",
  "Nonprofit / 501(c)(3)",
  "Cloud / Enterprise Architecture",
  "TV / Broadcast",
  "AR / VR / Virtual Reality",
  "Global Licensing",
];

export default function Home() {
  return (
    <>
      <Nav active="/" />
      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
          <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-4">
            Inventor · Founder · Platform Builder
          </p>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight text-slate-900 leading-tight mb-6">
            Rick Barretto: Inventor, Founder, Platform Builder
          </h1>
          <p className="text-xl text-slate-700 mb-4 leading-relaxed max-w-3xl">
            For more than three decades, Rick Barretto has built companies, platforms, and training
            systems across medical technology, entertainment, esports, workforce development,
            cybersecurity, and artificial intelligence.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed max-w-3xl">
            Today, Rick&apos;s work centers on CyberHope AI and PrecognitionOS, a governed AI
            infrastructure platform designed to help human-led teams coordinate AI agents with
            attribution, review, provenance, and accountability.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/current-work" className="inline-block px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold text-sm hover:bg-blue-800 transition no-underline">
              Explore Current Work →
            </Link>
            <Link href="/career" className="inline-block px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold text-sm hover:border-blue-900 hover:text-blue-900 transition no-underline">
              View Career Timeline
            </Link>
          </div>
        </section>

        {/* Current Work */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
          <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2">Current Work</p>
          <h2 className="font-display text-3xl text-slate-900 mb-3">Governed AI for the Real World</h2>
          <p className="text-slate-600 mb-4 leading-relaxed max-w-3xl">
            Rick&apos;s current focus is CyberHope AI, the company developing PrecognitionOS: governed
            AI infrastructure for accountable autonomous work. The platform is designed to help
            organizations move beyond experimental AI usage toward human-led, evidence-ready
            AI-agent workflows.
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed max-w-3xl">
            CyberHope AI is being built alongside a broader ecosystem that includes The LAN Network,
            Hope Training Academy, and Video Game Palooza, connecting AI infrastructure, real-world
            development, workforce training, and community impact.
          </p>
          <a href="https://cyberhopeai.com" target="_blank" rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 bg-blue-900 text-white rounded-lg font-semibold text-sm hover:bg-blue-800 transition no-underline">
            Visit CyberHope AI →
          </a>
        </section>

        {/* Career Pattern */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
          <div className="border-l-4 border-blue-900 pl-6 max-w-3xl">
            <h2 className="font-display text-3xl text-slate-900 mb-4">
              One Career Pattern: Build the Platform, Then Train People to Use It
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Across multiple industries, Rick&apos;s work has followed a consistent pattern: identify
              an emerging technology shift, build a practical platform around it, and create pathways
              for people to participate.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              From early medical documentation systems to location-based entertainment, from esports
              training houses to youth technology education, from cybersecurity apprenticeships to
              governed AI infrastructure, the through-line is the same: platforms, people, and
              practical adoption.
            </p>
            <Link href="/career" className="text-blue-900 font-semibold text-sm hover:underline no-underline">
              View the Full Career Timeline →
            </Link>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
          <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2">Ecosystem</p>
          <h2 className="font-display text-3xl text-slate-900 mb-10">Current Ecosystem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ecosystem.map(e => (
              <div key={e.name} className={`rounded-xl border p-5 flex flex-col ${e.highlight ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white"}`}>
                <p className="text-blue-800 text-xs font-semibold uppercase tracking-wider mb-1">{e.role}</p>
                <h3 className="font-display text-xl text-slate-900 mb-2">{e.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{e.desc}</p>
                <a href={e.cta.href} target="_blank" rel="noopener noreferrer"
                  className="text-blue-900 font-semibold text-xs hover:underline no-underline">
                  {e.cta.label} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
          <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2">Career Span</p>
          <h2 className="font-display text-3xl text-slate-900 mb-8">Industries Across 35+ Years</h2>
          <div className="flex flex-wrap gap-2">
            {industries.map(i => (
              <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full font-medium border border-slate-200">
                {i}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/career" className="text-blue-900 font-semibold text-sm hover:underline no-underline">
              Explore the Full Career Timeline →
            </Link>
          </div>
        </section>

        {/* Footer disclaimer */}
        <section className="max-w-5xl mx-auto px-6 py-10 border-t border-slate-200">
          <p className="text-slate-400 text-xs leading-relaxed max-w-3xl">
            RickBarretto.com describes Rick Barretto&apos;s career, ventures, inventions, and current
            ecosystem. Product, investor, and technical details for CyberHope AI and PrecognitionOS
            are maintained on CyberHopeAI.com and related official company materials.
          </p>
        </section>
      </main>
    </>
  );
}
