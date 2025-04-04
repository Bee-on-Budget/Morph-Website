// components/ContactForm.jsx
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setMessage({ text: 'Message sent successfully!', type: 'success' });
      form.current.reset();
    })
    .catch(() => {
      setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    });
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8">CONTACT US</h2>
          
          {message.text && (
            <div className={`p-4 mb-6 rounded ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message.text}
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-green-600 text-white py-3 px-8 rounded font-medium hover:bg-gray-800 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;