"use client";

import { useEffect, useState } from "react";

export default function CoffeePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("coffee-popup-dismissed")) return;

    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("coffee-popup-dismissed", "1");
  };

  if (!visible || dismissed) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Popup */}
      <div className="fixed inset-x-4 bottom-6 z-50 mx-auto max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-200 sm:inset-x-auto sm:right-6 sm:left-auto sm:w-[420px]">
        {/* Coffee cup accent */}
        <div className="rounded-t-2xl bg-[#FF6B35] px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <span className="text-3xl">☕</span>
            <h2 className="text-xl font-semibold">Want a free coffee?</h2>
          </div>
        </div>

        <div className="px-6 py-5">
          <p className="text-zinc-600 leading-relaxed">
            Give Shaun 15 minutes and he'll show you how QuoteCore+ helps roofers save hours every week on quoting, materials, and job admin.
          </p>
          <p className="mt-2 text-zinc-600 leading-relaxed">
            Not convinced after the call? No worries - coffee's still on him.
          </p>

          <a
            href="https://calendly.com/quote-core-info/15-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]"
          >
            ☕ Book 15 min with Shaun
          </a>

          <p className="mt-3 text-center text-xs text-zinc-400">
            Free coffee voucher sent after completed call. One per UK roofing business.{" "}
            <a href="/coffee-terms" className="underline hover:text-zinc-600">
              Terms & conditions apply.
            </a>
          </p>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </>
  );
}
