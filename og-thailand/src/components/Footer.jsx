import { useLanguage } from '../i18n/LanguageContext';

const Footer = ()=> {
    const { language, translations } = useLanguage();
    const t = translations[language];
    
    return (
        <footer className="bg-[#3e4856] text-white py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs md:text-sm font-noto-sans opacity-90">
          
          {/* Left: Address */}
          <div className="space-y-1">
            <h5 className="font-bold text-white uppercase tracking-wider mb-2">{t.footer.company}</h5>
            <p>{t.footer.address1}</p>
            <p>{t.footer.address2}</p>
          </div>

          {/* Center: Contact Nums */}
          <div className="space-y-1">
            <p>{t.footer.tel}</p>
            <p>{t.footer.fax}</p>
          </div>

          {/* Right: Privacy Link */}
          <div>
            <a href="#privacy" className="hover:text-[#47B6FA] transition-colors border-b border-gray-400 hover:border-[#47B6FA] pb-0.5">
              {t.footer.privacyPolicy}
            </a>
          </div>

        </div>
      </footer>
    )
}
export default Footer;