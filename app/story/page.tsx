import { chapters } from "@/content/chapters";
import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Full Story — Rick Barretto",
  description:
    "Eight chapters — from Valencia, California to PrecognitionOS. The full narrative of a dreamer who was told no his entire career and built it anyway.",
};

export default function StoryPage() {
  return (
    <>
      <Nav active="/story" />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3">
              The Full Story
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4">
              Eight chapters. Thirty-five years.
            </h1>
            <p className="font-sans text-lg md:text-xl text-sky-100 max-w-3xl leading-relaxed">
              From a kid in Valencia, California to the first person on earth
              to unite four competing AI models inside one governance system.
            </p>
          </div>
        </section>

        {chapters.map((c, i) => (
          <section
            key={c.id}
            id={c.id}
            className={`px-6 py-24 md:py-32 ${
              i % 2 === 0 ? "bg-white" : "bg-slate-50"
            }`}
          >
            <div className="max-w-3xl mx-auto">
              <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-4">
                {c.era} · Chapter {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8 text-slate-900">
                {c.title}
              </h2>
              <p className="font-sans text-xl md:text-2xl leading-relaxed text-slate-700 mb-10 font-light">
                {c.lede}
              </p>
              <div className="prose prose-slate prose-lg max-w-none space-y-5">
                {c.body.map((p, j) => (
                  <p key={j} className="text-slate-800 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {c.pullQuote && (
                <blockquote className="mt-12 border-l-4 border-blue-700 pl-6 py-2">
                  <p className="font-display text-2xl md:text-3xl italic text-slate-900 leading-snug">
                    &ldquo;{c.pullQuote}&rdquo;
                  </p>
                  {c.pullQuoteBy && (
                    <cite className="font-sans text-sm tracking-wide not-italic text-slate-600 mt-3 block">
                      — {c.pullQuoteBy}
                    </cite>
                  )}
                </blockquote>
              )}
            </div>
          </section>
        ))}

        <footer className="bg-gradient-to-b from-indigo-950 to-blue-950 text-blue-200 px-6 py-16 text-center">
          <p className="font-display text-2xl text-white mb-3">
            The story isn&rsquo;t over.
          </p>
          <p className="text-xs tracking-widest uppercase text-blue-400/60">
            © {new Date().getFullYear()} Rick Barretto · Indianapolis, IN
          </p>
        </footer>
      </main>
    </>
  );
}
