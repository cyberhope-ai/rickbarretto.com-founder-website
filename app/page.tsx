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
  { href: "/career", label: "Career Timeline", desc: "16 companies · 35 years · interactive timeline" },
  { href: "/inventions", label: "Inventions", desc: "The pattern: build the platform, invent the uses" },
  { href: "/skilldna", label: "SkillDNA", desc: "The world's first human potential dashboard" },
  { href: "/press", label: "Press & Media", desc: "59 press PDFs · 38 videos · national TV" },
  { href: "/story", label: "The Full Story", desc: "Eight chapters, from Valencia to PrecognitionOS" },
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
                  Welcome. This site is a working archive of a career spent
                  building things in Indianapolis &mdash;
                  &ldquo;India-No-Place for technology,&rdquo; as I like to
                  call it &mdash; without VC, without Silicon Valley, and
                  without anyone in my corner except my parents who took out
                  a second mortgage to fund the first idea nobody believed in.
                </p>
                <p>
                  Everything you&rsquo;ll see here &mdash; the companies, the
                  inventions, the press, the SkillDNA &mdash; came out of a
                  simple belief that if you see something five to seven years
                  before anyone else, build the platform that makes it
                  possible, and let the uses invent themselves.
                </p>
                <p>
                  My hope is that some small piece of this is useful to
                  you &mdash; that it sparks an idea, validates a hunch, or
                  reminds you that you don&rsquo;t need permission to build
                  what you can already see. Enjoy the ride.
                </p>
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

        {/* Footer */}
        <footer className="bg-gradient-to-b from-indigo-950 to-blue-950 text-blue-200 px-6 py-16 text-center">
          <p className="font-display text-2xl text-white mb-3">
            The story isn&rsquo;t over.
          </p>
          <p className="font-sans max-w-xl mx-auto mb-8">
            Rick Barretto is currently founder and CEO of{" "}
            <a
              href="https://cyberhopeai.com"
              className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
            >
              CyberHope AI
            </a>
            , building PrecognitionOS — the first operating system for governed
            artificial intelligence.
          </p>
          <p className="text-xs tracking-widest uppercase text-blue-400/60">
            © {new Date().getFullYear()} Rick Barretto · Indianapolis, IN
          </p>
        </footer>
      </main>
    </>
  );
}
