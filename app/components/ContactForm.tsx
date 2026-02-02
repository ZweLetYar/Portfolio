// ContactForm.tsx
import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="w-full lg:w-1/2 bg-[#0a0f0f] text-white flex items-start justify-center px-4 sm:px-6 py-8">
      <div className="max-w-md w-full">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-8 text-base">
          Feel free to reach out to me via email or social media.
        </p>
        <form className="bg-[#0e1313] p-6 rounded-lg shadow-md space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-3 text-white placeholder-gray-500 text-base focus:border-cyan-400 transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-3 text-white placeholder-gray-500 text-base focus:border-cyan-400 transition-colors"
          />
          <textarea
            placeholder="Message"
            className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-3 text-white placeholder-gray-500 resize-none text-base focus:border-cyan-400 transition-colors"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 transition-colors py-3 rounded-md font-semibold text-base mt-6"
          >
            Send
          </button>
        </form>
        <div className="flex justify-center space-x-8 mt-10 text-cyan-500 text-2xl">
          <a
            href="https://www.linkedin.com/in/zwe-let-yar-273789365/"
            aria-label="LinkedIn"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/ZweLetYar/"
            aria-label="GitHub"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
