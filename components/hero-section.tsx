const heroStats = [
  {
    label: "Core promise",
    value: "$50/day",
    detail: "Low-cost destinations and living systems that still support work.",
  },
  {
    label: "Workflow focus",
    value: "Remote-ready",
    detail: "Tools, visas, connectivity, and housing choices that keep projects moving.",
  },
  {
    label: "Content style",
    value: "Data first",
    detail: "Guides grounded in cost comparisons, platform trade-offs, and practical tactics.",
  },
];

/**
 * Renders the hero section and the editorial positioning cards.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-emerald-100 bg-[linear-gradient(180deg,#ffffff_0%,#f0fdf4_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,150,105,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,119,6,0.09),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(transparent_0%,transparent_96%,rgba(5,150,105,0.08)_96%,rgba(5,150,105,0.08)_100%)] [background-size:100%_24px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm">
            Budget Travel + Digital Nomad Guide
          </span>

          <div className="space-y-6">
            <h1 className="max-w-4xl font-display text-5xl leading-none tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Spend less.
              <br />
              Travel longer.
              <br />
              Work anywhere.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Nomad Saver helps you choose cheaper destinations, smarter routes,
              better remote work tools, and lower-risk travel systems without
              falling for unrealistic lifestyle marketing.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_-18px_rgba(5,150,105,0.95)] transition hover:bg-emerald-700"
              href="#featured"
            >
              Read featured guides
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
              href="#all-articles"
            >
              Browse all articles
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[28px] border border-emerald-100 bg-white/90 p-6 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {stat.label}
              </p>
              <p className="mt-4 font-display text-3xl tracking-tight text-slate-950">
                {stat.value}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
