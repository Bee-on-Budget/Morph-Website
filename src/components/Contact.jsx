import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useContact } from "../context/ContactContext";

const Contact = () => {
  const { contactData, setContactData } = useContact();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const recaptchaRef = useRef();
  const formRef = useRef();
  const messageRef = useRef();
  const contactSectionRef = useRef(null);

  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits"),
    business: Yup.string().required("Business name is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      business: contactData.subject,
      message: contactData.message,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const captchaToken = await recaptchaRef.current.executeAsync();

        const response = await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            ...values,
            "g-recaptcha-response": captchaToken,
          }
        );

        if (response.status === 200) {
          setSubmitStatus({
            success: true,
            message: "Message sent successfully!",
          });
          resetForm();
          // Clear context after successful submission
          setContactData({ subject: "", message: "", shouldFocus: false });
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setSubmitStatus({
          success: false,
          message: "Failed to send message. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
        recaptchaRef.current.reset();
      }
    },
  });

  // Sync context changes with Formik
  useEffect(() => {
    if (contactData.shouldScroll && contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Reset scroll flag
      setContactData((prev) => ({ ...prev, shouldScroll: false }));
    }

    if (contactData.shouldFocus && messageRef.current) {
      messageRef.current.focus();
      setContactData((prev) => ({ ...prev, shouldFocus: false }));
    }
  },  [contactData, setContactData]);

  // Handle focus when requested
  useEffect(() => {
    if (contactData.shouldFocus && messageRef.current) {
      messageRef.current.focus();
      // Reset focus flag
      setContactData((prev) => ({ ...prev, shouldFocus: false }));
    }
  }, [contactData.shouldFocus, setContactData]);

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

  return (
    <section
      id="contact"
      ref={contactSectionRef}
      className="py-12 sm:py-16 bg-white"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">
            Contact Us
          </h2>
          <p className="text-lg text-gold-600 mb-4">Get a Free Consultation</p>
          <motion.div
            className="w-20 h-1 bg-gold-700 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <p className="text-sm sm:text-base text-gray-600 mx-auto max-w-2xl">
            Get in touch with our specialists
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row gap-6 sm:gap-8"
        >
          {/* Contact Form */}
          <motion.div variants={item} className="lg:w-1/2">
            <form
              ref={formRef}
              onSubmit={formik.handleSubmit}
              className="space-y-4 sm:space-y-6"
            >
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-3 sm:p-4 rounded ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.div
                variants={container}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {[
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    error: formik.errors.name,
                    touched: formik.touched.name,
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    error: formik.errors.email,
                    touched: formik.touched.email,
                  },
                  {
                    id: "phone",
                    label: "Phone Number",
                    type: "tel",
                    error: formik.errors.phone,
                    touched: formik.touched.phone,
                  },
                  {
                    id: "business",
                    label: "Business Name",
                    type: "text",
                    error: formik.errors.business,
                    touched: formik.touched.business,
                  },
                ].map((field) => (
                  <motion.div key={field.id} variants={item}>
                    <label
                      htmlFor={field.id}
                      className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      className={`w-full p-2 sm:p-3 border ${
                        field.error && field.touched
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded focus:outline-none focus:ring-2 focus:ring-gold-600`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values[field.id]}
                      required={field.id !== "phone"}
                    />
                    {field.touched && field.error && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs sm:text-sm mt-1"
                      >
                        {field.error}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={item}>
                <label
                  htmlFor="message"
                  className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium"
                >
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  rows="4"
                  className={`w-full p-2 sm:p-3 border ${
                    formik.errors.message && formik.touched.message
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded focus:outline-none focus:ring-2 focus:ring-gold-600`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  required
                />
                {formik.touched.message && formik.errors.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs sm:text-sm mt-1"
                  >
                    {formik.errors.message}
                  </motion.div>
                )}
              </motion.div>

              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              />

              <motion.button
                type="submit"
                className="w-full bg-gold-600 text-black py-2 sm:py-3 px-6 rounded font-medium hover:bg-gold-700 transition disabled:opacity-50 text-sm sm:text-base"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={item}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={item}
            className="lg:w-1/2 bg-gray-50 p-6 sm:p-8 rounded-lg"
          >
            <motion.h3
              className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              OUR DETAILS
            </motion.h3>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  title: "Address",
                  content: "Dubai , Ajman UAE",
                  link: false,
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ),
                  title: "Phone",
                  content: "+971 569359046",
                  link: true,
                  href: "tel:+971569359046",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  title: "Email",
                  content: "info@morph-accounting.ae",
                  link: true,
                  href: "mailto:info@morph-accounting.ae",
                },
              ].map((detail, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-gold-600 mr-3 sm:mr-4 mt-0.5">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">
                      {detail.title}
                    </h4>
                    {detail.link ? (
                      <motion.a
                        href={detail.href}
                        className="text-xs sm:text-sm text-gray-600 hover:text-gold-600"
                        whileHover={{ x: 3 }}
                      >
                        {detail.content}
                      </motion.a>
                    ) : (
                      <p className="text-xs sm:text-sm text-gray-600">
                        {detail.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;