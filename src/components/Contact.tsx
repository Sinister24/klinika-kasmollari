import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle, Send, Instagram } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm]       = useState({ name: '', phone: '', service: '', message: '' })
  const [status, setStatus]   = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const serviceMap: Record<string, string> = {
      implants: t.services.items.implants.title,
      zirconia: t.services.items.zirconia.title,
      orthodontics: t.services.items.orthodontics.title,
      invisalign: t.services.items.invisalign.title,
      veneers: t.services.items.veneers.title,
      whitening: t.services.items.whitening.title,
      surgery: t.services.items.surgery.title,
      cleaning: t.services.items.cleaning.title,
      other: 'Konsultë e Përgjithshme / Tjetër',
    }

    const serviceLabel = (form.service && serviceMap[form.service]) || form.service || 'Konsultë e Përgjithshme'

    let text = `Përshëndetje Klinika Kasmollari!\n\n`
    text += `👤 *Emri:* ${form.name}\n`
    if (form.phone) text += `📞 *Numri:* ${form.phone}\n`
    text += `🦷 *Shërbimi:* ${serviceLabel}\n`
    if (form.message) text += `💬 *Mesazhi:* ${form.message}\n`

    const waUrl = `https://wa.me/355692332227?text=${encodeURIComponent(text)}`

    setTimeout(() => {
      window.open(waUrl, '_blank')
      setStatus('sent')
    }, 600)
  }

  const hours = [
    { label: t.contact.weekdays,    time: t.contact.weekdayHours },
    { label: t.contact.saturday,    time: t.contact.saturdayHours },
    { label: t.contact.sunday,      time: t.contact.sundayHours  },
  ]

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-[#BFECE2] via-[#C8F0E8] to-[#BFECE2] overflow-hidden border-y border-teal-500/20">
      {/* Soft ambient background glow */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
           style={{ background: 'radial-gradient(circle, rgba(43,196,180,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label">{t.contact.badge}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">{t.contact.title}</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Info Cards & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Info cards */}
            <div className="glass bg-white rounded-3xl p-5 sm:p-6 space-y-4 sm:space-y-5 border border-teal-500/20 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl gradient-teal flex items-center justify-center flex-shrink-0 shadow-sm text-white">
                  <MapPin size={19} />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm mb-0.5">Location & Address</div>
                  <div className="text-slate-600 text-sm">{t.contact.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl gradient-teal flex items-center justify-center flex-shrink-0 shadow-sm text-white">
                  <Phone size={19} />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm mb-0.5">Phone & WhatsApp</div>
                  <a href="tel:+355692332227" className="text-teal-600 text-sm font-semibold hover:text-teal-700 transition-colors">
                    {t.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl gradient-teal flex items-center justify-center flex-shrink-0 shadow-sm text-white">
                  <Instagram size={19} />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm mb-0.5">Official Instagram</div>
                  <a href="https://www.instagram.com/klinika.kasmollari?gwpx=bTV2a244b29ydjBo" target="_blank" rel="noreferrer"
                     className="text-teal-600 text-sm font-semibold hover:text-teal-700 transition-colors">
                    @klinika.kasmollari
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass bg-white rounded-3xl p-5 sm:p-6 border border-teal-500/20 shadow-md">
              <div className="flex items-center gap-2.5 mb-4">
                <Clock size={17} className="text-teal-600" />
                <span className="text-slate-900 font-semibold text-sm">{t.contact.hours}</span>
              </div>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between pb-2 border-b border-slate-100 last:border-none last:pb-0">
                    <span className="text-slate-600 text-sm font-medium">{h.label}</span>
                    <span className={`text-sm font-semibold ${h.time === t.contact.sundayHours ? 'text-rose-500' : 'text-teal-700'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div className="glass bg-white rounded-3xl overflow-hidden h-60 relative border border-teal-500/20 shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=Rruga+1+Qershori,+Pogradec,+Albania&output=embed&z=15"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Klinika Kasmollari Location"
              />
              <a href="https://maps.app.goo.gl/XZY5kEXzaxCG3Sqi6" target="_blank" rel="noreferrer"
                 className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-teal-700 text-xs font-semibold px-3.5 py-1.5 rounded-full hover:bg-teal-50 transition-colors shadow-md border border-teal-500/30">
                Open in Google Maps ↗
              </a>
            </div>
          </motion.div>

          {/* Right: Booking & Inquiries Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-strong bg-white/95 rounded-3xl p-5 sm:p-8 border border-teal-500/25 shadow-xl">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full gradient-teal flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-900 font-display font-semibold text-lg">{t.contact.form.success}</p>
                  <button
                    onClick={() => {
                      setStatus('idle')
                      setForm({ name: '', phone: '', service: '', message: '' })
                    }}
                    className="text-teal-600 text-sm font-semibold hover:underline mt-2 cursor-pointer"
                  >
                    Dërgo një mesazh tjetër
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs text-slate-700 uppercase tracking-wider font-semibold mb-2">{t.contact.form.name}</label>
                      <input type="text" required value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-base sm:text-sm placeholder-slate-400 focus:bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all shadow-sm"
                        placeholder="Emri juaj…" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-700 uppercase tracking-wider font-semibold mb-2">{t.contact.form.phone}</label>
                      <input type="tel" value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-base sm:text-sm placeholder-slate-400 focus:bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all shadow-sm"
                        placeholder="+355…" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-700 uppercase tracking-wider font-semibold mb-2">{t.contact.form.service}</label>
                    <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-base sm:text-sm focus:bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all appearance-none shadow-sm cursor-pointer">
                      <option value="">— {t.contact.form.service} —</option>
                      <option value="implants">{t.services.items.implants.title}</option>
                      <option value="zirconia">{t.services.items.zirconia.title}</option>
                      <option value="orthodontics">{t.services.items.orthodontics.title}</option>
                      <option value="invisalign">{t.services.items.invisalign.title}</option>
                      <option value="veneers">{t.services.items.veneers.title}</option>
                      <option value="whitening">{t.services.items.whitening.title}</option>
                      <option value="other">Konsultë e Përgjithshme / Tjetër</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-700 uppercase tracking-wider font-semibold mb-2">{t.contact.form.message}</label>
                    <textarea rows={4} value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-base sm:text-sm placeholder-slate-400 focus:bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all resize-none shadow-sm"
                      placeholder="Shkruani mesazhin tuaj…" />
                  </div>

                  <div className="flex gap-3 flex-col sm:flex-row pt-2">
                    <button type="submit" disabled={status === 'sending'}
                      className="flex-1 btn-primary flex items-center justify-center gap-2">
                      <Send size={15} />
                      {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
                    </button>
                    <a href="https://wa.me/355692332227" target="_blank" rel="noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 text-[#128C7E] font-semibold text-sm hover:bg-[#25D366]/20 transition-all shadow-sm">
                      <MessageCircle size={16} />
                      {t.contact.form.whatsapp}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
