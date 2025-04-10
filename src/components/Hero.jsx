import React from "react";
import { Link } from "react-scroll";
import HeroRightComponent from "./HeroRightComponent.jsx";
import { motion } from "framer-motion";
import "../App.css";

// Animation variants - modified for width animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-green-500 text-white overflow-hidden hero-bg"
    >
      {/* Dark overlay for better text readability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black z-0"
      ></motion.div>

      {/* Main content container with max-width */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text and buttons section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-7 h-7 bg-[#B9A2D9]/20 rounded-full mr-3 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5 text-[#B9A2D9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
                <span className="text-sm sm:text-base text-green-50">
                  Save up to{" "}
                  <span className="font-semibold text-yellow-300">80%</span> on
                  accounting costs
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl xs:text-5xl sm:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              New Way to Manage Your Finances!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Automated software, supported by certified accounting and tax
              experts in one place.
            </motion.p>

            <motion.div variants={containerVariants} className="mb-8 space-y-3">
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start"
              >
                <div className="w-5 h-5 bg-green-300 rounded-full mr-3 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Full Automation of financial processes</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start"
              >
                <div className="w-5 h-5 bg-green-300 rounded-full mr-3 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Upload receipts - we handle compliance</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start"
              >
                <div className="w-5 h-5 bg-green-300 rounded-full mr-3 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Daily transactions to tax filing</span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                href="https://app.morph-accounting.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded transition-colors text-base"
              >
                Download App
              </motion.a>
              <motion.div variants={itemVariants}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="border-2 border-white hover:border-yellow-500 text-white hover:text-yellow-500 font-bold py-3 px-8 rounded transition-colors text-base cursor-pointer block"
                >
                  Contact us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* HeroRightComponent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center w-full lg:w-1/2"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{
                  scaleX: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <HeroRightComponent className="w-full h-auto" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;