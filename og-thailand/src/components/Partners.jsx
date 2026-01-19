import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Partners = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];
  
  const partners = [
    { name: "DAIM", src: "Logos/Daiwa.webp", alt: "Daiwa Chemical Industries Logo" },
    { name: "TEAMPLAS", src: "Logos/Teamplas Chemical.webp", alt: "Teamplas Chemical Co., Ltd. Logo" },
    { name: "SIAM ECO-KASEI", src: "Logos/Siam Eco.webp", alt: "Siam Eco-Kasei Co., Ltd. Logo" },
  ];

  return (
    <section id='partner' className="relative bg-white pt-20 pb-32 md:pb-40 overflow-hidden">
      
      {/* --- Section Content --- */}
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#102D5E] inline-block relative pb-4 font-noto-sans">
            {t.partners.title}
            {/* The underline */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#102D5E]"></span>
          </h2>
        </div>

        {/* Logo Row */}
        {/* UPDATED: Removed plain 'grayscale'. Added 'md:grayscale'. 
            Now Mobile = Color, Desktop = Grayscale (until hover). */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 md:grayscale md:hover:grayscale-0 transition-all duration-300">
          {partners.map((partner, index) => (
            <div key={index} className="p-4">
              <img 
                src={partner.src} 
                alt={partner.alt} 
                // UPDATED: 'md:opacity-80' means full opacity on mobile, 80% on desktop
                className="max-h-16 md:max-h-20 w-auto object-contain md:opacity-80 md:hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

      </div>

      {/* --- The Downward V-Shape Separator --- */}
      <div 
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-[#F0F8FF] z-0 pointer-events-none"
        style={{ 
          clipPath: "polygon(0 100%, 100% 100%, 50% 0)" 
        }}
      ></div>
    </section>
  );
};

export default Partners;