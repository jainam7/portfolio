"use client";

import { motion } from "framer-motion";

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
            href="#experience"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition"
          >
            View Experience
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
            {/* LinkedIn SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0V8zm7.5 0h4.78v2.21h.07c.66-1.25 2.27-2.21 4.68-2.21 5 0 5.92 3.28 5.92 7.54V24H18V15.5c0-2.05-.04-4.68-2.85-4.68-2.85 0-3.29 2.23-3.29 4.54V24H7.5V8z" />
            </svg>
          </a>
          <a
            href="mailto:jainamshah7111997@gmail.com"
            aria-label="Email"
            className="hover:text-indigo-400"
          >
            {/* Email SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065L.388 4h23.224L12 13.065zm0 2.87L24 6.5v12H0v-12l12 9.435z" />
            </svg>
          </a>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#about" className="text-indigo-400 text-3xl">
            ⬇️
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
