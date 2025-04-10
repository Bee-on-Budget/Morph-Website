import React from "react";

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

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">OUR SERVICES</h2>
        <p className="text-lg text-gray-600 mx-auto mb-12 max-w-3xl text-center">
          End-to-end financial management solutions for modern businesses —
          powered by AI and backed by certified experts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gold-500 mb-6">{service.details}</p>
              <button className="text-black font-medium hover:underline">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
