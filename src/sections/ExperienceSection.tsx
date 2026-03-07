"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer (Frontend)",
    company: "Bankai Infotech",
    location: "Ahmedabad, India",
    period: "09/2024 - Present",
    responsibilities: [
      "Engineered a workflow-driven API builder using Next.js and Camunda BPMN.js, enabling users to create and execute APIs via custom diagram components.",
      "Implemented modules for end-to-end user onboarding, application setup, role assignment, and organization creation to streamline platform operations.",
      "Built a modular system enabling custom vendor integrations and reusable API blocks for seamless workflow creation using Next.js App Router.",
      "Developed BPMN Workflow Builder: A workflow modeling tool with customized properties panel, dynamic suggestion textarea, and custom renderer.",
      "Created Dynamic Form Builder: A dynamic form system that renders forms based on API schema with conditional fields and validation.",
      "Built Workflow Automation UI: Frontend interface for configuring and executing workflow automation processes with dynamic UI rendering.",
    ],
  },
  {
    role: "Front-end Engineer",
    company: "Beehively",
    location: "Ahmedabad, India",
    period: "12/2021 - 09/2024",
    responsibilities: [
      "Revamped attendance and report systems using React.js, GraphQL, and Next.js to enhance accuracy and usability.",
      "Led the development of an urgent alert feature, improving communication efficiency.",
    ],
  },
  {
    role: "Front-end Engineer",
    company: "Treebo Hotels",
    location: "Bengaluru, India",
    period: "01/2020 - 12/2021",
    responsibilities: [
      "Developed a responsive booking flow with auto-filled details and guest search, and designed an interactive dashboard, enhancing efficiency and engagement.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="relative border-l-2 border-indigo-600 ml-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="mb-12 ml-6 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-5 top-1 bg-indigo-600 w-3 h-3 rounded-full" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-400">
                {exp.company} - {exp.location}
              </p>
              <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.responsibilities.map((r, ri) => (
                  <li key={ri}>{r}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
