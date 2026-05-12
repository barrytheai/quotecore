import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | QuoteCore+",
  description: "Terms of Use governing your access to and use of the public website at quote-core.com.",
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-semibold tracking-tight">Terms of Use</h1>
        <p className="mt-2 text-sm text-zinc-400">Effective date: 12 May 2026</p>

        <div className="prose prose-zinc mt-10 max-w-none">
          <p>These Terms of Use ("Terms") govern your access to and use of the public website at <strong>quote-core.com</strong> (the "Site"), including any early-access signup form.</p>
          <p>The Site is operated by <strong>[Costa Rica Entity Name TBC]</strong>, with registered address at <strong>[Costa Rica Registered Address TBC]</strong>. You can reach us at info@quote-core.com.</p>
          <p>These Terms cover the <strong>public website only</strong>. When QuoteCore+ launches and you create an account, a separate Terms of Service governs your use of the application itself.</p>
          <p>By using the Site you agree to these Terms. If you don't agree, please don't use the Site.</p>

          <hr />

          <h2>1. The Site is informational</h2>
          <p>The Site is a read-only marketing and information surface. We make no commitments through the Site about the availability, features, pricing, or launch date of QuoteCore+. Everything on the Site is provided for general information only and is not legal, financial, tax, or professional advice.</p>

          <hr />

          <h2>2. Early access</h2>
          <p>If you submit your email through the early-access form, you're asking us to contact you when QuoteCore+ opens up. We may email you to confirm your spot, when QuoteCore+ launches, or with a small number of related operational messages.</p>
          <p>We will not send you unrelated marketing email and we will not share your address with anyone outside our service providers.</p>
          <p>Early access is offered at our discretion. Submitting an email is <strong>not</strong> a contract, a purchase, or a guarantee that you'll receive access. You can ask us to remove your address at any time by emailing info@quote-core.com.</p>

          <hr />

          <h2>3. Permitted use</h2>
          <p>You may browse the Site for any lawful purpose. You may not:</p>
          <ul>
            <li>Use the Site to break any law, infringe any third party's rights, or harm anyone.</li>
            <li>Submit false or fraudulent information through the early-access form.</li>
            <li>Attempt to gain unauthorised access to the Site or underlying infrastructure.</li>
            <li>Probe, scan, or test the vulnerability of the Site, or breach any security measures.</li>
            <li>Run automated requests that interfere with normal operation.</li>
            <li>Reverse-engineer or attempt to extract source code other than what we publish.</li>
            <li>Re-publish substantial portions of the Site's content as your own.</li>
          </ul>

          <hr />

          <h2>4. Content and intellectual property</h2>
          <p>All content on the Site — text, graphics, logos, the "QuoteCore+" name, and the underlying code — is owned by us or licensed to us. You may view the Site and print or save individual pages for your own personal or internal business reference. Any other use requires our prior written permission.</p>
          <p>If you believe content on the Site infringes your rights, email info@quote-core.com.</p>

          <hr />

          <h2>5. Third-party links</h2>
          <p>The Site may link to third-party websites. We don't control those sites and we're not responsible for their content, accuracy, or practices.</p>

          <hr />

          <h2>6. No warranty</h2>
          <p>The Site is provided "as is" and "as available". To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, accuracy, and non-infringement. We don't warrant that the Site will be uninterrupted, error-free, or secure.</p>
          <p>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited.</p>

          <hr />

          <h2>7. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill arising out of your use of the Site.</p>
          <p>Our total aggregate liability is limited to US$100, or the maximum amount allowed by your local law, whichever is greater.</p>

          <hr />

          <h2>8. Indemnity</h2>
          <p>You agree to defend, indemnify, and hold us harmless from any claim, loss, or expense arising out of your breach of these Terms, your misuse of the Site, or your violation of any law or third-party right.</p>

          <hr />

          <h2>9. Changes to the Site or these Terms</h2>
          <p>We may change, suspend, or remove parts of the Site at any time without notice. We may update these Terms from time to time — material changes will be communicated to early-access subscribers by email. Continued use of the Site after a change means you accept the updated Terms.</p>

          <hr />

          <h2>10. Privacy</h2>
          <p>Use of the Site is subject to our <a href="/privacy">Privacy Policy</a>, which explains how we handle the personal data you provide. Please read it before submitting any data through the Site.</p>

          <hr />

          <h2>11. Termination</h2>
          <p>We may suspend or terminate your access to the Site at any time if we believe you have breached these Terms. Sections covering intellectual property, warranty, liability, indemnity, and governing law will survive termination.</p>

          <hr />

          <h2>12. Governing law and disputes</h2>
          <p>These Terms are governed by the laws of <strong>Costa Rica</strong>, without regard to its conflict-of-laws rules. Any dispute arising out of or related to the Site will be brought exclusively in the competent courts of San Jose, Costa Rica.</p>
          <p>Nothing in this section overrides any mandatory consumer-protection rights you have under the law of the country where you live.</p>

          <hr />

          <h2>13. The QuoteCore+ application</h2>
          <p>When QuoteCore+ launches and you create an account, a separate Terms of Service will govern your use of the application. Until you create an account, only these website Terms apply to you.</p>

          <hr />

          <h2>14. General</h2>
          <ul>
            <li><strong>Entire agreement.</strong> These Terms, together with the Privacy Policy, are the entire agreement between you and us regarding the Site.</li>
            <li><strong>Severability.</strong> If any part of these Terms is held unenforceable, the rest will remain in force.</li>
            <li><strong>No waiver.</strong> If we don't enforce a provision, that doesn't mean we waive our right to enforce it later.</li>
            <li><strong>Assignment.</strong> You may not assign these Terms. We may assign them to a successor entity.</li>
          </ul>

          <hr />

          <h2>15. Contact</h2>
          <p>Questions about these Terms:<br /><a href="mailto:info@quote-core.com">info@quote-core.com</a></p>
        </div>
      </div>
    </main>
  );
}
