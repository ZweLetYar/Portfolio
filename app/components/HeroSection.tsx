import Image from "next/image";
import React from "react";
import TypewriterText from "./TypeWriterText";

function HeroSection() {
  return (
    <div className="h-90  flex w-[80%]">
      <div className="w-1/2 flex flex-col items-center justify-center gap-5">
        <h1 className="text-6xl ">
          Hi, I&apos;m{" "}
          <span className="text-[#00FFF0]">
            <TypewriterText text={"Zwe Let Yar"} />
          </span>
        </h1>
        <h3 className="text-lg text-[#D0D0D0]">
          Full-Stack Developer & <br></br>
          Creative Problem Solver.
        </h3>
        <div className="flex gap-2 items-center justify-center text-sm">
          <button className="text-center border border-[#00FFF0] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#00FFF0] hover:text-[#0F1115]">
            View Projects
          </button>
          <button className="text-center border border-[#A0A0A0] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#00FFF0] hover:text-[#0F1115]">
            Contact
          </button>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-end">
        <Image
          src="/profileRemoveBg.png"
          alt="profile"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
}

export default HeroSection;
