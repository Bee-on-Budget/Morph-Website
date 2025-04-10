import React from "react";
import { FiDatabase, FiUploadCloud, FiCheckCircle, FiBarChart2 } from "react-icons/fi";
import girl from "../assets/images/girl.png";

const AccountingAutomation = () => {
  return (
    <section id="CoreValue" className="relative flex items-center bg-gray-100 py-12 md:py-16 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Left content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center gap-2 mb-3 lg:mb-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <FiDatabase className="text-gray-700 text-base lg:text-lg" />
                </div>
                <span className="text-gray-600 font-medium tracking-wider uppercase text-xs">
                  Accounting Automation
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4 leading-tight">
                Say Goodbye to <br />
                <span className="text-gray-800">Manual Data Entry</span>
              </h1>

              <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 max-w-md">
                Transform your accounting workflow with our intelligent automation that eliminates tedious manual work and reduces errors.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {[
                { icon: <FiUploadCloud className="text-lg" />, text: "Auto-import transactions" },
                { icon: <FiCheckCircle className="text-lg" />, text: "Error-free processing" },
                { icon: <FiBarChart2 className="text-lg" />, text: "Real-time analytics" },
                { icon: <div className="text-lg">⌛</div>, text: "90% time savings" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="p-1.5 bg-white rounded-md shadow-xs text-gray-700 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-xs lg:text-sm text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - responsive image container */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <div className="relative bg-white p-1 rounded-lg shadow-md border border-gray-200 h-auto lg:h-[400px] flex flex-col">
              {/* Responsive image container */}
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md flex-1">
                <img
                  src={girl}
                  alt="Modern accounting dashboard showing automated financial processes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 lg:p-3">
                <div className="text-white text-xs">
                  <div className="font-medium">Live Financial Dashboard</div>
                  <div className="text-xxs opacity-80">Data updates automatically every 15 minutes</div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xxs px-1.5 py-0.5 rounded-full flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
                Automated
              </div>
            </div>
            
            {/* Stats badges */}
            <div className="flex justify-center gap-2 lg:gap-3 mt-3 lg:mt-4">
              {[
                { value: "95%", label: "Accuracy" },
                { value: "10x", label: "Faster" },
                { value: "24/7", label: "Monitoring" }
              ].map((stat, index) => (
                <div key={index} className="bg-white px-2 py-1 rounded-md shadow-xs text-center">
                  <div className="text-gray-900 font-bold text-xs lg:text-sm">{stat.value}</div>
                  <div className="text-xxs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountingAutomation;