import type { Metadata } from "next";
import SocialIcons from "@/components/SocialIcons";
import Script from "next/script";
import FreeTrialClient from "./client";

export const metadata: Metadata = {
  title: "Free 2-Week Trial - No Card Required | QuoteCore+",
  description: "Try QuoteCore+ free for 14 days. Measure jobs, build professional quotes, track acceptances, and manage materials orders. No credit card needed.",
  alternates: {
    canonical: "https://quote-core.com/free-trial",
  },
};

const faqs = [
  {
    question: "Do I need a credit card to sign up?",
    answer: "No. Your free trial is completely free. We'll only ask for payment if you decide to upgrade.",
  },
  {
    question: "How long is the trial?",
    answer: "14 days from the date you sign up.",
  },
  {
    question: "What happens when the trial ends?",
    answer: "You'll be prompted to choose a plan. If you don't upgrade, your account pauses and your data stays safe.",
  },
  {
    question: "Can I send real quotes to real customers during the trial?",
    answer: "Yes. Quote, measure, and send to customers from day one.",
  },
  {
    question: "What if I need help?",
    answer: "Email us at info@quote-core.com and we'll get back to you within one business day.",
  },
  {
    question: "What is included in the free trial?",
    answer: "Your 14-day free trial gives you full access to every QuoteCore+ feature. That includes the digital takeoff tool, quote builder with your own pricing logic, automated materials ordering from accepted quotes, and the job management dashboard. You can send real quotes to real customers from day one - nothing is locked.",
  },
  {
    question: "How do I get started?",
    answer: "Getting started takes less than ten minutes. Create your account, set up your pricing rates and components once, and you are ready to quote. Upload a site plan, measure the job directly from it, and QuoteCore+ builds the quote automatically using your pricing logic.",
  },
  {
    question: "Who is QuoteCore+ for?",
    answer: "QuoteCore+ is built for construction businesses that measure and quote jobs regularly - roofing, plumbing, electrical, cladding, flooring, fencing, landscaping, decking, general building, exterior works, and renovation trades. If your quoting process involves a spreadsheet, a notepad, and a Sunday evening, QuoteCore+ was built for you.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FreeTrialPage() {
  return (
    <>
      <Script
        id="free-trial-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white text-zinc-950">
        <header className="sticky top-0 z-50 border-b border-white/60 bg-white/68 shadow-[0_8px_30px_rgba(255,255,255,0.25)_inset,0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-[24px]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" className="flex items-center gap-3">
              <img src="/MainQCP.png" alt="QuoteCore+" className="h-10 w-auto" />
            </a>
            <a href="/" className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50">
              Back to homepage
            </a>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,53,0.10),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
            <div>
              <p className="text-sm font-medium text-zinc-500">Free trial</p>
              <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Try QuoteCore+ free for 2 weeks.
              </h1>

              <p className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-zinc-700 sm:text-4xl">
                No card. No commitment.
                <br />
                Just faster quotes.
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
                See how fast you can go from measurement to customer-ready quote before you spend a penny.
              </p>

              <div className="mt-10 max-w-xl space-y-6 text-zinc-600 hidden" aria-hidden="true">
                {/* SEO content — moved to FAQ section */}
              </div>

              <FreeTrialClient />

              {/* Moved below button */}
              <div className="mt-8 max-w-xl space-y-4 text-sm text-zinc-500">
                <p>
                  QuoteCore+ is construction quoting software built for trades that measure and quote jobs every day. During your free trial you get full access to every feature - digital takeoff, quote builder, materials ordering, and job management.
                </p>
                <p>
                  Most contractors send their first quote within minutes of signing up. Your pricing rates, component logic, and margins are set up once - then applied automatically to every quote you build.
                </p>
                <p>
                  No spreadsheets. No re-entering the same data twice. No formatting quotes in Word at 9pm. QuoteCore+ keeps your measuring, pricing, quoting, and job details in one place - so you can get quotes out the same day as a site visit.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 px-6 py-5">
                      <p className="text-base font-semibold text-zinc-950">{faq.question}</p>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
