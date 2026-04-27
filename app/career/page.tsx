import { companies } from "@/content/companies";
import Nav from "@/components/Nav";
import KeyHighlights from "@/components/KeyHighlights";
import RickIntro from "@/components/RickIntro";
import Timeline from "@/components/Timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Timeline | Rick Barretto",
  description:
    "A timeline of companies, inventions, platforms, and training systems built across technology shifts — from medical documentation to governed AI infrastructure.",
};

export default function CareerPage() {
  return (
    <>
      <Nav active="/career" />
      <main className="bg-white min-h-screen">
        {/* Career hero */}
        <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 text-white px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3">
              Career Timeline
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4">
              35 years. 22+ companies. 8 first-in-category inventions.
            </h1>
            <p className="font-sans text-lg md:text-xl text-sky-100 max-w-3xl leading-relaxed mb-4">
              A timeline of companies, inventions, platforms, and training systems
              built across technology shifts — from medical documentation and
              location-based entertainment, through esports, education, and
              cybersecurity, to governed AI infrastructure.
            </p>
            <p className="font-sans text-sm text-sky-300 max-w-3xl leading-relaxed">
              Rick Barretto&apos;s career has followed one consistent pattern:
              identify an emerging technology shift, build a practical platform
              around it, and create pathways for people to participate.
            </p>
          </div>
        </section>

        <KeyHighlights />

        <RickIntro />

        {/* Founder quote — AI + the journey */}
        <section className="bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950 text-white px-6 py-16 md:py-20 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-4 text-center">
              In his own words
            </p>
            <blockquote className="space-y-5">
              <p className="font-display italic text-lg md:text-xl text-sky-100 leading-relaxed">
                &ldquo;As a coder growing up, I was limited by time, budget,
                and the specialty-partner relationships I could find &mdash;
                barriers that stifled creativity and made every vision take
                years longer than it needed to. No traditional capital.
                Self-funded everything. No VCs, no friends in Silicon Valley
                starting public companies.
              </p>
              <p className="font-display italic text-lg md:text-xl text-sky-100 leading-relaxed">
                The advent of AI has utterly shattered the distance between
                idea and manifestation. Over 100 separate GitHub projects
                &mdash; pieces of a puzzle for PrecognitionOS that had never
                been created &mdash; built in a fraction of the time it once
                would have taken.
              </p>
              <p className="font-display italic text-lg md:text-xl text-sky-100 leading-relaxed">
                My outlook: anyone who takes the time to learn to interact
                with this technology &mdash; to integrate it into their daily
                workflow as a complement to their natural abilities &mdash;
                will see the same kind of personal and professional
                advancement. It&rsquo;s been an unbelievable ride.&rdquo;
              </p>
              <cite className="block font-sans text-sm text-sky-300 not-italic tracking-wide pt-2">
                &mdash; Rick Barretto, Founder &amp; CEO, CyberHope AI
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-2">
              Interactive Timeline
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-slate-900 mb-2 leading-tight">
              Companies &amp; Technologies Created
            </h2>
            <p className="text-slate-600 mb-10 md:mb-14 max-w-2xl">
              Click any card to expand customers, products, price points,
              markets, and notable context. Chronological from 1998 forward.
            </p>
            <Timeline companies={companies} />
          </div>
        </section>

        {/* Next Chapter CTA */}
        <footer className="bg-gradient-to-b from-indigo-950 to-blue-950 text-blue-200 px-6 py-16 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3">
            The Next Chapter
          </p>
          <p className="font-display text-3xl text-white mb-4">
            Governed AI Infrastructure
          </p>
          <p className="font-sans max-w-2xl mx-auto mb-8 text-sky-100 leading-relaxed">
            Rick&apos;s current work continues through{" "}
            <a href="https://cyberhopeai.com" className="text-sky-300 hover:text-sky-200 underline underline-offset-4">
              CyberHope AI
            </a>{" "}
            and PrecognitionOS, focused on making AI-agent work more
            attributable, reviewable, secure, and accountable.
          </p>
          <a href="https://cyberhopeai.com" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-sky-400 text-blue-950 rounded-lg font-bold text-sm hover:bg-sky-300 transition no-underline mb-8">
            Visit CyberHope AI →
          </a>
          <p className="text-xs tracking-widest uppercase text-blue-400/60 mt-6">
            © {new Date().getFullYear()} Rick Barretto · Indianapolis, IN
          </p>
        </footer>
      </main>
    </>
  );
}
