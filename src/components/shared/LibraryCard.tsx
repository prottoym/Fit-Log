import { ILibrary } from "@/Types/library.type";
import Link from "next/link";

interface ILibraryCardProps {
    library: ILibrary;
}

const LibraryCard = ({ library }: ILibraryCardProps) => {
    return (
        <Link
            href={`/workouts/${library.id}`}
            className="group block overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d] transition duration-300 hover:-translate-y-1 hover:border-lime-400/40"
        >
            {/* Image */}
            <div className="h-48 overflow-hidden">
                <img
                    src={library.image}
                    alt={library.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Card Content */}
            <div className="p-6">

                {/* Muscle Tags */}
                <div className="flex flex-wrap gap-2">
                    {library.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#c2f800] px-2.5 py-0.5 text-[11px] font-bold uppercase leading-[16.5px] tracking-[0.55px] text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h2 className="mt-1 pt-2 font-['Oswald'] text-lg font-bold uppercase leading-7 tracking-[0.45px] text-white">
                    {library.name}
                </h2>

                {/* Equipment */}
                <p className="mt-1 text-xs leading-4 text-[#9ca3af]">
                    {library.equipment}
                </p>

                {/* Divider */}
                <div className="mt-4 h-px bg-[#20242e]" />

                {/* Stats */}
                <div className="flex items-center gap-4 pt-3 text-xs leading-4 text-[#9ca3af]">

                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-3.5 w-3.5"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path
                                strokeLinecap="round"
                                d="M12 7v5l3 2"
                            />
                        </svg>

                        <span>{library.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                        >
                            <path d="M13.5 2.5c.2 3-1.2 4.5-2.7 6.1-1.3 1.4-2.6 2.8-2.6 5.3 0 2.2 1.7 4.1 3.9 4.1 2.5 0 4.4-2 4.4-4.7 0-1.5-.6-2.8-1.7-4.1 2.5 1.4 4.1 4.1 4.1 7.1 0 4.3-3.2 7.2-7.4 7.2C6.9 23.5 4 20.2 4 16c0-4.2 2.4-6.8 4.7-9.2C10.5 4.9 12 3.3 13.5 2.5Z" />
                        </svg>

                        <span>{library.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-3.5 w-3.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z"
                            />
                        </svg>

                        <span>{library.rating}</span>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default LibraryCard;