import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import SkillChart from "../components/SkillChart";
import ProjectCards from "../components/ProjectCards";
import ContactForm from "../components/ContactForm";
import Education from "../components/Education";

function page() {
  return (
    <div className="text-white flex flex-col items-center bg-[#0e1313]">
      <HeroSection />
      <div className=" w-full bg-[#0a0f0f] flex flex-col items-center ">
        <div className="flex items-center justify-center h-80 w-[80%] mt-8 gap-5">
          <About />

          <SkillChart />
        </div>
        <ProjectCards />
        <div className="flex items-center justify-center w-[80%] mt-5 gap-9">
          <Education />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default page;
