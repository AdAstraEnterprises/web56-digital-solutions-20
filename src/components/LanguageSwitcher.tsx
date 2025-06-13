
import React from 'react';
import { Button } from '@/components/ui/button';

interface LanguageSwitcherProps {
  currentLang: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex gap-1">
      <Button
        variant={currentLang === 'de' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('de')}
        className="text-sm"
      >
        DE
      </Button>
      <Button
        variant={currentLang === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className="text-sm"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
