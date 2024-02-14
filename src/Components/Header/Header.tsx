import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <section>
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </section>
  );
};
