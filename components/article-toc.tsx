import type { HeadingItem } from "@/lib/markdown";

type ArticleTocProps = {
  headings: HeadingItem[];
};

/**
 * Renders the article table of contents from extracted headings.
 */
export function ArticleToc({ headings }: ArticleTocProps) {
  if (!headings.length) {
    return null;
  }

  return (
    <div className="rounded-[28px] border border-emerald-100 bg-emerald-50/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
        On this page
      </p>
      <ul className="mt-5 space-y-3 text-sm text-slate-600">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              className={`block transition hover:text-emerald-700 ${
                heading.level === 3 ? "pl-4" : ""
              }`}
              href={`#${heading.id}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
