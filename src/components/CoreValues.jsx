import React from "react";
import { FiDatabase, FiUploadCloud, FiCheckCircle, FiBarChart2 } from "react-icons/fi";
import adminDashboard from "../assets/images/core-values.png"; 

const AccountingAutomation = () => {
  return (
    <section className="relative flex items-center bg-gray-100 py-20 md:py-28 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <FiDatabase className="text-gray-700 text-xl" />
                </div>
                <span className="text-gray-600 font-medium tracking-wider uppercase text-sm">
                  Accounting Automation
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Say Goodbye to <br />
                <span className="text-gray-800">Manual Data Entry</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Transform your accounting workflow with our intelligent automation that eliminates tedious manual work and reduces errors.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <FiUploadCloud className="text-2xl" />, text: "Auto-import transactions" },
                { icon: <FiCheckCircle className="text-2xl" />, text: "Error-free processing" },
                { icon: <FiBarChart2 className="text-2xl" />, text: "Real-time analytics" },
                { icon: <div className="text-2xl">⌛</div>, text: "90% time savings" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-gray-700 mt-1">
                    {item.icon}
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - enlarged image */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-white p-1 rounded-xl shadow-xl border border-gray-200">
              {/* Image with subtle frame */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={adminDashboard}
                  alt="Modern accounting dashboard showing automated financial processes"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-white text-sm">
                  <div className="font-medium">Live Financial Dashboard</div>
                  <div className="text-xs opacity-80">Data updates automatically every 15 minutes</div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                Automated
              </div>
            </div>
            
            {/* Stats badges */}
            <div className="flex justify-center gap-4 mt-6">
              <div className="bg-white px-3 py-2 rounded-lg shadow-sm text-center">
                <div className="text-gray-900 font-bold">95%</div>
                <div className="text-xs text-gray-500">Accuracy</div>
              </div>
              <div className="bg-white px-3 py-2 rounded-lg shadow-sm text-center">
                <div className="text-gray-900 font-bold">10x</div>
                <div className="text-xs text-gray-500">Faster</div>
              </div>
              <div className="bg-white px-3 py-2 rounded-lg shadow-sm text-center">
                <div className="text-gray-900 font-bold">24/7</div>
                <div className="text-xs text-gray-500">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountingAutomation;