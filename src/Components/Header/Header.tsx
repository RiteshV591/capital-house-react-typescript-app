import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <section className="h-screen bg-primary relative">
      <div className="container mx-auto">
        <Navbar />
        <HeroSection />
      </div>
    </section>
  );
};
