import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-green-800 py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link to="hero" smooth duration={500} className="text-3xl font-bold text-gold-500 cursor-pointer">
          Morph
          </Link>
          <nav className="hidden md:flex space-x-8 text-gold-800 hover:text-gold-100">
            {['vehicles', 'services', 'about', 'contact'].map((item) => (
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
      </div>
    </header>
  );
};

export default Header;