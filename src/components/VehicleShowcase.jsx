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
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Prices</h2>
          <p className="text-lg text-gray-600 mx-auto max-w-3xl">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 relative flex flex-col"
            >
              <div className="p-8 flex flex-col h-full">
                {/* 3.1. Name */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {pkg.name}
                </h3>

                {/* 3.2. Prices */}
                <div className="mb-3">
                  <span className="text-sm text-gray-900">
                    Starts from {pkg.currency}
                  </span>
                  <span className="text-md font-bold text-red-700 line-through ml-2">
                    {pkg.oldPrice}
                  </span>{" "}
                  <span className="text-xl font-bold underline text-gray-900">
                    {pkg.newPrice} {pkg.currency}
                  </span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>

                {/* 3.3. Billed annually */}
                <div className="bg-blue-50 p-3 rounded-md mb-4">
                  <p className="text-sm font-medium text-gray-700">
                    <span className="font-bold">Billed annually</span>
                    <span className="mx-2">•</span>
                    <span className="font-bold">
                      {pkg.currency} {pkg.annuallyBilled}
                    </span>
                  </p>
                </div>

                {/* 3.4. Description */}
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                {/* 3.5. Contact button */}
                <div className="mt-auto mb-6">
                  <button className="w-full py-3 rounded-md font-semibold transition-colors duration-300 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white">
                    Contact Sales
                  </button>
                </div>

                {/* 3.6. Features */}
                <ul className="space-y-3 border-t border-gray-200 pt-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <img
                        src={correctSign}
                        alt="✓"
                        className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
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
