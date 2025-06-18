// Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e1313] text-gray-400 py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Zwe Let Yar. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4  text-cyan-500 text-xl">
          <a
            href="https://www.linkedin.com/in/zwe-let-yar-273789365/"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://github.com/ZweLetYar/" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
