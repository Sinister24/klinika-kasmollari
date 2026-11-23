import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const cases = [
  { img: '/images/case-ba-1.jpg' },
  { img: '/images/case-ba-2.jpg' },
  { img: '/images/before-after-zirconia-2.jpg' },
  { img: '/images/case-ba-new.jpg' },
]

const clinicEnvironment = [
  // Top row: 3 smaller / square photos
  {
    src: '/images/doctors-xray-analysis.jpg',
    title: 'Advanced Digital Diagnostics',
    subtitle: 'Precision imaging & treatment planning',
    aspect: '1/1',
  },
  {
    src: '/images/splat-products.jpg',
    title: 'Splat Products',
    subtitle: 'Premium oral care available at our clinic',
    aspect: '1/1',
  },
  {
    src: '/images/case-implant-closeup.jpg',
    title: 'Removable Dental Prosthetics',
    subtitle: 'Precision full-arch removable prostheses',
    aspect: '1/1',
  },
  // Bottom row: 3 larger / landscape photos
  {
    src: '/images/clinic-exterior.jpg',
    title: 'Klinika Kasmollari',
    subtitle: 'Rruga 1 Qershori, Pogradec',
    aspect: '4/3',
  },
  {
    src: '/images/clinic-glass.jpg',
    title: 'Modern Clinic Interior',
    subtitle: 'Welcoming & serene patient lounge',
    aspect: '4/3',
  },
  {
    src: '/images/treatment-room-1.jpg',
    title: 'Specialized Operatory Suite',
    subtitle: 'Comfort-focused clinical care',
    aspect: '4/3',
  },
]

export default function Gallery() {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="relative py-28 bg-gradient-to-b from-[#BFECE2] via-[#C8F0E8] to-[#BFECE2] overflow-hidden border-y border-teal-500/20">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(43,196,180,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">{t.gallery.badge}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">{t.gallery.title}</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">{t.gallery.subtitle}</p>
        </motion.div>

        {/* Before/After Zirconia Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass bg-white rounded-3xl overflow-hidden p-4 group transition-all duration-500 hover:border-teal-500/40 hover:shadow-[0_15px_40px_rgba(43,196,180,0.16)] border border-teal-500/20 shadow-md"
            >
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img
                  src={c.img}
                  alt={t.gallery.cases[i]?.label || 'Zirconia Case'}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Clean minimal Before / After indicator */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(15,23,42,.75) 0%, rgba(15,23,42,.15) 35%, transparent 100%)' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-white/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white tracking-wider border border-white/30 uppercase shadow-sm">
                      {t.gallery.before}
                    </span>
                    <span className="text-teal-400 font-bold text-sm">→</span>
                    <span className="bg-teal-500/40 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-200 tracking-wider border border-teal-400/50 uppercase shadow-sm">
                      {t.gallery.after}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo grid: Inside the Clinic */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-12 text-center"
          >
            <span className="text-teal-700 text-xs font-semibold tracking-[0.25em] uppercase mb-2">Clinic Environment</span>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-slate-900">Modern Clinical Excellence</h3>
            <p className="text-slate-600 text-sm max-w-lg mt-2">
              Equipped with sterile surgical suites, ergonomic operatory units, and advanced digital imaging in Pogradec.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicEnvironment.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: .95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer glass bg-white border border-teal-500/15 shadow-md"
                style={{ aspectRatio: item.aspect }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5"
                  style={{ background: 'linear-gradient(to top, rgba(15,23,42,.92) 0%, rgba(15,23,42,.3) 50%, transparent 100%)' }}
                >
                  <span className="text-white font-display font-semibold text-xs sm:text-sm tracking-wide">{item.title}</span>
                  <span className="text-teal-400 text-[11px] sm:text-xs mt-0.5">{item.subtitle}</span>
                </div>
                <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-teal-500/60 rounded-2xl transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Happy clients strip */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8 text-center"
          >
            <span className="text-teal-700 text-xs font-semibold tracking-[0.25em] uppercase mb-2">Confidence & Joy</span>
            <h3 className="font-display font-bold text-3xl text-slate-900">Our Happy Smiles</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: '/images/happy-patient-mirror2.jpg', label: 'Buzëqeshja juaj — krenaria jonë' },
              { img: '/images/happy-client-thumbsup2.jpg', label: 'Happy Patient • Healthy Smile' },
              { img: '/images/happy-client-zgjidhni.jpg', label: 'Zgjidhni më të mirët për shëndetin tuaj dental' },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl overflow-hidden h-60 sm:h-72 group border border-teal-500/20 shadow-xl"
              >
                <img
                  src={c.img}
                  alt={c.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end p-6"
                  style={{ background: 'linear-gradient(to top, rgba(15,23,42,.88) 0%, transparent 60%)' }}
                >
                  <p className="text-white font-display font-semibold text-lg tracking-wide">{c.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
