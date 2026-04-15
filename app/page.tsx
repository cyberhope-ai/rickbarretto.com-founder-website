import { chapters } from "@/content/chapters";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24 text-center bg-stone-900 text-stone-50">
        <p className="font-sans text-sm tracking-widest uppercase text-amber-400 mb-6">
          Founder · CyberHope AI · PrecognitionOS
        </p>
        <h1 className="font-display text-5xl md:text-8xl leading-tight mb-8 max-w-5xl">
          Rick Barretto
        </h1>
        <p className="font-sans text-lg md:text-2xl max-w-3xl text-stone-300 leading-relaxed">
          Thirty-five years of invention. Zero outside investors until 2026.
          The story of someone who was told{" "}
          <em className="text-amber-300 not-italic">no</em> his entire career
          and built it anyway.
        </p>
        <div className="mt-16 text-stone-500 text-sm tracking-wider">
          ↓ scroll
        </div>
      </section>

      {/* Chapters */}
      {chapters.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className={`px-6 py-24 md:py-32 ${
            i % 2 === 0 ? "bg-stone-50" : "bg-stone-100"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-amber-700 mb-4">
              {c.era} · Chapter {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
              {c.title}
            </h2>
            <p className="font-sans text-xl md:text-2xl leading-relaxed text-stone-700 mb-10 font-light">
              {c.lede}
            </p>
            <div className="prose prose-stone prose-lg max-w-none space-y-5">
              {c.body.map((p, j) => (
                <p key={j} className="text-stone-800 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            {c.pullQuote && (
              <blockquote className="mt-12 border-l-4 border-amber-600 pl-6 py-2">
                <p className="font-display text-2xl md:text-3xl italic text-stone-900 leading-snug">
                  &ldquo;{c.pullQuote}&rdquo;
                </p>
                {c.pullQuoteBy && (
                  <cite className="font-sans text-sm tracking-wide not-italic text-stone-600 mt-3 block">
                    — {c.pullQuoteBy}
                  </cite>
                )}
              </blockquote>
            )}
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 px-6 py-16 text-center">
        <p className="font-display text-2xl text-stone-100 mb-3">
          The story isn&rsquo;t over.
        </p>
        <p className="font-sans max-w-xl mx-auto mb-8">
          Rick Barretto is currently founder and CEO of{" "}
          <a
            href="https://cyberhopeai.com"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4"
          >
            CyberHope AI
          </a>
          , building PrecognitionOS — the first operating system for governed
          artificial intelligence.
        </p>
        <p className="text-xs tracking-widest uppercase text-stone-600">
          © {new Date().getFullYear()} Rick Barretto · Indianapolis, IN
        </p>
      </footer>
    </main>
  );
}
