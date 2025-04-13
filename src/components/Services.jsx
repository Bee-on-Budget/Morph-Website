import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "../assets/data/servicesData";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const panelVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* ... (keep your existing header section) */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((service, index) => (
            <div key={index} className="relative h-full">
              <motion.div
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition flex flex-col h-full"
              >
                <motion.div className="text-3xl mb-3">
                  {service.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {service.description}
                </p>
                <p className="text-xs sm:text-sm text-yellow-600 mb-4 sm:mb-6">
                  {service.details}
                </p>
                <button
                  onClick={() => setExpandedService(index)}
                  className="mt-auto text-sm sm:text-base text-black font-medium hover:underline self-start"
                >
                  Learn more →
                </button>
              </motion.div>

              {/* Sliding panel - contained within the service card */}
              <AnimatePresence>
                {expandedService === index && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-lg shadow-lg z-10 p-6 overflow-y-auto"
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold">
                        {service.title} Details
                      </h4>
                      <button
                        onClick={() => setExpandedService(null)}
                        className="text-gray-500 hover:text-black text-xl"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="prose">
                      <p className="text-gray-700 whitespace-pre-line">
                        {service.fullDetails}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
