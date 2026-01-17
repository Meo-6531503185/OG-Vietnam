import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

// --- Sub-Component: Single Product Card ---
const ProductCard = ({ image, title, description }) => (
  <div className="bg-white rounded overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.08)] h-full flex flex-col">
    {/* Added h-55 container for consistent image height */}
    <div className="w-full h-55 bg-gray-50">
       <img src={image} alt={title} className="block w-full h-full object-cover" />
    </div>
    <div className="bg-[#006CB8] text-white font-noto-sans text-[18px] font-semibold p-2.5 text-center">
      {title}
    </div>
    {/* flex-grow pushes footer down if descriptions vary in length */}
    <p className="text-[13px] leading-[1.7] text-[#333] p-[14px_16px_18px] grow">
      {description}
    </p>
  </div>
);

// --- Sub-Component: Main Division Section ---
const DivisionSection = ({ 
  title, 
  mainImage, 
  descriptions, 
  products, 
  isReversed,
  productsTitle,
}) => {
  return (
    <section className="pt-8 pb-16 px-[5%] max-w-350 mx-auto">
      <div className="bg-[#EBF6FF] border border-[#006CB8] rounded-md p-10 md:p-16 mb-10 flex flex-col relative">
        
        {/* --- TOP AREA --- */}
        <div className="min-h-auto md:min-h-75 flex items-center">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start w-full`}>
            
            {/* Image Area */}
            <div className={`relative w-full h-70 md:h-95 overflow-visible ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
              <img src={mainImage} alt={title} className="w-full h-full object-cover rounded shadow-sm" />
              
              {/* Floating Title */}
              <div 
                className={`
                  hidden md:block absolute top-6 bg-white text-[#162b5b] font-noto-sans 
                  text-[32px] font-medium leading-[1.2] py-3.5 min-w-110 rounded-xs 
                  shadow-[0_4px_10px_rgba(0,0,0,0.2)] whitespace-nowrap z-10
                  ${isReversed 
                    ? '-left-87.5 pl-8 pr-15' 
                    : '-right-87.5 pl-8 pr-15'
                  }
                `}
              >
                {title}
              </div>
              
              {/* Mobile Title */}
              <div className="block md:hidden bg-white text-[#102D5E] font-bold text-xl p-3 shadow-md -mt-5 relative z-20 mx-4 text-center">
                {title}
              </div>
            </div>

            {/* Text Area */}
            <div className={`pt-0 md:pt-28.75 text-left ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
              {descriptions.map((text, index) => (
                <p 
                  key={index} 
                  className="text-[14px] leading-[1.9] text-[#333] mb-4"
                  dangerouslySetInnerHTML={{ __html: text }} 
                />
              ))}
              
              <div className="flex justify-end mt-6">
                  <a 
                      href="#contact" 
                      className="group inline-flex items-center gap-2.5 px-5 py-2.5 bg-linear-to-br from-[#47B6FA] to-[#0367AC] text-white font-noto-sans text-[15px] font-medium rounded-full transition-all duration-300 hover:-translate-y-px hover:shadow-[0_12px_20px_rgba(47,111,178,0.35)]"
                    >
                      <span>Contact</span>
                      
                      {/* Icon Wrapper: Keeps the rotation & hover slide effect */}
                      <span className="opacity-85 transition-transform duration-250 group-hover:translate-x-1 group-hover:rotate-0">
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                      </span>
                  </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- PRODUCTS AREA --- */}
        <div className="bg-white mt-24 p-8 md:p-[56px_64px_64px] -mx-10 md:-mx-16 -mb-10 md:-mb-16 rounded-b-md shadow-[0_-8px_12px_rgba(0,0,0,0.06)]">
          <div className="text-center font-noto-sans text-[22px] font-semibold text-[#162b5b] mb-10 relative">
            <span className="relative z-10 px-4 bg-white">{productsTitle}</span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-75 h-0.5 bg-[#162b5b] z-0 hidden md:block"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-25 h-1 bg-white z-0 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod, index) => (
              <ProductCard key={index} {...prod} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Main Component ---
const BusinessSection = () => {
  const { language, translations } = useLanguage();
  const t = translations[language]; // This now contains images inside it!
  
  const divisions = [
    {
      id: "chemical",
      // We can now spread the entire object because it matches the props we need!
      ...t.business.chemical,
      isReversed: false,
    },
    {
      id: "plastic",
      ...t.business.plastic,
      isReversed: true, 
    },
    {
      id: "textile",
      ...t.business.textile,
      isReversed: false,
    }
  ];

  return (
    <div id="business" className='pt-4'>
        <div className="text-center mb-10 mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#102D5E] inline-block relative pb-4 font-noto-sans">
                {t.navbar.business}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#102D5E]"></span>
            </h2>
        </div>
        
        {divisions.map((div) => (
            <DivisionSection key={div.id} {...div} />
        ))}
    </div>
  );
};

export default BusinessSection;