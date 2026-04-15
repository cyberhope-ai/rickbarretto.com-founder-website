"use client";
import { useState } from "react";
import type { Company } from "@/content/companies";
import Lightbox from "./Lightbox";

const statusColors: Record<Company["status"], string> = {
  active: "bg-emerald-100 text-emerald-800 border-emerald-200",
  acquired: "bg-amber-100 text-amber-800 border-amber-200",
  historical: "bg-slate-100 text-slate-700 border-slate-200",
  milestone: "bg-blue-100 text-blue-800 border-blue-200",
};

const statusLabel: Record<Company["status"], string> = {
  active: "Active",
  acquired: "Acquired",
  historical: "Historical",
  milestone: "Milestone",
};

// Logo placeholder — monogram block with company initials + gradient.
// Replace by dropping public/companies/<id>/logo.svg and wiring logo field.
function LogoBlock({ name, logoUrl }: { name: string; logoUrl?: string }) {
  if (logoUrl) {
    return (
      <div className="w-24 h-24 md:w-28 md:h-28 shrink-0">
        <Lightbox
          src={logoUrl}
          alt={`${name} logo`}
          className="w-full h-full flex items-center justify-center"
          thumbClassName="max-w-full max-h-full object-contain hover:opacity-90 transition"
        />
      </div>
    );
  }
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 3)
    .join("")
    .toUpperCase();
  return (
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700 text-white flex items-center justify-center font-display text-2xl md:text-3xl tracking-tighter shadow-md shrink-0">
      {initials}
    </div>
  );
}

export default function CompanyCard({ c }: { c: Company }) {
  const [open, setOpen] = useState(false);

  const yearRange =
    c.yearEnd === "present"
      ? `${c.yearStart} – Present`
      : c.yearStart === c.yearEnd
        ? `${c.yearStart}`
        : `${c.yearStart} – ${c.yearEnd}`;

  return (
    <article
      id={c.id}
      className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all"
    >
      {/* Header: logo + name + badges */}
      <div className="p-6 md:p-8 flex gap-5 md:gap-6 items-start">
        <LogoBlock name={c.name} logoUrl={c.logo} />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusColors[c.status]}`}
            >
              {statusLabel[c.status]}
            </span>
            <span className="text-xs text-slate-500 font-sans">
              {yearRange}
            </span>
            {c.firstInCategory && (
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
                ★ First in Category
              </span>
            )}
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-slate-900 leading-tight mb-1">
            {c.name}
          </h3>
          <p className="text-slate-600 font-sans mb-4 italic">{c.tagline}</p>
          <p className="text-slate-800 font-sans leading-relaxed text-sm md:text-base">
            {c.description}
          </p>
          {c.cta && (c.cta.placement ?? "header") === "header" && (
            <a
              href={c.cta.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-sans font-semibold text-sm shadow-md hover:shadow-lg transition"
            >
              {c.cta.label} →
            </a>
          )}
        </div>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-6 md:px-8 py-3 bg-slate-50 hover:bg-blue-50 border-t border-slate-200 font-sans text-sm text-blue-900 font-medium transition flex items-center justify-between"
        aria-expanded={open}
      >
        <span>
          {open ? "Hide details" : "Show details"}
          {!open && " — customers, products, markets, notable"}
        </span>
        <span
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {/* Expanded body */}
      {open && (
        <div className="px-6 md:px-8 py-6 bg-slate-50/50 border-t border-slate-200 space-y-5">
          {c.cta && c.cta.placement === "details" && (
            <a
              href={c.cta.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-sans font-semibold text-sm shadow-md hover:shadow-lg transition"
            >
              ▶ {c.cta.label}
            </a>
          )}
          <DetailBlock label="Customers Served" items={c.highlights.customers} />
          <DetailBlock label="Products / Offerings" items={c.highlights.products} />

          {(c.highlights.pricePoint || c.highlights.markets?.length) && (
            <div className="grid md:grid-cols-2 gap-5">
              {c.highlights.pricePoint && (
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-700 mb-1.5">
                    Price Point
                  </p>
                  <p className="text-sm text-slate-800">{c.highlights.pricePoint}</p>
                </div>
              )}
              {c.highlights.markets && c.highlights.markets.length > 0 && (
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-700 mb-1.5">
                    Markets
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.highlights.markets.map((m) => (
                      <span
                        key={m}
                        className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-900 text-white"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <DetailBlock label="Notable" items={c.highlights.notable} accent />

          {c.exitNote && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-1.5">
                Exit / Outcome
              </p>
              <p className="text-sm text-slate-800 leading-relaxed">{c.exitNote}</p>
            </div>
          )}

          {/* Image gallery placeholder */}
          <div className="pt-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-700 mb-2.5">
              Gallery
            </p>
            {c.images && c.images.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {c.images.slice(0, 8).map((src, i) => (
                  <div key={i} className="aspect-[4/3]">
                    <Lightbox src={src} alt={`${c.name} ${i + 1}`} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center text-slate-400 text-xs"
                  >
                    photo {i + 1}
                  </div>
                ))}
              </div>
            )}
            {c.moreImagesUrl ? (
              <a
                href={c.moreImagesUrl}
                className="mt-3 inline-block text-sm text-blue-700 hover:text-blue-900 underline underline-offset-4"
              >
                More images →
              </a>
            ) : c.websiteUrl ? (
              <a
                href={c.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-blue-700 hover:text-blue-900 underline underline-offset-4"
              >
                Archive & more on arcadeinventors.com →
              </a>
            ) : null}
          </div>
        </div>
      )}
    </article>
  );
}

function DetailBlock({
  label,
  items,
  accent = false,
}: {
  label: string;
  items?: string[];
  accent?: boolean;
}) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-semibold tracking-widest uppercase text-blue-700 mb-1.5">
        {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li
            key={i}
            className={`text-sm leading-relaxed pl-4 relative ${accent ? "text-slate-900" : "text-slate-800"}`}
          >
            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-blue-700" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
