import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, Check, Languages, MapPin, Compass, Utensils, Bike, Waves, Sun } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Tourism() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState<'places' | 'activities'>('places')

  const activityIcons = [Utensils, Waves, Bike, Sun]

  const photos = [
    {
      src: '/images/tourism/pogradec-aerial.jpg',
      alt: 'Pogradec Aerial Lake View',
      label: language === 'sq' ? 'Pogradeci & Liqeni i Ohrit' :
             language === 'it' ? 'Pogradec e il Lago di Ocrida' :
             language === 'de' ? 'Pogradec & Ohridsee' :
             language === 'es' ? 'Pogradec y el Lago Ohrid' :
             'Pogradec & Lake Ohrid Panorama',
      tag: language === 'sq' ? 'Pamje Panoramike' : 'Panoramic View',
      span: 'col-span-2 h-56 sm:h-64',
      objectPos: 'object-center',
    },
    {
      src: '/images/tourism/drilon-swans.jpg',
      alt: 'Drilon Springs and Swans',
      label: language === 'sq' ? 'Burimet e Drilonit & Mjelmat' :
             language === 'it' ? 'Sorgenti di Drilon e Cigni' :
             language === 'de' ? 'Drilon Quellen & Schwäne' :
             language === 'es' ? 'Manantiales de Drilon' :
             'Drilon Springs & Swans',
      tag: language === 'sq' ? 'Parku Natyror' : 'Natural Park',
      span: 'col-span-1 h-52 sm:h-60',
      objectPos: 'object-center',
    },
    {
      src: '/images/tourism/pogradec-beach.jpg',
      alt: 'Pogradec Shore and Boats',
      label: language === 'sq' ? 'Bregu & Varkat Tradicionale' :
             language === 'it' ? 'Spiaggia e Barche Tradizionali' :
             language === 'de' ? 'Strand & Traditionelle Boote' :
             language === 'es' ? 'Playa y Barcos Tradicionales' :
             'Lakeside Shore & Boats',
      tag: language === 'sq' ? 'Plazhi i Qytetit' : 'Lakeside Beach',
      span: 'col-span-1 h-52 sm:h-60',
      objectPos: 'object-center',
    },
    {
      src: '/images/tourism/pogradec-winter.jpg',
      alt: 'Pogradec Snowy Mountain Landscape',
      label: language === 'sq' ? 'Peizazh Dimëror me Male të Zbardhura' :
             language === 'it' ? 'Paesaggio Invernale sul Lago' :
             language === 'de' ? 'Winterliche Berglandschaft am See' :
             language === 'es' ? 'Paisaje Invernal del Lago' :
             'Snowy Mountain Lake View',
      tag: language === 'sq' ? 'Pamje Magjepsëse' : 'Alpine Panorama',
      span: 'col-span-2 h-52 sm:h-60',
      objectPos: 'object-center',
    },
  ]

  return (
    <section
      id="tourism"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(43,196,180,0.10) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(43,196,180,0.08) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 section-label">
            <Plane size={14} />
            {t.tourism.badge}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">
            {t.tourism.title}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            {t.tourism.subtitle}
          </p>
        </motion.div>

        {/* Savings Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7 }}
          className="mb-16 rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #2BC4B4 0%, #1aa89a 50%, #0d8f83 100%)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 md:p-12 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3.5 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4 border border-white/30">
                {t.tourism.savingsBadge}
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white mb-2.5 sm:mb-3 leading-snug">
                {t.tourism.savingsTitle}
              </h3>
              <p className="text-teal-50 text-xs sm:text-sm leading-relaxed">
                {t.tourism.savingsDesc}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 flex items-center gap-3 sm:gap-4">
                <span className="text-3xl sm:text-4xl font-black text-white">-70%</span>
                <span className="text-teal-100 text-xs sm:text-sm leading-tight">compared to Germany, Italy & Switzerland</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/15 flex items-center gap-3">
                <Languages size={18} className="text-white shrink-0" />
                <span className="text-teal-100 text-[11px] sm:text-xs">Parliamo Italiano • We speak English • Wir sprechen Deutsch • Hablamos Español</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photo Grid + Fun Facts */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-6 flex items-center gap-2">
              <MapPin size={22} className="text-teal-500" />
              {t.tourism.lakeTitle}
            </h3>
            <div className="grid grid-cols-2 gap-3.5">
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-md border border-teal-500/15 ${photo.span}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full h-full object-cover ${photo.objectPos} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(15,23,42,.88) 0%, rgba(15,23,42,.3) 50%, transparent 100%)' }}
                  >
                    <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider mb-0.5">
                      {photo.tag}
                    </span>
                    <span className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-sm">
                      {photo.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Places to Visit & What to Do in Pogradec */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {/* Interactive Tab Switcher */}
            <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-teal-500/20 max-w-md mb-6">
              <button
                onClick={() => setActiveTab('places')}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 text-center ${
                  activeTab === 'places'
                    ? 'bg-white text-teal-700 shadow-md border border-teal-500/30'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MapPin size={14} className={activeTab === 'places' ? 'text-teal-600' : 'text-slate-400'} />
                <span className="truncate">{t.tourism.placesTitle}</span>
              </button>
              <button
                onClick={() => setActiveTab('activities')}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 text-center ${
                  activeTab === 'activities'
                    ? 'bg-white text-teal-700 shadow-md border border-teal-500/30'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Compass size={14} className={activeTab === 'activities' ? 'text-teal-600' : 'text-slate-400'} />
                <span className="truncate">{t.tourism.activitiesTitle}</span>
              </button>
            </div>

            {/* Tab 1: Places to Visit */}
            <AnimatePresence mode="wait">
              {activeTab === 'places' ? (
                <motion.div
                  key="places"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3.5"
                >
                  {t.tourism.places.map((place, i) => (
                    <div
                      key={i}
                      className="glass bg-white rounded-2xl p-4 sm:p-5 border border-teal-500/20 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-xl gradient-teal flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
                          <MapPin size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                            <h4 className="font-display font-semibold text-slate-900 text-sm md:text-base">
                              {place.name}
                            </h4>
                            <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              {place.tag}
                            </span>
                          </div>
                          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                            {place.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                /* Tab 2: What to Do */
                <motion.div
                  key="activities"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3.5"
                >
                  {t.tourism.activities.map((act, i) => {
                    const IconComponent = activityIcons[i % activityIcons.length]
                    return (
                      <div
                        key={i}
                        className="glass bg-white rounded-2xl p-4 sm:p-5 border border-teal-500/20 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="w-9 h-9 rounded-xl gradient-teal flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
                            <IconComponent size={16} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-display font-semibold text-slate-900 text-sm md:text-base mb-1">
                              {act.title}
                            </h4>
                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                              {act.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Concierge Support */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="glass-strong bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-teal-500/20 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="section-label mb-3 inline-block">Full Concierge Service</span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                {t.tourism.conciergeTitle}
              </h3>
              <div className="space-y-3 mt-4">
                {t.tourism.conciergeItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-teal flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="text-white" />
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="text-center md:text-right mb-2">
                <p className="text-slate-500 text-sm mb-1">Ready to combine treatment with travel?</p>
                <p className="text-slate-900 font-display font-bold text-lg">Contact us today</p>
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/355692332227?text=Përshëndetje!%20Jam%20i%20interesuar%20për%20turizmin%20dentar%20në%20Pogradec."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-sm px-6 py-3"
              >
                <Plane size={16} />
                {t.tourism.cta}
              </motion.a>
              <a
                href="#contact"
                className="text-teal-600 hover:text-teal-700 text-sm font-semibold transition-colors underline underline-offset-4"
              >
                Or fill our contact form →
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
