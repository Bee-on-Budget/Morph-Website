import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const searchRef = useRef(null);

  // Enhanced FAQ data structure with categories
  const faqData = {
    categories: [
      { id: 'software', name: 'Software Solutions' },
      { id: 'services', name: 'Professional Services' },
      { id: 'support', name: 'Client Support' }
    ],
    items: [
      {
        id: 1,
        question: "Accounting Software Implementation",
        answer: "Our team provides comprehensive support in selecting and implementing the perfect accounting system tailored to your business needs, ensuring seamless integration with your existing workflows.",
        category: 'software',
        tags: ['software', 'implementation']
      },
      {
        id: 2,
        question: "Mobile Accounting Application Features",
        answer: "Our reliable accounting app puts financial management at your fingertips with real-time reporting, expense tracking, and secure cloud synchronization across all your devices.",
        category: 'software',
        tags: ['mobile', 'app']
      },
      {
        id: 3,
        question: "Automated Accounting & Bookkeeping",
        answer: "We help businesses automate their accounting processes to minimize errors and maintain accurate records, freeing you to focus on strategic decision-making rather than manual data entry.",
        category: 'services',
        tags: ['bookkeeping', 'automation']
      },
      {
        id: 4,
        question: "Comprehensive Tax Services",
        answer: "Our tax professionals ensure you're always compliant while maximizing deductions. We handle everything from quarterly filings to annual returns, saving you time and avoiding penalties.",
        category: 'services',
        tags: ['tax', 'compliance']
      },
      {
        id: 5,
        question: "CFO Services for Business Growth",
        answer: "Our certified experts provide strategic financial leadership, helping you manage cash flow, reduce costs, and plan for sustainable growth with tailored CFO services.",
        category: 'services',
        tags: ['cfo', 'strategy']
      },
      {
        id: 6,
        question: "Customer Support Availability",
        answer: "We offer 24/5 support with emergency weekend coverage. Our average response time is under 30 minutes for priority cases, with multiple channels including chat, email, and phone.",
        category: 'support',
        tags: ['support', 'help']
      }
    ]
  };

  // Filter FAQs based on search and category
  const filteredItems = faqData.items.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Focus search input on "/" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !searchRef.current.contains(document.activeElement)) {
        e.preventDefault();
        searchRef.current.querySelector('input').focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-500 font-semibold mb-3">KNOWLEDGE BASE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Quick answers to your most common queries. Can't find what you're looking for? <br className="hidden md:block" />
            <a href="#contact" className="text-gold-600 hover:underline">Contact our support team</a>.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div ref={searchRef} className="relative max-w-2xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Search FAQs (press '/' to focus)"
              className="w-full px-5 py-4 pr-12 rounded-lg border border-green-200 focus:ring-2 focus:ring-gold-300 focus:border-transparent transition-all duration-200 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'all' ? 'bg-gold-500 text-white' : 'bg-green-50 text-green-700 hover:bg-green-100'}`}
            >
              All Categories
            </button>
            {faqData.categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id ? 'bg-gold-500 text-white' : 'bg-green-50 text-green-700 hover:bg-green-100'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className={`border border-green-100 rounded-xl transition-all duration-200 overflow-hidden ${activeIndex === index ? 'ring-2 ring-gold-300 bg-green-50' : 'hover:border-gold-300'}`}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 mb-2">
                      {faqData.categories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <h4 className="text-lg md:text-xl font-semibold text-green-900">{item.question}</h4>
                  </div>
                  <span className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${activeIndex === index ? 'bg-gold-500 text-white rotate-180' : 'bg-green-100 text-gold-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-green-700">
                        <div className="border-t border-gold-100 pt-4">
                          <p className="mb-4">{item.answer}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 text-xs rounded bg-green-50 text-green-600">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="mx-auto max-w-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-green-800 mb-2">No results found</h3>
                <p className="text-green-600 mb-4">We couldn't find any FAQs matching your search. Try different keywords or contact our support team.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-green-700 to-green-800 rounded-xl p-8 md:p-10 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h3>
            <p className="text-lg mb-6 opacity-90">Our support team is available 24/5 to help you with any questions or issues you might have.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gold-500 hover:bg-gold-600 rounded-lg font-medium transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="#demo" 
                className="px-6 py-3 border border-white hover:bg-white hover:text-green-800 rounded-lg font-medium transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;