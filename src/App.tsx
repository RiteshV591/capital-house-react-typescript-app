import { Features } from "./Components/Features/Features";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { NewsLetter } from "./Components/NewsLetter";
import { Promotion } from "./Components/Promotion/Promotion";
import { TradingSteps } from "./Components/TradingSteps";
import { ColorGenerate } from "./Components/ColorGenerate";
import { useEffect } from "react";

export const App = () => {
  const { color1, color2 } = ColorGenerate();

  const setColorVariables = (primaryColor: string, secondaryColor: string) => {
    document.documentElement.style.setProperty("--bg-primary", primaryColor);
    document.documentElement.style.setProperty(
      "--bg-secondary",
      secondaryColor
    );
  };

  useEffect(() => {
    setColorVariables(color1, color2);
  }, [color1, color2]);

  return (
    <>
      <Header />
      <Promotion />
      <TradingSteps />
      <Features />
      <NewsLetter />
      <Footer />
    </>
  );
};
