import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';


// --- Reusable Service Card Component ---
const ServiceCard = ({ iconSrc, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
      {/* Icon Area */}
      <div className="mb-6 h-16 w-16 flex items-center justify-center">
        {/* CHANGED: Used <img> instead of <i> */}
        <img 
          src={iconSrc} 
          alt={title} 
          className="w-full h-full object-contain" 
          loading="lazy"
        />
      </div>
      
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 font-noto-sans">
        {title}
      </h3>
      
      {/* Description */}
      {/* Added text-justify here for consistent spacing */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed font-noto-sans text-justify md:text-center hyphens-auto">
        {description}
      </p>
    </div>
  );
};

// --- Main Services Section ---
const Service = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];

  // --- DEFINE YOUR ICONS HERE ---
  // Make sure these match the order of your items in translations.js
  const serviceIcons = [
    "Service/import.svg", // 1. Replace with your actual file path
    "Service/oem.svg",   // 2. Replace with your actual file path
    "Service/autho.svg",   // 3. Replace with your actual file path
    "Service/domestic.svg"       // 4. Replace with your actual file path
  ];
  
  return (
    <section className="pb-20 bg-[#F0F8FF]">
      {/* Blue Banner with "Action Circle" Button */}
      <div className='bg-[#006CB8] flex flex-col justify-center items-center px-8 py-8 gap-6'>
        <h3 className='text-white text-center font-noto-sans text-sm md:text-lg'>
          {t.services.banner}
        </h3>
        
        <a 
          href="#contact" 
          className="
            group
            flex items-center gap-4
            pl-6 pr-1.5 py-1.5
            bg-white rounded-full 
            shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] 
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]
            cursor-pointer
          "
        >
          {/* Text */}
          <span className="font-noto-sans text-base font-bold text-[#006CB8]">
            {t.services.contactButton}
          </span>

          {/* The Action Circle (Arrow) */}
          <div className="
            w-10 h-10 rounded-full 
            bg-[#006CB8] text-white 
            flex items-center justify-center
            transition-transform duration-300 
            group-hover:-rotate-45
          ">
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </div>
        </a>
      </div>

      <div id="services" className="container mx-auto px-6 pt-25 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#102D5E] inline-block relative pb-4 font-noto-sans">
            {t.services.title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#102D5E]"></span>
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.services.items.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              iconSrc={serviceIcons[index]} // CHANGED: Passing 'iconSrc' instead of 'iconClass'
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;