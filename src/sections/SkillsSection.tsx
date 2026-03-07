"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      "React Js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML 5",
      "CSS 3",
      "Tailwind Css",
      "React Native",
    ],
  },
  {
    category: "Libraries & Tools",
    items: ["GraphQL", "Bootstrap", "GitHub"],
  },
  { category: "Other", items: ["REST APIs", "Git", "Agile Development"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-semibold mb-2">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
