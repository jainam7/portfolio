"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 via-gray-900 to-black text-white relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Jainam Shah
        </h1>
        <p className="mt-4 text-xl md:text-2xl drop-shadow">
          Frontend Developer
        </p>
        <p className="mt-6 max-w-xl mx-auto">
          Frontend developer specializing in React, Next.js, and complex UI
          systems. Experienced in building workflow-based applications and
          customizing BPMN.js editors.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition"
          >
            View Projects
          </a>
          <a
            href="/Jainam_shah_Resume.pdf"
            download
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md transition"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/jainam-shah-1a88a8187/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/jainam7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:jainamshah7111997@gmail.com"
            aria-label="Email"
            className="hover:text-indigo-400"
          >
            <MdEmail size={24} />
          </a>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <IoChevronDown size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
