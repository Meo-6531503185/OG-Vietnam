import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

// --- Reusable Service Card Component ---
const ServiceCard = ({ iconClass, title, description }) => {
  return (
    <div  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
      {/* Icon */}
      <div className="mb-6">
        <i className={`${iconClass} text-5xl text-black`}></i>
      </div>
      
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 font-noto-sans">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed font-noto-sans">
        {description}
      </p>
    </div>
  );
};

// --- Main Services Section ---
const Service = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];
  
  const servicesData = [
    {
      title: t.services.items[0].title,
      // Icon: Boxes/Distribution center
      iconClass: "fa-solid fa-boxes-stacked", 
      description: "Sourcing and distribution of high-quality chemicals and materials for automotive, electronics, packaging, textile, and industrial applications, with stable supply and Just-in-Time (JIT) delivery."
    },
    {
      title: "OEM Manufacturing",
      // Icon: Factory
      iconClass: "fa-solid fa-industry", 
      description: "OEM manufacturing of synthetic (PU) leather for the automotive industry, supporting both wet and dry processes, with flexible production from small batches to mass production."
    },
    {
      title: "Authorized Agency & Functional Compounds",
      // Icon: User with Shield (representing Agency/Security/Trust)
      iconClass: "fa-solid fa-user-shield", 
      description: "Authorized and exclusive agent for recycled and functional plastic compounds (PP, ABS, HIPS, PC, PC/ABS, and additives), serving both local and overseas markets with technical expertise."
    },
    {
      title: "Domestic & International Market Support",
      // Icon: Global network
      iconClass: "fa-solid fa-globe", 
      description: "Market and logistics support across Thailand, ASEAN, and Japan through OG Corporation’s global network, backed by multi-location DG and non-DG warehouses."
    }
  ];

  return (
    <section  className="pb-20 bg-[#F0F8FF]">
        <div className='bg-[#006CB8] flex flex-col justify-center items-center px-8 py-6 gap-5'>
        <h3 className='text-white'>{t.services.banner}</h3>
        <a 
                href="#contact" 
                className="flex items-center justify-center md:justify-between px-8 md:px-18 py-3 bg-white rounded-[50px] text-[#006CB8] no-underline shadow-[0_10px_20px_rgba(0,114,255,0.3)] transition-transform duration-300 hover:-translate-y-1"
                >
                {/* Right Action: Always visible */}
                <div className="font-noto-sans text-base font-medium flex items-center gap-2 whitespace-nowrap">
                    {t.services.contactButton} <i className="fa-solid fa-arrow-right text-sm"></i>
                </div>
            </a>
        </div>

      <div id="services" className="container mx-auto px-6 pt-25 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#102D5E] inline-block relative pb-4">
            {t.services.title}
            {/* The small underline below the title */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#102D5E]"></span>
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;