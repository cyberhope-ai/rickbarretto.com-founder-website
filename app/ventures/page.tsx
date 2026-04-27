import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventures — Rick Barretto",
  description: "22+ companies and ventures created, operated, or helped launch across technology, entertainment, esports, education, cybersecurity, and AI.",
};

const current = [
  { name: "CyberHope AI", role: "Founder / CEO", era: "2024–Present", cat: "AI Infrastructure", desc: "Company developing PrecognitionOS — governed AI infrastructure for accountable autonomous work.", link: "https://cyberhopeai.com" },
  { name: "PrecognitionOS", role: "Creator / Inventor", era: "2024–Present", cat: "AI Platform", desc: "Flagship governed AI operating layer: attribution, provenance, human review, quality gates, accountable delivery.", link: "https://cyberhopeai.com" },
  { name: "The LAN Network", role: "Founder / Strategy", era: "2008–Present", cat: "AI + Technology", desc: "Human-led AI technology development company. Licensed partner for selected PrecognitionOS-enabled workflows.", link: "https://thelannetwork.com" },
  { name: "Prosperity Signal Marketplace", role: "Creator", era: "2026–Present", cat: "Fintech / AI", desc: "Validated trading signal platform. EURUSD portfolio Sharpe 3.221, MaxDD 0.36%, 3,447 NautilusTrader backtests. Every signal cryptographically timestamped via QSurface before execution.", link: "https://cyberhopeai.com" },
  { name: "Hope Training Academy", role: "Founder / Partner", era: "Active", cat: "Education + Workforce", desc: "Training and apprenticeship pathways in technology, IT, cybersecurity, coding, and AI.", link: "https://hopetrainingacademy.org" },
  { name: "Video Game Palooza", role: "Founder / Partner", era: "2018–Present", cat: "Nonprofit", desc: "501(c)(3) nonprofit education and community-impact organization. 2,000+ Hoosiers trained.", link: "https://videogamepalooza.org" },
];

const archive = [
  { name: "TLN Esports", role: "Co-Founder / Operator", era: "2008–2014", cat: "Esports", desc: "Chicago-born esports training house. Early home of Tyler 'Ninja' Blevins and top Halo pros. Pioneered the bootcamp training model.", link: "https://esports.thelannetwork.com" },
  { name: "SkillDNA", role: "Founder", era: "2019–2023", cat: "AI + HR Tech", desc: "The world's first human potential dashboard — AI-driven skills mapping and workforce intelligence platform.", link: null },
  { name: "DreamAuthentics", role: "Founder", era: "2009–2016", cat: "Location-Based Entertainment", desc: "Multi-experience entertainment venues combining gaming, VR, and interactive technology.", link: null },
];

export default function Ventures() {
  return (
    <>
      <Nav active="/ventures" />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white px-6 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3">Venture History</p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-5">Ventures</h1>
            <p className="font-sans text-lg md:text-xl text-sky-100 max-w-3xl leading-relaxed">
              A company-by-company index of selected ventures — built, operated, or co-founded
              across technology, entertainment, esports, education, cybersecurity, and AI.
            </p>
            <p className="font-sans text-sm text-sky-300/70 mt-3">22+ companies and ventures · 35+ years · 16 featured in the public archive</p>
          </div>
        </section>

        {/* Active */}
        <section className="bg-white px-6 py-14 border-b border-slate-200">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-2">Active</p>
            <h2 className="font-display text-3xl text-slate-900 mb-8">Active Companies and Initiatives</h2>
            <div className="space-y-4">
              {current.map(v => (
                <div key={v.name} className="grid md:grid-cols-[200px_1fr_auto] gap-4 bg-blue-50 border border-blue-200 rounded-xl p-6 items-start">
                  <div>
                    <p className="font-sans text-xs text-blue-700 font-semibold uppercase tracking-wider mb-1">{v.cat}</p>
                    <h3 className="font-display text-xl text-slate-900">{v.name}</h3>
                    <p className="font-sans text-xs text-slate-500 mt-1">{v.role} · {v.era}</p>
                  </div>
                  <p className="font-sans text-sm text-slate-700 leading-relaxed">{v.desc}</p>
                  {v.link && (
                    <a href={v.link} target="_blank" rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2 border border-blue-900 text-blue-900 rounded-lg font-semibold text-xs hover:bg-blue-900 hover:text-white transition no-underline">
                      Visit →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Archive */}
        <section className="bg-slate-50 px-6 py-14">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-2">Archive</p>
            <h2 className="font-display text-3xl text-slate-900 mb-8">Venture Archive</h2>
            <div className="space-y-4">
              {archive.map(v => (
                <div key={v.name} className="grid md:grid-cols-[200px_1fr_auto] gap-4 bg-white border border-slate-200 rounded-xl p-6 items-start">
                  <div>
                    <p className="font-sans text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{v.cat}</p>
                    <h3 className="font-display text-xl text-slate-900">{v.name}</h3>
                    <p className="font-sans text-xs text-slate-400 mt-1">{v.role} · {v.era}</p>
                  </div>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                  {v.link && (
                    <a href={v.link} target="_blank" rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2 border border-slate-300 text-slate-600 rounded-lg font-semibold text-xs hover:border-blue-900 hover:text-blue-900 transition no-underline">
                      Archive →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
