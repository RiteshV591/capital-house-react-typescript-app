import { Features } from "./Components/Features/Features";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { NewsLetter } from "./Components/NewsLetter";
import { Promotion } from "./Components/Promotion/Promotion";
import { TradingSteps } from "./Components/TradingSteps";

export const App = () => {
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
