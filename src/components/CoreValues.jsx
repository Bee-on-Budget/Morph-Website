import React from "react";
import { motion } from "framer-motion";
import {
  FiDatabase,
  FiUploadCloud,
  FiCheckCircle,
  FiBarChart2,
} from "react-icons/fi";
import girl from "../assets/images/girl.png";

const AccountingAutomation = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="CoreValue"
      className="relative flex items-center bg-green-600 hero-bg py-12 md:py-16 px-4 sm:px-6"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
        >
          {/* Left content */}
          <motion.div variants={item} className="w-full lg:w-1/2">
            <div className="mb-6 lg:mb-8">
              <motion.div
                className="flex items-center gap-2 mb-3 lg:mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white shadow-sm flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiDatabase className="text-green-700 text-base lg:text-lg" />
                </motion.div>
                <span className="text-green-100 font-medium tracking-wider uppercase text-xs">
                  Accounting Automation
                </span>
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Say Goodbye to <br />
                <span className="text-green-50">Manual Data Entry</span>
              </motion.h1>

              <motion.p
                className="text-sm lg:text-base text-green-100 mb-4 lg:mb-6 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Transform your accounting workflow with our intelligent
                automation that eliminates tedious manual work and reduces
                errors.
              </motion.p>
            </div>

            {/* Features grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 lg:gap-4"
              variants={container}
            >
              {[
                {
                  icon: <FiUploadCloud className="text-lg" />,
                  text: "Auto-import transactions",
                },
                {
                  icon: <FiCheckCircle className="text-lg" />,
                  text: "Error-free processing",
                },
                {
                  icon: <FiBarChart2 className="text-lg" />,
                  text: "Real-time analytics",
                },
                {
                  icon: <div className="text-lg">⌛</div>,
                  text: "90% time savings",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-1.5 bg-white rounded-md shadow-xs text-green-700 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-xs lg:text-sm text-white">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - responsive image container */}
          <motion.div variants={item} className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <motion.div
              className="relative bg-white p-1 rounded-lg shadow-md border border-green-200 h-auto lg:h-[400px] flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              {/* Responsive image container */}
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md flex-1">
                <motion.img
                  src={girl}
                  alt="Modern accounting dashboard showing automated financial processes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                />
              </div>

              {/* Image caption */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/70 to-transparent p-2 lg:p-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-white text-xs">
                  <div className="font-medium">Live Financial Dashboard</div>
                  <div className="text-xxs opacity-80">
                    Data updates automatically every 15 minutes
                  </div>
                </div>
              </motion.div>

              {/* Status indicator */}
              <motion.div
                className="absolute top-2 right-2 bg-green-600 text-white text-xxs px-1.5 py-0.5 rounded-full flex items-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
                Automated
              </motion.div>
            </motion.div>

            {/* Stats badges */}
            <motion.div
              className="flex justify-center gap-2 lg:gap-3 mt-3 lg:mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: "95%", label: "Accuracy" },
                { value: "10x", label: "Faster" },
                { value: "24/7", label: "Monitoring" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white px-2 py-1 rounded-md shadow-xs text-center"
                  whileHover={{ y: -3 }}
                >
                  <div className="text-green-700 font-bold text-xs lg:text-sm">
                    {stat.value}
                  </div>
                  <div className="text-xxs text-green-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccountingAutomation;
