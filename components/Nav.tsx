import Link from "next/link";

export const navItems = [
  { href: "/",              label: "Home" },
  { href: "/career",        label: "Career Timeline" },
  { href: "/current-work",  label: "Current Work" },
  { href: "/inventions",    label: "Inventions" },
  { href: "/story",         label: "Founder Story" },
  { href: "/press",         label: "Media / Press" },
  { href: "/contact",       label: "Contact" },
];

export default function Nav({ active }: { active?: string }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-display text-lg tracking-tight text-slate-900 hover:text-blue-900 transition">
          rickbarretto.com
        </Link>
        <ul className="flex items-center gap-0.5 text-xs">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-2.5 py-1.5 rounded-md transition font-medium ${
                    isActive ? "bg-blue-900 text-white" : "text-slate-700 hover:bg-slate-100"
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
