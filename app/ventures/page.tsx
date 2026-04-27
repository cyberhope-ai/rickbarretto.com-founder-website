import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventures | Rick Barretto",
  description: "22+ companies and ventures created, operated, or helped launch across technology, entertainment, esports, education, cybersecurity, and AI.",
};

const ventures = [
  {
    name: "CyberHope AI",
    era: "2024–Present",
    role: "Founder / CEO",
    category: "AI Infrastructure",
    desc: "Company developing PrecognitionOS — governed AI infrastructure for accountable autonomous work.",
    link: "https://cyberhopeai.com",
    current: true,
  },
  {
    name: "PrecognitionOS",
    era: "2024–Present",
    role: "Creator / Inventor",
    category: "AI Platform",
    desc: "Flagship governed AI operating layer designed for attribution, provenance, human review, quality gates, and accountable delivery.",
    link: "https://cyberhopeai.com",
    current: true,
  },
  {
    name: "The LAN Network",
    era: "2008–Present",
    role: "Founder / Strategy",
    category: "Technology Development",
    desc: "Human-led AI technology development and implementation company. Licensed development and implementation partner for selected PrecognitionOS-enabled workflows.",
    link: "https://thelannetwork.com",
    current: true,
  },
  {
    name: "Hope Training Academy",
    era: "Active",
    role: "Founder / Partner",
    category: "Education + Workforce",
    desc: "Training and apprenticeship pathways in technology, IT, cybersecurity, coding, and AI.",
    link: "https://hopetrainingacademy.org",
    current: true,
  },
  {
    name: "Video Game Palooza",
    era: "2018–Present",
    role: "Founder / Partner",
    category: "Nonprofit",
    desc: "501(c)(3) nonprofit education and community-impact organization. 2,000+ Hoosiers trained in technology and workforce programs.",
    link: "https://videogamepalooza.org",
    current: true,
  },
  {
    name: "TLN Esports",
    era: "2008–2014",
    role: "Co-Founder / Operator",
    category: "Esports",
    desc: "Chicago-born esports training house. Early home of Tyler 'Ninja' Blevins and top Halo pros. Pioneered the bootcamp training model.",
    link: "https://esports.thelannetwork.com",
    current: false,
  },
  {
    name: "SkillDNA",
    era: "2019–2023",
    role: "Founder",
    category: "AI + HR Technology",
    desc: "The world's first human potential dashboard — AI-driven skills mapping and workforce intelligence platform.",
    link: null,
    current: false,
  },
  {
    name: "DreamAuthentics",
    era: "2009–2016",
    role: "Founder",
    category: "Location-Based Entertainment",
    desc: "Multi-experience entertainment venues combining gaming, VR, and interactive technology.",
    link: null,
    current: false,
  },
];

export default function Ventures() {
  const current = ventures.filter(v => v.current);
  const archive = ventures.filter(v => !v.current);

  return (
    <>
      <Nav active="/ventures" />
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Hero */}
        <section className="pb-12">
          <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2">Venture History</p>
          <h1 className="font-display text-5xl text-slate-900 mb-4">Ventures</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-2">
            A company-by-company index of selected ventures — built, operated, or co-founded across
            technology, entertainment, esports, education, cybersecurity, and AI.
          </p>
          <p className="text-slate-400 text-sm">
            22+ companies and ventures across 35+ years. 16 featured in the public archive.
          </p>
        </section>

        {/* Current */}
        <section className="py-10 border-t border-slate-200">
          <h2 className="font-display text-2xl text-slate-900 mb-6">Active Companies and Initiatives</h2>
          <div className="space-y-4">
            {current.map(v => (
              <div key={v.name} className="border border-blue-200 bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-display text-xl text-slate-900">{v.name}</h3>
                    <span className="px-2 py-0.5 bg-blue-900 text-white text-xs rounded-full font-semibold">Active</span>
                    <span className="text-xs text-slate-500 font-medium">{v.category}</span>
                  </div>
                  <p className="text-xs text-blue-800 font-semibold mb-2">{v.role} · {v.era}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
                {v.link && (
                  <a href={v.link} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 px-4 py-2 border border-blue-900 text-blue-900 rounded-lg font-semibold text-xs hover:bg-blue-900 hover:text-white transition no-underline">
                    Visit →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Archive */}
        <section className="py-10 border-t border-slate-200">
          <h2 className="font-display text-2xl text-slate-900 mb-6">Venture Archive</h2>
          <div className="space-y-4">
            {archive.map(v => (
              <div key={v.name} className="border border-slate-200 bg-white rounded-xl p-6 flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-display text-xl text-slate-900">{v.name}</h3>
                    <span className="text-xs text-slate-400 font-medium">{v.category}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold mb-2">{v.role} · {v.era}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
                {v.link && (
                  <a href={v.link} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 px-4 py-2 border border-slate-300 text-slate-600 rounded-lg font-semibold text-xs hover:border-blue-900 hover:text-blue-900 transition no-underline">
                    Archive →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 border-t border-slate-200">
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            RickBarretto.com describes Rick Barretto&apos;s career, ventures, inventions, and current
            ecosystem. Product, investor, and technical details for CyberHope AI and PrecognitionOS
            are maintained on CyberHopeAI.com.
          </p>
        </section>

      </main>
    </>
  );
}
