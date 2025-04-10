import React from "react";
import adminLaptop from "../assets/images/admin-laptop-nobg.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Title & Subtitle */}
        <h2 className="text-4xl font-bold text-center mb-4">ABOUT MORPH</h2>
        <p className="text-lg text-gray-600 mx-auto mb-12 max-w-4xl">
          Morph is more than just accounting software — it's a complete
          financial management solution that blends AI-driven tools with
          certified financial and tax experts to save you time, money, and
          effort.
        </p>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 text-left">
          {/* Left Text Section */}
          <div className="md:w-1/2 space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-1">Our Story</h4>
              <p className="text-gray-600">
                Since launching Morph, our mission has been to redefine how
                small and medium-sized businesses handle their finances. We saw
                a need for more than just bookkeeping—so we built a platform
                that empowers businesses with intelligent tools and expert
                guidance tailored to local market needs.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-1">Our Mission</h4>
              <p className="text-gray-600">
                To offer a comprehensive, tailored financial solution for
                businesses—one that simplifies complexity and supports long-term
                growth.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-1">Our Vision</h4>
              <p className="text-gray-600">
                To lead the transformation of financial management for SMBs and
                help them exceed their goals with ease and confidence.
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
