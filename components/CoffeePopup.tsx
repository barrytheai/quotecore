"use client";

import { useEffect, useState } from "react";

export default function CoffeePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  if (!visible || dismissed) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="pointer-events-auto relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-[0_32px_80px_rgba(0,0,0,0.2)] flex">

          {/* Left - content */}
          <div className="flex flex-col justify-between p-8 flex-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B35]">Limited offer</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 leading-tight">
                Want a free <span className="text-[#FF6B35]">coffee?</span>
              </h2>
              <div className="mt-1 h-0.5 w-16 bg-[#FF6B35] rounded-full" />

              <p className="mt-5 text-zinc-600 leading-relaxed text-sm">
                Give Shaun 15 minutes and he&apos;ll show you how QuoteCore+ will save you hours every week, and make more money from quoting, ordering, tracking, and invoicing jobs. Not convinced after the call? No worries - <span className="text-[#FF6B35] font-medium">coffee&apos;s still on him.</span>
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://calendly.com/quote-core-info/15-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={dismiss}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                Book 15 min with Shaun
              </a>
              <p className="mt-3 text-center text-xs text-zinc-400">
                Free coffee voucher sent after completed call. 1 coffee voucher per business.{" "}
                <a href="https://quote-core.com/coffee-terms" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">
                  T&amp;Cs apply.
                </a>
              </p>
              <button
                type="button"
                onClick={dismiss}
                className="mt-3 w-full text-center text-xs text-zinc-400 hover:text-zinc-600 transition-colors"
              >
                Not yet
              </button>
            </div>
          </div>

          {/* Right - Shaun photo */}
          <div className="relative hidden sm:block w-56 flex-shrink-0 bg-[#fdf6ee]">
            <img
              src="/shaun-smiling.jpg"
              alt="Shaun, Founder of QuoteCore+"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fdf6ee]/40 to-transparent" />
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-zinc-500 shadow-sm transition-colors hover:bg-white"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
