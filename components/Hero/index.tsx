import React from "react";

const Hero = () => {
  return (
    <section className="mt-28 px-5 text-center flex items-center justify-center flex-col">
      <div className="max-w-2xl md:max-w-xl lg:max-w-2xl space-y-3">
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-white font-semibold">
          Where Even Rotten Tomatoes is Jealous:
          <br /> Welcome to Movie Paradise
        </h1>
        <p className="text-lg text-gray-400 px-16">
          Discover the best films, TV shows, and more on Movie Paradise which is
          a Open-Source movie info Platform.
        </p>

        <div className="flex items-center justify-center gap-6">
          <button className="text-white inline-flex items-center justify-center px-6 py-1 rounded-full border border-white border-opacity-10 bg-[#64AE9D] hover:bg-[#37bd9e] shadow-sm shadow-[#64AE9D] hover:shadow-2xl">
            login
          </button>
          <button className="text-white inline-flex items-center justify-center px-6 py-1 rounded-full border border-white border-opacity-25 bg-transparent hover:bg-[#37bd9e] shadow-sm shadow-gray-400">
            explore
          </button>
        </div>
      </div>
      <LogoCloud />
    </section>
  );
};

export default Hero;

function LogoCloud() {
  return (
    <div>
      <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
        Brought to you by
      </p>
      <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-4">
        <div className="flex items-center justify-start">
          <a href="https://nextjs.org" aria-label="Next.js Link">
            <img
              src="/nextjs.svg"
              alt="Next.js Logo"
              className="h-8 text-white"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="h-6 text-white ml-3"
            />
          </a>
        </div>

        <div className="flex items-center justify-start">
          <a href="https://supabase.io" aria-label="supabase.io Link">
            <img
              src="/supabase.svg"
              alt="supabase.io Logo"
              className="h-10 text-white"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://github.com" aria-label="github.com Link">
            <img
              src="/github.svg"
              alt="github.com Logo"
              className="h-8 text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
