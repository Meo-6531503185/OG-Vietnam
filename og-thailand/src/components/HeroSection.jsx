import { useLanguage } from '../i18n/LanguageContext';

const HeroSection = () => {
    const { language, translations } = useLanguage();
    const t = translations[language];

    return (
      <section id="home" className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden font-noto-sans">
        
        {/* --- IMAGE STRATEGY --- */}
        
        {/* 1. Mobile Image (Visible ONLY on mobile) */}
        <img 
          src="hero-section-img-mobile.webp"
          alt="Background Mobile" 
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover object-center z-1 opacity-85"
        />

        {/* 2. Desktop Image (Visible ONLY on desktop) */}
        <img 
          src="hero-section-img.webp" 
          alt="Background Desktop" 
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-center z-1"
        />
  
        {/* Layer 2: Overlay Image (Desktop Only) */}
        <img 
          src="hero-over layer.webp" 
          alt="Overlay" 
          className="hidden lg:block absolute top-0 left-0 w-full h-full object-cover z-3"
        />
  
        {/* Layer 3: Video (Desktop Only) */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          onTransitionRun={1}
          poster="hero-poster.jpg"
          className="hidden md:block absolute top-0 right-0 w-full h-full object-cover z-2 opacity-40"
        >
          <source src="hero-section-vdo.mp4" type="video/mp4" />
        </video>
  
        {/* --- BLUR & GRADIENT OVERLAY --- */}
        {/* Mobile: Full screen (inset-0), blurs the background, gradient to white at bottom.
            Desktop: Only bottom 20px height, no blur.
        */}
        <div className="absolute inset-0 md:inset-auto md:bottom-0 md:left-0 md:w-full md:h-50 
                        bg-linear-to-b from-transparent via-white/30 to-white/95 
                        backdrop-blur-[3px] md:backdrop-blur-none
                        z-4 pointer-events-none">
        </div>

        {/* Layer 4: Content */}
        <div className="absolute top-0 right-0 2xl:right-50 w-full md:w-1/2 h-full flex flex-col justify-center md:items-end items-center text-center md:text-right z-5 px-6 md:px-8 gap-8">
          <div className="w-full max-w-xl text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#102D5E] leading-tight mb-4 drop-shadow-sm">
              {t.hero.title}
            </h1>
            <p className="text-base md:text-lg sm:text-sm font-bold text-[#102D5E]/80">
              {t.hero.subtitle}
            </p>
          </div>
  
          {/* Contact Banner */}
            <a 
                href="#contact" 
                className="flex items-center justify-center md:justify-between w-full max-w-112.5 px-8 md:px-12 py-3 bg-linear-to-r from-[#47B6FA] to-[#0367AC] rounded-[50px] text-white no-underline shadow-[0_10px_20px_rgba(0,114,255,0.3)] transition-transform duration-300 hover:-translate-y-1"
                >
                <div className="hidden md:block font-noto-sans text-[11px] leading-relaxed text-left font-medium">
                    {t.hero.contactText}
                </div>
                <div className="hidden md:block w-px h-10 bg-white/60 mx-6"></div>
                <div className="font-noto-sans text-base font-medium flex items-center gap-2 whitespace-nowrap">
                    {t.hero.button} <i className="fa-solid fa-paper-plane"></i>
                </div>
            </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;