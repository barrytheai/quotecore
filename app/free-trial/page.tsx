"use client";

export default function FreeTrialPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Try QuoteCore+ free for 2 weeks
        </h1>
        <p className="mt-4 text-lg text-zinc-500">No card. No commitment. Just faster quotes.</p>
        <a
          href="https://quotecore-plus-dev.vercel.app/login"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-[#FF6B35] px-10 py-3 text-base font-semibold text-white transition-colors hover:bg-[#e85d2b]"
        >
          Start your free trial
        </a>
        <p className="mt-4 text-sm text-zinc-400">No credit card required</p>
      </div>
    </main>
  );
}
