import React from "react";
import { Link } from "react-scroll";
import HeroRightComponent from "./HeroRightComponent.jsx";
import "../App.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-green-600 text-white overflow-hidden hero-bg"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text and buttons section */}
          <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Precision Financial Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Dubai's leading specialists in accounting, auditing, and financial
              consulting — delivering tailored solutions to empower businesses
              with financial clarity, compliance, and strategic growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="vehicles"
                smooth
                duration={500}
                className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-3 px-8 rounded transition-colors"
              >
                View Inventory
              </Link>
              <Link
                to="contact"
                smooth
                duration={500}
                className="border-2 border-white hover:border-gold-500 text-white hover:text-gold-500 font-bold py-3 px-8 rounded transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* HeroRightComponent - only visible on larger screens */}
          <div className="flex justify-center lg:justify-end">
            <HeroRightComponent className="w-full max-w-md lg:max-w-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
