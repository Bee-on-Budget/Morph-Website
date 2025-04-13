import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContact } from "../context/ContactContext";
import faqData from "../assets/data/faqData";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const searchRef = useRef(null);

  const { setContactData } = useContact();

  // Filter FAQs based on search and category
  const filteredItems = faqData.items.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Focus search input on "/" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "/" &&
        !searchRef.current.contains(document.activeElement)
      ) {
        e.preventDefault();
        searchRef.current.querySelector("input").focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const handleContactClick = (subject, message) => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      setContactData({
        subject,
        message,
        shouldFocus: true, // Set focus flag
        shouldScroll: true, // Trigger smooth scroll
      });
    }, 500);
  };

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-gold-700 font-semibold mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            KNOWLEDGE BASE
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gold-700 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <motion.p
            className="text-xl text-green-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Quick answers to your most common queries. Can't find what you're
            looking for? <br className="hidden md:block" />
            <a href="#contact" className="text-gold-800 hover:underline">
              Contact our support team
            </a>
            .
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div ref={searchRef} className="relative max-w-2xl mx-auto mb-8">
            <motion.input
              type="text"
              placeholder="Search FAQs (press '/' to focus)"
              className="w-full px-4 py-4 pr-12 rounded-lg border-0 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              whileFocus={{ scale: 1.01 }}
            />
            <motion.div
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-green-400"
              animate={{
                x: searchTerm ? [0, -2, 2, -2, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: searchTerm ? Infinity : 0,
                repeatType: "mirror",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.button
              variants={item}
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-gold-700 text-white"
                  : "bg-green-50 text-green-700 hover:bg-green-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Categories
            </motion.button>
            {faqData.categories.map((category) => (
              <motion.button
                key={category.id}
                variants={item}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-gold-700 text-white"
                    : "bg-green-50 text-green-700 hover:bg-green-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={item}
                className={`border border-green-100 rounded-xl transition-all duration-200 overflow-hidden ${
                  activeIndex === index
                    ? "ring-2 ring-gold-500 bg-green-50"
                    : "hover:border-gold-500"
                }`}
                whileHover={{ scale: 1.005 }}
              >
                <motion.button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                >
                  <div>
                    <motion.span
                      className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      {
                        faqData.categories.find(
                          (cat) => cat.id === item.category
                        )?.name
                      }
                    </motion.span>
                    <h4 className="text-lg md:text-xl font-semibold text-green-900">
                      {item.question}
                    </h4>
                  </div>
                  <motion.span
                    className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                      activeIndex === index
                        ? "bg-gold-700 text-white rotate-180"
                        : "bg-green-100 text-gold-800"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform duration-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2 },
                          opacity: { duration: 0.1 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-green-700">
                        <div className="border-t border-gold-300 pt-4">
                          <p className="mb-4">{item.answer}</p>
                          <motion.div
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {item.tags.map((tag) => (
                              <motion.span
                                key={tag}
                                className="px-2 py-1 text-xs rounded bg-green-50 text-green-600"
                                whileHover={{ scale: 1.05 }}
                              >
                                #{tag}
                              </motion.span>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="mx-auto max-w-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-green-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  No results found
                </h3>
                <p className="text-green-600 mb-4">
                  We couldn't find any FAQs matching your search. Try different
                  keywords or contact our support team.
                </p>
                <motion.button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                  className="px-4 py-2 bg-gold-700 text-white rounded-lg hover:bg-gold-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reset Filters
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-green-700 to-green-800 rounded-xl p-8 md:p-10 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Still have questions?
            </motion.h3>
            <motion.p
              className="text-lg mb-6 opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our support team is available 24/5 to help you with any questions
              or issues you might have.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gold-700 hover:bg-gold-800 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.a>
              <motion.a
                href="#demo"
                onClick={() =>
                  handleContactClick(
                    `Inquiry about requesting a demo`,
                    `Hello Morph Accounting Team,
\nI'm interested in your ticket management services.
I would like to try it before I make the decision to subscribe.
\nCould you please provide more information about requesting the demo?
\nBest regards,`
                  )
                }
                className="px-6 py-3 border border-white hover:bg-white hover:text-green-800 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Demo
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
