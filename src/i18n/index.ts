export { en } from './en'
export { sq } from './sq'
export { it } from './it'
export { de } from './de'
export { es } from './es'
export type { Translations } from './en'

export type Language = 'sq' | 'en' | 'it' | 'de' | 'es'

export const LANGUAGES: { code: Language; label: string; flag: string; name: string }[] = [
  { code: 'sq', label: 'SQ', flag: '🇦🇱', name: 'Shqip'    },
  { code: 'en', label: 'EN', flag: '🇬🇧', name: 'English'  },
  { code: 'it', label: 'IT', flag: '🇮🇹', name: 'Italiano' },
  { code: 'de', label: 'DE', flag: '🇩🇪', name: 'Deutsch'  },
  { code: 'es', label: 'ES', flag: '🇪🇸', name: 'Español'  },
]
