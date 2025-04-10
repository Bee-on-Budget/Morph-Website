import React from "react";
import correctSign from "../assets/svgs/Icons.webp.svg";

const PricingSection = () => {
  const packages = [
    {
      id: 1,
      name: "Essentials",
      currency: "AED",
      newPrice: 424,
      oldPrice: 499,
      annuallyBilled: 5090,
      description: "For businesses looking for VAT management",
      features: [
        "Accounting Software",
        "Mobile App (iOS & Android)",
        "VAT Management & Filling",
        "VAT Return Reporting",
        "VAT Registration",
      ],
    },
    {
      id: 2,
      name: "Standard",
      currency: "AED",
      newPrice: 849,
      oldPrice: 999,
      annuallyBilled: 10190,
      description:
        "For small businesses looking to manage their accounting and tax efficiently",
      features: [
        "Accounting Software",
        "Accounting and Bookkeeping",
        "Financial Statement",
        "Corporate TAX Management & Filing",
        "VAT Management & Filling",
      ],
    },
    {
      id: 3,
      name: "Growth",
      currency: "AED",
      newPrice: "1,274",
      oldPrice: "1,499",
      annuallyBilled: 15290,
      description:
        "For businesses looking for comprehensive financial management with dedicated support",
      features: [
        "Accounting Software",
        "Accounting and Bookkeeping",
        "Financial Statement",
        "Corporate TAX Management & Filing",
        "VAT Management & Filling",
        "Dedicated Account Manager",
        "Third-Party Integrations",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Prices
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mx-auto max-w-2xl sm:max-w-3xl">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col"
            >
              <div className="p-6 sm:p-8 flex flex-col h-full">
                {/* Package Name */}
                <h3 className="text-xl sm:text-2xl font-bold mb-8 text-gray-900">
                  {pkg.name}
                </h3>

                {/* Prices */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-xs sm:text-sm text-gray-900">
                    Starts from {pkg.currency}{" "}
                  </span>
                  <span className="text-lg sm:text-xl font-bold underline text-gray-900">
                    {pkg.newPrice}
                  </span>
                  <span className="text-sm sm:text-md font-bold text-red-700 line-through ml-2">
                    {pkg.currency} {pkg.oldPrice}
                  </span>
                  <span className="text-gray-600 text-xs sm:text-sm ml-1">
                    /month
                  </span>
                </div>

                {/* Billed annually */}
                <div className="bg-blue-50 p-2 sm:p-3 rounded-md mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm font-medium flex justify-between text-gray-700">
                    <span className="font-bold">Billed annually</span>
                    <span className="font-bold">
                      {pkg.currency} {pkg.annuallyBilled}
                    </span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 h-20 sm:h-24 mb-4 sm:mb-6">
                  {pkg.description}
                </p>

                {/* Contact button */}
                <div className="mb-6">
                  <button className="w-full py-2 sm:py-3 text-sm sm:text-base rounded-md font-semibold transition-colors duration-300 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white">
                    Contact Sales
                  </button>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 border-t border-gray-200 pt-4 sm:pt-6 flex-grow">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <img
                        src={correctSign}
                        alt="✓"
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;