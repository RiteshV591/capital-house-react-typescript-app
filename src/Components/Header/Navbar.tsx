import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 pt-10 base:pt-12 2xl:pt-14 2xl:px-4 lg:flex-nowrap 2xl:max-w-screen-2xl">
        <div className="flex items-center base:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="transition-all delay-150 relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>

            {isOpen ? (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-shrink-0 items-center cursor-pointer">
            <img
              className="h-10 w-auto xl:h-12 "
              src="logo.svg"
              alt="Company logo"
            />

            <h1 className="hidden sm:block mx-2 text-white font-bold text-2xl xl:text-3xl">
              Capital <span className="text-secondary">House</span>
            </h1>
          </div>
          <div className="hidden base:ml-6 base:block">
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-900 bg-opacity-15 text-white rounded-md px-3 py-2 text-base xl:text-lg font-medium"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-200 hover:bg-gray-900 hover:bg-opacity-15 hover:text-white rounded-md px-3 py-2 text-base xl:text-lg font-medium"
              >
                Feature
              </a>
              <a
                href="#"
                className="text-gray-200 hover:bg-gray-900 hover:bg-opacity-15 hover:text-white rounded-md px-3 py-2 text-base xl:text-lg font-medium"
              >
                Service
              </a>
              <a
                href="#"
                className="text-gray-200 hover:bg-gray-900 hover:bg-opacity-15 hover:text-white rounded-md px-3 py-2 text-base xl:text-lg font-medium"
              >
                Review
              </a>
              <a
                href="#"
                className="text-gray-200 hover:bg-gray-900 hover:bg-opacity-15 hover:text-white rounded-md px-3 py-2 text-base xl:text-lg font-medium"
              >
                Location
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button className="transition-all delay-75 rounded-xl bg-white px-5 py-2 lg:px-8 2xl:px-10 text-gray-800 focus:outline-none xl:text-lg font-semibold hover:bg-slate-300 hover:text-gray-950 shadow-md hover:shadow-xl hover:scale-105 active:scale-100 active:shadow-lg">
            Login
          </button>
        </div>
      </div>

      <div className={isOpen ? "base:hidden" : "hidden"} id="mobile-menu">
        <div className="transition-all delay-150 space-y-1 px-2 pb-3 pt-2 bg-white m-4 rounded-lg">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Feature
          </a>
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Service
          </a>
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Review
          </a>
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Location
          </a>
        </div>
      </div>
    </nav>
  );
};
