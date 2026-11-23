import { motion } from 'framer-motion'
import { Zap, AlignCenter, Layers, Gem, Sparkles, Activity, Shield, Scissors, Heart, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const ICONS = [Zap, AlignCenter, Layers, Gem, Sparkles, Activity, Shield, Scissors, Heart, Star]

export default function Services() {
  const { t } = useLanguage()
  const services = Object.values(t.services.items)

  return (
    <section id="services" className="relative py-28 bg-gradient-to-b from-[#BFECE2] via-[#C8F0E8] to-[#BFECE2] border-y border-teal-500/20">
      {/* Decorative subtle medical grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{backgroundImage:'linear-gradient(rgba(43,196,180,1) 1px,transparent 1px),linear-gradient(90deg,rgba(43,196,180,1) 1px,transparent 1px)',backgroundSize:'50px 50px'}} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">{t.services.badge}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">{t.services.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass bg-white/95 rounded-2xl p-6 group cursor-default transition-all duration-300 hover:border-teal-500/40 hover:shadow-[0_12px_35px_rgba(43,196,180,0.16)] border border-teal-500/15 relative overflow-hidden shadow-sm"
              >
                {/* Hover radiant glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                     style={{background:'radial-gradient(circle at 50% 0%,rgba(43,196,180,.12) 0%,transparent 70%)'}} />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(43,196,180,.4)] transition-shadow duration-300 shadow-sm">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-slate-800 text-sm mb-2 leading-snug group-hover:text-teal-700 transition-colors duration-200">{service.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <a href="https://wa.me/355692332227" target="_blank" rel="noreferrer" className="btn-primary">{t.nav.bookNow}</a>
        </motion.div>
      </div>
    </section>
  )
}
