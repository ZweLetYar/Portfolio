import Image from "next/image";
import React from "react";
import "./style.css";
import { skills } from "../../data/skills";

function About() {
  return (
    <div className="flex flex-col justify-center w-full lg:w-1/2 gap-6 about-container px-4 lg:px-0">
      <h1 className="text-xl lg:text-2xl font-semibold text-center lg:text-left">
        About me
      </h1>
      <p className="text-base text-[#D0D0D0] text-center lg:text-left leading-relaxed">
        I specialize in creating visually appealing and user-friendly websites.
        With a strong focus on delivering exceptional results, I combine my
        technical expertise with a passion for delivering exceptional user
        experiences. My goal is to exceed expectations and exceed client
        expectations.
      </p>
      <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
        {skills.map((skill: { name: string; icon: string }, index: number) => (
          <div
            key={skill.name}
            className={`flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-md bg-[#1A1D22] skill-icon transition-transform hover:scale-110`}
            style={{ animationDelay: `${0.7 + index * 0.1}s` }}
          >
            <Image src={skill.icon} alt={skill.name} height={30} width={30} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
