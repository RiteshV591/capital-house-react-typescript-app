import { useState } from "react";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter-section" className="max-w-mw-custom mx-auto my-12">
      <div className="bg-primary flex flex-col justify-center items-center p-8 gap-10 base:flex-row">
        <img className="px-12 " src="news-letter.svg" alt="news-letter" />
        <div className="flex flex-col gap-8 text-center base:text-left">
          <h1 className="font-bold text-3xl text-white">
            Subscribe to our newsletter
          </h1>
          <form
            className="flex flex-col gap-8 sm:flex-row sm:gap-4"
            action="#newsletter-section"
          >
            <input
              className="p-4 rounded-xl bg-transparent text-white placeholder-white border border-white text-lg focus:outline-none"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="transition-all bg-white rounded-xl p-2 sm:px-6 base:px-10 text-lg text-primary font-semibold hover:bg-secondary hover:text-white hover:scale-105 active:scale-100 drop-shadow-lg hover:drop-shadow-xl active:drop-shadow-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
