import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const doctors = [
  { key: 'ylli',   img: '/images/dr-ylli.jpg'   },
  { key: 'lorena', img: '/images/dr-lorena.jpg' },
  { key: 'enea',   img: '/images/dr-enea.jpg'   },
]

export default function Team() {
  const { t } = useLanguage()

  return (
    <section id="team" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
           style={{background:'radial-gradient(circle,rgba(43,196,180,0.08) 0%,transparent 70%)',transform:'translate(-30%,30%)'}} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">{t.team.badge}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">{t.team.title}</h2>
          <p className="text-slate-600 max-w-xl mx-auto">{t.team.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, i) => {
            const info = t.team.doctors[doc.key as keyof typeof t.team.doctors]
            return (
              <motion.div
                key={doc.key}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="glass bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:border-teal-500/40 hover:shadow-[0_15px_40px_rgba(43,196,180,.15)] border border-teal-500/20 shadow-sm">
                  
                  {/* Portrait photo */}
                  <div className="relative h-72 overflow-hidden bg-slate-50">
                    <img src={doc.img} alt={info.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 35%, transparent 100%)'}} />
                    <div className="absolute top-4 right-4 glass-strong bg-white/90 px-3 py-1 rounded-full shadow-sm border border-teal-500/20">
                      <span className="text-teal-700 text-xs font-semibold">{info.role.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6 -mt-3 relative z-10">
                    <h3 className="font-display font-bold text-slate-900 text-xl mb-1">{info.name}</h3>
                    <p className="text-teal-600 text-sm font-semibold mb-3">{info.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{info.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Action Surgery Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 relative rounded-3xl overflow-hidden h-72 group shadow-xl"
        >
          <img src="/images/surgery-team.jpg" alt="Team at work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-end p-8"
               style={{background:'linear-gradient(to top, rgba(15,23,42,.92) 0%, rgba(15,23,42,.35) 60%, transparent 100%)'}}>
            <div>
              <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-1.5">The Kasmollari Medical Team</p>
              <p className="text-white font-display font-bold text-2xl md:text-3xl">Collaborative Precision for Lifelong Smiles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
