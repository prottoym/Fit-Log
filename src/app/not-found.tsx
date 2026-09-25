import Link from "next/link";

const NotFound = () => {
  return (
    <section className="mx-auto flex w-[calc(100%-48px)] max-w-[1232px] flex-col items-center justify-center py-24 text-center sm:py-32">
      <p className="font-['Oswald'] text-7xl font-bold uppercase leading-none tracking-[-1.5px] text-[#ccff00] sm:text-8xl">
        404
      </p>

      <h1 className="mt-4 font-['Oswald'] text-2xl font-bold uppercase leading-8 tracking-[0.5px] text-white sm:text-3xl">
        PAGE NOT FOUND
      </h1>

      <p className="mt-3 max-w-[420px] text-sm leading-5 text-[#8a92a0]">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#ccff00] px-6 py-2.5 text-xs font-bold uppercase leading-4 text-black transition hover:bg-lime-300"
      >
        Go to workouts
      </Link>
    </section>
  );
};

export default NotFound;