import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import SkillChart from "../components/SkillChart";
import ProjectCards from "../components/ProjectCards";
import ContactForm from "../components/ContactForm";
import Education from "../components/Education";

function page() {
  return (
    <div className="text-white flex flex-col items-center bg-[#0e1313] min-h-screen">
      <HeroSection />
      <div className=" w-full bg-[#0a0f0f] flex flex-col items-center py-16">
        <div className="flex flex-col lg:flex-row items-start justify-center w-[90%] xl:w-[80%] gap-8 lg:gap-12 mb-16">
          <About />
          <SkillChart />
        </div>
        <ProjectCards />
        <div className="flex flex-col lg:flex-row items-start justify-center w-[90%] xl:w-[80%] gap-8 lg:gap-12 mt-16">
          <Education />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default page;
