import React from "react";
import { Link } from "react-scroll";
import HeroRightComponent from "./HeroRightComponent.jsx";
import "../App.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-green-500 text-white overflow-hidden hero-bg"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text and buttons section - takes full width on mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Precision Financial Solutions
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Dubai's leading specialists in accounting, auditing, and financial
              consulting — delivering tailored solutions to empower businesses
              with financial clarity, compliance, and strategic growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="vehicles"
                smooth
                duration={500}
                className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-3 px-8 rounded transition-colors text-base"
              >
                View Inventory
              </Link>
              <Link
                to="contact"
                smooth
                duration={500}
                className="border-2 border-white hover:border-gold-500 text-white hover:text-gold-500 font-bold py-3 px-8 rounded transition-colors text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* HeroRightComponent - hidden on mobile, proper positioning on larger screens */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="relative w-full max-w-xl">
              <HeroRightComponent className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
