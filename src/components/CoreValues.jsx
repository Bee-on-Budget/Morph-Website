import React from "react";
import { FiDatabase, FiUploadCloud, FiCheckCircle, FiBarChart2 } from "react-icons/fi";
import girl from "../assets/images/girl.png";

const AccountingAutomation = () => {
  return (
    <section id="CoreValue" className="relative flex items-center bg-gray-100 py-12 md:py-20 lg:py-28 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8 lg:mb-10">
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <FiDatabase className="text-gray-700 text-lg lg:text-xl" />
                </div>
                <span className="text-gray-600 font-medium tracking-wider uppercase text-xs lg:text-sm">
                  Accounting Automation
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Say Goodbye to <br />
                <span className="text-gray-800">Manual Data Entry</span>
              </h1>

              <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 max-w-lg">
                Transform your accounting workflow with our intelligent automation that eliminates tedious manual work and reduces errors.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {[
                { icon: <FiUploadCloud className="text-xl lg:text-2xl" />, text: "Auto-import transactions" },
                { icon: <FiCheckCircle className="text-xl lg:text-2xl" />, text: "Error-free processing" },
                { icon: <FiBarChart2 className="text-xl lg:text-2xl" />, text: "Real-time analytics" },
                { icon: <div className="text-xl lg:text-2xl">⌛</div>, text: "90% time savings" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 lg:gap-3">
                  <div className="p-1.5 lg:p-2 bg-white rounded-lg shadow-sm text-gray-700 mt-0.5 lg:mt-1">
                    {item.icon}
                  </div>
                  <span className="text-sm lg:text-base text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - responsive image container */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative bg-white p-1 rounded-xl shadow-xl border border-gray-200 h-auto lg:h-[480px] xl:h-[520px] flex flex-col">
              {/* Responsive image container */}
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none overflow-hidden rounded-lg flex-1">
                <img
                  src={girl}
                  alt="Modern accounting dashboard showing automated financial processes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 lg:p-4">
                <div className="text-white text-xs lg:text-sm">
                  <div className="font-medium">Live Financial Dashboard</div>
                  <div className="text-xs opacity-80">Data updates automatically every 15 minutes</div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                Automated
              </div>
            </div>
            
            {/* Stats badges */}
            <div className="flex justify-center gap-3 lg:gap-4 mt-4 lg:mt-6">
              {[
                { value: "95%", label: "Accuracy" },
                { value: "10x", label: "Faster" },
                { value: "24/7", label: "Monitoring" }
              ].map((stat, index) => (
                <div key={index} className="bg-white px-2 lg:px-3 py-1 lg:py-2 rounded-lg shadow-sm text-center">
                  <div className="text-gray-900 font-bold text-sm lg:text-base">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
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