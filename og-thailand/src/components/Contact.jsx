import React, { useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];
  
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false); // <--- New State for Success

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_x99ssi2',
        'template_qnoxb7m',
        form.current,
        {
          publicKey: 'F4DFNGrQERyd3dzGQ',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitting(false);
          setIsSent(true); // <--- Trigger the success view
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send. Please try again.");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <div className="w-full">

      {/* --- SECTION 2: CONTACT FORM --- */}
      <section id='contact' className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#102D5E] relative inline-block pb-4 font-noto-sans">
              {t.contact.contactTitle}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#102D5E]"></span>
            </h2>
            <p className="text-gray-500 mt-6 font-noto-sans">
              {t.contact.contactSubtitle}
            </p>
          </div>

          {/* CONDITIONAL RENDERING: Check if sent */}
          {isSent ? (
            
            // --- SUCCESS MESSAGE VIEW ---
            <div className="flex flex-col items-center justify-center p-8 bg-[#0367AC]/10 rounded-xl border border-[#0367AC]/30 animate-fade-in text-center">
              <div className="w-16 h-16 bg-[#0367AC]/20 rounded-full flex items-center justify-center mb-4 shadow-sm">
                {/* Green Check Icon */}
                <svg className="w-8 h-8 text-[#0367AC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-noto-sans">Message Sent!</h3>
              <p className="text-gray-600 font-noto-sans mb-6">
                Thank you for contacting us. We have received your inquiry and will get back to you shortly.
              </p>
              <button 
                onClick={() => setIsSent(false)} 
                className="text-[#0367AC] font-bold hover:underline font-noto-sans text-sm"
              >
                Send another message
              </button>
            </div>

          ) : (

            // --- FORM VIEW (Normal) ---
            <form ref={form} onSubmit={sendEmail} className="space-y-6 font-noto-sans">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.yourName}<span className="text-red-500">*</span></label>
                <input type="text" name="user_name" required className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#0066cc]" />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.companyNameLabel}<span className="text-red-500">*</span></label>
                <input type="text" name="user_company" required className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#0066cc]" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.email}<span className="text-red-500">*</span></label>
                <input type="email" name="user_email" required className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#0066cc]" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.phone}<span className="text-red-500">*</span></label>
                <input type="tel" name="user_phone" required className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#0066cc]" />
              </div>

              {/* Inquiry Content */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.inquiryContent}</label>
                <textarea name="message" rows="6" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#0066cc]"></textarea>
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-center gap-2 mt-4">
                <input type="checkbox" id="privacy" required className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  {t.contact.privacyText} <a href="#privacy" className="text-orange-400 hover:underline">{t.contact.privacyLink}</a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-8">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-linear-to-r from-[#47B6FA] to-[#0367AC] text-white font-bold py-3 px-16 rounded-full shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : t.contact.submit}
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

    </div>
  );
};

export default Contact;