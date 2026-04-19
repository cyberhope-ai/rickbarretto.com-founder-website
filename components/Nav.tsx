"use client";

import Link from "next/link";
import { useState } from "react";

export const navItems = [
  { href: "/", label: "Overview" },
  { href: "/career", label: "Career" },
  { href: "/inventions", label: "Inventions" },
  { href: "/skilldna", label: "SkillDNA" },
  { href: "/press", label: "Press & Media" },
  { href: "/story", label: "The Story" },
  { href: "/contact", label: "Contact", disabled: true },
];

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-slate-900 hover:text-blue-900 transition py-2"
        >
          rickbarretto.com
        </Link>

        {/* Desktop nav — hidden on mobile (CRIT-1 fix: was overflow-causing flex on all widths) */}
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item) => {
            const isActive = active === item.href;
            if (item.disabled) {
              return (
                <li key={item.href}>
                  <span className="px-3 py-3 text-slate-400 cursor-not-allowed">
                    {item.label}
                  </span>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-3 rounded-md transition ${
                    isActive
                      ? "bg-blue-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger button (CRIT-1 fix) */}
        <button
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile dropdown — full-width links with 44px+ tap targets (CRIT-2 fix) */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-1">
          {navItems.map((item) =>
            item.disabled ? (
              <span
                key={item.href}
                className="block py-3 text-sm text-slate-400 border-b border-slate-100 last:border-0"
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm border-b border-slate-100 last:border-0 ${
                  active === item.href
                    ? "text-blue-900 font-semibold"
                    : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
