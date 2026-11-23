import { MapPin, Phone, Clock, Instagram } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const navLinks = [
    { href: '#about',    label: t.nav.about    },
    { href: '#services', label: t.nav.services },
    { href: '#team',     label: t.nav.team     },
    { href: '#implants', label: t.nav.implants },
    { href: '#tourism',  label: t.nav.tourism  },
    { href: '#gallery',  label: t.nav.gallery  },
    { href: '#contact',  label: t.nav.contact  },
  ]
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative bg-white overflow-hidden border-t-2 border-teal-500/20">
      {/* Subtle top teal glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-0.5"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(43,196,180,0.5), transparent)' }} />
      
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden ring-1 ring-teal-500/30 shadow-md">
                <img src="/images/logo.jpg" alt="K" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-base tracking-wide">KLINIKA</div>
                <div className="font-display font-bold text-teal-600 text-sm tracking-widest">KASMOLLARI</div>
              </div>
            </div>
            <p className="text-teal-800 font-medium text-sm leading-relaxed max-w-sm mb-3">{t.footer.tagline}</p>
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Modern dental clinic in Pogradec, Albania. Specializing in advanced implants, orthodontics, and high-precision Zirconia restorations with compassionate family care.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/klinika.kasmollari?gwpx=bTV2a244b29ydjBo" target="_blank" rel="noreferrer"
                 className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-teal-500/30 hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 shadow-sm group">
                <Instagram size={17} className="text-slate-600 group-hover:text-teal-600 transition-colors" />
              </a>
              <a href="https://wa.me/355692332227" target="_blank" rel="noreferrer"
                 className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 shadow-sm group">
                <svg className="w-4 h-4 text-slate-600 group-hover:text-[#25D366] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-slate-900 text-sm mb-6 tracking-wider uppercase">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)}
                    className="text-slate-600 text-sm hover:text-teal-600 transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-teal-500 group-hover:w-3 transition-all duration-300 rounded-full" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-semibold text-slate-900 text-sm mb-6 tracking-wider uppercase">{t.footer.contact}</h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm leading-relaxed">{t.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-teal-600 flex-shrink-0" />
                <a href="tel:+355692332227" className="text-slate-600 text-sm hover:text-teal-600 font-medium transition-colors">{t.contact.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={15} className="text-teal-600 flex-shrink-0" />
                <a href="https://www.instagram.com/klinika.kasmollari?gwpx=bTV2a244b29ydjBo" target="_blank" rel="noreferrer"
                   className="text-slate-600 text-sm hover:text-teal-600 font-medium transition-colors">@klinika.kasmollari</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={15} className="text-teal-600 flex-shrink-0 mt-0.5" />
                <div className="text-slate-600 text-sm leading-relaxed">
                  <div>{t.contact.weekdays}: {t.contact.weekdayHours}</div>
                  <div>{t.contact.saturday}: {t.contact.saturdayHours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-500/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">{t.footer.rights}</p>
          <p className="text-slate-500 text-xs">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
