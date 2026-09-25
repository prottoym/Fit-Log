import { notFound } from "next/navigation";
import { ILibrary } from "@/Types/library.type";
import DetailActions from "@/components/shared/DetailActions";

const getWorkout = async (id: string): Promise<ILibrary | undefined> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  const data: ILibrary[] = await res.json();
  return data.find((w) => String(w.id) === id);
};

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) notFound();

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: String(workout.sets) },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: String(workout.rating) },
  ];

  return (
    <section className="mx-auto w-[calc(100%-48px)] max-w-[1232px] py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">

        {/* Left: image */}
        <div className="h-[360px] overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21] shadow-[0_25px_50px_rgba(0,0,0,0.25)] sm:h-[480px] lg:h-[735px]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: info */}
        <div>
          <h1 className="mb-3 font-['Oswald'] text-4xl font-bold uppercase leading-10 tracking-[-0.9px] text-white">
            {workout.name}
          </h1>

          <p className="mb-5 max-w-[576px] text-base leading-6 text-[#9ca3af]">
            {workout.description}
          </p>

          <div className="mb-7 flex flex-wrap gap-2.5">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-3.5 py-1 text-xs font-semibold leading-4 text-[#0f1115]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key specs */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-6 py-3.5 ${
                  i > 0 ? "border-t border-[#1e2330]" : ""
                }`}
              >
                <span className="text-xs font-bold uppercase leading-4 tracking-[0.6px] text-[#9ca3af]">
                  {spec.label}
                </span>
                <span className="text-sm font-medium leading-5 text-[#e5e7eb]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mb-9">
            <h2 className="mb-4 text-base font-extrabold uppercase leading-6 tracking-[0.8px] text-white">
              Instructions
            </h2>

            <ol className="flex flex-col gap-3">
              {workout.instructions.map((step, i) => (
                <li key={i} className="flex text-sm leading-[22.75px]">
                  <span className="mr-2 text-[#9ca3af]">{i + 1}.</span>
                  <span className="text-[#d1d5db]">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <DetailActions workout={workout} />
        </div>

      </div>
    </section>
  );
};

export default WorkoutDetailsPage;