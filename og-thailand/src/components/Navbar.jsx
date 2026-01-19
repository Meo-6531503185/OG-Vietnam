import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Language Dropdown States
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  // Hook to get current language and translation data
  const { language, changeLanguage, translations } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);

  const navItems = [
    { label: t.navbar.home, href: '#home', key: 'home' },
    { label: t.navbar.about, href: '#about', key: 'about' },
    { label: t.navbar.business, href: '#business', key: 'business' },
    { label: t.navbar.services, href: '#services', key: 'services' },
    { label: t.navbar.partner, href: '#partner', key: 'partner' },
  ];

  // --- 1. SCROLL SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      navItems.forEach((item) => {
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]); // Added navItems dependency so it updates on lang change

  // --- 2. LANGUAGE HANDLER ---
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsLangOpen(false);
    console.log(`Switched to ${lang}`); 
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="shrink-0">
            <img src="logo.webp" alt="OG-Trading" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden xl:flex items-center gap-6 list-none">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-all duration-75 whitespace-nowrap ${
                      isActive 
                        ? 'font-bold text-[#006CB8]' 
                        : 'text-gray-800 hover:text-[#006CB8]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}

            {/* Language Dropdown */}
            <li className="relative">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-[#0367AC] transition-colors"
              >
                {/* Display Current Language */}
                <i className="fa-solid fa-globe"></i> {language === 'EN' ? t.navbar.english : t.navbar.thai} <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-100 py-1 overflow-hidden">
                  <button 
                    onClick={() => handleLanguageChange('EN')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    🇺🇸 {t.navbar.english}
                  </button>
                  {/* Changed 'VN' to 'TH' for Thai */}
                  <button 
                    onClick={() => handleLanguageChange('TH')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    🇹🇭 {t.navbar.thai}
                  </button>
                </div>
              )}
            </li>

            {/* Contact Button */}
            <li>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-[#47B6FA] to-[#0367AC] text-[14px] text-white px-3 py-2 rounded-full border-none cursor-pointer w-full hover:opacity-90 transition-opacity no-underline"
              >
                {t.navbar.contact} <i className="fa-regular fa-envelope"></i>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="xl:hidden p-2 text-gray-800 hover:text-[#0367AC] transition-colors"
          >
            {isMenuOpen ? <i className="fa-solid fa-xmark text-3xl"></i> : <i className="fa-solid fa-bars text-3xl"></i>}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-150 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-4 pb-4">
            {navItems.map((item, index) => {
               const isActive = activeSection === item.href.substring(1);
               return (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-sm font-medium transition-all duration-75 py-2 ${
                        isActive 
                        ? 'font-bold pl-2 bg-linear-to-r from-[#47B6FA] to-[#0367AC] bg-clip-text text-transparent border-l-4 border-[#0367AC]' 
                        : 'text-gray-800 hover:text-[#0367AC]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
               )
            })}
            
            {/* Mobile Language Switcher */}
            <li className="flex gap-4 py-2 border-t border-gray-100 mt-2 pt-4">
                <button 
                    onClick={() => handleLanguageChange('EN')} 
                    className={`text-sm font-medium ${language === 'EN' ? 'font-bold text-[#0367AC]' : 'text-gray-500'}`}
                >
                    {t.navbar.english}
                </button>
                <div className="border-r border-gray-300 h-5"></div>
                {/* Changed VN to TH here as well */}
                <button 
                    onClick={() => handleLanguageChange('TH')} 
                    className={`text-sm font-medium ${language === 'TH' ? 'font-bold text-[#0367AC]' : 'text-gray-500'}`}
                >
                    {t.navbar.thai}
                </button>
            </li>

            {/* Mobile Contact Button */}
            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-linear-to-r from-[#47B6FA] to-[#0367AC] text-white px-3 py-2.5 rounded-full border-none cursor-pointer w-full hover:opacity-90 transition-opacity no-underline"
              >
                {t.navbar.contact} <i className="fa-regular fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;