// AboutSection.tsx
import React from "react";
import { certificates } from "../../data/certificates";

export default function Education() {
  return (
    <div className="w-full lg:w-1/2 bg-[#0e1313] text-white p-6 text-center flex items-start justify-center rounded-lg">
      <div className="max-w-2xl w-full space-y-10">
        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Education</h2>
          <div className="space-y-4">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">
                Yadanabon Cyber City University - Ongoing - Fifth Year
              </h3>
              <p className="text-gray-400 text-lg">
                B.E. in Information Science and Technology
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">
                University of the People
              </h3>
              <p className="text-gray-400 text-lg">
                Associate Degree in Business Administration – Ongoing
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">
            Certifications
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-left text-lg">
            {certificates.map(
              (certificate: { id: number; name: string; source: string }) => (
                <li key={certificate.id}>
                  {certificate.name} - {certificate.source}
                </li>
              ),
            )}
          </ul>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Interests</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm passionate about building beautiful UIs, progressive web apps,
            and tools that help people. I enjoy learning about personal finance,
            tracking data, and creating digital products with React, TypeScript,
            and Firebase. In my free time, I explore astronomy, read weekly, and
            improve my English.
          </p>
        </section>
      </div>
    </div>
  );
}
