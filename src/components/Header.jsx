import React, { useState, useEffect } from "react";
import morphLogo from "../assets/images/logo-morph.png";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "pricing", label: "Pricing" },
    { id: "services", label: "Services" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-green-800 py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth
            duration={500}
            className="text-3xl font-bold text-gold-500 cursor-pointer"
          >
            <img 
              alt="morph logo" 
              src={morphLogo} 
              className="w-24" 
            />
          </Link>

          <button
            className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-green-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={500}
                offset={-80}
                activeClass="text-gold-500"
                className="text-white hover:text-gold-500 uppercase text-sm font-medium tracking-wider cursor-pointer transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-green-800 shadow-lg py-4 px-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={500}
                  offset={-80}
                  activeClass="text-gold-500"
                  className="text-white hover:text-gold-500 uppercase text-sm font-medium tracking-wider cursor-pointer transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;