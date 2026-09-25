"use client";

import Link from "next/link";
import { ILibrary } from "@/Types/library.type";

interface IPlanCardProps {
  workout: ILibrary;
  variant: "plan" | "saved";
  onRemove: (id: number) => void;
  onMarkAsDone?: (id: number) => void;
}

const PlanCard = ({ workout, variant, onRemove, onMarkAsDone }: IPlanCardProps) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#232732] bg-[#14171e] p-4">

      {/* Thumbnail & Description */}
      <div className="flex items-center gap-4">
        <div className="h-20 w-36 overflow-hidden rounded-xl bg-[#1f2937]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <h3 className="font-['Oswald'] text-base font-bold uppercase leading-6 tracking-[0.4px] text-white">
            {workout.name}
          </h3>

          <p className="text-xs font-semibold leading-4 text-[#8a92a0]">
            {workout.equipment}
          </p>

          <div className="flex items-center gap-3 pt-1.5 text-xs leading-4 text-[#8a92a0]">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-3.5 w-3.5">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" d="M12 7v5l3 2" />
              </svg>
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-3.5 w-3.5">
                <path d="M13.5 2.5c.2 3-1.2 4.5-2.7 6.1-1.3 1.4-2.6 2.8-2.6 5.3 0 2.2 1.7 4.1 3.9 4.1 2.5 0 4.4-2 4.4-4.7 0-1.5-.6-2.8-1.7-4.1 2.5 1.4 4.1 4.1 4.1 7.1 0 4.3-3.2 7.2-7.4 7.2C6.9 23.5 4 20.2 4 16c0-4.2 2.4-6.8 4.7-9.2C10.5 4.9 12 3.3 13.5 2.5Z" />
              </svg>
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-3.5 w-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z" />
              </svg>
              {workout.rating}
            </span>
          </div>
        </div>
      </div>

      {/* action button */}
      <div className="flex items-center gap-3">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#374151] px-5 py-2 text-xs leading-4 text-white transition hover:bg-white/5"
        >
          View Details
        </Link>

        {variant === "plan" && onMarkAsDone && (
          <button
            onClick={() => onMarkAsDone(workout.id)}
            className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-semibold leading-4 text-black shadow-sm transition hover:brightness-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="M2.917 7.583 5.25 9.917l5.833-5.834" />
            </svg>
            Mark as Done
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          aria-label="Remove exercise"
          className="flex h-7 w-7 items-center justify-center rounded-full text-[#6b7280] transition hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.3333} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PlanCard;