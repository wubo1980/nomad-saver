import Link from "next/link";

import type { Article } from "@/lib/content";

type ArticleCardProps = {
  article: Article;
};

/**
 * Renders an article summary card used on the homepage and related lists.
 */
export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group rounded-[28px] border border-emerald-100 bg-white p-6 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_36px_80px_-50px_rgba(15,23,42,0.42)]">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
          {article.category}
        </span>
        <span>{article.readTime}</span>
        <span>{article.updatedAt}</span>
      </div>

      <div className="mt-5 space-y-4">
        <h3 className="font-display text-2xl tracking-tight text-slate-950 transition group-hover:text-emerald-700">
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-sm leading-7 text-slate-600">{article.excerpt}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-xs text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7">
        <Link
          className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
          href={`/articles/${article.slug}`}
        >
          Read article
        </Link>
      </div>
    </article>
  );
}
