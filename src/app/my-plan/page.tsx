"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import PlanCard from "@/components/shared/PlanCard";

type SortKey = "duration" | "calories" | "rating";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "duration", label: "Duration" },
  { key: "calories", label: "Calories" },
  { key: "rating", label: "Rating" },
];

const MyPlanPage = () => {
  const { plan, saved, removeFromPlan, removeFromSaved, markAsDone } = usePlan();
  const [tab, setTab] = useState<"plan" | "saved">("plan");
  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState<SortKey>("duration");
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const rawList = tab === "plan" ? plan : saved;

  const activeList = useMemo(() => {
    const list = [...rawList];
    if (sortKey === "duration") return list.sort((a, b) => a.duration - b.duration);
    if (sortKey === "calories") return list.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    return list.sort((a, b) => b.rating - a.rating);
  }, [rawList, sortKey]);

  const metrics = useMemo(() => {
    const exercises = plan.length;
    const minutes = plan.reduce((sum, w) => sum + w.duration, 0);
    const calories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);
    return { exercises, minutes, calories };
  }, [plan]);

  const activeSortLabel = SORT_OPTIONS.find((o) => o.key === sortKey)!.label;

  return (
    <section className="mx-auto w-[calc(100%-48px)] max-w-[1232px] py-10">

      {/* Title & Description */}
      <div className="mb-6">
        <h1 className="font-['Oswald'] text-[30px] font-bold uppercase leading-9 tracking-[-0.75px] text-white">
          MY PLAN
        </h1>

        <p className="mt-2 text-sm leading-5 text-[#8a92a0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Summary */}
      <div className="mb-6 flex divide-x divide-[#232732] rounded-2xl border border-[#232732] bg-[#13161d] px-8 py-6">
        <div className="flex-1 pr-8">
          <p className="text-xs leading-4 text-[#8a92a0]">Exercises</p>
          <p className="mt-1 font-['Oswald'] text-4xl font-bold leading-[40px] text-[#ccff00]">
            {metrics.exercises}
          </p>
        </div>

        <div className="flex-1 px-8">
          <p className="text-xs leading-4 text-[#8a92a0]">Minutes</p>
          <p className="mt-1 font-['Oswald'] text-4xl font-bold leading-[40px] text-white">
            {metrics.minutes}
          </p>
        </div>

        <div className="flex-1 pl-8">
          <p className="text-xs leading-4 text-[#8a92a0]">Calories</p>
          <p className="mt-1 font-['Oswald'] text-4xl font-bold leading-[40px] text-white">
            {metrics.calories}
          </p>
        </div>
      </div>

      {/* Sort Row */}
      <div className="mb-4 flex items-center justify-between">

        {/* Tabs */}
        <div className="inline-flex gap-1 rounded-xl border border-[#232732] bg-[#151921] p-1">
          <button
            onClick={() => setTab("plan")}
            className={`rounded-lg px-4 py-1.5 text-xs leading-4 transition ${
              tab === "plan"
                ? "border border-[#2b303d] bg-[#1f242d] font-bold text-white shadow-sm"
                : "font-normal text-[#8a92a0]"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setTab("saved")}
            className={`rounded-lg px-4 py-1.5 text-xs leading-4 transition ${
              tab === "saved"
                ? "border border-[#2b303d] bg-[#1f242d] font-bold text-white shadow-sm"
                : "font-normal text-[#8a92a0]"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort By */}
        <div className="relative flex items-center gap-3">
          <span className="text-xs leading-4 text-[#8a92a0]">Sort By</span>

          <button
            onClick={() => setSortOpen((v) => !v)}
            className="flex items-center gap-6 rounded-[9px] border border-[#232732] bg-[#13161d] px-4 py-2 text-xs leading-4 text-white"
          >
            {activeSortLabel}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.1667}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-3.5 w-3.5 text-[#8a92a0] transition-transform ${sortOpen ? "rotate-180" : ""}`}
            >
              <path d="M3.5 5.25 7 8.75l3.5-3.5" />
            </svg>
          </button>

          {sortOpen && (
            <ul className="absolute right-0 top-full z-10 mt-2 w-32 overflow-hidden rounded-lg border border-[#232732] bg-[#13161d] py-1 shadow-lg">
              {SORT_OPTIONS.map((opt) => (
                <li key={opt.key}>
                  <button
                    onClick={() => {
                      setSortKey(opt.key);
                      setSortOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-left text-xs leading-4 transition ${
                      sortKey === opt.key
                        ? "text-[#ccff00]"
                        : "text-[#e5e7eb] hover:bg-white/5"
                    }`}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>

      {/* List */}
      {loading ? (
        <p className="py-12 text-center text-sm text-[#8a92a0]">Loading workouts…</p>
      ) : activeList.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#111317]/50 py-24 text-center">
          <h2 className="font-['Oswald'] text-xl font-bold uppercase tracking-[0.7px] text-white">
            NOTHING HERE YET
          </h2>

          <p className="mt-2 max-w-[300px] text-xs leading-4 text-[#a1a1aa]">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-6 rounded-full bg-[#ccff00] px-6 py-2.5 text-xs font-bold uppercase leading-4 text-black transition hover:bg-lime-300"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {activeList.map((workout) =>
            tab === "plan" ? (
              <PlanCard
                key={workout.id}
                workout={workout}
                variant="plan"
                onRemove={removeFromPlan}
                onMarkAsDone={markAsDone}
              />
            ) : (
              <PlanCard
                key={workout.id}
                workout={workout}
                variant="saved"
                onRemove={removeFromSaved}
              />
            )
          )}
        </div>
      )}
    </section>
  );
};

export default MyPlanPage;