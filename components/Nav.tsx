import Link from "next/link";

export const navItems = [
  { href: "/", label: "Overview" },
  { href: "/career", label: "Career" },
  { href: "/inventions", label: "Inventions" },
  { href: "/skilldna", label: "SkillDNA" },
  { href: "/press", label: "Press & Media" },
  { href: "/contact", label: "Contact", disabled: true },
];

export default function Nav({ active }: { active?: string }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-slate-900 hover:text-blue-900 transition"
        >
          Rick Barretto
        </Link>
        <ul className="flex items-center gap-1 text-sm">
          {navItems.map((item) => {
            const isActive = active === item.href;
            if (item.disabled) {
              return (
                <li key={item.href}>
                  <span className="px-3 py-1.5 text-slate-400 cursor-not-allowed">
                    {item.label}
                  </span>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md transition ${
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
      </div>
    </nav>
  );
}
