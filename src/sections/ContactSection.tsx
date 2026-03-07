"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-gray-100">
      <div className="max-w-5xl mx-auto px-3">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 bg-gray-900 p-6 rounded-lg min-h-[120px]">
            <div className="text-indigo-400">
              <FaPhoneAlt size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">+91 9409056174</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gray-900 p-6 rounded-lg min-h-[120px]">
            <div className="text-indigo-400">
              <MdEmail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <a
                href="mailto:jainamshah7111997@gmail.com"
                className="text-gray-400 hover:text-indigo-400 break-all"
              >
                jainamshah7111997@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gray-900 p-6 rounded-lg min-h-[120px]">
            <div className="text-indigo-400">
              <FaLinkedin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/jainam-shah-1a88a8187/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400"
              >
                Jainam Shah
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
