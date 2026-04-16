import Nav from "@/components/Nav";
import Lightbox from "@/components/Lightbox";
import type { Metadata } from "next";

const screenshots = [
  { src: "/skilldna/skilldna-01.jpg", caption: "Capability genome — top view" },
  { src: "/skilldna/skilldna-02.jpg", caption: "Personality + leadership metrics" },
  { src: "/skilldna/skilldna-03.jpg", caption: "Skill visualization breakdown" },
  { src: "/skilldna/skilldna-04.jpg", caption: "Evidence layer + history" },
  { src: "/skilldna/skilldna-05.jpg", caption: "Growth over time" },
];

export const metadata: Metadata = {
  title: "SkillDNA — The World's First Human Potential Dashboard",
  description:
    "SkillDNA is a PrecognitionOS-powered dashboard that turns scattered assessments, experiences, and achievements into a single, evolving capability genome — evidence-backed, portable, and automatically updating.",
};

const features = [
  {
    title: "Capability Genome",
    body: "Your skills, personality signals, and evidence composed into a single living map that evolves as you do.",
  },
  {
    title: "Personality Metrics",
    body: "Quantified cognitive, leadership, and motivational signals — not self-reported fiction.",
  },
  {
    title: "Skill Visualizations",
    body: "Graphical representation of capabilities across domains, time, and level of evidence.",
  },
  {
    title: "Evidence Layer",
    body: "Every claim traces to a source: certificate, project, assessment, or verified artifact.",
  },
  {
    title: "Automatic Updates",
    body: "As you learn and grow, the dashboard grows with you. No manual re-entry.",
  },
  {
    title: "Portable Identity",
    body: "Your SkillDNA travels with you across platforms, employers, and career chapters.",
  },
];

const howItWorks = [
  {
    n: "01",
    title: "Upload what you have",
    body: "Resumes, PDFs, project docs, videos, images, certifications — drag and drop whatever you've got.",
  },
  {
    n: "02",
    title: "AI extracts the signals",
    body: "PrecognitionOS analyzes your inputs and generates evidence-backed capability claims — not keywords, not ATS games, real verified signals.",
  },
  {
    n: "03",
    title: "Your dashboard appears",
    body: "A mission-control view of your capabilities. Clean. Data-dense. Understandable at a glance.",
  },
  {
    n: "04",
    title: "It keeps growing",
    body: "Every new project, cert, or assessment automatically feeds back into the dashboard. Your SkillDNA evolves with your career.",
  },
];

export default function SkillDNAPage() {
  return (
    <>
      <Nav active="/skilldna" />
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white px-6 py-20 md:py-28">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-4">
              One of Rick&rsquo;s latest innovations · An app built to run on PrecognitionOS
            </p>
            <h1 className="font-display text-4xl md:text-7xl leading-[1.05] mb-6">
              SkillDNA.
            </h1>
            <p className="font-display italic text-2xl md:text-4xl text-sky-200 mb-6 leading-tight">
              The world&rsquo;s first human potential dashboard.
            </p>
            <p className="font-sans text-lg md:text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed mb-8">
              A living dashboard that turns scattered assessments,
              experiences, and achievements into a single, evolving capability
              genome.
            </p>
            <p className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 font-sans text-sm text-sky-200">
              🚧 In active development · stay tuned
            </p>
          </div>
        </section>

        {/* Story placeholder — "Why I made it" */}
        <section className="px-6 py-14 md:py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-3">
              Why I made it
            </p>
            <h2 className="font-display text-2xl md:text-4xl text-slate-900 leading-tight mb-4">
              The backstory is coming.
            </h2>
            <p className="font-sans text-slate-700 leading-relaxed">
              There&rsquo;s a specific reason SkillDNA exists &mdash; a
              pattern Rick has watched play out across 35 years of hiring,
              training, mentoring, and running a nonprofit that serves
              underrepresented talent. That story goes here, in his own
              words. Stay tuned.
            </p>
          </div>
        </section>

        {/* The problem — paired with screenshot 01 */}
        <section className="px-6 py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[5fr_6fr] gap-10 md:gap-14 items-center">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-3">
                The problem
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-slate-900 leading-tight mb-6">
                R&eacute;sum&eacute;s are self-reported fiction.
              </h2>
              <p className="font-sans text-lg text-slate-700 leading-relaxed mb-4">
                Personal capability is scattered across LinkedIn, PDFs,
                certificates, project docs, and the thousands of small wins
                that never make it onto a page. When it&rsquo;s time to hire,
                grow, or switch careers, the signal is drowned in paperwork.
              </p>
              <p className="font-sans text-lg text-slate-700 leading-relaxed">
                SkillDNA replaces that mess with one living record of your
                evolving capability &mdash; <strong>evidence-backed,
                verified, and portable</strong>.
              </p>
            </div>
            <figure className="space-y-2">
              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition">
                <Lightbox src={screenshots[0].src} alt={screenshots[0].caption} />
              </div>
              <figcaption className="font-sans text-xs text-slate-500 px-1">
                {screenshots[0].caption}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* How it works — paired with screenshot 02 */}
        <section className="px-6 py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[6fr_5fr] gap-10 md:gap-14 items-center mb-12">
              <figure className="space-y-2 order-2 md:order-1">
                <div className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition">
                  <Lightbox src={screenshots[1].src} alt={screenshots[1].caption} />
                </div>
                <figcaption className="font-sans text-xs text-slate-500 px-1">
                  {screenshots[1].caption}
                </figcaption>
              </figure>
              <div className="order-1 md:order-2">
                <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-3">
                  How it works
                </p>
                <h2 className="font-display text-3xl md:text-5xl text-slate-900 leading-tight">
                  Four steps. No manual entry.
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {howItWorks.map((s) => (
                <div
                  key={s.n}
                  className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 hover:border-blue-300 hover:shadow-md transition"
                >
                  <p className="font-display text-4xl text-blue-700 leading-none mb-3">
                    {s.n}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl text-slate-900 leading-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="font-sans text-slate-700 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features — paired with screenshot 03 */}
        <section className="px-6 py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[6fr_5fr] gap-10 md:gap-14 items-center mb-12">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-3">
                  What&rsquo;s inside
                </p>
                <h2 className="font-display text-3xl md:text-5xl text-slate-900 leading-tight">
                  A NASA dashboard for humans.
                </h2>
              </div>
              <figure className="space-y-2">
                <div className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition">
                  <Lightbox src={screenshots[2].src} alt={screenshots[2].caption} />
                </div>
                <figcaption className="font-sans text-xs text-slate-500 px-1">
                  {screenshots[2].caption}
                </figcaption>
              </figure>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-6 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition"
                >
                  <h3 className="font-display text-xl text-slate-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="font-sans text-slate-700 leading-relaxed">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evidence + growth — screenshots 04 + 05 */}
        <section className="px-6 py-16 md:py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-3 text-center">
              Evidence + growth over time
            </p>
            <h2 className="font-display text-2xl md:text-4xl text-slate-900 mb-10 text-center leading-tight">
              Every claim traces to a source. The dashboard evolves with you.
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {screenshots.slice(3).map((s, i) => (
                <figure key={i} className="space-y-2">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition bg-white">
                    <Lightbox src={s.src} alt={s.caption} />
                  </div>
                  <figcaption className="font-sans text-sm text-slate-600 px-1">
                    {s.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-center font-sans text-sm text-slate-500 mt-6">
              Click any screenshot to enlarge. The production app is in active
              development &mdash; these views are from the reference build.
            </p>
          </div>
        </section>

        {/* Who it's for */}
        <section className="px-6 py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-2">
                For individuals
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                Free forever. Start your SkillDNA today.
              </h3>
              <p className="font-sans text-slate-700 leading-relaxed mb-6">
                Clarity on your capabilities. Portable across every platform.
                Evidence-backed and yours to keep for life.
              </p>
              <p className="text-sm font-sans text-slate-500 italic">
                Signup coming soon.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-2">
                For employers
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                Evidence-backed hiring and team formation.
              </h3>
              <p className="font-sans text-slate-700 leading-relaxed mb-6">
                Replace r&eacute;sum&eacute; fiction with verified reality.
                Form teams by actual capability. Workforce analytics at scale.
              </p>
              <a
                href="https://cyberhopeai.com"
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-sans font-semibold underline underline-offset-4"
              >
                Talk to enterprise &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Platform credit */}
        <section className="px-6 py-16 md:py-20 bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-4">
              Built on PrecognitionOS
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              The governance layer under the dashboard.
            </h2>
            <p className="font-sans text-lg text-sky-100 leading-relaxed mb-8">
              SkillDNA is one module inside CyberHope AI&rsquo;s larger
              PrecognitionOS architecture — an 11-layer governance operating
              system for trustworthy, cryptographically verified AI. Every
              claim in your SkillDNA can trace to its source through the same
              proof-of-computation layer that governs the rest of the fleet.
            </p>
            <a
              href="https://cyberhopeai.com"
              className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 font-sans font-semibold underline underline-offset-4"
            >
              Learn about PrecognitionOS →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-blue-950 to-indigo-950 text-blue-300 px-6 py-12 text-center border-t border-blue-800/50">
          <p className="text-xs tracking-widest uppercase text-blue-400/60">
            © {new Date().getFullYear()} Rick Barretto · CyberHope AI ·
            Indianapolis, IN
          </p>
        </footer>
      </main>
    </>
  );
}
