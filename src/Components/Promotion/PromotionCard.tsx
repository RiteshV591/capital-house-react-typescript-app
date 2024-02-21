interface PromotionCardProps {
  thumbnailSrc: string;
  title: string;
  description: string;
}

export const PromotionCard = ({
  thumbnailSrc,
  title,
  description,
}: PromotionCardProps) => {
  return (
    <div className="yt-promotion-card">
      <div className="relative  rounded-3xl shadow-2xl">
        <img src={thumbnailSrc} alt="video thumbnail" />
        <button className="play-btn">
          <img
            className="w-12 h-12"
            src="promotion/play-btn.svg"
            alt="play button"
          />
        </button>
      </div>
      <h2 className="font-bold text-lg tracking-wide my-4 lg:text-xl 2xl:text-2xl">
        {title}
      </h2>
      <p className="text-greyText max-w-sm">{description}</p>
      <div className="flex my-3 text-primary font-bold items-center justify-center">
        <p className="hover:underline xl:text-lg cursor-pointer">
          Know more <span className="text-3xl">&#8594;</span>
        </p>
      </div>
    </div>
  );
};
