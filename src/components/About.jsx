import React from "react";
import adminLaptop from "../assets/images/admin-laptop-nobg.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Title & Subtitle */}
        <h2 className="text-4xl font-bold text-center mb-4">ABOUT MORPH</h2>
        <p className="text-lg text-gray-600 mx-auto mb-12 max-w-3xl">
          Established in 2025 Morph has become Dubai's premier automotive
          protection specialist. Our state-of-the-art facility in Al Quoz is
          equipped with climate-controlled bays and certified installation
          experts.
        </p>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 text-left">
          {/* Left Text Section */}
          <div className="md:w-1/2 space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-1">What We Offer</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>3M and XPEL Certified Installers</li>
                <li>5,000+ Vehicles Protected</li>
                <li>2-Year Minimum Warranty on All Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Our Promise</h4>
              <p className="text-gray-600">
                We guarantee exceptional service and long-lasting protection for
                your vehicle with industry-leading materials and precision care.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2">
            <img
              src={adminLaptop}
              alt="Morph Dashboard"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
