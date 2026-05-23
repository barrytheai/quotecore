export default function Post() {
  return (
    <div className="prose prose-zinc max-w-none">
      <p>If you've been looking for quoting software for your trades business, you may have come across both QuoteSmith and QuoteCore+.</p>
      <p>Both help you produce professional quotes faster than a spreadsheet. Both are a step up from Word documents and manual calculations. But they're built to solve different problems.</p>

      <hr />

      <h2>What QuoteSmith does</h2>
      <p>QuoteSmith is an AI-powered proposal writer. You manually enter the job details - customer information, job type, materials, quantities - and the AI writes a detailed scope of work for you. It produces a branded PDF that looks professional.</p>
      <p>The key word is manually. QuoteSmith doesn't measure from plans. It doesn't connect to your pricing logic. It doesn't know what you've charged for similar jobs before. You still do all of that yourself - QuoteSmith just makes the final document look better.</p>
      <p>The workflow ends when the PDF is sent. There's no quote acceptance tracking, no materials ordering, no job tracking after the proposal goes out.</p>
      <p>Pricing starts from £9.99/month.</p>

      <hr />

      <h2>What QuoteCore+ does</h2>
      <p>QuoteCore+ is a full quoting and job management workflow. The difference starts before you've written a single line of the quote.</p>
      <p>Instead of manually entering measurements, you upload a plan and measure directly from it. Your rates, components and margins are set up once and applied automatically. The quote builds itself from the measurements - not from memory or manual entry.</p>
      <p>When a quote is sent, you know the moment a client accepts or declines - by email and in your account. When it's accepted, a materials order is built directly from it. The job stays organised in one place from that point through to completion.</p>
      <p>QuoteCore+ isn't just a better-looking proposal. It's a connected workflow from first measurement to finished job.</p>

      <hr />

      <h2>The key difference</h2>
      <p>QuoteSmith makes a manually-built quote look better. QuoteCore+ replaces the manual process entirely.</p>
      <p>With QuoteSmith, you still measure, calculate, price, and enter everything yourself. The AI writes the description. The PDF looks professional. That's it - the workflow ends there.</p>
      <p>With QuoteCore+, the measurements drive everything. Upload a plan, measure from it, and the quote prices itself. When it's accepted, the materials order builds itself. The job tracks itself.</p>
      <ul>
        <li>If your pain is: <em>My proposals don't look professional enough</em> - QuoteSmith solves that.</li>
        <li>If your pain is: <em>I'm spending too long on the process from measurement to sent quote, and losing track of jobs after</em> - QuoteCore+ is built for that.</li>
      </ul>

      <hr />

      <h2>Side-by-side comparison</h2>

      <div className="not-prose overflow-x-auto my-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-zinc-50">
              <th className="text-left px-4 py-3 border border-zinc-200 font-semibold text-zinc-700 w-1/3"></th>
              <th className="text-left px-4 py-3 border border-zinc-200 font-semibold text-zinc-700">QuoteSmith</th>
              <th className="text-left px-4 py-3 border border-zinc-200 font-semibold text-[#FF6B35]">QuoteCore+</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["AI-generated proposal text", "Yes", "No - you control the content"],
              ["Measure from plans (digital takeoff)", "No - manual entry only", "Yes"],
              ["Automated pricing logic", "No - you enter all pricing manually", "Set up once, applied automatically"],
              ["Quote acceptance tracking", "No", "Yes - instant alerts by email and in account"],
              ["Materials ordering from quote", "No", "Yes - built from accepted quote"],
              ["Job tracking after acceptance", "No", "Yes - from quote to completion"],
              ["Connected end-to-end workflow", "No - ends at proposal", "Yes - measurement to job completion"],
              ["Mobile-friendly", "Yes", "Desktop/laptop"],
              ["Pricing", "From £9.99/mo", "From £15/mo"],
              ["Free trial", "Yes", "Yes - 2 weeks, no card required"],
            ].map(([feature, qs, qcp], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}>
                <td className="px-4 py-3 border border-zinc-200 font-medium text-zinc-800">{feature}</td>
                <td className="px-4 py-3 border border-zinc-200 text-zinc-500">{qs}</td>
                <td className="px-4 py-3 border border-zinc-200 text-zinc-800">{qcp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr />

      <h2>Who QuoteSmith is best for</h2>
      <ul>
        <li>Contractors who want AI to write a proposal description so they don't have to</li>
        <li>Smaller operators quoting on their phone after a site visit</li>
        <li>Trades that already have a fast manual pricing process and want better-looking output</li>
        <li>Budget-conscious operators - £9.99/month is low risk</li>
      </ul>

      <h2>Who QuoteCore+ is best for</h2>
      <ul>
        <li>Construction businesses quoting volume - multiple jobs per week</li>
        <li>Any trade re-entering measurements multiple times before a quote goes out</li>
        <li>Businesses that want quoting, materials ordering, and job tracking in one place</li>
        <li>Anyone losing jobs to competitors who quote faster</li>
      </ul>
      <p>Works for: Roofing, plumbing, electrical, cladding, flooring, fencing, landscaping, decking, general building, exterior works, renovation trades.</p>

      <hr />

      <h2>The honest verdict</h2>
      <p>QuoteSmith does one thing well: it makes a manually-built quote look professional. If that's your only problem, it's affordable and effective.</p>
      <p>But if the problem is deeper - measurements re-entered multiple times, pricing rebuilt from scratch, no visibility on acceptance, materials ordered separately, jobs tracked in spreadsheets - QuoteSmith doesn't touch any of that. You're still doing everything manually. The proposal just looks better at the end.</p>
      <p>QuoteCore+ removes the manual process. Measurements drive the quote. The quote drives the materials order. The accepted job stays tracked. 30 minutes on paper becomes 15 minutes in QuoteCore+.</p>
      <ul>
        <li>If you want a better-looking proposal: QuoteSmith.</li>
        <li>If you want to fix the whole process: <a href="/free-trial">QuoteCore+</a>.</li>
      </ul>
    </div>
  );
}
