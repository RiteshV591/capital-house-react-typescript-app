export const TradingSteps = () => {
  return (
    <section
      id="trading-steps"
      className="max-w-mw-custom mx-auto bg-cover relative mb-12"
    >
      <img
        className="hidden md:block w-full h-auto"
        src="tradingsteps.png"
        alt="trading steps"
      />
      {/* md:bg-opacity-80 */}
      <div className="bg-primary md:bg-opacity-80 md:absolute md:top-0 w-full h-full flex flex-col justify-center items-center p-12 gap-10 lg:gap-14 xl:gap-20 2xl:gap-36">
        <h1 className="text-2xl text-white font-semibold text-center base:text-3xl xl:text-4xl 2xl:text-5xl">
          <span className="text-secondary">Capital House</span> Steps for
          Blockchain Sukuk Trading
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 xl:gap-8 2xl:gap-10">
          <div className="steps-circle">Pre-Trading</div>
          <span className="material-symbols-outlined steps-arrow-icon">
            arrow_right_alt
          </span>
          <div className="steps-circle">Trading</div>
          <span className="material-symbols-outlined steps-arrow-icon">
            arrow_right_alt
          </span>
          <div className="steps-circle">Post-Trading</div>
        </div>
      </div>
    </section>
  );
};
