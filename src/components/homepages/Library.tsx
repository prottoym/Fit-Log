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
    <section id="library" className="mx-6 my-[70px]">
      
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase tracking-tight text-white">
          THE LIBRARY
        </h1>

        <p className="mt-2 text-base text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((library:ILibrary) => (
          <LibraryCard key={library.id} library={library} />
        ))}
      </div>
    </section>
  );
};

export default Library;