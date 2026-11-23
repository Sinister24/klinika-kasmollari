import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { LANGUAGES, type Language } from '../i18n'

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen]     = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navLinks = [
    { href: '#about',    label: t.nav.about    },
    { href: '#services', label: t.nav.services },
    { href: '#team',     label: t.nav.team     },
    { href: '#implants', label: t.nav.implants },
    { href: '#tourism',  label: t.nav.tourism  },
    { href: '#gallery',  label: t.nav.gallery  },
    { href: '#contact',  label: t.nav.contact  },
  ]

  const currentLang = LANGUAGES.find(l => l.code === language)!

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-strong py-3 shadow-[0_4px_25px_rgba(43,196,180,0.12)] border-b border-teal-500/15'
            : 'py-5 bg-white/70 backdrop-blur-md border-b border-teal-500/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-teal-500/30 group-hover:ring-teal-500/70 transition-all duration-300 shadow-sm">
              <img src="/images/logo.jpg" alt="K" className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-slate-900 text-sm tracking-wide block">KLINIKA</span>
              <span className="font-display font-semibold text-teal-600 text-xs tracking-widest block">KASMOLLARI</span>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <button onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors duration-200 relative group py-1">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div ref={langRef} className="relative hidden sm:block">
              <button onClick={() => setLangOpen(v => !v)}
                className="glass flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-slate-700 hover:text-slate-900 hover:border-teal-500/40 transition-all duration-200 shadow-sm">
                <span>{currentLang.flag}</span>
                <span className="text-xs font-semibold tracking-wider text-slate-800">{currentLang.label}</span>
                <svg className={`w-3 h-3 text-slate-500 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 glass-strong rounded-2xl overflow-hidden min-w-[170px] shadow-xl border border-teal-500/20 z-50 p-1"
                  >
                    {LANGUAGES.map(lang => (
                      <button key={lang.code}
                        onClick={() => { setLanguage(lang.code as Language); setLangOpen(false) }}
                        className={`w-full flex items-center gap-3 px-3.5 py-2 text-sm rounded-xl transition-colors ${
                          language === lang.code
                            ? 'bg-teal-500/15 text-teal-700 font-semibold'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                        }`}>
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="https://wa.me/355692332227" target="_blank" rel="noreferrer"
               className="hidden sm:flex items-center gap-2 btn-primary text-sm py-2 px-5">
              <Phone size={14} />
              {t.nav.bookNow}
            </a>

            <button onClick={() => setMobileOpen(v => !v)} className="lg:hidden text-slate-800 p-1">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col pt-24 px-6 sm:px-8 gap-4 border-l border-teal-500/20 shadow-2xl overflow-y-auto max-h-screen pb-12"
          >
            {navLinks.map((link, i) => (
              <motion.button key={link.href}
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="text-left text-xl sm:text-2xl font-display font-semibold text-slate-800 hover:text-teal-600 transition-colors py-1">
                {link.label}
              </motion.button>
            ))}
            <div className="flex gap-2 mt-2 flex-wrap">
              {LANGUAGES.map(lang => (
                <button key={lang.code}
                  onClick={() => { setLanguage(lang.code as Language); setMobileOpen(false) }}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                    language === lang.code
                      ? 'bg-teal-500/15 text-teal-700 border-teal-500/40'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
            <a href="https://wa.me/355692332227" target="_blank" rel="noreferrer"
               className="btn-primary text-center mt-3 py-3" onClick={() => setMobileOpen(false)}>
              {t.nav.bookNow}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
