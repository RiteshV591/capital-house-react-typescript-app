import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <section
      id="header"
      className="max-h-mh-custom max-w-mw-custom base:h-[800px] pb-20 base:pb-0 bg-primary mx-auto drop-shadow-3xl"
    >
      <div className="container mx-auto">
        <Navbar />
        <HeroSection />
      </div>
    </section>
  );
};
