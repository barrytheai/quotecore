import SocialIcons from "@/components/SocialIcons";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
      <p>
        <a href="/blog" className="hover:text-zinc-800">Blog</a>
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
      <p className="mt-1">Built by T3Labs</p>
      <SocialIcons />
    </footer>
  );
}
