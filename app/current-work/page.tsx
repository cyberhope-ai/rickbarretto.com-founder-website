import Nav from "@/components/Nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Work | Rick Barretto",
  description: "Rick Barretto's current work: CyberHope AI, PrecognitionOS, The LAN Network, Hope Training Academy, and Video Game Palooza.",
};

export default function CurrentWork() {
  return (
    <>
      <Nav active="/current-work" />
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Hero */}
        <section className="pb-16">
          <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2">Current Work</p>
          <h1 className="font-display text-5xl text-slate-900 mb-4">Current Work</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Rick Barretto&apos;s current work brings together governed AI infrastructure, human-led
            technology delivery, apprenticeships, cybersecurity, and workforce pathways.
          </p>
        </section>

        {/* CyberHope AI */}
        <section className="py-12 border-t border-slate-200">
          <div className="grid md:grid-cols-[1fr_200px] gap-8">
            <div>
              <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2">Primary Company</p>
              <h2 className="font-display text-3xl text-slate-900 mb-3">CyberHope AI: Governed AI Infrastructure</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                CyberHope AI is the company developing PrecognitionOS, a governed AI operating layer
                for accountable autonomous work. The company is focused on infrastructure that helps
                human-led teams coordinate AI agents with attribution, provenance, quality gates,
                secure execution, and audit-ready evidence.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                CyberHope AI is the primary company behind Rick&apos;s current AI infrastructure work.
              </p>
              <a href="https://cyberhopeai.com" target="_blank" rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-blue-900 text-white rounded-lg font-semibold text-sm hover:bg-blue-800 transition no-underline">
                Visit CyberHopeAI.com →
              </a>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex flex-col justify-center text-center">
              <p className="text-blue-900 font-bold text-2xl mb-1">Active</p>
              <p className="text-blue-700 text-xs font-semibold uppercase tracking-wider">Primary Focus · 2025–Present</p>
            </div>
          </div>
        </section>

        {/* PrecognitionOS */}
        <section className="py-12 border-t border-slate-200">
          <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2">Flagship Platform</p>
          <h2 className="font-display text-3xl text-slate-900 mb-3">PrecognitionOS: The Governed AI Operating Layer</h2>
          <p className="text-slate-600 leading-relaxed mb-3 max-w-3xl">
            PrecognitionOS is the flagship governed AI platform created by Rick Barretto and developed
            through CyberHope AI. It is designed to help organizations manage AI-agent workflows with
            human oversight, evidence records, review checkpoints, and accountable delivery.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3 max-w-3xl">
            Public descriptions of PrecognitionOS are intentionally high-level while patent filings,
            product strategy, and technical implementation continue to develop.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 max-w-2xl mb-6">
            <p className="text-slate-500 text-sm leading-relaxed italic">
              CyberHope AI has filed an initial provisional patent application and is preparing
              additional filings related to governed AI infrastructure. RickBarretto.com does not
              disclose implementation-level technical details.
            </p>
          </div>
          <a href="https://cyberhopeai.com" target="_blank" rel="noopener noreferrer"
            className="text-blue-900 font-semibold text-sm hover:underline no-underline">
            Explore PrecognitionOS at CyberHopeAI.com →
          </a>
        </section>

        {/* TLN */}
        <section className="py-12 border-t border-slate-200">
          <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2">Implementation Partner</p>
          <h2 className="font-display text-3xl text-slate-900 mb-3">The LAN Network: Human-Led AI Technology Development</h2>
          <p className="text-slate-600 leading-relaxed mb-3 max-w-3xl">
            The LAN Network began with esports and team-based technology training. Today, TLN is being
            positioned for the AI era as a human-led AI technology development and implementation company.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
            TLN serves as a licensed development and implementation partner for selected
            PrecognitionOS-enabled workflows, combining human project leadership, governed AI assistance,
            cybersecurity discipline, and apprenticeship-trained talent.
          </p>
          <a href="https://thelannetwork.com" target="_blank" rel="noopener noreferrer"
            className="text-blue-900 font-semibold text-sm hover:underline no-underline">
            Visit TheLANNetwork.com →
          </a>
        </section>

        {/* HTA */}
        <section className="py-12 border-t border-slate-200">
          <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2">Training + Apprenticeships</p>
          <h2 className="font-display text-3xl text-slate-900 mb-3">Hope Training Academy: Training and Apprenticeship Pathway</h2>
          <p className="text-slate-600 leading-relaxed mb-3 max-w-3xl">
            Hope Training Academy provides training and apprenticeship pathways for technology, IT,
            cybersecurity, coding, and AI education. Its role in the ecosystem is workforce development:
            preparing people for real technology opportunities in an AI-enabled world.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
            Where TLN provides real-world project environments and technology delivery, Hope Training
            Academy supports training, credentialing, and apprenticeship pathways.
          </p>
          <a href="https://hopetrainingacademy.org" target="_blank" rel="noopener noreferrer"
            className="text-blue-900 font-semibold text-sm hover:underline no-underline">
            Visit HopeTrainingAcademy.org →
          </a>
        </section>

        {/* VGP */}
        <section className="py-12 border-t border-slate-200">
          <p className="text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2">Nonprofit Partner</p>
          <h2 className="font-display text-3xl text-slate-900 mb-3">Video Game Palooza: Education and Community Impact</h2>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
            Video Game Palooza represents the nonprofit education and community-impact lineage behind
            Rick&apos;s work in youth technology, games, esports, training, and opportunity creation.
            It remains part of the broader story: using technology to help people discover skills,
            build confidence, and access future careers.
          </p>
          <a href="https://videogamepalooza.org" target="_blank" rel="noopener noreferrer"
            className="text-blue-900 font-semibold text-sm hover:underline no-underline">
            Visit VideoGamePalooza.org →
          </a>
        </section>

        {/* Ecosystem map */}
        <section className="py-12 border-t border-slate-200">
          <h2 className="font-display text-2xl text-slate-900 mb-6">How the Pieces Fit Together</h2>
          <div className="space-y-3 max-w-2xl">
            {[
              { role: "Founder / Creator / Platform Builder", name: "Rick Barretto" },
              { role: "Company building governed AI infrastructure", name: "CyberHope AI" },
              { role: "Flagship governed AI platform", name: "PrecognitionOS" },
              { role: "Licensed development and implementation partner", name: "The LAN Network" },
              { role: "Training and apprenticeship pathway", name: "Hope Training Academy" },
              { role: "Nonprofit education and community-impact lineage", name: "Video Game Palooza" },
            ].map(item => (
              <div key={item.name} className="flex items-start gap-4 border border-slate-200 rounded-lg px-5 py-3 bg-white">
                <span className="text-blue-900 font-bold text-sm shrink-0 w-48">{item.name}</span>
                <span className="text-slate-500 text-sm">{item.role}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-6 max-w-2xl leading-relaxed">
            Each organization has a distinct role. Together, they reflect Rick&apos;s long-running
            focus on building platforms and pathways that help people use emerging technology responsibly.
          </p>
        </section>

      </main>
    </>
  );
}
