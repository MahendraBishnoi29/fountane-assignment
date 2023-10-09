/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="z-[999] mt-28 px-5 text-center flex items-center justify-center flex-col">
      <Image
        src="/gradient.png"
        alt="gradientImg"
        height={800}
        width={700}
        className="absolute top-0 -z-10"
      />
      <div className="max-w-2xl md:max-w-xl lg:max-w-2xl space-y-3 z-50">
        <span className="text-[#54C0A0]">Jet Protocol</span>
        <h1 className="text-white text-5xl md:text-5xl lg:text-5xl pb-2">
          the next generation of
          <br /> <span className="italic">defi governance</span>
        </h1>
        <span className="text-lg text-gray-300 md:px-4 mt-3">
          experience open source, transparent and efficient borrowing and
          lending on solana.
        </span>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => router.push("/login")}
            className="bg-[#64AE9D] text-black font-semibold py-2 px-4 rounded-full shadow-[0px_2px_2px_rgba(255,255,255,0.48)_inset]"
          >
            login
          </button>
          <button
            onClick={() => router.push("/movies")}
            className="text-white border-[1px] border-[rgba(255,255,255,0.48)] rounded-full py-2 px-4 font-semibold  shadow-[0px_2px_2px_rgba(255,255,255,0.48)_inset]"
          >
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
