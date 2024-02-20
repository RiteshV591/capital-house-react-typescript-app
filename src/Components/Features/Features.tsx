import { FeatureListItem } from "./FeatureListItem";

export const Features = () => {
  return (
    <section id="features">
      <div className="container mx-auto my-16">
        <div className="flex flex-col p-8 gap-10 justify-evenly items-center base:flex-row base:gap-20 mb-10">
          <div className="max-w-[600px]">
            <img
              className="rounded-2xl shadow-2xl"
              src="Features/feature1.png"
              alt="feature"
            />
          </div>
          <div className="flex flex-col gap-8 text-center items-center base:text-left base:items-start">
            <h1 className="text-2xl lg:text-3xl font-medium max-w-lg leading-snug lg:leading-normal">
              <span className="text-primary">Manage</span> all your tokenised
              Sukuk Asset and <span className="text-primary">Trade</span> them
              using any device.
            </h1>
            <p className="text-greyText max-w-lg text-pretty xl:text-lg">
              Capital House provides you the opportunity to control your Asset
              as well as your blockchain Sukuk trading anytime anywhere at your
              comfort.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <button>
                <img
                  className="transition-all h-12 hover:scale-105 active:scale-100"
                  src="Features/apple-badge.svg"
                  alt="badge"
                />
              </button>
              <button>
                <img
                  className="transition-all h-12 hover:scale-105 active:scale-100"
                  src="Features/playstore-badge.svg"
                  alt="badge"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse p-8 gap-10 justify-evenly items-center base:flex-row base:gap-20">
          <div className="flex flex-col gap-8 text-center items-center base:text-left base:items-start">
            <h1 className="text-2xl lg:text-3xl font-medium">
              Why <span className="text-primary">Capital House</span>
            </h1>
            <ul className="text-left xl:text-lg">
              <FeatureListItem
                icon="expand_circle_right"
                text="With investment tools that are governed by Sharia principles"
              />
              <FeatureListItem
                icon="expand_circle_right"
                text="Halal trading platform"
              />
              <FeatureListItem
                icon="expand_circle_right"
                text="Fast Order execution"
              />
              <FeatureListItem
                icon="expand_circle_right"
                text="No commission or hidden fees"
              />
              <FeatureListItem
                icon="expand_circle_right"
                text="High privacy protection and Military Security standards"
              />
            </ul>

            <div className="flex items-center justify-center">
              <button className="feature-trading-btn">Start Trading Now</button>
            </div>
          </div>
          <div className="max-w-[600px] ">
            <img
              className="rounded-2xl shadow-2xl"
              src="Features/feature2.png"
              alt="feature"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
