"use client";

import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  return (
    <div className="text-black font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-600 to-red-500">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music Generation.",
                "Code Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 100x faster.
      </div>
      <div>
        <Link href={"/dashboard"}>
          <button className="text-white md:text-lg p-4 md:px-6 rounded-full font-bold bg-gradient-to-r from-purple-800 via-purple-400 to-rose-500">
            Start Generating For Free
          </button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.No credit card required
      </div>
    </div>
  );
};

export default LandingHero;
