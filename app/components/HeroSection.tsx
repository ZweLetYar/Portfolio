import Image from "next/image";
import React from "react";
import TypewriterText from "./TypeWriterText";
import "./style.css";

function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-[90%] xl:w-[80%] py-20 lg:py-0">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-8 hero-container py-10 lg:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center lg:text-left font-bold leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-[#00FFF0]">
            <TypewriterText text={"Zwe Let Yar"} />
          </span>
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl text-[#D0D0D0] text-center lg:text-left font-light">
          Full-Stack Developer & <br className="hidden sm:block" />
          Creative Problem Solver.
        </h3>
        <div className="flex gap-6 items-center justify-center lg:justify-start text-base btn-group mt-4">
          <button className="glowingBtn text-center rounded-xl cursor-pointer px-8 py-3">
            View Projects
          </button>
          <button className="text-center border border-[#A0A0A0] rounded-xl px-6 py-3 cursor-pointer hover:bg-[#00FFF0] hover:text-[#0F1115] transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:justify-end mt-12 lg:mt-0">
        <Image
          src="/realMe.png"
          alt="profile"
          height={300}
          width={280}
          className="lg:h-[400px] lg:w-[350px]"
          quality={100}
        />
      </div>
    </div>
  );
}

export default HeroSection;
