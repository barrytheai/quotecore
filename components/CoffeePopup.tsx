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
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md"
        onClick={dismiss}
      />

      {/* Popup — centred, frosted glass */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
        <div className="pointer-events-auto relative w-full max-w-md rounded-3xl border border-white/20 bg-white/80 shadow-[0_32px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl px-8 py-10">

          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Want a free coffee?
          </h2>

          <p className="mt-4 text-zinc-600 leading-relaxed">
            Give Shaun 15 minutes and he'll show you how QuoteCore+ helps roofers save hours every week on quoting, materials, and job admin.
          </p>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Not convinced after the call? No worries - coffee's still on him.
          </p>

          <a
            href="https://calendly.com/quote-core-info/15-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="mt-7 flex w-full items-center justify-center rounded-full bg-[#FF6B35] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]"
          >
            Book 15 min with Shaun
          </a>

          <p className="mt-4 text-center text-xs text-zinc-400">
            Free coffee voucher sent after completed call. One per UK roofing business.{" "}
            <a href="/coffee-terms" className="underline hover:text-zinc-600">
              Terms & conditions apply.
            </a>
          </p>

          {/* Close button */}
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200"
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
