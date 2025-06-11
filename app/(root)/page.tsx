import React from "react";
import HeroSection from "../components/HeroSection";

function page() {
  return (
    <div className="text-white flex flex-col items-center bg-[#1A1D22]">
      <HeroSection />
      <div className="h-300 w-full bg-[#0F1115]"></div>
    </div>
  );
}

export default page;
