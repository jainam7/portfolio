"use client";

import { motion } from "framer-motion";
import { getViewportConfig } from "../utils/animationConfig";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Visual Workflow Pipeline Builder",
    tech: ["React", "React Flow", "JavaScript", "Tailwind CSS"],
    description:
      "A visual node-based workflow editor that enables users to create dynamic pipelines by connecting processing nodes. Includes reusable node abstractions, variable-aware text nodes, and backend DAG validation.",
    liveDemo: "https://workflow-building.netlify.app/",
    github: "https://github.com/jainam7/workflow-builder",
  },
  {
    title: "Retail Admin Dashboard",
    tech: ["React", "JavaScript", "Recharts", "Tailwind CSS"],
    description:
      "A responsive retail analytics dashboard that visualizes sales performance, product insights, and order trends through interactive charts and reusable UI components.",
    liveDemo: "https://retail-panel.netlify.app/login",
    github: "https://github.com/jainam7/retail-management-panel",
  },
];

const ProjectsSection = () => {
  const viewportConfig = getViewportConfig();
  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={viewportConfig}
        >
          Projects
        </motion.h2>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-indigo-500 transition duration-300 shadow-lg hover:shadow-indigo-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={viewportConfig}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  <FaExternalLinkAlt size={16} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
