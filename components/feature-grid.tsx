type FeatureCard = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  anchor: string;
};

const featureCards: FeatureCard[] = [
  {
    id: "budget",
    eyebrow: "Budget Travel",
    title: "Stretch your travel budget without shrinking the experience.",
    description:
      "Country comparisons, cheap flight tactics, accommodation trade-offs, and insurance guidance that help you stay on the road longer.",
    bullets: [
      "Lower daily cost planning",
      "Flight and accommodation systems",
      "Practical risk management",
    ],
    anchor: "#budget-travel",
  },
  {
    id: "nomad",
    eyebrow: "Digital Nomad",
    title: "Build a travel routine that still protects your work output.",
    description:
      "Remote job search frameworks, city cost rankings, visa comparisons, and gear choices designed for stable long-term mobility.",
    bullets: [
      "Remote income pathways",
      "Cities ranked by cost and practicality",
      "Tools, visas, and workflow setups",
    ],
    anchor: "#digital-nomad",
  },
];

/**
 * Renders the two editorial feature cards on the homepage.
 */
export function FeatureGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {featureCards.map((card) => (
        <article
          key={card.id}
          className="group rounded-[32px] border border-emerald-100 bg-white p-8 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_-48px_rgba(15,23,42,0.42)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {card.eyebrow}
          </p>
          <h3 className="mt-5 font-display text-3xl tracking-tight text-slate-950">
            {card.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {card.description}
          </p>

          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
            {card.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-600" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <a
            className="mt-8 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700 transition group-hover:border-emerald-300 group-hover:bg-emerald-100"
            href={card.anchor}
          >
            Explore this track
          </a>
        </article>
      ))}
    </div>
  );
}
