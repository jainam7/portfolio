"use client";

import { motion } from "framer-motion";
import { getViewportConfig } from "../utils/animationConfig";
import {
  FaReact,
  FaJava,
  FaGithub,
  FaBootstrap,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiCamunda,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiLogoJavascript } from "react-icons/bi";
import { OpenAI, Claude } from "@lobehub/icons";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React Js", Icon: FaReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "JavaScript", Icon: BiLogoJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "React Native", Icon: FaMobileAlt },
    ],
  },
  {
    category: "Libraries & Tools",
    items: [
      { name: "GraphQL", Icon: SiGraphql },
      { name: "GitHub", Icon: FaGithub },
      { name: "REST APIs", Icon: TbApi },
      { name: "ChatGPT", Icon: OpenAI },
      { name: "Claude", Icon: Claude },
      { name: "Camunda", Icon: SiCamunda },
      {
        name: "BPMN.js",
        Icon: () => <span className="text-xl font-bold">BPMN</span>,
      },
    ],
  },
];

const SkillsSection = () => {
  const viewportConfig = getViewportConfig();
  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={viewportConfig}
        >
          Skills
        </motion.h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={viewportConfig}
              className="bg-gradient-to-br from-indigo-950 via-gray-800 to-gray-900 p-7 rounded-xl border border-gray-700 hover:border-indigo-500 transition duration-300 shadow-lg hover:shadow-indigo-500/20"
            >
              <h3 className="text-lg font-semibold mb-6 text-indigo-300">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-5">
                {group.items.map((skill, idx) => {
                  const Icon = skill.Icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={viewportConfig}
                      whileHover={{ scale: 1.15, y: -8 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-indigo-600 hover:to-indigo-700 transition duration-300 cursor-pointer group shadow-md hover:shadow-indigo-500/40"
                    >
                      <div className="text-4xl text-indigo-400 group-hover:text-white transition duration-300 transform group-hover:drop-shadow-lg">
                        <Icon />
                      </div>
                      <span className="text-xs font-medium text-center text-gray-300 group-hover:text-white transition duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
