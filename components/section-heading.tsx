type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * Renders a reusable section heading with a compact eyebrow label.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="font-display text-3xl tracking-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
