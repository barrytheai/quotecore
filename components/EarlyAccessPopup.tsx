"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function EarlyAccessPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Show after 3 seconds, only if not already dismissed this session
    if (sessionStorage.getItem("earlyAccessDismissed")) return;
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("earlyAccessDismissed", "1");
    setVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase
      .from("early_access")
      .insert([{ email: email.toLowerCase().trim() }]);

    if (error) {
      if (error.code === "23505") {
        // Already signed up
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } else {
      setStatus("success");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.3)]">
        {/* Top coral bar */}
        <div className="bg-[#FF6B35] px-8 py-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Coming soon
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            QuoteCore+ goes live in 5 days.
          </h2>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          {status === "success" ? (
            <div className="text-center py-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B35]/10 text-2xl">
                ✓
              </div>
              <p className="mt-4 text-lg font-semibold text-zinc-950">You're on the list!</p>
              <p className="mt-2 text-sm text-zinc-500">
                We'll email you the moment QuoteCore+ goes live - with your 25% discount ready to go.
              </p>
              <button
                type="button"
                onClick={dismiss}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]"
              >
                Got it
              </button>
            </div>
          ) : (
            <>
              <p className="text-zinc-600 leading-7">
                Subscribe now to be first to try the app and{" "}
                <span className="font-semibold text-zinc-950">save 25% on your first 3 months.</span>
              </p>

              <form onSubmit={handleSubmit} className="mt-6">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-[#FF6B35]"
                />
                {errorMsg && (
                  <p className="mt-2 text-xs text-red-500">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b] disabled:opacity-60"
                >
                  {status === "loading" ? "Saving..." : "Get early access + 25% off"}
                </button>
              </form>

              <p className="mt-3 text-center text-xs text-zinc-400">
                No spam. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
          aria-label="Close"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
