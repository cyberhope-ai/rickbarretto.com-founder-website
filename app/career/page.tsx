import { companies } from "@/content/companies";
import Nav from "@/components/Nav";
import KeyHighlights from "@/components/KeyHighlights";
import ThePattern from "@/components/ThePattern";
import Timeline from "@/components/Timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career — Rick Barretto",
  description:
    "35 years, 22 companies, 8 first-in-category inventions. A visual timeline from medical informatics to AI governance.",
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
              Work Experience
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4">
              35 years. 22 companies. 8 first-in-category inventions.
            </h1>
            <p className="font-sans text-lg md:text-xl text-sky-100 max-w-3xl leading-relaxed">
              From medical dictation systems to the world&rsquo;s first
              multi-game arcade, from an esports bootcamp house to the first
              AI-governance operating system — a career spent turning dreams
              into reality, mostly without investors and almost always without
              permission.
            </p>
          </div>
        </section>

        <KeyHighlights />

        <ThePattern />

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

        {/* Footer */}
        <footer className="bg-gradient-to-b from-indigo-950 to-blue-950 text-blue-200 px-6 py-16 text-center">
          <p className="font-display text-2xl text-white mb-3">
            The story isn&rsquo;t over.
          </p>
          <p className="font-sans max-w-xl mx-auto mb-8">
            Currently founder and CEO of{" "}
            <a
              href="https://cyberhopeai.com"
              className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
            >
              CyberHope AI
            </a>
            , building PrecognitionOS — the first operating system for
            governed artificial intelligence.
          </p>
          <p className="text-xs tracking-widest uppercase text-blue-400/60">
            © {new Date().getFullYear()} Rick Barretto · Indianapolis, IN
          </p>
        </footer>
      </main>
    </>
  );
}
