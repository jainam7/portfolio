"use client";

import { motion } from "framer-motion";
import { getViewportConfig } from "../utils/animationConfig";

const AboutSection = () => {
  const viewportConfig = getViewportConfig();
  return (
    <section id="about" className="py-20 bg-gray-800 text-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={viewportConfig}
        >
          About Me
        </motion.h2>
        <motion.p
          className="leading-relaxed text-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={viewportConfig}
        >
          I am a frontend developer with experience building complex UI
          applications. My expertise includes React, Next.js, JavaScript, and
          BPMN.js customization. I have experience developing dynamic UI
          components, workflow designers, and suggestion-based editors. I enjoy
          solving complex UI problems and building scalable applications.
        </motion.p>
        <motion.p
          className="leading-relaxed text-lg mt-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={viewportConfig}
        >
          Outside of work, I enjoy travelling, playing cricket, and listening to
          music.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
