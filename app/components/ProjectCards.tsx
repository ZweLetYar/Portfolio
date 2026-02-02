import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "../../data/projects";

function ProjectCards() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 w-[95%] xl:w-[85%] px-4">
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
              className="flex flex-col gap-4 bg-[#1A1D22] rounded-lg px-6 py-6 w-full sm:w-80 lg:w-96 hover:scale-105 transition-transform duration-300"
              key={p.id}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={p.image}
                  alt={p.name}
                  height={35}
                  width={35}
                  className="rounded-full"
                />
                <h1 className="text-xl lg:text-2xl font-semibold">{p.name}</h1>
              </div>
              <p className="text-[#D0D0D0] text-base leading-relaxed">
                {p.description}
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                {Array.isArray(p.technologies) &&
                  p.technologies.map((t: { name: string; logo: string }) => (
                    <div
                      className="flex items-center justify-center gap-2 bg-[#0F1115] rounded-xl px-3 h-8 hover:bg-[#1A1D22] transition-colors"
                      key={t.name}
                    >
                      <Image
                        src={t.logo}
                        alt={t.name}
                        height={16}
                        width={16}
                        className="rounded-lg"
                      />
                      <h2 className="text-[#00FFF0] text-sm">{t.name}</h2>
                    </div>
                  ))}
              </div>

              <div className="flex gap-3 ml-auto flex-wrap">
                <Link
                  href={p.liveDemo}
                  className="text-center border border-[#00FFF0] rounded-lg px-4 py-2 hover:bg-[#00FFF0] hover:text-[#0F1115] transition-all duration-300 text-sm font-medium"
                >
                  Live Demo
                </Link>
                <Link
                  href={p.github}
                  className="text-center border border-[#A0A0A0] rounded-lg px-4 py-2 hover:bg-[#00FFF0] hover:text-[#0F1115] transition-all duration-300 text-sm font-medium"
                >
                  GitHub
                </Link>
              </div>
            </div>
          ),
        )}
    </div>
  );
}

export default ProjectCards;
