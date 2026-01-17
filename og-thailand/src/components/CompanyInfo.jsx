
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const CompanyInfo = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-[#F0F8FF]">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-[#102D5E] font-bold text-sm uppercase tracking-widest mb-2 font-noto-sans">
            {t.contact.companyInfoHeader}
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#102D5E] relative inline-block pb-4 font-noto-sans">
            {t.contact.companyInfoTitle}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#102D5E]"></span>
          </h2>
        </div>

        {/* Intro Text */}
        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-12 text-center md:text-left font-noto-sans">
          {t.contact.intro}
        </p>

        {/* Info Table */}
        <div className="w-full mb-12 border-t border-gray-200">
          
          {/* Row 1: Company Name */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 py-4 border-b border-gray-200 items-start font-noto-sans">
            <div className="font-bold text-[#102D5E]">{t.contact.company}</div>
            <div className="text-gray-700">{t.contact.companyName}</div>
          </div>

          {/* Row 2: Date Established */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 py-4 border-b border-gray-200 items-start font-noto-sans">
            <div className="font-bold text-[#102D5E]">{t.contact.dateEstablished}</div>
            <div className="text-gray-700">{t.contact.dateValue}</div>
          </div>

          {/* Row 3: Capital */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 py-4 border-b border-gray-200 items-start font-noto-sans">
            <div className="font-bold text-[#102D5E]">{t.contact.capital}</div>
            <div className="text-gray-700">{t.contact.capitalValue}</div>
          </div>

          {/* Row 4: Managing Director */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 py-4 border-b border-gray-200 items-start font-noto-sans">
            <div className="font-bold text-[#102D5E]">{t.contact.managingDirector}</div>
            <div className="text-gray-700">{t.contact.directorName}</div>
          </div>

          {/* Row 5: Shareholders */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 py-4 border-b border-gray-200 items-start font-noto-sans">
            <div className="font-bold text-[#102D5E]">{t.contact.shareholders}</div>
            <div className="text-gray-700">{t.contact.shareholderValue}</div>
          </div>

          {/* Row 6: Address */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 py-4 border-b border-gray-200 items-start font-noto-sans">
            <div className="font-bold text-[#102D5E]">{t.contact.address}</div>
            <div className="text-gray-700">
              {t.contact.addressValue}<br/>
              {t.contact.tel}<br/>
              {t.contact.fax}
            </div>
          </div>
        
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-87.5 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative z-0">
            <iframe 
              title="OG Thailand Location"
              width="100%" 
              height="100%" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8311129919066!2d100.5311235746985!3d13.728672697829346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f09d8c22357%3A0x79eea47cab0e5800!2sOG%20Trading%20(Thailand)%20Co.%2C%20Ltd.%2010th%20floor!5e0!3m2!1sen!2sth!4v1768313714174!5m2!1sen!2sth"
              className="absolute top-0 left-0"
            ></iframe>
        </div>

      </div>
    </section>
  );
};

export default CompanyInfo;