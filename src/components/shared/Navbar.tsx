import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar min-h-[81px] bg-[#0c0d10]/95 backdrop-blur border-b border-[#1c1f26] px-6 fixed top-0 left-0 z-50 w-full">

      {/* Left */}
      <div className="navbar-start">

        {/* Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-40 p-2 shadow"
          >
            <li>
              <Link href="/">Workouts</Link>
            </li>

            <li>
              <Link href="/my-plan">My Plan</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={28}
            height={28}
          />

          <span className="font-['Oswald'] text-xl font-bold tracking-[1px] text-white">
            FITLOG
          </span>
        </Link>

      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-0 px-1">

          <li>
            <Link
              href="/"
              className="rounded-full bg-[#1a2312] px-4 py-1.5 text-xs font-semibold text-[#c2f800]"
            >
              Workouts
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className="px-4 py-1.5 text-xs font-medium text-gray-400"
            >
              My Plan
            </Link>
          </li>

        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">

        <div className="hidden items-center gap-6 lg:flex">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs font-medium text-gray-300 transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c2f800] text-[11px] font-bold text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs font-medium text-gray-400 transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2d313b] text-[11px] font-medium text-gray-300">
              0
            </span>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Navbar;