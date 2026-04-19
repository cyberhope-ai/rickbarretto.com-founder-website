import { keyHighlights } from "@/content/companies";

type Stat = { value: string | number; label: string; sub?: string };

export default function KeyHighlights() {
  const stats: Stat[] = [
    { value: keyHighlights.companies, label: "Companies Founded" },
    { value: keyHighlights.firstInCategory, label: "First-in-Category", sub: "Created new markets" },
    { value: keyHighlights.patentsDrafted, label: "Patents Drafted" },
    { value: keyHighlights.yearsBuilding, label: "Years Building" },
    { value: keyHighlights.acquisitions, label: "M&A Exits", sub: keyHighlights.acquisitionValue },
    { value: keyHighlights.studentsTrained, label: "Hoosiers Trained", sub: "Zero tuition charged" },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="font-sans text-xs tracking-widest uppercase text-blue-700 mb-4">
          Key Highlights
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-slate-200 p-4 hover:border-blue-300 hover:shadow-sm transition"
            >
              <div className="font-display text-3xl md:text-4xl text-blue-900 leading-none mb-1">
                {s.value}
              </div>
              <div className="font-sans text-xs tracking-wide text-slate-700 uppercase">
                {s.label}
              </div>
              {s.sub && (
                {/* MED-2 fix: text-[11px]→text-xs */}
                <div className="font-sans text-xs text-slate-500 mt-1">
                  {s.sub}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          Inducted into the International Video Game Hall of Fame ·{" "}
          {keyHighlights.hallOfFameYear}
        </p>
      </div>
    </section>
  );
}
