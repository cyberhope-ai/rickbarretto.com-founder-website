import CompanyCard from "./CompanyCard";
import type { Company } from "@/content/companies";

export default function Timeline({ companies }: { companies: Company[] }) {
  // Sort chronologically by start year
  const sorted = [...companies].sort((a, b) => a.yearStart - b.yearStart);

  return (
    <div className="relative">
      {/* Vertical timeline spine */}
      <div
        className="absolute left-6 md:left-[7.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-blue-600 to-indigo-900"
        aria-hidden
      />

      <ol className="space-y-10 md:space-y-14">
        {sorted.map((c) => (
          <li key={c.id} className="relative pl-14 md:pl-40">
            {/* Year marker */}
            <div
              className="absolute left-0 top-2 w-12 md:w-24 text-right font-display text-xl md:text-2xl text-blue-900 leading-none"
              aria-hidden
            >
              {c.yearStart}
            </div>
            {/* Dot */}
            <div
              className="absolute left-[1.15rem] md:left-[7.15rem] top-2.5 w-3.5 h-3.5 rounded-full bg-blue-700 ring-4 ring-white shadow"
              aria-hidden
            />
            <CompanyCard c={c} />
          </li>
        ))}
      </ol>
    </div>
  );
}
