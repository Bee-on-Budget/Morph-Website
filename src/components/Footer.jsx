import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gold-500 mb-4">Morph</h3>
            <p className="mb-4">Dubai's premier automotive protection specialists</p>
            <div className="flex space-x-4">
              {['instagram', 'facebook', 'twitter'].map((social) => (
                <a 
                  key={social} 
                  href={`https://${social}.com/Morph`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold-500"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Social media icons would go here */}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['hero', 'vehicles', 'services', 'about', 'contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="text-gray-400 hover:text-gold-500 cursor-pointer capitalize"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['PPF Installation', 'Ceramic Coating', 'Window Tinting', 'Paint Correction'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-gold-500">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-400">
              Al Quoz Industrial Area 3<br/>
              Dubai, UAE<br/><br/>
              <a href="tel:+97143219999" className="hover:text-gold-500">+971 4 321 9999</a><br/>
              <a href="mailto:info@morph-accounting.ae" className="hover:text-gold-500">info@morph-accounting.ae</a>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Morph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;