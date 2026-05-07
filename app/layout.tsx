import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

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
        <Script
          id="software-application-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />

      </body>
    </html>
  );
}
