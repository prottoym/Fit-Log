import bannerlogo from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className=" mx-6 mt-12 h-[448px] w-[calc(100%-48px)]  max-w-[1232px] rounded-lg border border-base-300 bg-[#15171d] " >
      <div className="flex h-full items-center justify-between px-8">

        {/* Left side */}
        <div className="w-[620px]">

          <p className="mb-3 text-[9px] font-bold tracking-wide text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-[32px] font-black uppercase leading-[0.95] tracking-tight text-white">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mt-4 max-w-[470px] text-[10px] leading-[1.5] text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a href="#library" className=" mt-4 inline-flex items-center gap-2 rounded bg-lime-400 px-4 py-2 text-[9px] font-bold uppercase text-black transition hover:bg-lime-300 " >
            Browse Workouts

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3 w-3"
            >
              <path
                fillRule="evenodd"
                d="M10.22 3.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06l2.97-2.97H4.5a.75.75 0 0 1 0-1.5h8.69l-2.97-2.97a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

        </div>

        {/* Right Image */}
        <div className="flex h-full w-[400px] items-center justify-center">
          <Image
            src={bannerlogo}
            alt="Workout"
            width={300}
            height={300}
            priority
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;