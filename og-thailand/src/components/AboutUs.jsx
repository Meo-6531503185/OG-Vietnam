import { useLanguage } from '../i18n/LanguageContext';

const AboutUs = () => {
    const { language, translations } = useLanguage();
    const t = translations[language];

    return (
      <section id="about" className="relative md:py-12 md:pb-45 bg-white overflow-hidden">
        
        {/* --- 1. Background Layer --- */}
        <div className="absolute top-0 left-0 w-full hidden md:block md:h-175 z-0
              bg-linear-to-b from-white via-white to-[#EBF6FF] 
              [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]">
        </div>
        
  
        {/* --- 2. Content Layer --- */}
        {/* relative z-10 ensures text sits ON TOP of the background image */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xl md:text-4xl font-bold text-[#102D5E] inline-block relative pb-4 font-noto-sans">
            {t.aboutUs.title}
            {/* The underline */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#102D5E]"></span>
          </h2>
  
          {/* Responsive Paragraph: Smaller font (text-sm) on mobile */}
          <p className="mt-6 md:mt-8 max-w-5xl mx-auto text-gray-600 text-sm md:text-base text-justify leading-relaxed mb-8 md:mb-12 p-2 md:p-0">
            {t.aboutUs.description}
          </p>
          
          {/* Image Container */}
          <div className="mt-8 md:mt-10 rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <img src="about-us.webp" alt="Laboratory Setup" className="w-full h-auto" />
          </div>
  
        </div>
      </section>
    )
  }
  export default AboutUs;