"use client";

import { useState } from "react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";
import { trackEvent } from "@/lib/analytics";
// EarlyAccessPopup handles attribution submission via /api/leads

export default function FreeTrialClient() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  return (
    <>
      <div id="trial-form" className="mt-10 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8">
        <h2 className="text-xl font-semibold">Start your free trial</h2>
        <p className="mt-3 text-sm text-zinc-500">No credit card required. 14-day access. Your account pauses unless you choose a plan.</p>
        <button
          type="button"
          onClick={() => { trackEvent("create_account_click"); setShowEarlyAccess(true); }}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#FF6B35] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#e85d2b]"
        >
          Create my free account
        </button>
      </div>
      {showEarlyAccess && <EarlyAccessPopup forceOpen onClose={() => setShowEarlyAccess(false)} />}
    </>
  );
}
