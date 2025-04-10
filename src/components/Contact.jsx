import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const recaptchaRef = useRef();
  const formRef = useRef();

  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
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

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">
          CONTACT US
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mx-auto mb-8 sm:mb-12 max-w-2xl text-center">
          Get in touch with our specialists
        </p>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="lg:w-1/2">
            <form
              ref={formRef}
              onSubmit={formik.handleSubmit}
              className="space-y-4 sm:space-y-6"
            >
              {submitStatus && (
                <div
                  className={`p-3 sm:p-4 rounded ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full p-2 sm:p-3 border ${
                      formik.errors.name ? "border-red-500" : "border-gray-300"
                    } rounded focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    required
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-xs sm:text-sm mt-1">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full p-2 sm:p-3 border ${
                      formik.errors.email ? "border-red-500" : "border-gray-300"
                    } rounded focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    required
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-xs sm:text-sm mt-1">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`w-full p-2 sm:p-3 border ${
                    formik.errors.subject ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  required
                />
                {formik.touched.subject && formik.errors.subject && (
                  <div className="text-red-500 text-xs sm:text-sm mt-1">
                    {formik.errors.subject}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className={`w-full p-2 sm:p-3 border ${
                    formik.errors.message ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  required
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-xs sm:text-sm mt-1">
                    {formik.errors.message}
                  </div>
                )}
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              />

              <button
                type="submit"
                className="bg-yellow-500 text-black py-2 sm:py-3 px-6 rounded font-medium hover:bg-yellow-600 transition disabled:opacity-50 text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 bg-gray-50 p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">OUR DETAILS</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="text-yellow-500 mr-3 sm:mr-4 mt-0.5">
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
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold">Address</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Dubai, UAE
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-yellow-500 mr-3 sm:mr-4 mt-0.5">
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
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold">Phone</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    <a href="tel:+971569359046" className="hover:text-yellow-500">
                      +971 569359046
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-yellow-500 mr-3 sm:mr-4 mt-0.5">
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
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold">Email</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    <a
                      href="mailto:info@morph-accounting.ae"
                      className="hover:text-yellow-500"
                    >
                      info@morph-accounting.ae
                    </a>
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