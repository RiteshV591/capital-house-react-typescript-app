export const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col justify-between base:flex-row p-6">
        <div className="p-6 flex flex-col justify-center items-center text-center base:text-left  base:items-start 2xl:pl-0">
          <h1 className="text-5xl leading-tight sm:leading-tight xl:leading-tight sm:text-6xl xl:text-7xl  text-white font-extrabold max-w-[39rem]">
            Trading with <br />
            Halal instruments <br />
            in minutes
          </h1>
          <p className="text-white text-sm my-4 sm:text-base xl:text-lg">
            Trade on more than 200 re-owned markets
          </p>
          <div className="flex justify-between items-center gap-4 my-4">
            <button className="transition-all delay-75 text-white border p-3 rounded-lg text-sm font-semibold  sm:text-base 2xl:text-lg sm:py-4 sm:px-8 xl:px-10 hover:scale-105 hover:bg-white hover:text-primary active:scale-100 hover:shadow-xl active:shadow-lg">
              Book a Demo
            </button>
            <button className="transition-all delay-75 text-primary bg-white p-3 rounded-lg text-sm font-semibold sm:text-base 2xl:text-lg sm:py-4 sm:px-12 xl:px-16 hover:scale-105 hover:bg-secondary hover:text-white active:scale-100 shadow-md hover:shadow-xl active:shadow-lg">
              Join Now
            </button>
          </div>
        </div>
        <div className="max-h-[640px] max-w-[640px] flex justify-center items-center mx-auto 2xl:mx-16 ">
          <img
            className="2xl:max-w-none 2xl:w-[35rem]"
            src="hero.svg"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};
