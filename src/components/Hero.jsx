import React from 'react';
import { Link } from 'react-scroll'; // Add this import

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-green-600 text-white overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-50"
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">PREMIUM AUTOMOTIVE PROTECTION</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Dubai's leading specialists in paint protection and vehicle enhancement
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="vehicles" 
            smooth 
            duration={500} 
            className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-3 px-8 rounded"
          >
            View Inventory
          </Link>
          <Link 
            to="contact" 
            smooth 
            duration={500} 
            className="border-2 border-white hover:border-gold-500 text-white hover:text-gold-500 font-bold py-3 px-8 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;