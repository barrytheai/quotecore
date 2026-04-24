import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Roofing Quoting Software for Contractors | QuoteCore+",
  description:
    "QuoteCore+ helps roofing contractors go from measurements to a professional quote in minutes. Digital takeoffs, pricing logic, client-ready output. Start free.",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "QuoteCore+",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Roofing measuring and quoting platform for contractors",
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is roofing quoting software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roofing quoting software helps contractors go from job measurements to a professional, priced quote without spreadsheets or manual calculation. QuoteCore+ combines digital takeoffs, pricing logic, and client-ready output in one workflow.",
      },
    },
    {
      "@type": "Question",
      name: "Who is QuoteCore+ built for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QuoteCore+ is built for roofing contractors — solo operators and teams — who want to quote jobs faster and win more business with less admin.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to send a quote with QuoteCore+?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most contractors send their first quote within minutes of entering their measurements. The goal is to quote before you leave the driveway.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sign up for a free 2-week trial — no credit card required. You'll be quoting within minutes.",
      },
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
        <Script
          id="software-application-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
