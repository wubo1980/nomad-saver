import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteMeta } from "@/data/site-meta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: {
    default: siteMeta.defaultTitle,
    template: siteMeta.titleTemplate,
  },
  description: siteMeta.siteDescription,
  keywords: siteMeta.defaultKeywords,
  applicationName: siteMeta.siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteMeta.siteName,
    title: siteMeta.defaultTitle,
    description: siteMeta.siteDescription,
    url: siteMeta.siteUrl,
    locale: siteMeta.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.defaultTitle,
    description: siteMeta.siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": "N21K5VoxWUyIIwGf5NZjvhvU2Ty_JC2EoVhMWPL-iro",
  },
};

/**
 * Renders the root layout with shared navigation and footer.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-white font-sans text-slate-950 antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
        {siteMeta.gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteMeta.gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());
                gtag("config", "${siteMeta.gaMeasurementId}");
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
