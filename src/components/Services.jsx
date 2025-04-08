import React from "react";

const Services = () => {
  const services = [
    {
      title: "PPF Installation",
      description: "Ultimate paint protection with self-healing film",
      icon: "🛡️",
      details: "5-year warranty against yellowing and peeling",
    },
    {
      title: "Ceramic Coating",
      description: "Nanotechnology protection with hydrophobic properties",
      icon: "✨",
      details: "Creates permanent bond with your paint",
    },
    {
      title: "Window Tinting",
      description: "Premium heat rejection films with UV protection",
      icon: "🌞",
      details: "Up to 99% UV blockage",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">OUR SERVICES</h2>
        <p className="text-lg text-gray-600 mx-auto mb-12 max-w-3xl text-center">
          Comprehensive protection solutions for your vehicle
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
