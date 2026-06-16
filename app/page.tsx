import { ArticleCard } from "@/components/article-card";
import { FeatureGrid } from "@/components/feature-grid";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import {
  getAllArticles,
  getArticlesByCategory,
  getFeaturedArticles,
  getLatestArticles,
} from "@/lib/content";

/**
 * Renders the editorial homepage with featured and categorized articles.
 */
export default function Home() {
  const featuredArticles = getFeaturedArticles();
  const latestArticles = getLatestArticles();
  const budgetTravelArticles = getArticlesByCategory("Budget Travel");
  const digitalNomadArticles = getArticlesByCategory("Digital Nomad");
  const allArticles = getAllArticles();

  return (
    <div className="content-shell">
      <HeroSection />

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20 lg:px-8 lg:py-24">
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Two Tracks"
            title="One site for spending less and traveling longer."
            description="The homepage is split into two editorial lanes so you can either optimize the cost of travel itself or optimize the systems that keep remote work sustainable while moving."
          />
          <FeatureGrid />
        </section>

        <section className="space-y-10" id="featured">
          <SectionHeading
            eyebrow="Featured Guides"
            title="Start with the highest-impact topics."
            description="These guides answer the biggest questions first: where your money stretches further, how to protect the trip, and how to make travel compatible with real work."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Latest"
            title="Fresh planning notes for current travelers."
            description="Updated cost, workflow, and route planning pieces to keep the library useful for people making decisions right now."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="space-y-10" id="budget-travel">
          <SectionHeading
            eyebrow="Budget Travel"
            title="Lower your travel burn rate without lowering your standards."
            description="Flight systems, accommodation trade-offs, risk protection, and city selection frameworks designed for travelers who want longer trips and fewer financial mistakes."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {budgetTravelArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="space-y-10" id="digital-nomad">
          <SectionHeading
            eyebrow="Digital Nomad"
            title="Build a mobile lifestyle that still supports focused work."
            description="Remote job strategy, city selection, visas, and travel-ready tools for people who want movement without destroying their income structure."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {digitalNomadArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[36px] border border-emerald-100 bg-emerald-50/80 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Editorial Monetization Model
            </p>
            <h2 className="font-display text-3xl tracking-tight text-slate-950 md:text-4xl">
              Recommendations stay useful only when they solve a real travel bottleneck.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              The site is designed to support future affiliate recommendations
              for travel insurance, VPNs, bank cards, backpacks, portable
              monitors, and remote work tools. Every guide starts with a
              planning problem first, then introduces tools only where they
              remove friction or reduce risk.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Travel cards that reduce foreign exchange friction",
              "Insurance and VPN tools that protect long trips",
              "Portable work gear that fits carry-on travel",
              "Booking and coliving platforms that improve trip planning",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/70 bg-white px-5 py-4 text-sm leading-7 text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10" id="all-articles">
          <SectionHeading
            eyebrow="Library"
            title="Browse the full Nomad Saver archive."
            description="All published guides in one place so you can move from inspiration to route planning, risk control, work setup, and travel execution without leaving the site."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {allArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
