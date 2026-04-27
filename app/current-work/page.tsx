import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Work — Rick Barretto",
  description: "Rick Barretto's current work: CyberHope AI, PrecognitionOS, The LAN Network, Hope Training Academy, and Video Game Palooza.",
};

const orgs = [
  {
    label: "Primary Company",
    name: "CyberHope AI",
    tagline: "Governed AI Infrastructure",
    desc: "CyberHope AI is the company developing PrecognitionOS, a governed AI operating layer for accountable autonomous work. The company is focused on infrastructure that helps human-led teams coordinate AI agents with attribution, provenance, quality gates, secure execution, and audit-ready evidence.",
    note: "CyberHope AI is the primary company behind Rick's current AI infrastructure work.",
    cta: { label: "Visit CyberHopeAI.com →", href: "https://cyberhopeai.com" },
    highlight: true,
  },
  {
    label: "Flagship Platform",
    name: "PrecognitionOS",
    tagline: "The Governed AI Operating Layer",
    desc: "PrecognitionOS is the flagship governed AI platform created by Rick Barretto and developed through CyberHope AI. It is designed to help organizations manage AI-agent workflows with human oversight, evidence records, review checkpoints, and accountable delivery.",
    note: "Public descriptions of PrecognitionOS are intentionally high-level while patent filings, product strategy, and technical implementation continue to develop.",
    cta: { label: "Explore at CyberHopeAI.com →", href: "https://cyberhopeai.com" },
    highlight: true,
    ip: "CyberHope AI has filed an initial provisional patent application and is preparing additional filings related to governed AI infrastructure. RickBarretto.com does not disclose implementation-level technical details.",
  },
  {
    label: "Licensed Implementation Partner",
    name: "The LAN Network",
    tagline: "Human-Led AI Technology Development",
    desc: "The LAN Network began with esports and team-based technology training. Today, TLN is being positioned for the AI era as a human-led AI technology development and implementation company. TLN serves as a licensed development and implementation partner for selected PrecognitionOS-enabled workflows.",
    cta: { label: "Visit TheLANNetwork.com →", href: "https://thelannetwork.com" },
    highlight: false,
  },
  {
    label: "Training + Apprenticeships",
    name: "Hope Training Academy",
    tagline: "Training and Apprenticeship Pathway",
    desc: "Hope Training Academy provides training and apprenticeship pathways for technology, IT, cybersecurity, coding, and AI education. Where TLN provides real-world project environments and technology delivery, Hope Training Academy supports training, credentialing, and apprenticeship pathways.",
    cta: { label: "Visit HopeTrainingAcademy.org →", href: "https://hopetrainingacademy.org" },
    highlight: false,
  },
  {
    label: "Nonprofit Partner",
    name: "Video Game Palooza",
    tagline: "Education and Community Impact",
    desc: "Video Game Palooza represents the nonprofit education and community-impact lineage behind Rick's work in youth technology, games, esports, training, and opportunity creation. 2,000+ Hoosiers trained since 2018.",
    cta: { label: "Visit VideoGamePalooza.org →", href: "https://videogamepalooza.org" },
    highlight: false,
  },
];

export default function CurrentWork() {
  return (
    <>
      <Nav active="/current-work" />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white px-6 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3">Current Work</p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-5">Current Work</h1>
            <p className="font-sans text-lg md:text-xl text-sky-100 max-w-3xl leading-relaxed">
              Rick Barretto&apos;s current work brings together governed AI infrastructure, human-led
              technology delivery, apprenticeships, cybersecurity, and workforce pathways.
            </p>
          </div>
        </section>

        {/* Orgs */}
        {orgs.map((org, i) => (
          <section key={org.name} className={`px-6 py-14 border-b border-slate-200 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
            <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-1">{org.label}</p>
                <h2 className="font-display text-3xl md:text-4xl text-slate-900 leading-tight">{org.name}</h2>
                <p className="font-display italic text-lg text-blue-800 mt-1">{org.tagline}</p>
              </div>
              <div>
                <p className="font-sans text-slate-700 leading-relaxed mb-4">{org.desc}</p>
                {org.note && <p className="font-sans text-slate-500 text-sm leading-relaxed mb-4">{org.note}</p>}
                {org.ip && (
                  <div className="bg-slate-100 border border-slate-200 rounded-lg px-4 py-3 mb-4">
                    <p className="font-sans text-slate-500 text-xs leading-relaxed italic">{org.ip}</p>
                  </div>
                )}
                <a href={org.cta.href} target="_blank" rel="noopener noreferrer"
                  className="font-sans text-blue-900 font-semibold text-sm hover:underline no-underline">
                  {org.cta.label}
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* Ecosystem map */}
        <section className="bg-gradient-to-b from-blue-950 to-indigo-950 text-white px-6 py-14">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3 text-center">How the Pieces Fit</p>
            <h2 className="font-display text-2xl md:text-3xl text-center mb-8">Each organization has a distinct role</h2>
            <div className="max-w-2xl mx-auto space-y-3">
              {[
                ["Rick Barretto", "Founder / Creator / Platform Builder"],
                ["CyberHope AI", "Company building governed AI infrastructure"],
                ["PrecognitionOS", "Flagship governed AI platform"],
                ["The LAN Network", "Licensed development and implementation partner"],
                ["Hope Training Academy", "Training and apprenticeship pathway"],
                ["Video Game Palooza", "Nonprofit education and community-impact lineage"],
              ].map(([name, role]) => (
                <div key={name} className="flex items-center gap-4 bg-white/10 rounded-lg px-5 py-3">
                  <span className="font-display text-sky-200 text-sm font-semibold w-52 shrink-0">{name}</span>
                  <span className="font-sans text-sky-300/80 text-sm">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
