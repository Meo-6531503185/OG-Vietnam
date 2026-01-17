import { useLanguage } from '../i18n/LanguageContext';

const AboutUs = () => {
    const { language, translations } = useLanguage();
    const t = translations[language];

    return (
      <section id="about" className="relative py-12 md:pb-45 bg-white overflow-hidden">
        
        {/* --- 1. Background Layer --- */}
        {/* absolute inset-0 makes it fill the parent section. z-0 keeps it behind content. */}
        <img 
          src="Rectangle 10.png" 
          alt="Background Pattern" 
          className="absolute top-0 left-0 w-full h-full object-fill z-0 pointer-events-none" 
        />
        
  
        {/* --- 2. Content Layer --- */}
        {/* relative z-10 ensures text sits ON TOP of the background image */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          
          {/* Responsive Heading: Smaller text/padding on mobile, larger on desktop */}
          <h2 className="text-xl md:text-3xl font-bold text-[#102D5E] mb-2 px-8 py-2 md:px-12 md:py-3 bg-white rounded-[20px] relative inline-block shadow-[2px_2px_2px_rgba(0,0,0,0.15)]">
            {t.aboutUs.title}
          </h2>
  
          {/* Responsive Paragraph: Smaller font (text-sm) on mobile */}
          <p className="mt-6 md:mt-8 max-w-5xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed mb-8 md:mb-12 p-2 md:p-0">
            {t.aboutUs.description}
          </p>
          
          {/* Image Container */}
          <div className="mt-8 md:mt-10 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img src="about-us.png" alt="Laboratory Setup" className="w-full h-auto" />
          </div>
  
        </div>
      </section>
    )
  }
  export default AboutUs;