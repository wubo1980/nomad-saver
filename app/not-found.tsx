import Link from "next/link";

/**
 * Renders a friendly fallback when an article slug does not exist.
 */
export default function NotFound() {
  return (
    <div className="content-shell">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center lg:px-8">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Page not found
        </span>
        <h1 className="mt-8 font-display text-5xl tracking-tight text-slate-950">
          This guide is not in the library.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          The article may have moved, the link may be incomplete, or the page
          never existed in the first place.
        </p>
        <Link
          className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          href="/"
        >
          Return to homepage
        </Link>
      </div>
    </div>
  );
}
