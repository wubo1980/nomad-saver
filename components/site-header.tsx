import Link from "next/link";

const navItems = [
  { href: "/#featured", label: "Featured Guides" },
  { href: "/#budget-travel", label: "Budget Travel" },
  { href: "/#digital-nomad", label: "Digital Nomad" },
  { href: "/#all-articles", label: "All Articles" },
];

/**
 * Renders the top navigation for the site.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-bold tracking-[0.24em] text-white shadow-[0_16px_40px_-20px_rgba(5,150,105,0.9)]">
            NS
          </span>
          <div className="space-y-1">
            <p className="font-display text-lg font-semibold tracking-tight text-slate-950">
              Nomad Saver
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Spend less, travel longer
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
