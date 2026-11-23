import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedCounter } from './ui/AnimatedCounter'
import { useLanguage } from '../contexts/LanguageContext'

const fadeUp = { hidden:{opacity:0,y:30}, show:{opacity:1,y:0,transition:{duration:.8,ease:[.25,.1,.25,1]}} }
const stagger = { show:{ transition:{ staggerChildren:.15 } } }

export default function About() {
  const { t } = useLanguage()
  const ref  = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const stats = [
    { value:5000, suffix:'+', label:t.about.stats.patients    },
    { value:15,   suffix:'+', label:t.about.stats.years       },
    { value:8000, suffix:'+', label:t.about.stats.treatments  },
    { value:3,    suffix:'',  label:t.about.stats.specialists  },
  ]
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-white">
      {/* Subtle mint/teal ambient background orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{background:'radial-gradient(circle,rgba(43,196,180,0.08) 0%,transparent 70%)',transform:'translate(30%,-20%)'}} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Text */}
          <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView?'show':'hidden'}>
            <motion.span variants={fadeUp} className="section-label">{t.about.badge}</motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
              {t.about.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
              {t.about.description}
            </motion.p>
            
            {/* Mission Quote */}
            <motion.div variants={fadeUp} className="glass bg-teal-50/50 rounded-2xl p-6 border-l-4 border-teal-500 mb-10 shadow-sm">
              <p className="text-slate-700 text-sm leading-relaxed italic">{t.about.mission}</p>
            </motion.div>
            
            {/* Stats Cards */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass bg-white rounded-2xl p-5 hover:border-teal-500/40 hover:shadow-md transition-all duration-300 group">
                  <div className="font-display font-black text-3xl text-teal-600 mb-1">
                    {inView && <AnimatedCounter to={s.value} suffix={s.suffix} duration={2.5} />}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Collage */}
          <motion.div initial={{opacity:0,x:50}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:1,ease:[.25,.1,.25,1],delay:.2}} className="relative mt-4 sm:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="/images/treatment-room-1.jpg" alt="Interior" className="w-full h-[340px] sm:h-[480px] object-cover" />
              <div className="absolute inset-0" style={{background:'linear-gradient(to top,rgba(15,23,42,0.45) 0%,transparent 40%)'}} />
            </div>

            {/* MegaGen badge overlay */}
            <div className="absolute -bottom-3 -left-2 sm:-bottom-6 sm:-left-6 glass-strong bg-white/95 rounded-2xl p-3.5 sm:p-5 shadow-2xl border border-teal-500/30">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl gradient-teal flex items-center justify-center shadow-md shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-900 font-display font-bold text-sm sm:text-base leading-snug">MegaGen</div>
                  <div className="text-teal-600 text-[11px] sm:text-xs font-semibold">Certified Clinical Partner</div>
                </div>
              </div>
            </div>

            {/* Inset floating photo */}
            <div className="absolute -top-3 -right-2 sm:-top-6 sm:-right-6 w-28 h-28 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-3 sm:border-4 border-white shadow-xl">
              <img src="/images/clinic-glass.jpg" alt="Clinic Interior" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
