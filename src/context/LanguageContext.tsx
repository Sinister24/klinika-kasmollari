import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  flagLabels: Record<Language, string>;
}

const flagLabels: Record<Language, string> = {
  sq: '🇦🇱 Shqip',
  en: '🇬🇧 English',
  it: '🇮🇹 Italiano',
  de: '🇩🇪 Deutsch',
  es: '🇪🇸 Español',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('kk_lang') as Language;
    return saved && translations[saved] ? saved : 'sq';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('kk_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.sq[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, flagLabels }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
