export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/68 shadow-[0_8px_30px_rgba(255,255,255,0.25)_inset,0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-[24px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/MainQCP.png" alt="QuoteCore+" className="h-10 w-auto" />
          </a>
          <div className="flex items-center gap-3">
            <a href="/blog" className="text-sm text-zinc-500 hover:text-zinc-800">Blog</a>
            <a
              href="/free-trial"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]"
            >
              Start free trial
            </a>
          </div>
        </div>
      </header>
      <main className="min-h-screen bg-white text-zinc-950">
        {children}
      </main>
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
    </>
  );
}
