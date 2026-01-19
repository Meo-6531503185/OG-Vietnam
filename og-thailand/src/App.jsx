import { useState } from 'react'
import './App.css'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutUs from './components/AboutUs.jsx'
import BusinessSection from './components/Business.jsx'
import Service from './components/Service.jsx'
import Partners from './components/Partners.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CompanyInfo from './components/CompanyInfo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LanguageProvider>
      <Navbar />
      <HeroSection />
      <AboutUs/>
      <BusinessSection/>
      <Service/>
      <Partners/>
      <CompanyInfo/>
      <Contact/>
      <Footer/>
    </LanguageProvider>
  )
}

export default App
