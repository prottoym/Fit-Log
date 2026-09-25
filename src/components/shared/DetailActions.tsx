"use client";

import { ILibrary } from "@/Types/library.type";
import { usePlan } from "@/context/PlanContext";

const DetailActions = ({ workout }: { workout: ILibrary }) => {
  const { addToPlan, saveForLater } = usePlan();

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={() => addToPlan(workout)}
        className="inline-flex items-center gap-2 rounded-xl bg-[#ccff00] px-6 py-3 text-sm font-semibold leading-5 text-[#0f1115] shadow-sm transition hover:brightness-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4667}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <rect x="2" y="2.667" width="12" height="12" rx="2" />
          <path d="M10.667 1.333v2.667M5.333 1.333v2.667M2 6.667h12M8 9.333v2.667M6.667 10.667h2.667" />
        </svg>
        Add to today&apos;s plan
      </button>

      <button
        onClick={() => saveForLater(workout)}
        className="inline-flex items-center gap-2 rounded-xl border border-[#374151] px-6 py-3 text-sm font-medium leading-5 text-[#e5e7eb] transition hover:bg-white/5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.3333}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M4.667 2h6.666c.737 0 1.334.597 1.334 1.333V14L8 11.333 3.333 14V3.333C3.333 2.597 3.93 2 4.667 2Z" />
        </svg>
        Save for later
      </button>
    </div>
  );
};

export default DetailActions;