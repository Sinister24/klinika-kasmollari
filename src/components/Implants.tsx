import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass bg-white rounded-2xl overflow-hidden border border-teal-500/20 shadow-sm transition-all duration-300 hover:border-teal-500/40 hover:shadow-md">
      <button onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-display font-semibold text-slate-900 text-sm md:text-base">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={18} className="text-teal-600 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Implants() {
  const { t } = useLanguage()

  return (
    <section id="implants" className="relative py-28 bg-gradient-to-b from-[#BFECE2] via-[#C8F0E8] to-[#BFECE2] overflow-hidden border-y border-teal-500/20">
      {/* Decorative ambient background orb */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{background:'radial-gradient(circle,rgba(43,196,180,0.12) 0%,transparent 70%)',transform:'translate(30%,-50%)'}} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">{t.implants.badge}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">{t.implants.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">{t.implants.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Left: Why MegaGen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-6">{t.implants.why}</h3>
            <div className="space-y-3">
              {t.implants.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3.5 glass bg-white rounded-xl p-4 border border-teal-500/20 shadow-sm hover:border-teal-500/40 transition-colors">
                  <CheckCircle size={19} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>

            {/* MegaGen System Card */}
            <div className="mt-8 glass-strong bg-white rounded-3xl p-6 border border-teal-500/25 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl gradient-teal flex items-center justify-center font-display font-black text-white text-lg shadow-md">M</div>
                <div>
                  <div className="font-display font-bold text-slate-900 text-lg">MegaGen Implant</div>
                  <div className="text-teal-600 text-xs font-semibold tracking-wider">AnyRidge® Technology System</div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                MegaGen's AnyRidge® implant system delivers exceptional primary stability even in challenging bone conditions, 
                enabling immediate loading protocols and faster biological healing timelines for permanent restoration.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {['FDA Cleared','CE Certified','ISO 13485','80+ Global Countries'].map(badge => (
                  <span key={badge} className="bg-teal-50/80 border border-teal-500/25 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">{badge}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Healing timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-8">{t.implants.timeline.title}</h3>
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-teal-500/25" />
              
              <div className="space-y-4 sm:space-y-5">
                {t.implants.timeline.steps.map((step, i) => (
                  <div key={i} className="relative pl-11 sm:pl-14 group">
                    {/* Circle badge */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full gradient-teal flex items-center justify-center text-white text-[11px] sm:text-xs font-bold shadow-md group-hover:scale-105 transition-transform">
                      {i + 1}
                    </div>
                    <div className="glass bg-white rounded-2xl p-4 sm:p-5 border border-teal-500/20 hover:border-teal-500/40 hover:shadow-md transition-all duration-300">
                      <span className="text-teal-700 text-[11px] sm:text-xs font-semibold uppercase tracking-wider block mb-1">{step.phase}</span>
                      <h4 className="font-display font-semibold text-slate-900 text-sm sm:text-base mb-1">{step.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display font-bold text-3xl text-slate-900 mb-8 text-center">{t.implants.faq.title}</h3>
          <div className="max-w-2xl mx-auto space-y-3.5">
            {t.implants.faq.items.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
