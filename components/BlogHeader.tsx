"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function BlogHeader({ backLabel = "Back to homepage", backHref = "/" }: { backLabel?: string; backHref?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Back to homepage", href: "/" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src="/MainQCP.png" alt="QuoteCore+" className="h-10 w-auto" />
        </a>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="/free-trial"
            className="inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#FF6B35] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#e85d2b] sm:px-5 sm:text-sm"
            onClick={() => trackEvent("free_trial_click", { location: "blog-nav" })}
          >
            Start free trial
          </a>

          {/* Hamburger - always visible */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-50"
            onClick={() => setMenuOpen((p) => !p)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="border-t border-zinc-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-7xl px-6 pb-5 pt-4 lg:px-8">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">Navigate</p>
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between border-b border-zinc-100 py-3.5 text-base font-medium text-zinc-800 transition-colors hover:text-[#FF6B35]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <svg className="h-4 w-4 text-zinc-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="https://calendly.com/quote-core-info/15-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 px-5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
                onClick={() => { trackEvent("book_call_click", { location: "blog-nav" }); setMenuOpen(false); }}
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
