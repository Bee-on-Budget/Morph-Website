import React from "react";
import { Link } from "react-scroll";
import morphLogo from "../assets/images/logo-morph.png";
import {YoutubeIcon, FacebookIcon, InstagramIcon, WhatsappIcon} from "./icons";

const Footer = () => {
  // Function to create sparkle effects
  const createSparks = (e) => {
    const sparks = document.createElement('div');
    sparks.className = 'spark absolute bg-amber-400 rounded-full';
    sparks.style.left = `${e.clientX}px`;
    sparks.style.top = `${e.clientY}px`;
    sparks.style.width = '4px';
    sparks.style.height = '4px';
    document.body.appendChild(sparks);

    setTimeout(() => {
      sparks.style.transform = 'scale(1.5)';
      sparks.style.opacity = '0';
      setTimeout(() => sparks.remove(), 300);
    }, 10);
  };

  return (
    <footer
      className="bg-green-500 text-white pt-16 pb-8 relative overflow-hidden"
      onMouseMove={createSparks}
    >
      {/* Floating seeds/sparks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-amber-400 rounded-full opacity-20"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo and Tagline */}
          <div className="text-center mb-12">
            <Link
              to="hero"
              smooth
              duration={500}
              className="inline-block cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <img alt="morph logo" src={morphLogo} className="w-32 mb-4" />
            </Link>
            <p className="text-white text-lg font-light max-w-md mx-auto">
              Transforming financial clarity into a strategic advantage in UAE{" "}
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <ul className="flex flex-wrap justify-center gap-8">
              {["hero", "pricing", "about"].map((link) => (
                <li key={link}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="text-white hover:text-amber-300 cursor-pointer capitalize font-medium text-sm tracking-wider transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links with proper icons */}
          <div className="mb-12">
            <div className="flex justify-center space-x-6">
              <a
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/971569359046"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors duration-300 transform hover:scale-110"
                aria-label="Whatsapp"
              >
                <WhatsappIcon />
              </a>
              <a
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-white text-sm">
            <p>
              © {new Date().getFullYear()} Morph Accountent. All rights
              reserved.
            </p>
            <p className="mt-4 text-m opacity-80">
              Powered by{" "}
              <a
                href="https://www.linkedin.com/in/mohammed-skouti-5822a01b9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors duration-200"
              >
                Mohammed
              </a>{" "}
              &{" "}
              <a
                href="https://www.linkedin.com/in/SalwanArar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors duration-200"
              >
                Salwan
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* CSS for spark animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
        .spark {
          transition: all 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;