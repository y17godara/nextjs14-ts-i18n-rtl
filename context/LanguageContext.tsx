"use client";
import React, { createContext, useContext, ReactNode } from 'react';
import { Locale, i18n } from '@/i18n.config';

type LanguageContextProps = {
  lang: Locale;
  changeLang: (lang: Locale) => void;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = React.useState<Locale>('en'); // Set your default language here

  const changeLang = (newLang: Locale) => {
    if (i18n.locales.includes(newLang)) {
      setLang(newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};