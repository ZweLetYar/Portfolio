import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import SkillChart from "../components/SkillChart";
import ProjectCards from "../components/ProjectCards";

function page() {
  return (
    <div className="text-white flex flex-col items-center bg-[#1A1D22]">
      <HeroSection />
      <div className=" w-full bg-[#0F1115] flex flex-col items-center ">
        <div className="flex items-center justify-center w-[80%] mt-8 gap-5">
          <About />

          <SkillChart />
        </div>
        <ProjectCards />
      </div>
    </div>
  );
}

export default page;
