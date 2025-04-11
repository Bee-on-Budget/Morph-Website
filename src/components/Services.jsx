import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Accounting & Bookkeeping",
      description:
        "Automate your entire accounting cycle — from daily transactions to compliant financial reports.",
      icon: "📊",
      details: "Fully aligned with FTA & IFRS standards.",
    },
    {
      title: "Tax Services",
      description:
        "Ensure tax compliance and reduce penalties with expert guidance and automation.",
      icon: "💼",
      details: "Save time and cut costs — up to 80% on tax-related expenses.",
    },
    {
      title: "CFO Services",
      description:
        "Plan, optimize, and scale your business finances with strategic CFO support.",
      icon: "📈",
      details:
        "From budgeting to future-proofing your business with certified experts.",
    },
    {
      title: "Mobile Application",
      description: "Manage your finances on the go with our smart mobile app.",
      icon: "📱",
      details:
        "Scan, upload, and track all your receipts and financial documents effortlessly.",
    },
    {
      title: "Financial Reporting",
      description:
        "Get real-time insights and monthly/quarterly reports tailored for smart decision-making.",
      icon: "📑",
      details: "Understand performance and stay audit-ready at all times.",
    },
    {
      title: "Audit & Compliance Support",
      description:
        "Never stress over audits again — we store and organize your financial data for full audit readiness.",
      icon: "🔍",
      details: "Peace of mind during audits with end-to-end expert support.",
    },
  ];

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

  return (
    <section id="services" className="py-16 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Services
          </h2>
          <motion.div
            className="w-20 h-1 bg-gold-700 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <p className="text-base sm:text-lg text-gray-600 mx-auto max-w-2xl sm:max-w-3xl">
            End-to-end financial management solutions for modern businesses —
            powered by AI and backed by certified experts.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              <motion.div
                className="text-3xl mb-3"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                {service.title}
              </h3>
              <motion.p
                className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {service.description}
              </motion.p>
              <motion.p
                className="text-xs sm:text-sm text-yellow-600 mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {service.details}
              </motion.p>
              <motion.button
                className="text-sm sm:text-base text-black font-medium hover:underline"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ x: 5 }}
              >
                Learn more →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
