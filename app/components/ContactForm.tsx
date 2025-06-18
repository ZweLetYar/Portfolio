// ContactForm.tsx
import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="min-h-screen w-1/2 bg-[#0a0f0f] text-white  flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out to me via email or social media.
        </p>
        <form className="bg-[#0e1313] p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-500"
          />
          <textarea
            placeholder="Message"
            className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-500 resize-none"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 transition-colors py-2 rounded-md font-semibold"
          >
            Send
          </button>
        </form>
        <div className="flex justify-center space-x-6 mt-8 text-cyan-500 text-2xl">
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
    </div>
  );
}
