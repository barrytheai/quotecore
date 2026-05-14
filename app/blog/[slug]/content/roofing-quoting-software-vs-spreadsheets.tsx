export default function Post() {
  return (
    <div className="prose prose-zinc max-w-none">
      <p>Most roofing contractors have a spreadsheet they're quietly proud of.</p>
      <p>It took years to build. It knows your pricing. It gets the job done - mostly. And it feels risky to touch.</p>
      <p>This isn't a post telling you that spreadsheet is wrong. It's a comparison of what spreadsheets actually do well, where they cost you time and money, and what changes when you move to software built specifically for roofing.</p>

      <hr />

      <h2>What spreadsheets get right</h2>
      <p>Let's be honest about this.</p>
      <p>A well-built roofing spreadsheet is genuinely useful. If you've spent time setting up your pricing logic, your material components, your labour rates - that spreadsheet knows your business. It gives you control. It costs nothing extra per month.</p>
      <p>Spreadsheets also have zero learning curve once they're set up. You know exactly where everything is. You can tweak anything without calling support.</p>
      <p>For a contractor who quotes two or three jobs a month, a spreadsheet might be the right tool. No shame in it.</p>
      <p>The problems start when volume increases, when the quote needs to look professional, when measurements need to flow into materials orders, or when someone other than you needs to use it.</p>

      <hr />

      <h2>Where spreadsheets break down</h2>

      <p><strong>1. Every quote starts from scratch</strong></p>
      <p>Even with a good template, you're re-entering data every time. Measurements from your site notes. Photos on your phone. Material components from memory. Pricing from the version you updated last month (or was it the month before?).</p>
      <p>The data exists. You're just the system connecting it all manually.</p>

      <p><strong>2. The output doesn't look like a quote</strong></p>
      <p>A spreadsheet formatted for your own calculations rarely looks like something a homeowner trusts. You're either sending a raw spreadsheet - which looks unfinished - or you're copying everything into a Word document to format it properly.</p>
      <p>That's double the work for every quote you send.</p>

      <p><strong>3. It's not connected to anything else</strong></p>
      <p>When a quote is accepted, your spreadsheet doesn't know. You still have to manually build a materials order. You still have to track whether the client approved it. You still have to re-enter data when invoicing.</p>
      <p>The spreadsheet is an island. Everything around it has to be done separately.</p>

      <p><strong>4. One error multiplies</strong></p>
      <p>A transposed measurement, a formula broken by an accidental edit, a price that didn't update. In a spreadsheet, one mistake can ripple through an entire quote silently. You only find out when something doesn't add up on site.</p>

      <p><strong>5. It only works for you</strong></p>
      <p>The moment you have someone else quote a job, you're either training them on your specific spreadsheet - with all its quirks - or they're guessing. There's no consistency. Every quote looks slightly different.</p>

      <hr />

      <h2>What roofing-specific software changes</h2>
      <p>This isn't about replacing the logic in your spreadsheet. It's about removing the manual work around it.</p>
      <p><strong>Measurements enter once.</strong> With digital takeoff built in, you measure the roof from a plan - roof area, ridge, hip, valley, eave, barge - and those numbers feed directly into your pricing. No re-entry. No transcription.</p>
      <p><strong>The quote builds itself.</strong> Your pricing rules, component logic, and margins are set up once. After that, the software applies them. You review, adjust if needed, and send. What used to take two hours takes twenty minutes.</p>
      <p><strong>The output is already professional.</strong> The client-facing quote comes out of the system formatted and ready to send. No reformatting in Word. A professional document that reflects the quality of your work.</p>
      <p><strong>Acceptance triggers the next step.</strong> When a client accepts, you know immediately - by email and in your account. Materials orders can be built directly from the accepted quote.</p>
      <p><strong>Anyone on your team can use it.</strong> Because the pricing logic is in the system, any member of your team can produce a consistent, accurate quote.</p>

      <hr />

      <h2>Side-by-side comparison</h2>

      {/* Comparison table */}
      <div className="not-prose overflow-x-auto my-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-zinc-50">
              <th className="text-left px-4 py-3 border border-zinc-200 font-semibold text-zinc-700 w-1/3"></th>
              <th className="text-left px-4 py-3 border border-zinc-200 font-semibold text-zinc-700">Spreadsheet</th>
              <th className="text-left px-4 py-3 border border-zinc-200 font-semibold text-[#FF6B35]">QuoteCore+</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Setup time", "Hours to build, ongoing to maintain", "Set up once, add jobs immediately"],
              ["Quoting time", "1-3 hours per quote", "15-20 minutes per quote"],
              ["Quote output", "Raw data or reformatted Word doc", "Client-ready, professional PDF"],
              ["Measurement input", "Manual re-entry every time", "Digital takeoff, enter once"],
              ["Materials ordering", "Separate manual process", "Built directly from the quote"],
              ["Quote acceptance tracking", "Email or phone", "Automated alerts, tracked in account"],
              ["Team use", "Training required, inconsistent results", "Consistent, anyone can use"],
              ["Error risk", "Formula errors, version control issues", "Locked pricing logic, no manual transfer"],
            ].map(([feature, spreadsheet, software], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}>
                <td className="px-4 py-3 border border-zinc-200 font-medium text-zinc-800">{feature}</td>
                <td className="px-4 py-3 border border-zinc-200 text-zinc-500">{spreadsheet}</td>
                <td className="px-4 py-3 border border-zinc-200 text-zinc-800">{software}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr />

      <h2>The honest verdict</h2>
      <p>If you're solo, quoting a handful of jobs a month, and your spreadsheet works - keep using it until it doesn't.</p>
      <p>But if you're losing time after site visits, sending quotes that look less professional than your work deserves, or missing jobs because someone got there first - the spreadsheet is the bottleneck.</p>
      <p>Research shows the first contractor to respond wins 78% of home service jobs. (<a href="https://chiirp.com/insider_information_blog/the-real-cost-of-slow-lead-response" target="_blank" rel="noopener noreferrer">Source: CHIIRP, based on Harvard Business Review / MIT lead response research</a>) The spreadsheet won't get you there fast enough.</p>
      <p>QuoteCore+ was built by a roofer who spent over a decade doing this the slow way. It's not a generic estimating tool adapted for roofing - it's built around the way a roofing job actually works, from first measurement to final invoice.</p>
      <p>No credit card required. No spreadsheet required. Set up your pricing once, quote your next job in the system, and see how long it actually takes.</p>
      <p><a href="/">Start your free 2-week trial</a> and see what changes when <a href="/">roofing quoting software</a> is built around how you actually work.</p>
    </div>
  );
}
