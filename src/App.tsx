import { ColorGenerate } from "./Components/ColorGenerate";
import { Features } from "./Components/Features/Features";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { NewsLetter } from "./Components/NewsLetter";
import { Promotion } from "./Components/Promotion/Promotion";
import { TradingSteps } from "./Components/TradingSteps";

import { useEffect } from "react";

export const App = () => {
  const { primary, primaryWithOpacity, secondary, secondaryWithOpacity } =
    ColorGenerate();

  const setColorVariables = (
    primaryColor: string,
    primaryWithOpacityColor: string,
    secondaryColor: string,
    secondaryWithOpacityColor: string
  ) => {
    document.documentElement.style.setProperty("--bg-primary", primaryColor);
    document.documentElement.style.setProperty(
      "--bg-primary-with-opacity",
      primaryWithOpacityColor
    );
    document.documentElement.style.setProperty(
      "--bg-secondary",
      secondaryColor
    );
    document.documentElement.style.setProperty(
      "--bg-secondary-with-opacity",
      secondaryWithOpacityColor
    );
  };

  useEffect(() => {
    setColorVariables(
      primary,
      primaryWithOpacity,
      secondary,
      secondaryWithOpacity
    );
  }, [primary, primaryWithOpacity, secondary, secondaryWithOpacity]);

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
