import React from "react";
import {
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
} from "./icons";
import morphLogo from "../assets/images/logo-morph.png";
import qrCode from "../assets/images/app-qr-code.png";

const Footer2 = () => {
  return (
    <footer className="bg-green-600 text-white px-6 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-400 pb-6">
        {/* Left - Logo and Name */}
        <div className="flex flex-col md:items-start items-center mb-6">
          <img alt="morph logo" src={morphLogo} className="w-32 mb-1" />
          <p className="text-sm text-gray-300">
            Transforming financial clarity into a strategic advantage in UAE
          </p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="\#">
            <YoutubeIcon />
          </a>
          <a href="\#">
            <FacebookIcon />
          </a>
          <a href="\#">
            <InstagramIcon />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-6">
        {/* QR Code */}
        <div className="mt-4 md:mt-0 text-center">
          <p className="mb-1">Download our app</p>
          <a
            href="https://app.morph-accounting.ae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={qrCode}
              alt="QR code to download app"
              className="w-20 h-20 mx-auto"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 flex-wrap justify-center">
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "pricing", label: "Pricing" },
            { id: "services", label: "Services" },
            { id: "faq", label: "FAQ" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <a href="\#" key={item.id} className="hover:underline">
              {item.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-gray-300 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Morph Accountent. All rights reserved.
          </p>
          <p className="text-m text-center opacity-80">
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
    </footer>
  );
};

export default Footer2;
