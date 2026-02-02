"use client";

import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

const skills = [
  { name: "React.js", value: 90, color: "#00C6A2" },
  { name: "Next.js", value: 85, color: "#94A3B8" },
  { name: "CSS/Tailwind", value: 85, color: "#EC4899" },
  { name: "Firebase", value: 75, color: "#FACC15" },
  { name: "TypeScript", value: 75, color: "#4E9AF1" },
  { name: "PHP/Laravel", value: 80, color: "#3B82F6" },
  { name: "Vue.js", value: 70, color: "#F97316" },
  { name: "MERN Stack", value: 70, color: "#A78BFA" },
];

const SkillChart = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true)); // 0.5s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-4 text-white w-1/2">
      {visible &&
        skills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex flex-col items-center skill-chart-item animate"
            style={{ animationDelay: `${index * 0.7}s` }}
          >
            <div className="w-24 h-24">
              <CircularProgressbar
                value={skill.value}
                text={`${skill.value}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: skill.color,
                  trailColor: "#2A2A2A",
                })}
              />
            </div>
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
    </div>
  );
};

export default SkillChart;
