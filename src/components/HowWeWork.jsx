import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiSettings, FiUpload, FiFileText, FiSmartphone } from "react-icons/fi";
import workflowImage from "../assets/images/workflow.png";
import qrCode from "../assets/images/app-qr-code.png";

const HowWeWork = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left column - Steps */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={container}
            >
              <motion.div 
                variants={item}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="inline-block w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium tracking-wider text-teal-600 uppercase">
                  Very Quick & Easy!
                </span>
              </motion.div>
              
              <motion.h2 
                variants={item}
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight"
              >
                How We Work?
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
                  Get started today
                </span>
              </motion.h2>
              
              <motion.p 
                variants={item}
                className="text-lg text-gray-600 mb-8 max-w-lg"
              >
                Our streamlined process makes financial management effortless.
              </motion.p>

              <div className="space-y-6">
                {/* Step 1 */}
                <motion.div
                  variants={item}
                  className="flex gap-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                  whileHover={{ 
                    y: -4,
                    borderColor: "rgba(16, 185, 129, 0.3)"
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal-50 to-white shadow-xs flex items-center justify-center text-teal-600 border border-teal-100 group-hover:border-teal-200 transition-colors">
                    <FiUser className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Create Your Account</h3>
                    <p className="mt-1 text-gray-600">Create your account for financial management.</p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  variants={item}
                  className="flex gap-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                  whileHover={{ 
                    y: -4,
                    borderColor: "rgba(16, 185, 129, 0.3)"
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal-50 to-white shadow-xs flex items-center justify-center text-teal-600 border border-teal-100 group-hover:border-teal-200 transition-colors">
                    <FiSettings className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Personalize Your Account</h3>
                    <p className="mt-1 text-gray-600">Set up your account and personalize your financial management workflow to fit your business needs.</p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  variants={item}
                  className="flex gap-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                  whileHover={{ 
                    y: -4,
                    borderColor: "rgba(16, 185, 129, 0.3)"
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal-50 to-white shadow-xs flex items-center justify-center text-teal-600 border border-teal-100 group-hover:border-teal-200 transition-colors">
                    <FiUpload className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Scan/Share Your Daily Invoices & Receipts</h3>
                    <p className="mt-1 text-gray-600">Our platform captures data from your shared invoices, receipts, and financial documents, automating compliance from record-keeping to tax return preparation.</p>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  variants={item}
                  className="flex gap-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                  whileHover={{ 
                    y: -4,
                    borderColor: "rgba(16, 185, 129, 0.3)"
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal-50 to-white shadow-xs flex items-center justify-center text-teal-600 border border-teal-100 group-hover:border-teal-200 transition-colors">
                    <FiFileText className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Receive Your Financial Reports</h3>
                    <p className="mt-1 text-gray-600">Monthly/quarterly and annually financial reports, statements, and insights from our experts. Pretty Simple, huh?</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Visuals */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                style={{ height: '620px' }}
              >
                <img
                  src={workflowImage}
                  alt="Workflow illustration"
                  className="w-full h-full object-cover"
                />
                
                {/* QR code positioned perfectly at bottom */}
                <motion.div
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ 
                    y: -3,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg text-teal-600">
                        <FiSmartphone className="text-lg" />
                      </div>
                      <h4 className="text-sm font-medium text-white">Get Our Mobile App</h4>
                    </div>
                    <img
                      src={qrCode}
                      alt="Download app QR code"
                      className="w-32 h-32 border-2 border-white shadow-sm"
                    />
                    <p className="text-xs text-white mt-2 font-medium">Scan to download</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;