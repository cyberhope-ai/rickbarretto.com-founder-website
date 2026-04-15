import Nav from "@/components/Nav";
import VideoLightbox from "@/components/VideoLightbox";
import { pressSections, type PressTier } from "@/content/press";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media — Rick Barretto",
  description:
    "Press coverage, TV appearances, and video archive across 35 years of Rick Barretto's companies — DreamAuthentics, iRecord, Video Game Palooza, Game On, Hope Training Academy, and more.",
};

const tierLabel: Record<PressTier, string> = {
  tier1: "National / International",
  tier2: "Gaming & Tech Specialty",
  regional: "Regional & Lifestyle",
  tv: "National TV",
};
const tierColor: Record<PressTier, string> = {
  tier1: "bg-blue-900 text-white",
  tier2: "bg-blue-100 text-blue-900 border border-blue-300",
  regional: "bg-slate-100 text-slate-800 border border-slate-300",
  tv: "bg-amber-500 text-amber-950",
};

export default function PressPage() {
  return (
    <>
      <Nav active="/press" />
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <p className="font-sans text-xs tracking-widest uppercase text-sky-300 mb-3">
              Press &amp; Media
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4">
              50+ press features across 35 years.
            </h1>
            <p className="font-sans text-lg md:text-xl text-sky-100 max-w-3xl leading-relaxed">
              From Billboard and Rolling Stone to NBC and The Today Show —
              Rick&rsquo;s companies have been covered by major national,
              specialty, and regional media across gaming, law enforcement,
              education, and AI.
            </p>
          </div>
        </section>

        {pressSections.map((s) => (
          <section
            key={s.companyId}
            id={s.companyId}
            className="px-6 py-12 md:py-16 border-b border-slate-200 odd:bg-white even:bg-slate-50"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-2xl md:text-4xl text-slate-900 leading-tight mb-2">
                {s.company}
              </h2>
              <p className="font-sans text-slate-700 max-w-3xl leading-relaxed mb-8">
                {s.summary}
              </p>

              {/* Press items */}
              {s.press.length > 0 && (
                <div className="mb-10">
                  <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-3">
                    Press archive · {s.press.length} features
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.press.map((p, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans ${tierColor[p.tier]}`}
                        title={
                          p.note
                            ? `${p.note} · ${tierLabel[p.tier]}`
                            : tierLabel[p.tier]
                        }
                      >
                        <span className="font-semibold">{p.publication}</span>
                        {p.note && (
                          <span className="opacity-75 text-[10px]">
                            · {p.note}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Videos */}
              {s.videos.length > 0 ? (
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-3">
                    Video
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {s.videos.map((v, i) => (
                      <VideoLightbox key={i} {...v} />
                    ))}
                  </div>
                </div>
              ) : s.press.length === 0 ? (
                <p className="text-sm text-slate-500 italic">
                  Archive forthcoming.
                </p>
              ) : null}
            </div>
          </section>
        ))}

        {/* Footer */}
        <footer className="bg-gradient-to-b from-indigo-950 to-blue-950 text-blue-200 px-6 py-16 text-center">
          <p className="font-sans max-w-xl mx-auto mb-3 text-sm">
            Additional press PDFs, video archives, and tearsheets available on
            request.
          </p>
          <p className="text-xs tracking-widest uppercase text-blue-400/60">
            © {new Date().getFullYear()} Rick Barretto · Indianapolis, IN
          </p>
        </footer>
      </main>
    </>
  );
}
