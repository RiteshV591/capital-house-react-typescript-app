import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 pt-10 base:pt-12 2xl:pt-14 2xl:px-4 lg:flex-nowrap 2xl:max-w-screen-2xl">
        <div className="flex items-center base:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="hamburger-menu-btn"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>

            {isOpen ? (
              <img src="close.svg" alt="cross" />
            ) : (
              <img src="menu.svg" alt="menu" />
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
              <a href="#" className="nav-link">
                Feature
              </a>
              <a href="#" className="nav-link">
                Service
              </a>
              <a href="#" className="nav-link">
                Review
              </a>
              <a href="#" className="nav-link">
                Location
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button className="login-btn">Login</button>
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
          <a href="#" className="nav-link-mobile">
            Feature
          </a>
          <a href="#" className="nav-link-mobile">
            Service
          </a>
          <a href="#" className="nav-link-mobile">
            Review
          </a>
          <a href="#" className="nav-link-mobile">
            Location
          </a>
        </div>
      </div>
    </nav>
  );
};
