import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">CONTACT US</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          Get in touch with our specialists
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-green-600 text-white py-3 px-8 rounded font-medium hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">OUR DETAILS</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-gold-500 mr-4 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Address</h4>
                  <p className="text-gray-600">Al Quoz Industrial Area 3<br/>Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-gold-500 mr-4 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+97143219999" className="hover:text-gold-500">+971 4 321 9999</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-gold-500 mr-4 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@morph-accounting.ae" className="hover:text-gold-500">info@morph-accounting.ae</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;