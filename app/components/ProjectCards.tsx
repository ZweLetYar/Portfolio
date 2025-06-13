import Image from "next/image";
import Link from "next/link";
import React from "react";

async function ProjectCards() {
  const res = await fetch("http://localhost:3001/projects", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  const projects = await res.json();

  return (
    <div className="flex items-center gap-4 w-[80%] my-15">
      {Array.isArray(projects) &&
        projects.map(
          (p: {
            id: number;
            name: string;
            image: string;
            description: string;
            technologies: { name: string; logo: string }[];
            liveDemo: string;
            github: string;
          }) => (
            <div
              className="flex flex-col gap-3  bg-[#1A1D22] rounded-md px-5 py-5 w-100"
              key={p.id}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={p.image}
                  alt={p.name}
                  height={30}
                  width={30}
                  className="rounded-full"
                />
                <h1 className="text-xl">{p.name}</h1>
              </div>
              <p className="text-[#D0D0D0]">{p.description}</p>

              <div className="flex items-center gap-1 text-2xs">
                {Array.isArray(p.technologies) &&
                  p.technologies.map((t: { name: string; logo: string }) => (
                    <div
                      className="flex items-center justify-center gap-1 bg-[#0F1115] rounded-xl px-2 h-7"
                      key={t.name}
                    >
                      <Image
                        src={t.logo}
                        alt={t.name}
                        height={15}
                        width={15}
                        className="rounded-full"
                      />
                      <h2 className="text-[#00FFF0]">{t.name}</h2>
                    </div>
                  ))}
              </div>

              <div className="flex gap-2  ml-auto">
                <Link
                  href={p.liveDemo}
                  className="text-center border border-[#00FFF0] rounded-lg px-3 py-2 hover:bg-[#00FFF0] hover:text-[#0F1115]"
                >
                  Live Demo
                </Link>
                <Link
                  href={p.github}
                  className="text-center border border-[#A0A0A0] rounded-lg px-3 py-2 hover:bg-[#00FFF0] hover:text-[#0F1115]"
                >
                  GitHub
                </Link>
              </div>
            </div>
          )
        )}
    </div>
  );
}

export default ProjectCards;
