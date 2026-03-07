"use client";

import { motion } from "framer-motion";
import { getViewportConfig } from "../utils/animationConfig";

const education = [
  {
    degree: "MSc IT",
    institution:
      "DAIICT (Dhirubhai Ambani Institute of Information and Communication Technology)",
    location: "Gandhinagar",
    period: "05/2018 - 06/2020",
  },
  {
    degree: "BSc (CA & IT)",
    institution: "K S School Of Business Management",
    location: "Ahmedabad",
    period: "06/2015 - 04/2018",
  },
];

const EducationSection = () => {
  const viewportConfig = getViewportConfig();
  return (
    <section id="education" className="py-20 bg-gray-800 text-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={viewportConfig}
        >
          Education
        </motion.h2>
        <div className="relative border-l-2 border-indigo-600 ml-4">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="mb-12 ml-6 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={viewportConfig}
            >
              <span className="absolute -left-5 top-1 bg-indigo-600 w-3 h-3 rounded-full" />
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-400">
                {edu.institution} - {edu.location}
              </p>
              <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
