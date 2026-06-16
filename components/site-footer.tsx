import Link from "next/link";

/**
 * Renders the editorial footer with trust and disclosure messaging.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-50/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-2xl tracking-tight text-slate-950">
            Nomad Saver
          </p>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Practical guides for travelers who need low daily costs, reliable
            work setups, and fewer expensive mistakes. The site uses editorial
            research, planning frameworks, and field-tested recommendations
            instead of hype.
          </p>
          <p className="text-sm leading-7 text-slate-500">
            Some future recommendations may include affiliate links. They will
            only appear when a product or service clearly supports the travel
            workflow described in the guide.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Explore
          </p>
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <Link className="transition hover:text-emerald-700" href="/#budget-travel">
              Budget Travel Guides
            </Link>
            <Link className="transition hover:text-emerald-700" href="/#digital-nomad">
              Digital Nomad Guides
            </Link>
            <Link className="transition hover:text-emerald-700" href="/#all-articles">
              Full Article Library
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
