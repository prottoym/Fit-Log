import bannerlogo from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="mx-auto mt-12 h-[448px] w-[calc(100%-48px)] max-w-[1232px] rounded-2xl border border-[#222630] bg-[#15171d]" >
      <div className="flex h-full items-center justify-between p-14">

        {/* Left side */}
        <div className="flex w-[558px] flex-col gap-5">

          <p className="pt-[5.75px] text-[11px] font-bold leading-[17px] tracking-[1.1px] text-[#c2f800]">
            WORKOUT LIBRARY
          </p>

          <h1 className="pt-[1.25px] font-['Oswald'] text-[60px] font-bold uppercase leading-[60px] tracking-[-1.5px] text-white">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="max-w-[512px] text-base leading-6 text-[#9ca3af]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2">
            <a href="#library" className="inline-flex items-center gap-2 rounded-md bg-[#c2f800] px-6 py-3 text-xs font-bold uppercase leading-4 tracking-[0.3px] text-black shadow-sm transition hover:bg-lime-300" >
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

        </div>

        {/* Right Image */}
        <div className="flex h-[334px] w-[334px] shrink-0 items-center justify-center">
          <Image
            src={bannerlogo}
            alt="Workout"
            width={334}
            height={334}
            priority
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;