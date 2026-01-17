import { useLanguage } from '../i18n/LanguageContext';

const HeroSection = () => {
    const { language, translations } = useLanguage();
    const t = translations[language];

    return (
      <section id="home" className="relative w-full h-[85vh] overflow-hidden">
        {/* Layer 1: Background Image */}
        <img 
          src="/hero-section-img.png" 
          alt="Background" 
          className="absolute top-0 left-0 w-full h-full object-cover z-1"
        />
  
        {/* Layer 2: Overlay Image */}
        <img 
          src="/hero-over layer.png" 
          alt="Overlay" 
          className=" hidden lg:block absolute top-0 left-0 w-full h-full object-cover z-3"
        />
  
        {/* Layer 3: Video (Right side on desktop, full on mobile) */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 right-0 w-full h-full object-cover z-2 opacity-40"
        >
          <source src="/hero-section-vdo.mp4" type="video/mp4" />
        </video>
  
        {/* Fade Overlay - covers half on mobile, hidden on desktop */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-b from-transparent to-white z-4 pointer-events-none"></div>        {/* Layer 4: Content (Text and CTA) */}
        
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex flex-col justify-center md:items-end items-center text-center md:text-right z-5 px-6 md:px-8 gap-8">
          <div className="w-full max-w-xl text-center md:text-right">
            <h1 className="font-noto-sans text-4xl md:text-5xl lg:text-6xl font-bold text-[#102D5E] leading-tight mb-4">
              {t.hero.title}
            </h1>
            <p className="font-noto-sans text-base md:text-lg sm:text-sm font-bold text-black/50">
              {t.hero.subtitle}
            </p>
          </div>
  
          {/* Contact Banner */}
            <a 
                href="#contact" 
                className="flex items-center justify-center md:justify-between w-full max-w-112.5 px-8 md:px-12 py-3 bg-linear-to-r from-[#47B6FA] to-[#0367AC] rounded-[50px] text-white no-underline shadow-[0_10px_20px_rgba(0,114,255,0.3)] transition-transform duration-300 hover:-translate-y-1"
                >
                {/* Left Text: Hidden on mobile, Block on medium+ screens */}
                <div className="hidden md:block font-noto-sans text-[11px] leading-relaxed text-left font-medium">
                    {t.hero.contactText}
                </div>

                {/* Separator: Hidden on mobile, Block on medium+ screens */}
                <div className="hidden md:block w-px h-10 bg-white/60 mx-6"></div>

                {/* Right Action: Always visible */}
                <div className="font-noto-sans text-base font-medium flex items-center gap-2 whitespace-nowrap">
                    {t.hero.button} <i className="fa-solid fa-paper-plane"></i>
                </div>
            </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;