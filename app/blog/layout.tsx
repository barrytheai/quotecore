import SocialIcons from "@/components/SocialIcons";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
        <p>
          <a href="/" className="hover:text-zinc-800">QuoteCore+</a>
          {" · "}
          <a href="/roofing-quoting-software" className="hover:text-zinc-800">Roofing Quoting Software</a>
          {" · "}
          <a href="/free-trial" className="hover:text-zinc-800">Free Trial</a>
        </p>
        <p className="mt-3">© 2026 QuoteCore+</p>
        <SocialIcons />
      </footer>
    </>
  );
}
