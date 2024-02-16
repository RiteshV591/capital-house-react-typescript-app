export const TradingSteps = () => {
  return (
    <section className="max-w-[1920px] h-full mx-auto bg-cover relative">
      <img className="w-full" src="tradingsteps.png" alt="trading steps" />
      <div className="bg-primary  bg-opacity-70 absolute top-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white font-semibold">
          <span className="text-secondary">Capital House</span> Steps for
          Blockchain Sukuk Trading
        </h1>
        <div className="flex justify-center items-center">
          <div className="rounded-[50%] text-center flex justify-center items-center w-[198px] h-[198px] border-4 border-secondary font-bold text-white text-2xl">
            Pre-Trading
          </div>
          <span className="material-symbols-outlined text-secondary text-6xl">
            arrow_right_alt
          </span>
        </div>
      </div>
    </section>
  );
};
