"use client";

import { useRef, useState } from "react";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeFounderStep, setActiveFounderStep] = useState(0);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPaused(false);
      } catch {
        setIsPaused(true);
      }
      return;
    }

    video.pause();
    setIsPaused(true);
  };

  const steps = [
    {
      number: "01",
      title: "The job comes in",
      body: "No more chasing details across messages and files. Keep the measurements, plans, takeoffs, and job info together.",
    },
    {
      number: "02",
      title: "Build the quote",
      body: "Your rates, your way. Add the roof, custom flashings, materials, labour, and delivery all in one place.",
    },
    {
      number: "03",
      title: "Get approval faster",
      body: "Give your customer a quote that is clear, professional, and easy to say yes to.",
    },
    {
      number: "04",
      title: "Manage in one place",
      body: "Move from approval to action: order materials, track progress, and keep the job moving.",
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
    ["205 Underlay - 68.5 m2", "$976.37"],
    ["Hip Flashing - 26.1 units", "$750.27"],
    ["Corrugate .40g - 68.5 m2", "$1,678.67"],
    ["Ridge Flashing - 6.1 units", "$174.96"],
    ["Corrugate .40g - 0.0 m2", "$0.00"],
    ["Delivery fee", "$500.00"],
  ];

  const testimonials = [
    {
      name: "James Hargrove",
      business: "Hargrove Roofing Co.",
      quote:
        "We cut our quoting time in half within the first week. The workflow is dead simple and our customers love getting a proper-looking quote instead of a scribbled note.",
      initials: "JH",
    },
    {
      name: "Sarah Mitchell",
      business: "Mitchell & Sons Roofing",
      quote:
        "QuoteCore+ paid for itself on the second job. No more chasing customers for approvals - they can see everything clearly and sign off fast.",
      initials: "SM",
    },
    {
      name: "Dean Kowalski",
      business: "Peak Roofing Solutions",
      quote:
        "I used to spend Sunday nights doing quotes. Now I send them from site before I drive home. Game changer for a solo operator.",
      initials: "DK",
    },
    {
      name: "Tony Breslin",
      business: "Breslin Roofing Ltd.",
      quote:
        "The materials ordering side alone saved us hours a week. Everything is in one place - quote, approval, order. No more spreadsheets.",
      initials: "TB",
    },
    {
      name: "Karen O'Neill",
      business: "O'Neill Commercial Roofing",
      quote:
        "Our close rate went up noticeably once we started sending proper quotes. Customers take you more seriously when everything looks professional.",
      initials: "KO",
    },
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
              <a href="https://calendly.com/quote-core-info/15-minute-meeting" target="_blank" rel="noopener noreferrer" className={topShimmerButton}>
                Book a Call
              </a>
              <a href="/free-trial" className={topPrimaryButton}>
                Start free trial
              </a>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden pb-12 lg:pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,53,0.10),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 py-10 lg:grid-cols-2 lg:px-8 lg:py-12">
            <div>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
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
                <a href="https://calendly.com/quote-core-info/15-minute-meeting" target="_blank" rel="noopener noreferrer" className={shimmerButton}>
                  Book a Call
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.15)]" style={{borderRadius: "2rem"}}>
                <video
                  ref={videoRef}
                  className="block w-full aspect-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/QCPFinalVideo.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 pb-5">
                  <button
                    type="button"
                    onClick={togglePlayback}
                    aria-label={isPaused ? "Play video" : "Pause video"}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/50"
                  >
                    {isPaused ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                        <path d="M8 5.14v13.72c0 .78.84 1.26 1.5.86l10-6.86a1 1 0 000-1.72l-10-6.86A1 1 0 008 5.14z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                        <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
                      </svg>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/50"
                  >
                    {isMuted ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                        <path d="M13 5.23v13.54a1 1 0 01-1.64.77L6.91 16H3a1 1 0 01-1-1v-6a1 1 0 011-1h3.91l4.45-3.54A1 1 0 0113 5.23zM20.78 8.8a1 1 0 010 1.41L19 12l1.78 1.79a1 1 0 11-1.41 1.41L17.59 13.4l-1.8 1.8a1 1 0 01-1.41-1.41L16.17 12l-1.79-1.79a1 1 0 011.41-1.41l1.8 1.8 1.78-1.8a1 1 0 011.41 0z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                        <path d="M14 5.23v13.54a1 1 0 01-1.64.77L7.91 16H4a1 1 0 01-1-1v-6a1 1 0 011-1h3.91l4.45-3.54A1 1 0 0114 5.23z" />
                        <path d="M16.5 9.5a1 1 0 011.41 0A4.97 4.97 0 0119.5 13a4.97 4.97 0 01-1.59 3.5 1 1 0 01-1.41-1.42A2.98 2.98 0 0017.5 13a2.98 2.98 0 00-1-2.08 1 1 0 010-1.42z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#FF6B35]/15 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-zinc-500">What roofers say</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-950 sm:text-4xl">Trusted by roofing contractors</h2>
          </div>

          {/* Carousel */}
          <div className="relative mt-14">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * (100 / 3)}%)` }}
              >
                {[...testimonials, ...testimonials].map((t, idx) => (
                  <div key={idx} className="w-1/3 shrink-0 px-3">
                    <div className="rounded-[1.75rem] bg-white p-7 shadow-sm border border-[#FF6B35]/20 h-full">
                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-4 w-4 text-[#FF6B35]" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-zinc-600">&ldquo;{t.quote}&rdquo;</p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-xs font-semibold text-white">
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-zinc-950">{t.name}</p>
                          <p className="text-xs text-zinc-500">{t.business}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="absolute -left-5 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-colors hover:bg-zinc-50"
              aria-label="Previous"
            >
              <svg className="h-4 w-4 text-zinc-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setActiveTestimonial((p) => (p + 1) % (testimonials.length * 2 - 2))}
              className="absolute -right-5 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-colors hover:bg-zinc-50"
              aria-label="Next"
            >
              <svg className="h-4 w-4 text-zinc-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          </div>
        </section>

        {/* Rolling banner + CTA */}
        <div className="overflow-hidden border-y border-zinc-800 bg-zinc-950 py-3">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-6 mx-6 text-base font-semibold uppercase leading-none tracking-[0.18em] text-white">
                <span>AT LEAST 25% FASTER - OR IT&apos;S FREE</span>
                <span className="ml-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B35]"></span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 bg-zinc-950 py-6">
          <a
            href="https://calendly.com/quote-core-info/15-minute-meeting" target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            Book a Call
          </a>
          <a
            href="/free-trial"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#FF6B35] px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]"
          >
            Start free trial
          </a>
        </div>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[520px_minmax(0,1fr)]">
            <div>
              <p className="text-sm text-zinc-500">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                One place to quote, approve, order, and track the job.
              </h2>
              <p className="mt-4 max-w-[520px] text-lg text-zinc-600">
                <span className="brand-wordmark">
                  QuoteCore<span className="brand-plus">+</span>
                </span>{" "}
                helps roofers turn job details into accurate quotes, approved orders, and trackable work without the usual back-and-forth.
              </p>

              <div className="mt-14 flex max-w-[460px] flex-col gap-5">
                {steps.map((item) => (
                  <div
                    key={item.number}
                    className="pill-shimmer rounded-[2rem] border border-zinc-200 bg-white px-7 py-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-[56px] shrink-0 pt-[2px] text-2xl font-semibold leading-none text-zinc-950">
                        {item.number}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-2xl font-semibold leading-none text-zinc-950">
                          {item.title}
                        </h3>
                        <p className="mt-5 text-zinc-600">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-[0_20px_80px_rgba(0,0,0,0.08)] lg:min-h-[760px]">
                <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white p-6">
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
                    <span className="select-none rotate-[-30deg] text-center text-[70px] font-semibold tracking-[0.12em] text-zinc-200 opacity-30">
                      EXAMPLE QUOTE
                    </span>
                  </div>
                  <div className="relative flex h-full flex-col">
                    <div className="border-b border-zinc-200 pb-5">
                      <p className="text-2xl font-semibold">QUOTE #1000</p>
                      <p className="mt-4 text-sm text-zinc-600">Client: John Smith</p>
                      <p className="text-sm text-zinc-600">Job: 123 Example Street</p>
                      <p className="text-sm text-zinc-600">Date: 10 April 2026</p>
                    </div>
                    <div className="mt-6 flex-1 space-y-4 text-sm text-zinc-700">
                      {quoteItems.map(([label, value]) => (
                        <div key={label} className="flex justify-between border-b border-zinc-200 py-3">
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

        {/* Founder journey */}
        <section className="bg-[#FF6B35]/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium text-[#FF6B35]">Why QuoteCore+</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                He built QuoteCore+ because quoting roofs shouldn't be this painful.
              </h2>
            </div>

            {/* Horizontal track */}
            <div className="mt-14">
              <div className="relative flex items-center justify-between">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-zinc-200" />
                <div
                  className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#FF6B35] transition-all duration-500"
                  style={{ width: `${(activeFounderStep / 2) * 100}%` }}
                />
                {[
                  { label: "About", sub: "Built by a roofer" },
                  { label: "The problem", sub: "No software existed" },
                  { label: "The solution", sub: "QuoteCore+ makes it simple" },
                ].map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveFounderStep(i)}
                    className="relative z-10 flex flex-col items-center gap-3"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 ${
                      i <= activeFounderStep
                        ? "border-[#FF6B35] bg-[#FF6B35] text-white shadow-[0_0_0_4px_rgba(255,107,53,0.15)]"
                        : "border-zinc-300 bg-white text-zinc-400"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="text-center">
                      <p className={`text-sm font-semibold transition-colors duration-300 ${i === activeFounderStep ? "text-zinc-950" : "text-zinc-400"}`}>{s.label}</p>
                      <p className={`text-xs transition-colors duration-300 ${i === activeFounderStep ? "text-[#FF6B35]" : "text-zinc-300"}`}>{s.sub}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Content panel */}
              <div className="mt-10 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
<div className="grid lg:grid-cols-2" style={{height: "520px"}}>
                  {/* Text */}
                  <div className="flex flex-col" style={{height: "100%"}}>
                    {/* Text panels - fixed height, stack on top of each other */}
                    <div className="relative flex-1 overflow-hidden">
                      {[
                        {
                          label: "Over a decade on the job",
                          title: "Time built QuoteCore+",
                          content: (
                            <div className="space-y-4 leading-8 text-zinc-600">
                              <p>For twelve years, Shaun was on the tools or project managing. Multiple quotes a day, some days. Each one the same process: measure on site, bring the numbers to the office, work out the pricing, write it up, file it, send it. Then hope the client hadn't already gone with someone else.</p>
                              <p>The paper files were a nightmare. Jobs stacked in folders. Old quotes mixed with new ones. Ten minutes searching for a measurement that should have taken ten seconds.</p>
                              <p className="font-medium text-zinc-800">He knew there had to be a better way. He just couldn't find it.</p>
                            </div>
                          ),
                        },
                        {
                          label: "The gap in the market",
                          title: "The software that didn't exist",
                          content: (
                            <div className="space-y-4 leading-8 text-zinc-600">
                              <p>The tools available were either generic - built for "trades" and completely misunderstanding how a roofer actually prices a job - or so complex they needed a trained estimator to operate them.</p>
                              <p>Nothing knew the difference between a hip and a valley. Nothing could take his measurements and turn them into a professional quote without two hours of reformatting.</p>
                              <p className="font-medium text-zinc-800">That software didn't exist. So he built it.</p>
                            </div>
                          ),
                        },
                        {
                          label: "Why it matters",
                          title: "Built from the inside out",
                          content: (
                            <div className="space-y-4 leading-8 text-zinc-600">
                              <p>QuoteCore+ isn't built by developers who interviewed a few roofers. It's built by someone who lived the problem for over a decade. Every feature exists because someone who spent twelve years roofing decided it should.</p>
                              <p>Before launch, it was tested by working roofers across the industry - contractors who quoted real jobs through the platform and gave honest feedback on what wasn't good enough.</p>
                              <p className="font-medium text-zinc-800">The result is a quoting tool that thinks the way a roofer thinks - because it was built by one.</p>
                            </div>
                          ),
                        },
                      ].map((panel, i) => (
                        <div
                          key={i}
                          className={`absolute inset-0 flex flex-col justify-center p-10 transition-opacity duration-300 ${
                            i === activeFounderStep ? "opacity-100" : "opacity-0 pointer-events-none"
                          }`}
                        >
                          <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6B35]">{panel.label}</p>
                          <h3 className="mt-2 text-2xl font-semibold">{panel.title}</h3>
                          <div className="mt-4">{panel.content}</div>
                        </div>
                      ))}
                    </div>
                    {/* Buttons always at the bottom */}
                    <div className="flex shrink-0 gap-3 px-10 pb-8">
                      <button type="button" onClick={() => setActiveFounderStep((p) => Math.max(0, p - 1))} disabled={activeFounderStep === 0} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-colors hover:bg-zinc-50 disabled:opacity-30">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </button>
                      <button type="button" onClick={() => setActiveFounderStep((p) => Math.min(2, p + 1))} disabled={activeFounderStep === 2} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B35] text-white transition-colors hover:bg-[#e85d2b] disabled:opacity-30">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                      </button>
                    </div>
                  </div>
                  {/* Photo */}
                  <div className="relative hidden overflow-hidden rounded-r-[2rem] lg:block">
                    <img src="/shaun.jpg" alt="Shaun, founder of QuoteCore+" className="h-full w-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="font-semibold text-white">Shaun</p>
                      <p className="text-sm text-white/70">Founder, QuoteCore+ - 12 years on the tools</p>
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
              <a href="https://calendly.com/quote-core-info/15-minute-meeting" target="_blank" rel="noopener noreferrer" className={shimmerButton}>
                Book a Call
              </a>
              <a href="#how-it-works" className={shimmerButton}>
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">No card required. 2 weeks free. Cancel anytime.</p>
          </div>
        </section>

        <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
          <p>
            <a href="/roofing-quoting-software" className="hover:text-zinc-800">Roofing Quoting Software</a>
            {" · "}
            <a href="/about" className="hover:text-zinc-800">About</a>
            {" · "}
            <a href="/blog" className="hover:text-zinc-800">Blog</a>
            {" · "}
            <a href="/free-trial" className="hover:text-zinc-800">Free Trial</a>
          </p>
          <p className="mt-3">© 2026 <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span></p>
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

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
          width: max-content;
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
        <span className="text-2xl leading-none text-zinc-500">{open ? "-" : "+"}</span>
      </button>
      {open && <p className="mt-4 text-sm leading-7 text-zinc-600">{answer}</p>}
    </div>
  );
}
