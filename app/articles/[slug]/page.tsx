import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/article-body";
import { ArticleCard } from "@/components/article-card";
import { ArticleToc } from "@/components/article-toc";
import { siteMeta } from "@/data/site-meta";
import {
  getAllArticles,
  getArticleBySlug,
  getArticleHeadings,
  getRelatedArticles,
} from "@/lib/content";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

/**
 * Generates all article slugs for static output.
 */
export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

/**
 * Generates article-level metadata for SEO.
 */
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: siteMeta.defaultTitle,
      description: siteMeta.siteDescription,
    };
  }

  const canonicalPath = `/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [...siteMeta.defaultKeywords, ...article.tags, article.category],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: canonicalPath,
      siteName: siteMeta.siteName,
      locale: siteMeta.locale,
      publishedTime: `${article.updatedAt}T00:00:00.000Z`,
      authors: [siteMeta.siteName],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

/**
 * Renders a full article page with metadata, TOC, and related content.
 */
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const headings = getArticleHeadings(article);
  const relatedArticles = getRelatedArticles(article);

  return (
    <div className="content-shell">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(260px,0.22fr)] lg:items-start">
          <article className="reading-panel rounded-[36px] border border-emerald-100 bg-white p-8 md:p-10 lg:p-12">
            <div className="space-y-7 border-b border-emerald-100 pb-10">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                  {article.category}
                </span>
                <span>{article.readTime}</span>
                <span>Updated {article.updatedAt}</span>
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl font-display text-4xl tracking-tight text-slate-950 md:text-5xl">
                  {article.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-600">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="article-prose mt-10">
              <ArticleBody markdown={article.body} />
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <ArticleToc headings={headings} />
            <div className="rounded-[28px] border border-amber-100 bg-amber-50/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                Reader mindset
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Use each article as a planning tool. Compare the cost, workflow,
                and risk advice against your own travel style before you book.
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-16 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Continue reading
            </p>
            <h2 className="font-display text-3xl tracking-tight text-slate-950">
              More guides that fit the same planning problem
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
