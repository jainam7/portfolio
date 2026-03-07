"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-semibold">Jainam Shah</p>
        <div className="flex justify-center space-x-4 my-2">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#education" className="hover:text-white">
            Education
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/jainam-shah-1a88a8187/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/jainam7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:jainamshah7111997@gmail.com"
            className="hover:text-white"
            aria-label="Email"
          >
            Email
          </a>
        </div>
        <p className="mt-4 text-sm">
          © {year} Jainam Shah. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-2 text-indigo-400 hover:underline"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
