import Link from "next/link";
import LibraryCard from "../shared/LibraryCard";
import { ILibrary } from "@/Types/library.type";


const getLibraryData = async (): Promise<ILibrary[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch library data");
  }

  return res.json();
};

const Library = async () => {
  const libraryData = await getLibraryData();

  return (
    <section id="library" className="mx-auto mt-16 w-[calc(100%-48px)] max-w-[1232px] scroll-mt-[81px]">
      
      {/* Heading */}
      <div className="mb-8">
        <h2 className="font-['Oswald'] text-[30px] font-bold uppercase leading-9 tracking-[-0.75px] text-white">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-sm leading-5 text-[#9ca3af]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((library:ILibrary) => (
          <LibraryCard key={library.id} library={library} />
        ))}
      </div>
    </section>
  );
};

export default Library;