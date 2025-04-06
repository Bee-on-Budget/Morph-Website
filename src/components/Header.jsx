import React, { useState, useEffect } from "react";
import morphLogo from "../assets/images/logo-morph.png";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Close mobile menu when scrolling
      if (mobileMenuOpen) setMobileMenuOpen(false);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-green-800 py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth
            duration={500}
            className="text-3xl font-bold text-gold-500 cursor-pointer"
          >
            <img alt="morph logo" src={morphLogo} className="w-24 pt-3" />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-green-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["vehicles", "services", "about", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                offset={-80}
                activeClass="text-gold-500"
                className="text-white hover:text-gold-500 uppercase text-sm font-medium tracking-wider cursor-pointer transition"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation - Top to Bottom Slide */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black transition-opacity ${
              mobileMenuOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu panel - Slides from top */}
          <div
            className={`absolute top-0 left-0 right-0 bg-green-800 shadow-xl transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex justify-end">
                <button
                  className="text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col space-y-4 py-4">
                {["vehicles", "services", "about", "contact"].map((item) => (
                  <Link
                    key={item}
                    to={item}
                    smooth
                    duration={500}
                    offset={-80}
                    activeClass="text-gold-500"
                    className="text-white hover:text-gold-500 uppercase text-sm font-medium tracking-wider cursor-pointer transition py-3 px-4 rounded hover:bg-green-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
