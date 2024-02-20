export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row p-12">
          <div className="flex flex-shrink-0 items-center cursor-pointer py-16">
            <img
              className="h-10 w-auto xl:h-12 "
              src="logo2.svg"
              alt="Company logo"
            />

            <h1 className="mx-2 text-tertiary font-bold text-2xl xl:text-3xl">
              Capital <span className="text-secondary">House</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6 lg:py-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Learn</h2>
              <ul className="text-slate-500 md:text-lg">
                <li className="mb-4">Basics of trading</li>
                <li className="mb-4">Spread Trading</li>
                <li className="mb-4">Comodities Trading</li>
                <li className="mb-4">Courses</li>
                <li className="mb-4">Platform tutorials</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
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
          </div>
        </div>
      </div>
    </footer>
  );
};
