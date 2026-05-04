import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | QuoteCore+",
  description: "QuoteCore+ was built by an ex-roofer who got sick of quoting jobs the hard way. Meet Shaun and the story behind the software.",
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-zinc-950">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/60 bg-white/68 shadow-[0_8px_30px_rgba(255,255,255,0.25)_inset,0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-[24px]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" className="flex items-center gap-3">
              <img src="/MainQCP.png" alt="QuoteCore+" className="h-10 w-auto" />
            </a>
            <div className="flex items-center gap-3">
              <a href="/" className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
                Back to homepage
              </a>
              <a
                href="/free-trial"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]"
              >
                Start free trial
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden pb-12 pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,53,0.08),transparent_40%)]" />
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <p className="text-sm font-medium text-[#FF6B35]">About QuoteCore+</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Built by someone who's been there.
            </h1>
          </div>
        </section>

        {/* Founder section */}
        <section className="mx-auto max-w-3xl px-6 pb-20 lg:px-8">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            {/* Photo placeholder */}
            <div className="mb-8 flex items-center gap-6">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#FF6B35]/10 border-2 border-[#FF6B35]/20 text-sm text-zinc-400">
                {/* Replace with: <img src="/shaun.jpg" alt="Shaun" className="h-24 w-24 rounded-full object-cover" /> */}
                Photo
              </div>
              <div>
                <p className="text-xl font-semibold">Shaun</p>
                <p className="text-sm text-zinc-500">Founder, QuoteCore+</p>
                <p className="mt-1 text-sm text-[#FF6B35]">Ex-roofer</p>
              </div>
            </div>

            <div className="space-y-5 text-lg leading-8 text-zinc-600">
              <p>
                QuoteCore+ wasn't built in a boardroom. It was built by an ex-roofer who spent years quoting jobs the same slow way everyone else does — measurements on paper, prices in a spreadsheet, quotes fired off in an email and then chased for days.
              </p>
              <p>
                Shaun knew there had to be a faster way. He'd been on the tools long enough to know exactly where the time went, exactly where the mistakes crept in, and exactly what a good quote needed to look like to actually win the job.
              </p>
              <p>
                So he built the tool he wished had existed when he was quoting roofs daily.
              </p>
              <p>
                Before QuoteCore+ went live, it was tested and refined by working roofers across the industry — contractors who quoted real jobs through the platform and gave Shaun honest feedback on what wasn't good enough. Every iteration was shaped by people who actually use it on the job.
              </p>
              <p className="font-medium text-zinc-800">
                The result is a quoting tool that thinks the way a roofer thinks — because it was built by one.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-[2rem] border border-[#FF6B35]/20 bg-[#FF6B35]/5 p-8 text-center">
            <p className="text-xl font-semibold text-zinc-950">See it for yourself.</p>
            <p className="mt-2 text-zinc-500">Two weeks free. No card required. Start quoting in minutes.</p>
            <a
              href="/free-trial"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#FF6B35] px-10 py-3 text-base font-semibold text-white transition-colors hover:bg-[#e85d2b]"
            >
              Start your free trial
            </a>
          </div>
        </section>

        <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
          <p>
            <a href="/" className="hover:text-zinc-800">QuoteCore+</a>
            {" · "}
            <a href="/roofing-quoting-software" className="hover:text-zinc-800">Roofing Quoting Software</a>
            {" · "}
            <a href="/free-trial" className="hover:text-zinc-800">Free Trial</a>
          </p>
          <p className="mt-3">© 2026 QuoteCore+</p>
        </footer>
      </main>
    </>
  );
}
