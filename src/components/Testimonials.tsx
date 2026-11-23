import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const reviews = [
  { name: 'Blerina K.',   text: 'Shërbim i jashtëzakonshëm! Doktorët janë shumë profesionalistë dhe klinika është e mrekullueshme. Implanti im është perfekt!', rating: 5, img: '/images/patient-smiling.jpg' },
  { name: 'Marco R.',     text: 'Clinica fantastica! Ho fatto le faccette e il risultato è incredibile. Dr. Lorena è stata bravissima e molto professionale.', rating: 5, img: null },
  { name: 'Arjan M.',     text: 'Klinika me moderne dhe profesionale ne rajon. Isha i kenaqur me sherbimin dhe rezultatin. Ju rekomandoj te gjitheve!', rating: 5, img: '/images/happy-client-1.jpg' },
  { name: 'Stefan G.',    text: 'Ausgezeichnete Zahnklinik! Dr. Enea hat mein Implantat perfekt eingesetzt. Sehr professionell und einfühlsam.', rating: 5, img: null },
  { name: 'Elena P.',     text: 'Wonderful experience! The staff is incredibly kind and the results are amazing. My smile has never looked better!', rating: 5, img: '/images/patient-smiling.jpg' },
  { name: 'Fatjon B.',    text: 'Të gjithë stafi është shumë profesional dhe i kujdesshëm. Aparati im orthodontik u vendos me saktësi të lartë.', rating: 5, img: '/images/happy-client-2.jpg' },
  { name: 'Anastasia V.', text: 'Increíble clínica dental. Me hicieron las carillas y quedé encantada con el resultado. Muy recomendable.', rating: 5, img: null },
  { name: 'Genti S.',     text: 'Klinika Kasmollari është zgjedhja e duhur! Punimet me zirkoni janë të shkëlqyeshme dhe rezultati është mahnitës.', rating: 5, img: null },
]

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="glass bg-white rounded-2xl p-5 sm:p-6 w-72 sm:w-80 flex-shrink-0 hover:border-teal-500/40 transition-all duration-300 hover:shadow-lg mx-2.5 sm:mx-3.5 border border-teal-500/20 shadow-sm">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={13} className="text-teal-500 fill-teal-500" />
        ))}
      </div>
      <p className="text-slate-700 text-sm leading-relaxed mb-5 italic">"{review.text}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
        <div className="w-9 h-9 rounded-full overflow-hidden bg-teal-500/15 flex items-center justify-center flex-shrink-0 border border-teal-500/25">
          {review.img
            ? <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
            : <span className="text-teal-700 font-bold text-sm">{review.name[0]}</span>
          }
        </div>
        <div>
          <div className="text-slate-900 font-semibold text-sm">{review.name}</div>
          <div className="text-teal-600 text-xs font-medium">Verified Patient</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLanguage()
  const doubled = [...reviews, ...reviews]

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">{t.testimonials.badge}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">{t.testimonials.title}</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">{t.testimonials.subtitle}</p>
        </motion.div>
      </div>

      {/* Infinite marquee row 1 */}
      <div className="relative mb-6 overflow-hidden">
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {doubled.map((r, i) => <ReviewCard key={`a-${i}`} review={r} />)}
        </div>
        <div className="absolute inset-y-0 left-0 w-12 sm:w-36 pointer-events-none" style={{ background: 'linear-gradient(to right, #EFF9F6, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-36 pointer-events-none" style={{ background: 'linear-gradient(to left, #EFF9F6, transparent)' }} />
      </div>

      {/* Row 2 reversed */}
      <div className="relative overflow-hidden">
        <div className="flex" style={{ animation: 'marquee 40s linear infinite reverse', width: 'max-content' }}>
          {[...doubled].reverse().map((r, i) => <ReviewCard key={`b-${i}`} review={r} />)}
        </div>
        <div className="absolute inset-y-0 left-0 w-12 sm:w-36 pointer-events-none" style={{ background: 'linear-gradient(to right, #EFF9F6, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-36 pointer-events-none" style={{ background: 'linear-gradient(to left, #EFF9F6, transparent)' }} />
      </div>
    </section>
  )
}
