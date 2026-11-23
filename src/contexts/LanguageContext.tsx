import React, { createContext, useContext, useState } from 'react'
import { en }   from '../i18n/en'
import { sq }   from '../i18n/sq'
import { it }   from '../i18n/it'
import { de }   from '../i18n/de'
import { es }   from '../i18n/es'
import type { Language, Translations } from '../i18n'

const translations: Record<Language, Translations> = { sq, en, it, de, es }

interface LanguageContextType {
  language: Language
  setLanguage: (l: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'sq',
  setLanguage: () => {},
  t: sq,
})

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sq')
  const t = translations[language]
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
