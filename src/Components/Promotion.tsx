export const Promotion = () => {
  return (
    <section id="promotion">
      <div className="container mx-auto flex  justify-center relative">
        <div className="absolute -top-28 base:-top-36">
          <div className="relative m-11 max-w-[578px] max-h-[347px]  rounded-3xl">
            <img src="promotion/thumbnail-1.png" alt="video thumbnail" />
            <button className="play-btn">
              <img
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 "
                src="promotion/play-btn.svg"
                alt="play button"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-60 sm:mt-80 my-14 base:flex-row justify-between items-center">
          <div className="yt-promotion-card">
            <div className="relative max-w-[320px] max-h-[210px] rounded-3xl shadow-2xl">
              <img src="promotion/thumbnail-2.png" alt="video thumbnail" />
              <button className="play-btn">
                <img
                  className="w-12 h-12"
                  src="promotion/play-btn.svg"
                  alt="play button"
                />
              </button>
            </div>
            <h2 className="font-bold text-lg tracking-wide my-4 lg:text-xl">
              Sukuk Issuers
            </h2>
            <p className="text-greyText max-w-md">
              Sukuk issuer will be authenticated using the existing regulated
              platforms
            </p>
            <div className="flex my-3 text-primary font-bold items-center justify-center">
              <p className="hover:underline xl:text-lg cursor-pointer">
                Know more <span className="text-3xl">&#8594;</span>
              </p>
            </div>
          </div>

          <div className="yt-promotion-card">
            <div className="relative  max-w-[320px] max-h-[210px] rounded-3xl shadow-2xl">
              <img src="promotion/thumbnail-3.png" alt="video thumbnail" />
              <button className="play-btn">
                <img
                  className="w-12 h-12  "
                  src="promotion/play-btn.svg"
                  alt="play button"
                />
              </button>
            </div>
            <h2 className="font-bold text-lg tracking-wide my-4 lg:text-xl">
              Sukuk Investors
            </h2>
            <p className="text-greyText max-w-md">
              Angel investor/Corporations/Digital asset firms/individual owners.
            </p>
            <div className="flex my-3 text-primary font-bold items-center justify-center">
              <p className="hover:underline xl:text-lg cursor-pointer">
                Know more <span className="text-3xl">&#8594;</span>
              </p>
            </div>
          </div>

          <div className="yt-promotion-card">
            <div className="relative  max-w-[320px] max-h-[210px] rounded-3xl shadow-2xl">
              <img src="promotion/thumbnail-4.png" alt="video thumbnail" />
              <button className="play-btn">
                <img
                  className="w-12 h-12  "
                  src="promotion/play-btn.svg"
                  alt="play button"
                />
              </button>
            </div>
            <h2 className="font-bold text-lg tracking-wide my-4 lg:text-xl">
              Buyers and Sellers
            </h2>
            <p className="text-greyText max-w-md">
              Tokenized Sukuk holders will have their Smart Wallet Accounts been
              created within the platform
            </p>
            <div className="flex my-3 text-primary font-bold items-center justify-center">
              <p className="hover:underline xl:text-lg cursor-pointer">
                Know more <span className="text-3xl">&#8594;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
