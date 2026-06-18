"use client";

import React, { useEffect, useRef, useState } from "react";
import CoffeePopup from "@/components/CoffeePopup";
import SocialIcons from "@/components/SocialIcons";
import { trackEvent } from "@/lib/analytics";
import { CURRENCY_KEY } from "@/lib/consent";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoHovered, setVideoHovered] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currency, setCurrency] = useState<"GBP" | "USD">("USD");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [carouselMounted, setCarouselMounted] = useState(false);
  const bannerTrackRef = useRef<HTMLDivElement | null>(null);
  const bannerPosRef = useRef(0);

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setVideoProgress((video.currentTime / video.duration) * 100);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    video.currentTime = pct * video.duration;
  };

  useEffect(() => {
    const PAUSE_MS = 3000;
    const ROLL_MS = 800;
    let rafId: number;
    let timerId: ReturnType<typeof setTimeout>;

    const step = () => {
      const track = bannerTrackRef.current;
      if (!track) return;
      const itemEl = track.querySelector<HTMLElement>('.banner-item');
      if (!itemEl) return;
      const itemW = itemEl.getBoundingClientRect().width;
      bannerPosRef.current += 1;
      track.style.transition = `transform ${ROLL_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      track.style.transform = `translateX(-${bannerPosRef.current * itemW}px)`;
      timerId = setTimeout(() => {
        if (bannerPosRef.current >= 3) {
          bannerPosRef.current = 0;
          track.style.transition = 'none';
          track.style.transform = 'translateX(0px)';
          rafId = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              timerId = setTimeout(step, PAUSE_MS);
            });
          });
        } else {
          timerId = setTimeout(step, PAUSE_MS);
        }
      }, ROLL_MS + 100);
    };

    timerId = setTimeout(step, PAUSE_MS);
    return () => { clearTimeout(timerId); cancelAnimationFrame(rafId); };
  }, []);

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

  // Currency detection: geo-IP via API > browser locale > USD
  // Clear any stale localStorage value from old manual toggle
  useEffect(() => {
    try { localStorage.removeItem(CURRENCY_KEY); } catch { /* ignore */ }
    fetch("/api/currency")
      .then((r) => r.json())
      .then((data) => { if (data.currency) setCurrency(data.currency as "GBP" | "USD"); })
      .catch(() => {
        const locale = (navigator.language || "").toLowerCase();
        if (locale.includes("en-gb")) setCurrency("GBP");
      });
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    setCarouselMounted(true);
  }, []);

  useEffect(() => {
    setActiveTestimonial(0);
  }, [isMobile]);

  const USD_TO_GBP = 0.75;
  const toGBP = (usd: number) => Math.round(usd * USD_TO_GBP);

  const newPricingPlans = [
    {
      name: "14-Day Free Trial",
      usd: "Free",
      gbp: "Free",
      originalUsd: null,
      originalGbp: null,
      subtitle: "A 14-day taste of everything",
      features: ["10 quotes / month", "100 MB storage", "All features unlocked", "No credit card needed"],
      featured: false,
      comingSoon: false,
      isFree: true,
    },
    {
      name: "Free",
      usd: "Free",
      gbp: "Free",
      originalUsd: null,
      originalGbp: null,
      subtitle: "For individuals just getting started",
      features: ["5 quotes / month", "50 MB storage"],
      featured: false,
      comingSoon: true,
      isFree: true,
    },
    {
      name: "Starter",
      usd: "$19",
      gbp: `£${toGBP(19)}`,
      originalUsd: "$40",
      originalGbp: `£${toGBP(40)}`,
      subtitle: "For solo traders quoting regularly",
      features: ["25 quotes / month", "500 MB storage", "All core features", "No card for trial"],
      featured: false,
      comingSoon: false,
      isFree: false,
    },
    {
      name: "Professional",
      usd: "$39",
      gbp: `£${toGBP(39)}`,
      originalUsd: "$90",
      originalGbp: `£${toGBP(90)}`,
      subtitle: "For growing trade businesses",
      features: ["100 quotes / month", "3 GB storage", "All core features", "Priority support"],
      featured: true,
      comingSoon: false,
      isFree: false,
    },
    {
      name: "Pro Plus",
      usd: "$59",
      gbp: `£${toGBP(59)}`,
      originalUsd: "$120",
      originalGbp: `£${toGBP(120)}`,
      subtitle: "For established teams with high quote volume",
      features: ["200 quotes / month", "5 GB storage", "All core features", "Priority support"],
      featured: false,
      comingSoon: false,
      isFree: false,
    },
    {
      name: "Premium",
      usd: "Coming Soon",
      gbp: "Coming Soon",
      originalUsd: null,
      originalGbp: null,
      subtitle: "Enterprise-level power for larger operations",
      features: ["Higher limits", "Advanced features", "Dedicated support"],
      featured: false,
      comingSoon: true,
      isFree: false,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "How do you want to quote?",
      body: "",
      subOptions: [
        { label: "Line by line", desc: "Blank Quote mode - build from scratch, full control" },
        { label: "Pre-saved components", desc: "Manual Mode - use your saved Smart Components" },
        { label: "Measure from a plan", desc: "Digital Mode - upload a plan and measure directly" },
      ],
    },
    {
      number: "02",
      title: "Build your quote",
      body: "Add your items, set pricing, customise what the customer sees.",
      subOptions: [],
    },
    {
      number: "03",
      title: "Send & track",
      body: "Send a professional quote, get notified on acceptance, automated follow-ups chase unanswered quotes.",
      subOptions: [],
    },
    {
      number: "04",
      title: "Order materials",
      body: "Generate a complete materials order directly from your accepted quote.",
      subOptions: [],
    },
    {
      number: "05",
      title: "Invoice",
      body: "Create and send a professional invoice from the same workflow.",
      subOptions: [],
    },
    {
      number: "06",
      title: "Everything tracked",
      body: "Every quote, order, and invoice in one place.",
      subOptions: [],
    },
  ];


  const testimonials = [
    {
      name: "Tony Edwards",
      business: "NZ Audio Visual",
      quote:
        "Its been hard as an AV company offering very diverse services to find a 1 app does it all solution, but after using QuoteCore⁺ this is as good as we've found, it does 90% of what we need it to perfectly, and the apps designed in a way that we can improvise making the app work for the other 10%, keeping everything in 1 app! This saves us so much time/money",
      initials: "TE",
    },
    {
      name: "James Hargrove",
      business: "Hargrove Roofing Co.",
      quote:
        "We cut our quoting time in half within the first week. The workflow is dead simple and our customers love getting a proper-looking quote instead of a scribbled note.",
      initials: "JH",
    },
    {
      name: "Tom Harris",
      business: "Harris Flooring Ltd",
      quote:
        "QuoteCore⁺ paid for itself on the second job. No more chasing customers for approvals - they can see everything clearly and sign off fast.",
      initials: "TH",
    },
    {
      name: "Adam Westbrook",
      business: "Westbrook Fencing Co.",
      quote:
        "I used to spend Sunday nights doing quotes. Now I send them from site before I drive home. Game changer for any solo tradesperson.",
      initials: "AW",
    },
    {
      name: "Mark Clarke",
      business: "Clarke Landscaping",
      quote:
        "The materials ordering side alone saved us hours a week. Everything is in one place - quote, approval, order. No more spreadsheets.",
      initials: "MC",
    },
    {
      name: "Rebecca Chen",
      business: "Meridian Cladding Ltd",
      quote:
        "Our close rate went up noticeably once we started sending proper quotes. Customers take you more seriously when everything looks professional.",
      initials: "RC",
    },
  ];

  const faqs = [
    {
      question: "Who is QuoteCore⁺ built for?",
      answer:
        "Built for contractors, builders, and tradespeople who want a faster, cleaner, and a more professional way to measure, quote, store, and manage jobs digitally.",
    },
    {
      question: "How fast can I create a quote?",
      answer:
        "Once set up, most standard job quotes can be measured, built, and sent in as little as 10-15 minutes using reusable templates and our customer approval link system.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply create a free account and test the full system risk-free for 14 days.",
    },
    {
      question: "Does QuoteCore⁺ create quotes automatically?",
      answer:
        "QuoteCore⁺ gives you the tools to measure, build, and fully customise professional quotes quickly. You control your pricing, materials, labour, and templates - making every future quote faster and more consistent.",
    },
    {
      question: "Why do contractors switch to QuoteCore⁺?",
      answer:
        "Because it saves time, reduces paperwork, solidifies disjointed systems, improves professionalism, and keeps everything organised in one place. Its also a very accurate system, allowing precise quotes and confident profit margins.",
    },
    {
      question: "Is QuoteCore⁺ only for roofers?",
      answer:
        "No. QuoteCore⁺ started in roofing - that's where our founder's experience is - but it's built for construction businesses that measure, price, and quote jobs. Roofing, cladding, flooring, fencing, landscaping, general building work, and more.",
    },
  ];

  const primaryButton =
    "inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF6B35] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#e85d2b]";

  const shimmerButton =
    "pill-shimmer inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors duration-200 hover:border-[#FF6B35]/40";

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

            <nav className="hidden items-center gap-3 lg:flex">
            </nav>

            {/* Desktop nav buttons */}
            <div className="hidden items-center gap-3 lg:flex">
              <a href="https://calendly.com/quote-core-info/15-minute-meeting" target="_blank" rel="noopener noreferrer" className={topShimmerButton} onClick={() => trackEvent("book_call_click", { location: "nav" })}>
                Book a Call
              </a>
              <a href="/free-trial" className={topPrimaryButton} onClick={() => trackEvent("free_trial_click", { location: "nav" })}>
                Start free trial
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 lg:hidden"
              onClick={() => setMobileMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <div className="bg-white lg:hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {/* Nav links */}
              <div className="px-6 pt-5 pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 mb-3">Navigate</p>
                <div className="flex flex-col">
                  {[
                    { label: "How it works", href: "/#how-it-works" },
                    { label: "Pricing", href: "/#pricing" },
                    { label: "Blog", href: "/blog" },
                    { label: "Contact", href: "/contact" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between py-3.5 border-b border-zinc-100 text-base font-medium text-zinc-800 hover:text-[#FF6B35] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                      <svg className="h-4 w-4 text-zinc-300" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                    </a>
                  ))}
                </div>
              </div>
              {/* CTAs */}
              <div className="px-6 pb-6 pt-2 flex flex-col gap-3">
                <a
                  href="/free-trial"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#FF6B35] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]"
                  onClick={() => { trackEvent("free_trial_click", { location: "nav" }); setMobileMenuOpen(false); }}
                >
                  Start free trial
                </a>
                <a
                  href="https://calendly.com/quote-core-info/15-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 px-5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
                  onClick={() => { trackEvent("book_call_click", { location: "nav" }); setMobileMenuOpen(false); }}
                >
                  Book a Call
                </a>
              </div>
            </div>
          )}
        </header>

        <section id="hero-section" className="relative overflow-hidden pb-0 bg-white">
          {/* Two-column hero: text left, video right - bg matches video for seamless blend */}
          <div className="relative mx-auto max-w-7xl px-6 pt-12 lg:px-8 lg:pt-16">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
              {/* Left: text */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B35]">Each feature built from real experience</p>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                  Stop using 5 apps to run one job!
                </h1>
                <p className="mt-4 text-2xl font-semibold text-zinc-700 sm:text-3xl">
                  Measure. Quote. Order. Manage. Invoice. Get paid.
                </p>
                <p className="mt-4 max-w-xl text-lg text-zinc-600">
                  The all-in-1 business platform that adapts to how you work.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <a href="/free-trial" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF6B35] px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]" onClick={() => trackEvent("free_trial_click", { location: "hero" })}>
                    Start free trial
                  </a>
                  <a href="https://calendly.com/quote-core-info/15-minute-meeting" target="_blank" rel="noopener noreferrer" className="pill-shimmer inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-7 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50" onClick={() => trackEvent("book_call_click", { location: "hero" })}>
                    Book a Call
                  </a>
                  <a
                    href="#what-is-quotecore"
                    className="pill-shimmer inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-7 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                    onClick={(e) => { e.preventDefault(); document.getElementById('what-is-quotecore')?.scrollIntoView({ behavior: 'smooth' }); }}
                  >
                    How it works ↓
                  </a>
                </div>
                <p className="mt-3 text-sm text-zinc-500">No card required. 14 days free.</p>
              </div>
              {/* Right: laptop video - bg matches section so edges blend */}
              <div className="flex-1 flex items-end justify-center lg:justify-end overflow-hidden">
                <video
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  className="w-full hero-video-float"
                  style={{display: "block"}}
                >
                  <source src="/qc-hero-laptop.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            {/* Scroll indicator */}
            <div className="mt-16 flex flex-col items-center gap-1.5 font-sans text-zinc-500 pb-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em]">Scroll</p>
              <svg className="h-5 w-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
          {/* Video below centered */}
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 -mt-6">
            <div id="hero-story-video" className="relative">
              <div
                className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.15)]"
                style={{borderRadius: "2rem"}}
                onMouseEnter={() => setVideoHovered(true)}
                onMouseLeave={() => setVideoHovered(false)}
              >
                <video
                  ref={videoRef}
                  className="block w-full aspect-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onTimeUpdate={handleVideoTimeUpdate}
                >
                  <source src="/QCPFinalVideoSmaller.mp4" type="video/mp4" />
                </video>
                {/* Progress bar - shows on hover */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-1.5 cursor-pointer transition-opacity duration-200 ${videoHovered ? "opacity-100" : "opacity-0"}`}
                  style={{background: "rgba(255,255,255,0.2)"}}
                  onClick={handleProgressClick}
                >
                  <div className="h-full bg-[#FF6B35] transition-all duration-100" style={{width: `${videoProgress}%`}} />
                </div>
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


        {/* Shaun quote bubble - scroll-triggered, appears beside hero video */}
        <ShaunQuoteBubble />

        {/* What is QuoteCore+? */}
        <section id="what-is-quotecore" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 px-10 py-14 shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,53,0.12),transparent_55%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B35]">The platform</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">Why use <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span>?</h2>
              <p className="mt-3 max-w-2xl text-xl font-semibold text-white">Stop managing one job with five different apps.</p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
                <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> brings your entire workflow into one connected platform - from your first customer conversation and quote, through to job completion, invoicing and payment - no matter your industry. Less admin. Less mistakes. More profit. More time to do what you do best.
              </p>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FF6B35] mb-2">Who&apos;s it for?</p>
                <p className="text-sm leading-6 text-zinc-300"><span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> is built for any business that needs to go from quote to getting paid and everything in between - all in one connected platform. We&apos;ve taken what is traditionally a chaotic journey spread across multiple apps, spreadsheets, emails, and documents, and transformed it into a simple, professional, and highly flexible workflow designed around the way your business operates.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://app.quote-core.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Read the Docs
              </a>
            </div>
          </div>
        </section>

        {/* Smart ComponentsTM */}
        <section id="smart-components" className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              {/* Left: text content */}
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500"><span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> remembers how you work.</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-[#FF6B35]">Smart Components™</h2>
                <p className="mt-4 text-lg font-medium text-zinc-700">Other software remembers what you charged. <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> remembers how you work.</p>
                <p className="mt-4 text-lg leading-8 text-zinc-600">
                  Most software stores your quotes. <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> stores your knowledge.
                </p>
                <p className="mt-4 text-lg leading-8 text-zinc-600">
                  Every quote you create should make the next quote faster. With Smart Components&trade;, you can save the parts of a job you use again and again - including materials, labour, waste allowances, measurements, drawings, images, calculations and pricing rules.
                </p>
                <p className="mt-4 text-lg font-medium text-zinc-700">Create them once. Reuse them in seconds.</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Materials",
                    "Labour",
                    "Waste allowances",
                    "Measurements",
                    "Drawings",
                    "Images",
                    "Angle, pitch, volume, area and length calculations",
                    "Pricing rules",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-700">
                      <span className="mt-1 shrink-0 text-[#FF6B35] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-lg font-semibold text-zinc-950">Make them once. Reuse them in seconds. Forever.</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/free-trial" className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]">Start free trial</a>
                  <a href="https://calendly.com/quote-core-info/15-minute-meeting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50">Book a call</a>
                </div>
              </div>
              {/* Right: overlapping laptop mockups */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-full max-w-xl" style={{ minHeight: "340px" }}>
                  {/* Back image - offset top-right */}
                  <div
                    className="absolute right-0 top-0 w-[85%] transition-transform duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2"
                    style={{ zIndex: 1 }}
                  >
                    <img
                      src="/smart-components-laptop-2.png"
                      alt="Smart Components - component editor"
                      className="w-full h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                    />
                  </div>
                  {/* Front image - offset bottom-left, slightly larger */}
                  <div
                    className="absolute left-0 bottom-0 w-[85%] transition-transform duration-500 ease-out hover:scale-[1.03] hover:translate-y-[-8px]"
                    style={{ zIndex: 2 }}
                  >
                    <img
                      src="/smart-components-laptop-1.png"
                      alt="Smart Components - component list"
                      className="w-full h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Each step is faster, easier, and all in one place!
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-zinc-600">
              <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> helps businesses turn measurements, pricing, approvals, and job details into one connected workflow.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
            {/* Left: step cards */}
            <div className="flex flex-col gap-4 lg:w-[480px] lg:shrink-0">
              {steps.map((item, i) => (
                <div
                  key={item.number}
                  className={`rounded-2xl border bg-white px-6 py-5 cursor-pointer transition-all duration-200 ${
                    i === activeStep
                      ? "border-[#FF6B35] border-l-4 shadow-[0_4px_20px_rgba(255,107,53,0.15)]"
                      : "border-zinc-200 shadow-sm hover:shadow-md"
                  }`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 shrink-0 text-xl font-semibold text-zinc-400">{item.number}</div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold ${ i === activeStep ? "text-zinc-950" : "text-zinc-700" }`}>
                        {item.title}
                      </h3>
                      {i === activeStep && item.body && (
                        <p className="mt-2 text-sm leading-6 text-zinc-600">{item.body}</p>
                      )}
                      {i === activeStep && item.subOptions && item.subOptions.length > 0 && (
                        <div className="mt-3 flex flex-col gap-2">
                          {item.subOptions.map((opt) => (
                            <div key={opt.label} className="rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3">
                              <p className="text-sm font-semibold text-zinc-800">{opt.label}</p>
                              <p className="text-xs text-zinc-500 mt-0.5">{opt.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: placeholder image panel */}
            {/* TODO: replace with real app screenshots */}
            <div className="flex-1 lg:sticky lg:top-24">
              <div
                className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.12)] transition-all duration-300"
                style={{ minHeight: "480px", background: "#111" }}
              >
                {steps.map((item, i) => (
                  <div
                    key={item.number}
                    className={`absolute inset-0 flex flex-col items-center justify-center p-10 transition-opacity duration-300 ${
                      i === activeStep ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ background: "#FF6B35" }}
                    >
                      <span className="text-2xl font-bold text-white">{item.number}</span>
                    </div>
                    <h4 className="text-2xl font-semibold text-white text-center">{item.title}</h4>
                    {item.body && (
                      <p className="mt-4 text-base text-zinc-400 text-center max-w-sm">{item.body}</p>
                    )}
                    {item.subOptions && item.subOptions.length > 0 && (
                      <div className="mt-6 flex flex-col gap-3 w-full max-w-xs">
                        {item.subOptions.map((opt) => (
                          <div key={opt.label} className="rounded-xl px-5 py-3" style={{ background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)" }}>
                            <p className="text-sm font-semibold text-white">{opt.label}</p>
                            <p className="text-xs text-zinc-400 mt-0.5">{opt.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="mt-8 text-xs text-zinc-600 uppercase tracking-widest">QuoteCore+</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



              {/* Rolling banner + CTA */}
        <div className="border-y border-zinc-300 bg-zinc-200 py-3">
          {/* Rolling banner: all screen sizes */}
          <div className="overflow-hidden">
            {/* One crawlable version of the guarantee */}
            <p className="sr-only">At least 25% faster - or it&apos;s free.</p>
            {/* Decorative animated marquee - hidden from crawlers */}
            <div ref={bannerTrackRef} className="banner-track" aria-hidden="true" data-nosnippet style={{willChange: "transform"}}>
              {[0,1,2,3,4,5].map((i) => (
                <span key={i} className="banner-item inline-flex items-center shrink-0 whitespace-nowrap">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700 px-6 lg:px-16">{carouselMounted ? "AT LEAST 25% FASTER - OR IT'S FREE" : "\u00a0"}</span>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B35]"></span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 bg-zinc-200 py-7">
          <img src="/shaun-smiling.jpg" alt="Shaun" className="h-24 w-24 rounded-full object-cover border-2 border-[#FF6B35]/50 shrink-0" />
          <div>
            <p className="text-sm text-zinc-500 mb-2">Book a 15-minute call with Shaun</p>
            <div className="flex gap-3">
              <a href="https://calendly.com/quote-core-info/15-minute-meeting" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center justify-center rounded-full bg-[#FF6B35] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]" onClick={() => trackEvent("book_call_click", { location: "mid" })}>Book a Call</a>
              <a href="/free-trial" className="pill-shimmer inline-flex min-h-9 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-2 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50" onClick={() => trackEvent("free_trial_click", { location: "mid" })}>Start free trial</a>
            </div>
          </div>
        </div>

        {/* About Shaun */}
        <section className="bg-[#FF6B35]/5 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center p-10">
                  <div className="mb-6 flex items-center gap-4">
                    <img src="/shaun-smiling.jpg" alt="Shaun" className="h-14 w-14 rounded-full object-cover border-2 border-[#FF6B35]/20 shrink-0" />
                    <div>
                      <p className="font-semibold text-zinc-950">Shaun</p>
                      <p className="text-sm text-[#FF6B35]">Founder, <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span></p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-zinc-950">Meet Shaun</p>
                  <div className="mt-4 space-y-4 text-lg leading-8 text-zinc-600">
                    <p>Shaun brings over two decades of experience founding and operating businesses across construction and technology sectors.</p>
                    <p>Throughout that journey, he encountered the same problem repeatedly: no matter the industry, businesses were forced to juggle multiple apps, spreadsheets, emails, and documents just to take a job from quote to payment.</p>
                    <p>There wasn&apos;t a single platform that was flexible enough to adapt to how individual businesses actually work.</p>
                    <p><span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> was created under Shaun&apos;s direction to solve that problem. The goal was simple: build a powerful yet flexible platform that works around your existing processes - making them faster, more organised, less chaotic, and ultimately more profitable.</p>
                    <p className="font-medium text-zinc-800">&ldquo;We built <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> around the workflow I wish I had years ago - practical, simple, and designed to adapt to the way every business works.&rdquo;</p>
                  </div>
                </div>
                <div className="relative hidden overflow-hidden rounded-r-[2rem] lg:block" style={{minHeight: "400px"}}>
                  <img src="/shaun.jpg" alt="Shaun, founder of QuoteCore+" className="h-full w-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <p className="font-semibold text-white">Shaun</p>
                    <p className="text-sm text-white/70">Founder, <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tell us what you need */}
        <section className="bg-[#FF6B35] py-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-base font-semibold text-white">
                Tell us what you need - we might build it into the app
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/25 shrink-0"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#FF6B35]/10 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-zinc-950 sm:text-4xl">What contractors say.</h2>
            </div>
            {/* Crawler-readable testimonials - visually hidden, not duplicated in carousel DOM */}
            <ul className="sr-only">
              {testimonials.map((t, idx) => (
                <li key={idx}>
                  <blockquote>
                    <p>&ldquo;{t.quote}&rdquo;</p>
                    <footer>{t.name}, {t.business}</footer>
                  </blockquote>
                </li>
              ))}
            </ul>
            {/* Mobile: single card carousel - decorative only, text rendered via data attrs to avoid crawler duplication */}
            <div className="relative mt-14 lg:hidden" aria-hidden="true" data-nosnippet>
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((t, idx) => (
                    <div key={idx} className="w-full min-w-full shrink-0 px-3">
                      <div className="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-sm">
                        <div className="flex gap-1 mb-5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-4 w-4 text-[#FF6B35]" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="flex-1 text-base leading-relaxed text-zinc-600">{carouselMounted ? <>&ldquo;{t.quote}&rdquo;</> : null}</p>
                        <div className="mt-8 flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-xs font-semibold text-white">{carouselMounted ? t.initials : null}</div>
                          <div>
                            <p className="text-sm font-semibold text-zinc-950">{carouselMounted ? t.name : null}</p>
                            <p className="text-xs text-zinc-400">{carouselMounted ? t.business : null}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" onClick={() => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)} className="absolute -left-5 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-colors hover:bg-zinc-50" aria-label="Previous">
                <svg className="h-4 w-4 text-zinc-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              </button>
              <button type="button" onClick={() => setActiveTestimonial((p) => (p + 1) % testimonials.length)} className="absolute -right-5 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-colors hover:bg-zinc-50" aria-label="Next">
                <svg className="h-4 w-4 text-zinc-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </button>
              {/* Dot indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button key={idx} type="button" onClick={() => setActiveTestimonial(idx)} className={`h-2 w-2 rounded-full transition-colors ${idx === activeTestimonial ? "bg-[#FF6B35]" : "bg-zinc-300"}`} aria-label={`Go to testimonial ${idx + 1}`} />
                ))}
              </div>
            </div>
            {/* Desktop: 3-column carousel - decorative only, text suppressed from crawlers */}
            <div className="relative mt-14 hidden lg:block" aria-hidden="true" data-nosnippet>
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonial * (100 / 3)}%)` }}
                >
                  {[...testimonials, ...testimonials].map((t, idx) => (
                  // eslint-disable-next-line jsx-a11y/no-redundant-roles
                    <div key={idx} className="w-1/3 shrink-0 px-3" aria-hidden="true">
                      <div className="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-sm">
                        <div className="flex gap-1 mb-5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-4 w-4 text-[#FF6B35]" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="flex-1 text-base leading-relaxed text-zinc-600">{carouselMounted ? <>&ldquo;{t.quote}&rdquo;</> : null}</p>
                        <div className="mt-8 flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-xs font-semibold text-white">{carouselMounted ? t.initials : null}</div>
                          <div>
                            <p className="text-sm font-semibold text-zinc-950">{carouselMounted ? t.name : null}</p>
                            <p className="text-xs text-zinc-400">{carouselMounted ? t.business : null}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" onClick={() => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)} className="absolute -left-5 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-colors hover:bg-zinc-50" aria-label="Previous">
                <svg className="h-4 w-4 text-zinc-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              </button>
              <button type="button" onClick={() => setActiveTestimonial((p) => (p + 1) % (testimonials.length * 2 - 2))} className="absolute -right-5 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-colors hover:bg-zinc-50" aria-label="Next">
                <svg className="h-4 w-4 text-zinc-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </button>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="bg-zinc-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF8A61]">Pricing</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Simple, transparent pricing.
                </h2>
                <p className="mt-3 text-zinc-400">
                  Start with a full 14-day free trial. No card required. Founding customer pricing now available.
                </p>
              </div>

            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newPricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-[2rem] border p-8 ${
                    plan.featured
                      ? "border-[#FF6B35] bg-white text-zinc-950"
                      : "border-white/10 bg-white/5"
                  } ${plan.comingSoon ? "opacity-60" : ""}`}
                >
                  {plan.comingSoon && (
                    <span className="absolute -top-3 right-6 rounded-full bg-zinc-700 px-3 py-1 text-xs font-semibold text-zinc-300">
                      Coming soon
                    </span>
                  )}
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-4 flex items-end gap-2 flex-wrap">
                    <span className="text-4xl font-semibold">
                      {plan.isFree || plan.comingSoon ? (currency === "GBP" ? plan.gbp : plan.usd) : (currency === "GBP" ? plan.gbp : plan.usd)}
                    </span>
                    {!plan.isFree && !plan.comingSoon && plan.originalUsd && (
                      <span className="mb-1 text-sm line-through text-zinc-500">
                        {currency === "GBP" ? plan.originalGbp : plan.originalUsd}
                      </span>
                    )}
                    {!plan.isFree && !plan.comingSoon && (
                      <span className={`mb-1 text-sm ${
                        plan.featured ? "text-zinc-400" : "text-zinc-500"
                      }`}>/mo</span>
                    )}
                  </div>
                  <p className={`mt-3 text-sm ${
                    plan.featured ? "text-zinc-500" : "text-zinc-400"
                  }`}>{plan.subtitle}</p>
                  <ul className="mt-6 flex-1 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <svg className="h-4 w-4 shrink-0 text-[#FF6B35]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={plan.featured ? "text-zinc-700" : "text-zinc-300"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.comingSoon ? (
                    <span className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-600 text-sm text-zinc-500">
                      Coming soon
                    </span>
                  ) : (
                    <a
                      href="/free-trial"
                      className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                        plan.featured
                          ? "bg-[#FF6B35] text-white hover:bg-[#e85d2b]"
                          : "border border-white/20 text-white hover:bg-white/10"
                      }`}
                      onClick={() => trackEvent("free_trial_click", { location: "pricing" })}
                    >
                      Start free trial
                    </a>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-zinc-500">
              VAT calculated at checkout where applicable.
            </p>
            <p className="mt-3 text-center text-sm text-zinc-400">
              Not sure which plan fits?{" "}
              <a
                href="https://calendly.com/quote-core-info/15-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
                onClick={() => trackEvent("book_call_click", { location: "pricing" })}
              >
                Book 15 minutes with Shaun
              </a>{" "}
              and we&apos;ll help you find the right setup.
            </p>
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

        {/* Most top software banner */}
        <section className="border-y border-zinc-100 bg-white py-14">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B35] mb-4">Our philosophy</p>
            <blockquote className="text-2xl font-semibold leading-snug text-zinc-900 sm:text-3xl">
              &ldquo;Most top software says &lsquo;Here&rsquo;s our system - make your business fit around it.&rsquo;<br className="hidden sm:block" />
              We say: &lsquo;Here&rsquo;s a flexible system - make it work for your business.&rsquo;&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-medium text-zinc-500">- Shaun, founder of <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span></p>
          </div>
        </section>

        <section className="bg-zinc-50 py-32">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">Quote. Manage. Grow.</h2>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="/free-trial" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#FF6B35] px-10 py-3 text-base font-semibold text-white transition-colors hover:bg-[#e85d2b]" onClick={() => trackEvent("free_trial_click", { location: "bottom" })}>Start free trial</a>
              <a href="https://calendly.com/quote-core-info/15-minute-meeting" target="_blank" rel="noopener noreferrer" className="pill-shimmer inline-flex min-h-14 items-center justify-center rounded-full border border-zinc-300 bg-white px-10 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-50" onClick={() => trackEvent("book_call_click", { location: "bottom" })}>Book a Call</a>
            </div>
            <p className="mt-5 text-sm text-zinc-400">No card required. 14 days free.</p>
          </div>
        </section>

        <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
          <p className="mb-4 text-xs text-zinc-400"><span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span> is quoting software for contractors and trade businesses.</p>
          <p>
            <a href="/" className="hover:text-zinc-800">Home</a>
            {" · "}
            <a href="/#pricing" className="hover:text-zinc-800">Pricing</a>
            {" · "}
            <a href="/blog" className="hover:text-zinc-800">Blog</a>
            {" · "}
            <a href="/contact" className="hover:text-zinc-800">Contact</a>
            {" · "}
            <a href="/free-trial" className="hover:text-zinc-800">Free Trial</a>
            {" · "}
            <a href="/privacy" className="hover:text-zinc-800">Privacy Policy</a>
            {" · "}
            <a href="/terms" className="hover:text-zinc-800">Terms &amp; Conditions</a>
            {" · "}
            <a href="/cookie-policy" className="hover:text-zinc-800">Cookie Policy</a>
          </p>
          <p className="mt-3">© 2026 <span className="brand-wordmark">QuoteCore<span className="brand-plus">+</span></span></p>
          <p className="mt-1">Built by <a href="https://t3labs.tech" className="hover:text-zinc-800">T3 Labs</a></p>
          <SocialIcons />
        </footer>
      </main>

      {/* Quote lightbox - full screen with scroll */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="min-h-full flex flex-col">
            {/* Close bar */}
            <div className="sticky top-0 z-10 flex justify-end p-4">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg text-zinc-600 hover:text-zinc-950 transition-colors"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            {/* Image */}
            <div className="flex-1 flex items-start justify-center px-4 pb-8">
              <img src="/QuoteExample.png" alt="Example Quote" className="w-full max-w-3xl rounded-[1.5rem] shadow-2xl" />
            </div>
          </div>
        </div>
      )}

      <CoffeePopup />
      <style>{`
        .hero-video-float {
          transition: transform 0.6s ease;
        }
        .hero-video-float:hover {
          transform: translateY(-4px);
        }
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

function ShaunQuoteBubble() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const video = document.getElementById("hero-story-video");
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-6 top-1/3 z-20 hidden w-72 xl:block transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-hidden="true"
    >
      <div className="relative rounded-2xl rounded-bl-sm bg-white px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-zinc-100 animate-[floatBubble_6s_ease-in-out_infinite]">
        <p className="text-sm font-semibold leading-snug text-zinc-800">&ldquo;Software should adapt to your business. Not the other way around.&rdquo;</p>
        <p className="mt-2 text-xs font-semibold text-[#FF6B35]">- Shaun, founder</p>
        <span className="absolute -bottom-2.5 left-5 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" />
      </div>
    </div>
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
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-zinc-950">{question}</span>
        <span className="text-2xl leading-none text-zinc-500">{open ? "-" : "+"}</span>
      </button>
      {/* Answer always in DOM for crawlers; visually hidden when closed */}
      <p
        className="text-sm leading-7 text-zinc-600"
        style={open ? { marginTop: "1rem", display: "block" } : { position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}
      >
        {answer}
      </p>
    </div>
  );
}




