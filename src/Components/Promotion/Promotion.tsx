import { PromotionCard } from "./PromotionCard";

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
          <PromotionCard
            thumbnailSrc="promotion/thumbnail-2.png"
            title="Sukuk Issuers"
            description="Sukuk issuer will be authenticated using the existing regulated
              platforms"
          />
          <PromotionCard
            thumbnailSrc="promotion/thumbnail-3.png"
            title="Sukuk Investors"
            description="Angel investor/Corporations/Digital asset firms/individual owners."
          />
          <PromotionCard
            thumbnailSrc="promotion/thumbnail-4.png"
            title="Buyers and Sellers"
            description="Tokenized Sukuk holders will have their Smart Wallet Accounts been
              created within the platform"
          />
        </div>
      </div>
    </section>
  );
};
