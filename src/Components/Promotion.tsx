export const Promotion = () => {
  return (
    <section>
      <div className="container mx-auto h-screen flex items-center justify-center relative">
        <div className="absolute -top-28 base:-top-36">
          <div className="relative m-12 max-w-[578px] max-h-[347px]  rounded-3xl">
            <img src="promotion/thumbnail-1.png" alt="video thumbnail" />
            <button className="transition-all delay-75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 hover:drop-shadow-xl active:scale-100">
              <img
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 "
                src="promotion/play-btn.svg"
                alt="play button"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col pt-16 base:flex-row">
          <div className="flex flex-col p-10 justify-center items-center text-center">
            <div className="relative  max-w-[298px] max-h-[179px] rounded-3xl shadow-2xl">
              <img src="promotion/thumbnail-2.png" alt="video thumbnail" />
              <button className="transition-all delay-75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 hover:drop-shadow-xl active:scale-100">
                <img
                  className="w-12 h-12  "
                  src="promotion/play-btn.svg"
                  alt="play button"
                />
              </button>
            </div>
            <h2 className="font-bold text-lg tracking-wide my-4">
              Sukuk Issuers
            </h2>
            <p className="text-greyText">
              Sukuk issuer will be authenticated using the existing regulated
              platforms
            </p>
            <div className="flex my-3 text-primary font-bold items-center justify-center">
              <p className="hover:underline">
                Know more <span className="text-3xl">&#8594;</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col p-10 justify-center items-center text-center">
            <div className="relative  max-w-[298px] max-h-[179px] rounded-3xl shadow-2xl">
              <img src="promotion/thumbnail-2.png" alt="video thumbnail" />
              <button className="transition-all delay-75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 hover:drop-shadow-xl active:scale-100">
                <img
                  className="w-12 h-12  "
                  src="promotion/play-btn.svg"
                  alt="play button"
                />
              </button>
            </div>
            <h2 className="font-bold text-lg tracking-wide my-4">
              Sukuk Issuers
            </h2>
            <p className="text-greyText">
              Sukuk issuer will be authenticated using the existing regulated
              platforms
            </p>
            <div className="flex my-3 text-primary font-bold items-center justify-center">
              <p className="hover:underline">
                Know more <span className="text-3xl">&#8594;</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col p-10 justify-center items-center text-center">
            <div className="relative  max-w-[298px] max-h-[179px] rounded-3xl shadow-2xl">
              <img src="promotion/thumbnail-2.png" alt="video thumbnail" />
              <button className="transition-all delay-75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 hover:drop-shadow-xl active:scale-100">
                <img
                  className="w-12 h-12  "
                  src="promotion/play-btn.svg"
                  alt="play button"
                />
              </button>
            </div>
            <h2 className="font-bold text-lg tracking-wide my-4">
              Sukuk Issuers
            </h2>
            <p className="text-greyText">
              Sukuk issuer will be authenticated using the existing regulated
              platforms
            </p>
            <div className="flex my-3 text-primary font-bold items-center justify-center">
              <p className="hover:underline">
                Know more <span className="text-3xl">&#8594;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
