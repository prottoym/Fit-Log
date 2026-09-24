import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-6 fixed top-0 left-0 z-50 w-full">

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
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={28}
            height={28}
          />

          <span className="text-lg font-bold tracking-wide">
            FITLOG
          </span>
        </Link>

      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">

          <li>
            <Link
              href="/"
              className="rounded-full bg-lime-400/20 px-4 py-2 font-medium text-lime-400"
            >
              Workouts
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className="px-4 py-2 text-gray-400"
            >
              My Plan
            </Link>
          </li>

        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">

        <div className="hidden items-center gap-4 lg:flex">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-xs text-gray-400">
              0
            </span>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Navbar;