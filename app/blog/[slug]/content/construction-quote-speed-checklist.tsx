"use client";

export default function Post() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="prose prose-zinc max-w-none">
      <style>{`
        @media print {
          header, nav, footer, .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { font-size: 12pt; }
        }
        .print-only { display: none; }
      `}</style>

      <p>The first contractor to respond wins 78% of home service jobs.</p>
      <p>Not the cheapest. Not the most experienced. The one who got there first.</p>
      <p>Most contractors lose jobs not because their price is wrong - but because their quote arrived a day too late. Someone else was faster. The client moved on.</p>
      <p>This checklist is designed to fix that. Print it out, stick it in the van, and run through it after every site visit.</p>

      <hr />

      <h2>Why quotes take longer than they should</h2>
      <p>The site visit is rarely the slow part. It&apos;s everything after.</p>
      <p>Measurements get written on a notepad, transferred to a spreadsheet, rebuilt into a quote, formatted in Word, and sent off - sometimes the next evening, sometimes two days later.</p>
      <p>Every transfer adds time and risk of error. Contractors who quote fast have eliminated most of those steps.</p>

      <hr />

      <h2>The Construction Quote Speed Checklist</h2>

      <div className="not-prose my-8 rounded-2xl border-2 border-zinc-200 bg-zinc-50 p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between no-print">
          <p className="text-sm font-medium text-zinc-500">Save this and run through it after every site visit</p>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Checklist
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-700">Before You Leave</h3>
            <ul className="space-y-2 text-sm text-zinc-700" style={{ listStyle: "none", padding: 0 }}>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Pricing template is up to date - materials costs, labour rates, margins all current</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> You know the job scope before you arrive</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Measurement tools are ready</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-700">On Site</h3>
            <ul className="space-y-2 text-sm text-zinc-700" style={{ listStyle: "none", padding: 0 }}>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Measure everything in one pass - don&apos;t leave gaps</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Record measurements in a consistent format you can read back clearly</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Photograph anything that affects pricing</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Flag any variables to the client immediately</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-700">Back at the Van or Desk</h3>
            <ul className="space-y-2 text-sm text-zinc-700" style={{ listStyle: "none", padding: 0 }}>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Enter measurements once - not notepad to spreadsheet to email</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Apply your pricing - rates should be preset, not recalculated from scratch</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Generate a clean professional output - not a raw spreadsheet</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Review before sending - numbers correct, scope clear, contact details present</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-700">Sending the Quote</h3>
            <ul className="space-y-2 text-sm text-zinc-700" style={{ listStyle: "none", padding: 0 }}>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Send same day - ideally within 2 hours of leaving site</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Include a clear way for the client to accept</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Set a 48-hour follow-up reminder</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-700">After Acceptance</h3>
            <ul className="space-y-2 text-sm text-zinc-700" style={{ listStyle: "none", padding: 0 }}>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Move straight to materials ordering</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Log the job - date, scope, value, client details</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-base">&#9633;</span> Note what slowed you down - improve the process each time</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <h2>The step that slows most contractors down</h2>
      <p>The step almost every contractor loses time on: entering measurements once - not notepad to spreadsheet to email.</p>
      <p>Most quotes involve entering the same numbers three or four times. Every transfer is time. Every transfer is a chance for error.</p>
      <p>The contractors who quote in 15 minutes have just removed the steps that didn&apos;t need to be there.</p>

      <hr />

      <h2>How QuoteCore+ fits in</h2>
      <p>QuoteCore+ is built around this checklist. Upload a plan, measure from it, pricing applies automatically, professional quote generated - ready to send. When accepted, the materials order builds from the same numbers.</p>
      <p>No re-entry. No reformatting. Quote to client, same day.</p>
      <p><a href="/free-trial" className="text-[#FF6B35] font-medium hover:underline">Start your free 2-week trial</a> - no card required.</p>
    </div>
  );
}
