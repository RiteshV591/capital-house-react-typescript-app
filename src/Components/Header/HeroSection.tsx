export const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="flex flex-col justify-between base:flex-row p-6">
        <div className="p-6 flex flex-col justify-center items-center text-center base:text-left  base:items-start 2xl:pl-0">
          <h1 className="text-5xl leading-tight sm:leading-tight xl:leading-tight sm:text-6xl xl:text-7xl  text-white font-extrabold w-auto max-w-[39rem]">
            <span className="text-nowrap">Trading with</span> <br />
            Halal instruments <br />
            in minutes
          </h1>
          <p className="text-white text-sm my-4 sm:text-base xl:text-lg">
            Trade on more than 200 re-owned markets
          </p>
          <div className="flex justify-between items-center gap-4 my-4">
            <button className="hero-btn text-white border sm:px-8 xl:px-10 hover:bg-white hover:text-primary">
              Book a Demo
            </button>
            <button className="hero-btn text-primary bg-white sm:px-12 xl:px-16 hover:bg-secondary hover:text-white shadow-md">
              Join Now
            </button>
          </div>
        </div>
        <div className="max-h-mh-min max-w-mw-min flex justify-center items-center mx-auto 2xl:mx-16 ">
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
