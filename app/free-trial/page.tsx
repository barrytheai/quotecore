import type { Metadata } from "next";
import Script from "next/script";
import FreeTrialClient from "./client";
import FreeTrialFaqPanel from "./FreeTrialFaqPanel";
import SiteFooter from "@/components/SiteFooter";
import BlogHeader from "@/components/BlogHeader";

export const metadata: Metadata = {
  title: "Free 14-Day Trial - No Card Required | QuoteCore+",
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
  {
    question: "What are Smart Components™?",
    answer: "Smart Components™ are reusable parts of your quoting workflow. You can create components that include materials, labour, waste allowances, measurements, drawings, images, calculations and pricing rules, then reuse them in future quotes. They help each quote make the next quote faster.",
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
        <BlogHeader backLabel="Back to homepage" backHref="/" />

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,53,0.10),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
            <div>
              <p className="text-sm font-medium text-zinc-500">Free trial</p>
              <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Try QuoteCore+ free for 14 days.
              </h1>

              <p className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-zinc-700 sm:text-4xl">
                Test the full quoting workflow.
                <br />
                No card. No commitment.
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
                See how fast you can go from measurement to customer-ready quote before you spend a penny.
              </p>

              <div className="mt-10 max-w-xl space-y-6 text-zinc-600 hidden" aria-hidden="true">
                {/* SEO content — moved to FAQ section */}
              </div>

              <FreeTrialClient />

              {/* Moved below button */}

            </div>

            <FreeTrialFaqPanel faqs={faqs} />
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
}
