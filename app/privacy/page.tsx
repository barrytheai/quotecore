import type { Metadata } from "next";
import SocialIcons from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Privacy Policy | QuoteCore+",
  description: "How QuoteCore+ handles your personal data when you visit quote-core.com and sign up for early access.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/MainQCP.png" alt="QuoteCore+" className="h-10 w-auto" />
          </a>
          <a href="/" className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50">
            Back to homepage
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-zinc-400">Effective date: 12 May 2026</p>

        <div className="prose prose-zinc mt-10 max-w-none">
          <p>This Privacy Policy explains how QuoteCore+ ("we", "our", "us") handles personal data when you visit our website at <strong>quote-core.com</strong> and when you sign up for early access to our forthcoming web application.</p>
          <p>This policy covers the <strong>public website only</strong>. A separate Privacy Policy applies to the QuoteCore+ web application itself and is presented to users when they sign in to it.</p>
          <p>We are based in New Zealand but our visitors and future users are in many countries. We treat every person according to the strictest privacy law that applies to them, which in most cases is the EU/UK GDPR.</p>

          <hr />

          <h2>Who we are</h2>
          <p>The data controller for the website and the early-access list is:</p>
          <p><strong>T3 Play Limited</strong><br />New Zealand<br />Email: info@quote-core.com</p>
          <p>For visitors in the EU or UK, we have not yet appointed a representative under Article 27 of the GDPR / UK GDPR. Until we do, you can contact us directly at the email above for any privacy queries.</p>

          <hr />

          <h2>What we collect</h2>
          <h3>When you simply browse the website</h3>
          <ul>
            <li>Standard server-side request data: IP address, user-agent string, referrer, and page paths. Used for security and operational diagnostics.</li>
            <li>A small set of strictly-necessary cookies required to deliver the page. Not used for analytics or advertising.</li>
          </ul>

          <h3>When you sign up for early access</h3>
          <ul>
            <li>The email address you submit through the early-access form.</li>
            <li>The timestamp of the submission and the IP address it came from (for anti-abuse purposes).</li>
          </ul>

          <h3>What we do NOT collect</h3>
          <ul>
            <li>No advertising cookies, no retargeting pixels, no social media tracking pixels.</li>
            <li>We do not buy or sell personal data, ever.</li>
          </ul>

          <hr />

          <h2>Why we use it</h2>
          <ul>
            <li>To run the website - serve pages, prevent abuse, keep the site available.</li>
            <li>To contact you about early access - let you know when QuoteCore+ opens up.</li>
            <li>To send transactional product updates related to early access.</li>
            <li>To comply with the law.</li>
          </ul>

          <hr />

          <h2>Lawful basis (GDPR)</h2>
          <ul>
            <li><strong>Consent</strong> (Art. 6(1)(a)) - for adding you to the early-access list. You can withdraw at any time.</li>
            <li><strong>Legitimate interests</strong> (Art. 6(1)(f)) - to keep the website secure and working.</li>
            <li><strong>Legal obligation</strong> (Art. 6(1)(c)) - to retain records required by law.</li>
          </ul>

          <hr />

          <h2>Who we share with</h2>
          <ul>
            <li><strong>Supabase</strong> - database and storage for the early-access list. Hosted in the EU (Frankfurt).</li>
            <li><strong>Vercel</strong> - web hosting. Global edge network; data may transit US infrastructure.</li>
            <li><strong>Resend</strong> - transactional email delivery. US-based.</li>
          </ul>
          <p>We do not sell your data and we do not share it with advertisers, analytics providers, or social platforms.</p>

          <hr />

          <h2>Where data is stored</h2>
          <p>Your early-access record is stored in the EU (Supabase eu-central-1, Frankfurt). Email delivery transits the US via Resend. For transfers outside the EEA/UK, we rely on Standard Contractual Clauses (SCCs).</p>

          <hr />

          <h2>How long we keep it</h2>
          <ul>
            <li><strong>Early-access email addresses</strong> - kept until QuoteCore+ launches and for a reasonable period thereafter, or until you ask us to delete it. If you do not claim a spot within 12 months of launch, we delete your entry.</li>
            <li><strong>Server logs</strong> from Vercel/Supabase - per their own retention policies (typically 30 days).</li>
            <li><strong>Email delivery logs</strong> at Resend - typically 30-90 days.</li>
          </ul>

          <hr />

          <h2>Your rights</h2>
          <p>Contact us at info@quote-core.com to exercise any of these rights - we will respond within one month.</p>
          <ul>
            <li><strong>Access</strong> - get a copy of the personal data we hold about you.</li>
            <li><strong>Rectification</strong> - correct inaccurate data.</li>
            <li><strong>Erasure</strong> - have your early-access entry deleted.</li>
            <li><strong>Portability</strong> - receive your data in a machine-readable format.</li>
            <li><strong>Restriction</strong> - pause our processing while a dispute is resolved.</li>
            <li><strong>Objection</strong> - object to processing based on our legitimate interests.</li>
            <li><strong>Withdraw consent</strong> - at any time, by emailing us or clicking unsubscribe.</li>
          </ul>
          <p>California residents have additional rights under CCPA/CPRA. New Zealand residents have rights under Law 8968 (New Zealand Privacy Commissioner). These broadly mirror the GDPR rights above.</p>

          <hr />

          <h2>Cookies</h2>
          <p>The website uses strictly-necessary cookies only: session/CSRF tokens required for the site to load and the early-access form to submit safely, and a cookie-notice dismissal value. We do not use analytics, advertising, or social media cookies.</p>

          <hr />

          <h2>Security</h2>
          <p>We take reasonable technical and organisational measures including HTTPS everywhere, encrypted-at-rest storage, row-level security on the database, and rate-limiting on the early-access form. If we ever suffer a breach that affects your data, we will notify you and relevant regulators within statutory timeframes.</p>

          <hr />

          <h2>Children's data</h2>
          <p>QuoteCore+ is a business tool for trades. We do not knowingly collect data from anyone under 16. If you believe a child has signed up, contact us and we will delete the entry.</p>

          <hr />

          <h2>Changes to this policy</h2>
          <p>When we update this policy materially, we will update the effective date at the top and notify early-access subscribers by email if the change affects how we use their data.</p>

          <hr />

          <h2>The QuoteCore+ application</h2>
          <p>When QuoteCore+ launches and you create an account, a separate Privacy Policy will apply to your use of the application. Until then, only this website policy applies.</p>

          <hr />

          <h2>Contact us</h2>
          <p>Privacy queries, rights requests, or anything else:<br /><a href="mailto:info@quote-core.com">info@quote-core.com</a></p>
        </div>
      </div>
    </main>
  );
}
