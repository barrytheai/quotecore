"use client";

export default function Post() {
  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = '';
    window.print();
    setTimeout(() => { document.title = originalTitle; }, 500);
  };

  return (
    <div className="prose prose-zinc max-w-none">
      <style>{`
        @media print {
          header, nav, footer, .no-print { display: none !important; }
          html, body { width: 210mm !important; margin: 0 !important; padding: 0 !important; }
          article { padding: 0 !important; margin: 0 !important; max-width: 100% !important; }
          .print-checklist { border: 1px solid #e4e4e7 !important; background: #fff !important; page-break-inside: avoid; padding: 20px !important; border-radius: 8px !important; margin: 0 !important; }
          .print-title { display: block !important; font-size: 18pt !important; margin-bottom: 14px !important; }
          .print-logo { display: block !important; }
          .print-section { margin-bottom: 12px !important; }
          .print-section h3 { margin-bottom: 4px !important; font-size: 12pt !important; }
          .print-item { font-size: 13.5pt !important; gap: 10px !important; line-height: 1.45 !important; }
          .print-item span:first-child { font-size: 18pt !important; line-height: 1 !important; }
          .print-logo img { height: 28px !important; }
          .print-logo { margin-top: 14px !important; padding-top: 10px !important; }
          @page { size: A4; margin: 1.5cm; }
        }
        .print-title { display: none; }
        .print-logo { display: none; }
      `}</style>

      <p className="no-print">The first contractor to respond wins 78% of home service jobs.</p>
      <p className="no-print">Not the cheapest. Not the most experienced. The one who got there first.</p>
      <p className="no-print">Most contractors lose jobs not because their price is wrong - but because their quote arrived a day too late. Someone else was faster. The client moved on.</p>
      <p className="no-print">This checklist is designed to fix that. Print it out, stick it in the van, and run through it after every site visit.</p>

      <hr className="no-print" />

      <h2 className="no-print">Why quotes take longer than they should</h2>
      <p className="no-print">The site visit is rarely the slow part. It&apos;s everything after.</p>
      <p className="no-print">Measurements get written on a notepad, transferred to a spreadsheet, rebuilt into a quote, formatted in Word, and sent off - sometimes the next evening, sometimes two days later.</p>
      <p className="no-print">Every transfer adds time and risk of error. Contractors who quote fast have eliminated most of those steps.</p>

      <hr className="no-print" />

      <h2 className="no-print">The Construction Quote Speed Checklist</h2>

      <div className="not-prose my-8 rounded-2xl border-2 border-zinc-200 bg-zinc-50 p-6 sm:p-8 print-checklist">
        <p className="print-title mb-6 text-2xl font-bold text-zinc-900">Quote Checklist</p>

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

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            { heading: "Before You Leave", items: ["Pricing template is up to date - materials costs, labour rates, margins all current", "You know the job scope before you arrive", "Measurement tools are ready"] },
            { heading: "On Site", items: ["Measure everything in one pass - don't leave gaps", "Record measurements in a consistent format you can read back clearly", "Photograph anything that affects pricing", "Flag any variables to the client immediately"] },
            { heading: "Back at the Van or Desk", items: ["Enter measurements once - not notepad to spreadsheet to email", "Apply your pricing - rates should be preset, not recalculated from scratch", "Generate a clean professional output - not a raw spreadsheet", "Review before sending - numbers correct, scope clear, contact details present"] },
            { heading: "Sending the Quote", items: ["Send same day - ideally within 2 hours of leaving site", "Include a clear way for the client to accept", "Set a 48-hour follow-up reminder"] },
            { heading: "After Acceptance", items: ["Move straight to materials ordering", "Log the job - date, scope, value, client details", "Note what slowed you down - improve the process each time"] },
          ].map(({ heading, items }) => (
            <div key={heading} className="print-section">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-700">{heading}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                {items.map((item) => (
                  <li key={item} className="print-item" style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "14px", color: "#3f3f46" }}>
                    <span style={{ flexShrink: 0, fontSize: "16px", lineHeight: 1 }}>&#9633;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Print footer logo */}
        <div className="print-logo mt-8 flex justify-center border-t border-zinc-200 pt-6">
          <img src="/MainQCP.png" alt="QuoteCore+" style={{ height: "36px", width: "auto" }} />
        </div>
      </div>

      <hr className="no-print" />

      <h2 className="no-print">The step that slows most contractors down</h2>
      <p className="no-print">The step almost every contractor loses time on: entering measurements once - not notepad to spreadsheet to email.</p>
      <p className="no-print">Most quotes involve entering the same numbers three or four times. Every transfer is time. Every transfer is a chance for error.</p>
      <p className="no-print">The contractors who quote in 15 minutes have just removed the steps that didn&apos;t need to be there.</p>

      <hr className="no-print" />

      <h2 className="no-print">How QuoteCore+ fits in</h2>
      <p className="no-print">QuoteCore+ is built around this checklist. Upload a plan, measure from it, pricing applies automatically, professional quote generated - ready to send. When accepted, the materials order builds from the same numbers.</p>
      <p className="no-print">No re-entry. No reformatting. Quote to client, same day.</p>
      <p className="no-print"><a href="/free-trial" className="text-[#FF6B35] font-medium hover:underline">Start your free 2-week trial</a> - no card required.</p>
    </div>
  );
}
