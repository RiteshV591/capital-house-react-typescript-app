export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row p-12 lg:gap-20 2xl:gap-36 lg:justify-center lg:items-center">
          <div className="flex flex-shrink-0 items-center cursor-pointer py-10">
            <img
              className="h-10 w-auto xl:h-12 "
              src="logo2.svg"
              alt="Company logo"
            />

            <h1 className="mx-2 text-tertiary font-bold text-2xl xl:text-3xl">
              Capital <span className="text-secondary">House</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16 xl:gap-28 2xl:gap-44 py-6">
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-semibold">Learn</h2>
              <ul className="text-slate-500 md:text-lg">
                <li className="mb-4">Basics of trading</li>
                <li className="mb-4">Spread Trading</li>
                <li className="mb-4">Comodities Trading</li>
                <li className="mb-4">Courses</li>
                <li className="mb-4">Platform tutorials</li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-semibold">About</h2>
              <ul className="text-slate-500 md:text-lg">
                <li className="mb-4">Why Capital House?</li>
                <li className="mb-4">Blog</li>
                <li className="mb-4">FAQ</li>
                <li className="mb-4">Compliance</li>
                <li className="mb-4">Privacy policy</li>
                <li className="mb-4">Terms & Conditions </li>
                <li className="mb-4">Disclaimer </li>
                <li className="mb-4">Litepaper </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-semibold">Download</h2>
              <button>
                <img
                  className="transition-all h-11 2xl:h-14 hover:scale-105 active:scale-100"
                  src="Features/apple-badge.svg"
                  alt="badge"
                />
              </button>
              <button>
                <img
                  className="transition-all 2xl:h-12 hover:scale-105 active:scale-100"
                  src="Features/playstore-badge.svg"
                  alt="badge"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-mw-custom mx-auto bg-primary">
        <div className="container mx-auto py-10 px-10 text-white text-lg font-semibold flex flex-col gap-2 sm:flex-row justify-between">
          <p className="">&copy;2024 Lidia. All rights reserved.</p>
          <div className="flex gap-2 items-center">
            <p className="font-normal">Follow us on:</p>
            <a href="">
              <img src="footer/Facebook.svg" alt="facebook" />
            </a>
            <a href="">
              <img src="footer/LinkedIn.svg" alt="Linkein" />
            </a>
            <a href="">
              <img src="footer/YouTube.svg" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
