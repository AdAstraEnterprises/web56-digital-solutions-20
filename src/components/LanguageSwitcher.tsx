
import React from 'react';
import { Button } from '@/components/ui/button';

interface LanguageSwitcherProps {
  currentLang: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
      <Button
        variant={currentLang === 'de' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('de')}
        className={`text-sm transition-all duration-300 ${
          currentLang === 'de' 
            ? 'bg-blue-800 text-white border-blue-800 shadow-md' 
            : 'bg-transparent text-gray-600 border-transparent hover:bg-blue-50 hover:text-blue-800'
        }`}
      >
        DE
      </Button>
      <Button
        variant={currentLang === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className={`text-sm transition-all duration-300 ${
          currentLang === 'en' 
            ? 'bg-blue-800 text-white border-blue-800 shadow-md' 
            : 'bg-transparent text-gray-600 border-transparent hover:bg-blue-50 hover:text-blue-800'
        }`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
