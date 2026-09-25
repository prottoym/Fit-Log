const Loading = () => {
  return (
    <section className="mx-auto mt-16 w-[calc(100%-48px)] max-w-[1232px]">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="font-['Oswald'] text-[30px] font-bold uppercase leading-9 tracking-[-0.75px] text-white">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-sm leading-5 text-[#9ca3af]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Skeleton Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d]"
          >
            <div className="h-48 bg-[#1f2937]" />

            <div className="p-6">
              <div className="flex gap-2">
                <div className="h-5 w-16 rounded-full bg-[#1f2937]" />
                <div className="h-5 w-14 rounded-full bg-[#1f2937]" />
              </div>

              <div className="mt-4 h-5 w-3/4 rounded bg-[#1f2937]" />
              <div className="mt-2 h-3 w-1/2 rounded bg-[#1f2937]" />

              <div className="mt-4 h-px bg-[#20242e]" />

              <div className="mt-3 flex gap-4">
                <div className="h-3 w-12 rounded bg-[#1f2937]" />
                <div className="h-3 w-12 rounded bg-[#1f2937]" />
                <div className="h-3 w-8 rounded bg-[#1f2937]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loading;