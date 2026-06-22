import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import AttributionTracker from "@/components/AttributionTracker";
import CookieConsent from "@/components/CookieConsent";
import SiteAssistant from "@/components/SiteAssistant";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuoteCore+ | Quoting Software for Contractors & Trade Businesses",
  description:
    "QuoteCore+ helps contractors and trade businesses measure from plans, price jobs, send professional quotes, track approvals, create materials orders, and manage quote information in one workflow.",
  metadataBase: new URL("https://quote-core.com"),
  alternates: {
    canonical: "https://quote-core.com/",
  },
  openGraph: {
    title: "QuoteCore+ | Quoting Software for Contractors",
    description: "Measure, price, send, approve, and manage quotes in one connected workflow.",
    url: "https://quote-core.com/",
    siteName: "QuoteCore+",
    type: "website",
  },
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://quote-core.com/#organization",
      name: "QuoteCore+",
      alternateName: ["QuoteCore", "Quote Core", "Quote Core Plus", "QuoteCore Plus"],
      url: "https://quote-core.com/",
      logo: "https://quote-core.com/MainQCP.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@quote-core.com",
        contactType: "customer support",
      },
      sameAs: [
        "https://www.linkedin.com/company/quotecore/",
        "https://www.trustpilot.com/review/quote-core.com",
        "https://www.capterra.com/p/10023337/QuoteCore/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://quote-core.com/#website",
      name: "QuoteCore+",
      url: "https://quote-core.com/",
      publisher: {
        "@id": "https://quote-core.com/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://quote-core.com/#software",
      name: "QuoteCore+",
      alternateName: ["QuoteCore", "Quote Core", "Quote Core Plus", "QuoteCore Plus"],
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Quoting software for contractors and trade businesses, including digital takeoff, quote building, approval tracking, materials ordering, and quote-to-job workflow.",
      url: "https://quote-core.com/",
      publisher: {
        "@id": "https://quote-core.com/#organization",
      },
      offers: {
        "@type": "AggregateOffer",
        url: "https://quote-core.com/#pricing",
        priceCurrency: "USD",
        lowPrice: "19",
        highPrice: "59",
        offerCount: 3,
        offers: [
          { "@type": "Offer", name: "Starter", price: "19", priceCurrency: "USD", url: "https://quote-core.com/#pricing" },
          { "@type": "Offer", name: "Growth", price: "39", priceCurrency: "USD", url: "https://quote-core.com/#pricing" },
          { "@type": "Offer", name: "Pro", price: "59", priceCurrency: "USD", url: "https://quote-core.com/#pricing" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://quote-core.com/",
        },
      ],
    },
  ],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <AttributionTracker />
        <CookieConsent />
        <SiteAssistant />
        {/* Google Analytics 4 — loads gtag.js with Consent Mode default denied.
            Optional tracking scripts (Clarity, Meta Pixel, LinkedIn) are
            loaded conditionally by CookieConsent after user accepts. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HV8F4G8BN1"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
            gtag('js', new Date());
            gtag('config', 'G-HV8F4G8BN1');
          `}
        </Script>
        <Script
          id="combined-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />

      </body>
    </html>
  );
}
