
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AstroSection from '@/components/AstroSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentLang, setCurrentLang] = useState<'de' | 'en'>('de');

  const handleLanguageChange = (lang: 'de' | 'en') => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <HeroSection currentLang={currentLang} />
      <AboutSection currentLang={currentLang} />
      <ServicesSection currentLang={currentLang} />
      <AstroSection currentLang={currentLang} />
      <PricingSection currentLang={currentLang} />
      <ContactSection currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;
