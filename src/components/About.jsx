import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/assets/images/about-showroom.jpg" 
              alt="Morph Facility" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">ABOUT Morph</h2>
            <p className="text-lg mb-6">
              Established in 2025 Morph has become Dubai's premier automotive protection specialist. 
              Our state-of-the-art facility in Al Quoz is equipped with climate-controlled bays 
              and certified installation experts.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">✓</span>
                <span>3M and XPEL Certified Installers</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">✓</span>
                <span>5,000+ Vehicles Protected</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">✓</span>
                <span>2-Year Minimum Warranty on All Services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;