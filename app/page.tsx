import Nav from "@/components/Nav";
import Lightbox from "@/components/Lightbox";
import { keyHighlights } from "@/content/companies";
import Link from "next/link";

const industries = [
  { icon: "🎮", name: "Video Game Industry" },
  { icon: "🏛️", name: "Nonprofit / 501(c)(3)" },
  { icon: "🎓", name: "Education / Training Academy" },
  { icon: "🏥", name: "Hospital / Medical IT" },
  { icon: "📺", name: "TV / Broadcast" },
  { icon: "🎬", name: "Post Production / VFX" },
  { icon: "🎲", name: "3D Game Development" },
  { icon: "🥽", name: "AR / VR / Virtual Reality" },
  { icon: "🖨️", name: "Printing / Web-to-Print" },
  { icon: "📖", name: "Publishing (Book)" },
  { icon: "⚖️", name: "Law Enforcement Technology" },
  { icon: "🧙", name: "Global Licensing (Warner Bros.)" },
  { icon: "☁️", name: "Cloud / Enterprise Architecture" },
  { icon: "🤖", name: "AI Governance / Infrastructure" },
];

const navLinks = [
  { href: "/current-work", label: "Current Work", desc: "CyberHope AI, PrecognitionOS, TLN, HTA, VGP" },
  { href: "/career",       label: "Career Timeline", desc: "16 companies · 35 years · interactive timeline" },
  { href: "/inventions",   label: "Inventions",    desc: "The pattern: build the platform, invent the uses" },
  { href: "/press",        label: "Media / Press", desc: "59 press PDFs · 38 videos · national TV" },
  { href: "/story",        label: "Founder Story", desc: "Eight chapters, from Valencia to PrecognitionOS" },
];

const stats = [
  { value: keyHighlights.companies, label: "Companies" },
  { value: keyHighlights.firstInCategory, label: "First-in-Category" },
  { value: keyHighlights.patentsDrafted, label: "Patents Drafted" },
  { value: keyHighlights.yearsBuilding, label: "Years Building" },
  { value: keyHighlights.acquisitions, label: "M&A Exits" },
  { value: keyHighlights.studentsTrained, label: "Hoosiers Trained" },
];

export default function Home() {
  return (
    <>
      <Nav active="/" />
      <main className="min-h-screen">
        {/* Hero — Name, title, open letter, and the polo/desk photo */}
        <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-10 md:mb-14">
              <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-sky-300 mb-4">
                The Founder Site of
              </p>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight mb-5">
                Rick Barretto
              </h1>
              <p className="font-display italic text-xl md:text-2xl text-sky-200 max-w-3xl mx-auto leading-snug">
                Dreamer. Inventor. Founder. A 35-year serial-entrepreneur story &mdash;
                 16 companies, 8 first-in-category, 14 industries, no VC.
              </p>
            </div>

            <div className="grid md:grid-cols-[5fr_6fr] gap-8 md:gap-12 items-center">
              <div className="mx-auto md:mx-0 w-full max-w-md">
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <Lightbox
                    src="/photos/rick-cyberhope-polo-office.jpg"
                    alt="Rick Barretto"
                    thumbClassName="w-full h-auto"
                  />
                </div>
              </div>

              <div className="font-sans text-base md:text-lg text-sky-100 leading-relaxed space-y-4">
                <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-1">
                  An open letter
                </p>
                <p>
                  Welcome! This site is a working archive of a career spent
                  building things that had never existed &mdash; other than
                  in my imagination &mdash; driven by a desire to create
                  platforms and systems that help people lead happy,
                  fulfilled lives.
                </p>
                <p>
                  Everything you&rsquo;ll see here &mdash; the companies, the
                  inventions, the press, the SkillDNA &mdash; came out of a
                  simple belief that if you see a need and can create
                  something that solves a problem before anyone else, build
                  the platform that makes it possible, and let the uses
                  invent themselves.
                </p>
                <p>
                  My hope is that some small piece of this life&rsquo;s work
                  is inspiring, interesting, or useful to you &mdash; that it
                  sparks an idea, validates a hunch, or reminds you that you
                  don&rsquo;t need permission to build what you can already
                  see.
                </p>
                <p>Perhaps James Michener said it best:</p>
                <blockquote className="border-l-2 border-sky-400/40 pl-4 italic text-sky-200/90 text-[0.95em] leading-relaxed">
                  &ldquo;The master in the art of living makes little
                  distinction between his work and his play, his labor and
                  his leisure, his mind and his body, his information and
                  his recreation, his love and his religion. He hardly knows
                  which is which. He simply pursues his vision of excellence
                  at whatever he does, leaving others to decide whether he
                  is working or playing. To him he&rsquo;s always doing
                  both.&rdquo;
                  <footer className="not-italic text-xs tracking-wide text-sky-300/80 mt-2">
                    &mdash; James Michener
                  </footer>
                </blockquote>
                <p className="font-display italic text-sky-200 pt-1">
                  &mdash; Rick
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="bg-white border-b border-slate-200 px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {stats.map((s, i) => (
                <div key={i} className="text-center py-3">
                  <div className="font-display text-3xl md:text-4xl text-blue-900 leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-sans text-[10px] md:text-xs tracking-wide text-slate-600 uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries — the breadth */}
        <section className="bg-slate-50 px-6 py-14 md:py-16 border-b border-slate-200">
          <div className="max-w-6xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-2 text-center">
              Innovation across 14 industries
            </p>
            <h2 className="font-display text-2xl md:text-4xl text-slate-900 text-center leading-tight mb-8">
              Not one industry. All of them.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 p-3 md:p-4 text-center hover:border-blue-300 hover:shadow-sm transition"
                >
                  <div className="text-2xl mb-1">{ind.icon}</div>
                  <p className="font-sans text-xs md:text-sm text-slate-800 leading-tight font-medium">
                    {ind.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evolution — strategic timeline image */}
        <section className="bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950 px-6 py-14 md:py-16">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3 text-center">
              The Evolution
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Lightbox
                src="/photos/evolution-timeline.png"
                alt="The Evolution: From Esports to AI Infrastructure — This Isn't a Pivot, It's the Culmination of a Proven Strategy"
                thumbClassName="w-full h-auto"
              />
            </div>
            <p className="text-center mt-6 font-sans text-sm text-sky-300/70">
              Click to enlarge
            </p>
          </div>
        </section>

        {/* Explore — navigation cards */}
        <section className="bg-white px-6 py-14 md:py-16">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-2 text-center">
              Explore
            </p>
            <h2 className="font-display text-2xl md:text-4xl text-slate-900 text-center leading-tight mb-10">
              Dive deeper.
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block bg-slate-50 rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  <h3 className="font-display text-xl text-slate-900 mb-1 group-hover:text-blue-900 transition">
                    {link.label}
                  </h3>
                  <p className="font-sans text-sm text-slate-600">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Current Ecosystem */}
        <section className="bg-slate-50 px-6 py-14 md:py-16 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-2 text-center">Current Ecosystem</p>
            <h2 className="font-display text-2xl md:text-4xl text-slate-900 text-center leading-tight mb-3">
              What Rick Is Building Now
            </h2>
            <p className="text-center text-slate-600 font-sans mb-10 max-w-2xl mx-auto">
              Rick&apos;s current work centers on CyberHope AI and PrecognitionOS — governed AI
              infrastructure for accountable autonomous work — alongside a connected ecosystem.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "CyberHope AI", role: "Current Company", desc: "Developing PrecognitionOS — governed AI infrastructure for the AI-agent economy.", href: "https://cyberhopeai.com", highlight: true },
                { name: "PrecognitionOS", role: "Flagship Platform", desc: "Governed AI operating layer: attribution, provenance, human review, quality gates, accountable delivery.", href: "https://cyberhopeai.com", highlight: true },
                { name: "The LAN Network", role: "Implementation Partner", desc: "Human-led AI technology development, cybersecurity, and apprenticeship-enabled delivery.", href: "https://thelannetwork.com", highlight: false },
                { name: "Hope Training Academy", role: "Training + Apprenticeships", desc: "Training and apprenticeship pathways in technology, IT, cybersecurity, coding, and AI.", href: "https://hopetrainingacademy.org", highlight: false },
                { name: "Video Game Palooza", role: "Nonprofit Partner", desc: "Nonprofit education and community-impact lineage. 2,000+ Hoosiers trained since 2018.", href: "https://videogamepalooza.org", highlight: false },
              ].map(e => (
                <a key={e.name} href={e.href} target="_blank" rel="noopener noreferrer"
                  className={`group block rounded-xl border p-5 no-underline hover:-translate-y-0.5 hover:shadow-md transition ${e.highlight ? "border-blue-200 bg-blue-50 hover:border-blue-400" : "border-slate-200 bg-white hover:border-blue-300"}`}>
                  <p className="font-sans text-xs text-blue-700 font-semibold uppercase tracking-wider mb-1">{e.role}</p>
                  <h3 className="font-display text-xl text-slate-900 mb-2 group-hover:text-blue-900 transition">{e.name}</h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">{e.desc}</p>
                </a>
              ))}
              <Link href="/current-work"
                className="group block rounded-xl border border-dashed border-slate-300 bg-white p-5 no-underline hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition flex flex-col justify-center items-center text-center">
                <p className="font-display text-lg text-slate-600 group-hover:text-blue-900 transition">See Full Ecosystem →</p>
                <p className="font-sans text-xs text-slate-400 mt-1">Current Work page</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-indigo-950 to-blue-950 text-blue-200 px-6 py-16 text-center">
          <p className="font-display text-2xl text-white mb-3">
            Governed AI for the Real World
          </p>
          <p className="font-sans max-w-2xl mx-auto mb-6 text-sky-100 leading-relaxed">
            Rick&apos;s current work continues through{" "}
            <a href="https://cyberhopeai.com" className="text-sky-300 hover:text-sky-200 underline underline-offset-4">CyberHope AI</a>{" "}
            and PrecognitionOS, focused on making AI-agent work more attributable, reviewable,
            secure, and accountable.
          </p>
          <a href="https://cyberhopeai.com" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-sky-400 text-blue-950 rounded-lg font-bold text-sm hover:bg-sky-300 transition no-underline mb-10">
            Visit CyberHope AI →
          </a>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 mb-6 text-xs">
            <a href="https://cyberhopeai.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-sky-300 no-underline">CyberHope AI</a>
            <span className="text-blue-800">·</span>
            <a href="https://thelannetwork.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-sky-300 no-underline">The LAN Network</a>
            <span className="text-blue-800">·</span>
            <a href="https://hopetrainingacademy.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-sky-300 no-underline">Hope Training Academy</a>
            <span className="text-blue-800">·</span>
            <a href="https://videogamepalooza.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-sky-300 no-underline">Video Game Palooza</a>
            <span className="text-blue-800">·</span>
            <Link href="/contact" className="text-blue-400 hover:text-sky-300 no-underline">Contact</Link>
          </div>
          <p className="text-xs tracking-widest uppercase text-blue-400/60">
            © {new Date().getFullYear()} Rick Barretto · Indianapolis, IN
          </p>
        </footer>
      </main>
    </>
  );
}
