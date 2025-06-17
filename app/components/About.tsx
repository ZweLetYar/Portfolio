import Image from "next/image";
import React from "react";

async function About() {
  const res = await fetch("http://localhost:3001/skills", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const skills = await res.json();

  return (
    <div className=" flex flex-col justify-center  w-1/2 gap-4">
      <h1 className="text-lg font-semibold">About me</h1>
      <p className="text-sm text-[#D0D0D0]">
        I specialize in creating visually appealing and user-friendly websites.
        With a strong focus on delivering exceptional results, I combine my
        technical expertise with a passion for delivering exceptional user
        experiences. My goal is to exceed expectations and exceed client
        expectations.
      </p>
      <div className="flex gap-3">
        {skills.map((skill: { name: string; icon: string }) => {
          return (
            <div
              key={skill.name}
              className="flex items-center justify-center w-12 h-12 rounded-md bg-[#1A1D22] "
            >
              <Image src={skill.icon} alt={skill.name} height={25} width={25} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
