"use client";

import { useState } from "react";

export default function HomePage() {
  const steps = [
    {
      number: "01",
      title: "Capture the job",
      body: "Bring in measurements, takeoff files, and project details in one clean workflow.",
    },
    {
      number: "02",
      title: "Build the quote",
      body: "Use templates, components, and pricing logic to quote faster and stay consistent.",
    },
    {
      number: "03",
      title: "Send it professionally",
      body: "Deliver a clear, itemised quote your customer can understand at a glance.",
    },
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$79",
      detail: "/mo",
      body: "1 user, unlimited quotes",
      cta: "Start free trial",
      featured: false,
    },
    {
      name: "Pro Team",
      price: "$199",
      detail: "/mo",
      body: "$49 per additional seat, shared libraries",
      cta: "Start free trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      detail: "",
      body: "SSO, permissions, dedicated support",
      cta: "Start free trial",
      featured: false,
    },
  ];

  const quoteItems = [
    ["Downpipe - 2.2 units", "$77.00"],
    ["Barge Flashing - 3.8 units", "$105.09"],
    ["205 Underlay - 68.5 m²", "$976.37"],
    ["Hip Flashing - 26.1 units", "$750.27"],
    ["Corrugate .40g - 68.5 m²", "$1,678.67"],
    ["Ridge Flashing - 6.1 units", "$174.96"],
    ["Corrugate .40g - 0.0 m²", "$0.00"],
    ["Delivery fee", "$500.00"],
  ];

  const faqs = [
    {
      question: "What is roofing quoting software?",
      answer:
        "Roofing quoting software helps contractors go from job measurements to a professional, priced quote without spreadsheets or manual calculation. QuoteCore+ combines digital takeoffs, pricing logic, and client-ready output in one workflow.",
    },
    {
      question: "Who is QuoteCore+ built for?",
      answer:
        "QuoteCore+ is built for roofing contractors - solo operators and teams - who want to quote jobs faster and win more business with less admin.",
    },
    {
      question: "How long does it take to send a quote with QuoteCore+?",
      answer:
        "Most contractors send their first quote within minutes of entering their measurements. The goal is to quote before you leave the driveway.",
    },
    {
      question: "How do I get started?",
      answer:
        "Sign up for a free 2-week trial - no credit card required. You'll be quoting within minutes.",
    },
  ];

  const primaryButton =
    "inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF6B35] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#e85d2b]";

  const shimmerButton =
    "pill-shimmer inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors duration-200";

  const topShimmerButton =
    "pill-shimmer inline-flex min-h-11 items-center justify-center rounded-full border border-white/70 bg-white/72 px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-[0_6px_24px_rgba(255,255,255,0.18)_inset,0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-3xl transition-colors duration-200";

  const headerActionButton =
    "inline-flex h-11 min-w-[170px] items-center justify-center rounded-full px-5 py-2.5 text-sm transition-colors duration-200";

  const topPrimaryButton =
    `${headerActionButton} bg-[#FF6B35] font-semibold text-white hover:bg-[#e85d2b]`;

  return (
    <>
      <main className="min-h-screen bg-white text-zinc-950">
        <header className="sticky top-0 z-50 border-b border-white/60 bg-white/68 shadow-[0_8px_30px_rgba(255,255,255,0.25)_inset,0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-[24px]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" className="flex items-center gap-3">
              <img src="/MainQCP.png" alt="QuoteCore+" className="h-10 w-auto" />
            </a>

            <nav className="hidden items-center gap-3 md:flex">
              <a href="#how-it-works" className={topShimmerButton}>
                How it works
              </a>
              <a href="#pricing" className={topShimmerButton}>
                Pricing
              </a>
              <a href="#" className={topShimmerButton}>
                Login
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="/free-trial" className={topPrimaryButton}>
                Start free trial
              </a>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,53,0.10),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 py-10 lg:grid-cols-2 lg:px-8 lg:py-12">
            <div>
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Roofing quoting software that works as fast as you do.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-zinc-600 sm:text-xl">
                From measurement to pricing to customer-ready quote. One clean workflow, no spreadsheets, no back-and-forth.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="/free-trial" className={primaryButton}>
                  Start free trial
                </a>
                <a href="#how-it-works" className={shimmerButton}>
                  See how it works
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.15)]">
                <video className="block h-auto w-full" autoPlay muted loop playsInline preload="auto">
                  <source src="/qcvideo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[520px_minmax(0,1fr)]">
            <div>
              <p className="text-sm text-zinc-500">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                One clean flow from measurement to proposal.
              </h2>
              <p className="mt-4 max-w-[520px] text-lg text-zinc-600">
                <span className="brand-wordmark">
                  QuoteCore<span className="brand-plus">+</span>
                </span>{" "}
                helps roofers move from project inputs to pricing logic to customer-ready output without the usual friction.
              </p>

              <div className="mt-14 flex max-w-[460px] flex-col gap-5">
                {steps.map((item) => (
                  <div
                    key={item.number}
                    className="pill-shimmer rounded-[2rem] border border-zinc-200 bg-white px-8 py-7 shadow-sm transition-shadow duration-200 hover:shadow-md"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-[56px] shrink-0 pt-[2px] text-2xl font-semibold leading-none text-zinc-950">
                        {item.number}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-4">
                          <h3 className="text-2xl font-semibold leading-none text-zinc-950">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-5 text-zinc-600">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white p-6">
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
                    <span className="select-none rotate-[-30deg] text-center text-[70px] font-semibold tracking-[0.12em] text-zinc-200 opacity-30">
                      EXAMPLE QUOTE
                    </span>
                  </div>

                  <div className="relative">
                    <div className="border-b border-zinc-200 pb-5">
                      <p className="text-2xl font-semibold">QUOTE #1000</p>
                      <p className="mt-4 text-sm text-zinc-600">Client: John Smith</p>
                      <p className="text-sm text-zinc-600">Job: 123 Example Street</p>
                      <p className="text-sm text-zinc-600">Date: 10 April 2026</p>
                    </div>

                    <div className="mt-6 space-y-4 text-sm text-zinc-700">
                      {quoteItems.map(([label, value]) => (
                        <div key={label} className="flex justify-between border-b border-zinc-200 py-2">
                          <span>{label}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}

                      <div className="pt-4">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>$4,262.36</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax (15%)</span>
                          <span>$639.35</span>
                        </div>
                      </div>

                      <div className="mt-4 border-t border-zinc-200 pt-4">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total</span>
                          <span>$4,901.71</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-zinc-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#FF8A61]">Pricing</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Simple pricing for solo users, teams, and enterprise.
              </h2>
              <p className="mt-4 text-lg text-zinc-300">
                Start with a 2-week free trial, then scale as you grow.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {pricingPlans.map((item) => (
                <div
                  key={item.name}
                  className={`rounded-[2rem] border p-8 ${
                    item.featured
                      ? "border-[#FF6B35] bg-white text-zinc-950"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{item.name}</h3>

                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-4xl font-semibold">{item.price}</span>
                    {item.detail && <span className="text-sm opacity-70">{item.detail}</span>}
                  </div>

                  <p className="mt-6 text-sm opacity-80">{item.body}</p>

                  <a href="/free-trial" className={`mt-8 ${item.featured ? primaryButton : shimmerButton}`}>
                    {item.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold sm:text-4xl">Frequently asked Questions</h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        <section id="final-cta" className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[2.5rem] border border-zinc-200 bg-zinc-50 p-10">
            <h2 className="text-3xl font-semibold sm:text-5xl">Ready to quote faster?</h2>
            <p className="mt-4 max-w-2xl text-lg text-zinc-600">
              Stop losing time to spreadsheets and manual admin. <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> puts your entire quoting workflow in one place, from takeoff to send.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/free-trial" className={primaryButton}>
                Start your free 2-week trial
              </a>
              <a href="#how-it-works" className={shimmerButton}>
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">No card required. 2 weeks free. Cancel anytime.</p>
          </div>
        </section>

        <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
          © 2026 <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span>
        </footer>
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
