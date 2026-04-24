"use client";

import { useState } from "react";

export default function FreeTrialPage() {
  const faqs = [
    {
      question: "Do I need a credit card to sign up?",
      answer:
        "No. Your free trial is completely free. We'll only ask for payment if you decide to upgrade.",
    },
    {
      question: "How long is the trial?",
      answer: "14 days from the date you sign up.",
    },
    {
      question: "What happens when the trial ends?",
      answer:
        "You'll be prompted to choose a plan. If you don't upgrade, your account pauses and your data stays safe.",
    },
    {
      question: "Can I send real quotes to real customers during the trial?",
      answer: "Yes. Quote, measure, and send to customers from day one.",
    },
    {
      question: "What if I need help?",
      answer:
        "Email us at support@quotecore.com and we'll get back to you within one business day.",
    },
  ];

  const topShimmerButton =
    "pill-shimmer inline-flex min-h-11 items-center justify-center rounded-full border border-white/70 bg-white/72 px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-[0_6px_24px_rgba(255,255,255,0.18)_inset,0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-3xl transition-colors duration-200";

  const backHomeButton =
    "inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors duration-200 hover:bg-zinc-50";

  const primaryButton =
    "inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF6B35] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#e85d2b]";

  return (
    <>
      <main className="min-h-screen bg-white text-zinc-950">
        <header className="sticky top-0 z-50 border-b border-white/60 bg-white/68 shadow-[0_8px_30px_rgba(255,255,255,0.25)_inset,0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-[24px]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" className="flex items-center gap-3">
              <img src="/MainQCP.png" alt="QuoteCore+" className="h-10 w-auto" />
            </a>

            <nav className="hidden items-center gap-3 md:flex">
              <a href="/#how-it-works" className={topShimmerButton}>
                How it works
              </a>
              <a href="/#pricing" className={topShimmerButton}>
                Pricing
              </a>
              <a href="#" className={topShimmerButton}>
                Login
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="/" className={backHomeButton}>
                Back to homepage
              </a>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,53,0.10),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
            <div>
              <p className="text-sm font-medium text-zinc-500">Free trial</p>
              <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Try <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> free for 2 weeks.
              </h1>

              <p className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-zinc-700 sm:text-4xl">
                No card. No commitment.
                <br />
                Just faster quotes.
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
                See how fast you can go from measurement to customer-ready quote before you spend a penny.
              </p>

              <div id="trial-form" className="mt-10 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8">
                <h2 className="text-xl font-semibold">Start your free trial</h2>
                <form className="mt-6 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[#FF6B35]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[#FF6B35]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">Company name</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[#FF6B35]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">Phone (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-[#FF6B35]"
                    />
                  </div>

                  <button type="submit" className={`${primaryButton} w-full`}>
                    Start my free trial
                  </button>
                </form>

                <p className="mt-4 text-sm text-zinc-500">No credit card required. 2-week access. Cancel anytime.</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .brand-wordmark {
          white-space: nowrap;
        }

        .brand-plus {
          color: #FF6B35;
        }

        @keyframes shimmerBorder {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .pill-shimmer {
          position: relative;
          overflow: hidden;
        }

        .pill-shimmer::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 40%,
            #ff6b35 50%,
            transparent 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          pointer-events: none;
        }

        .pill-shimmer:hover::before {
          opacity: 1;
          animation: shimmerBorder 1.5s linear infinite;
        }
      `}</style>
    </>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 px-6 py-5">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-base font-semibold text-zinc-950">{question}</span>
        <span className="text-2xl leading-none text-zinc-500">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-4 text-sm leading-7 text-zinc-600">{answer}</p>}
    </div>
  );
}
