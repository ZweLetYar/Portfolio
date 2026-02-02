// AboutSection.tsx
import React from "react";

export default async function Education() {
  const res = await fetch("http://localhost:3001/certificates", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch certificates");
  }
  const certificates = await res.json();

  return (
    <div className=" w-1/2 bg-[#0e1313] text-white p-6 text-center flex items-center justify-center rounded-lg">
      <div className="max-w-4xl w-full space-y-12">
        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">Education</h2>
          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-semibold">
                Yadanabon Cyber City University - Ongoing - Fourth Year
              </h3>
              <p className="text-gray-400">
                B.E. in Information Science and Technology
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                University of the People
              </h3>
              <p className="text-gray-400">
                Associate Degree in Business Administration – Ongoing
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">
            Certifications
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-left">
            {certificates.map(
              (certificate: { id: number; name: string; source: string }) => (
                <li key={certificate.id}>
                  {certificate.name} - {certificate.source}
                </li>
              )
            )}
          </ul>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">Interests</h2>
          <p className="text-gray-300">
            I’m passionate about building beautiful UIs, progressive web apps,
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
