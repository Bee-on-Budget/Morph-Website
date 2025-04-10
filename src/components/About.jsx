import React from "react";
import { motion } from "framer-motion";
import adminLaptop from "../assets/images/admin-laptop-nobg.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-6 text-center">
        {/* Title & Subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
          >
            ABOUT MORPH
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 mx-auto max-w-3xl"
          >
            Morph is more than just accounting software — it's a complete
            financial management solution that blends AI-driven tools with
            certified financial and tax experts to save you time, money, and
            effort.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 text-left">
          {/* Left Text Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="md:w-1/2 space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-2">Our Story</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Since launching Morph, our mission has been to redefine how
                small and medium-sized businesses handle their finances. We saw
                a need for more than just bookkeeping—so we built a platform
                that empowers businesses with intelligent tools and expert
                guidance tailored to local market needs.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-2">Our Mission</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                To offer a comprehensive, tailored financial solution for
                businesses—one that simplifies complexity and supports long-term
                growth.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-2">Our Vision</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                To lead the transformation of financial management for SMBs and
                help them exceed their goals with ease and confidence.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="md:w-1/2 max-w-md mx-auto"
          >
            <motion.img
              src={adminLaptop}
              alt="Morph Dashboard"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;