import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Instagram, Send, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    doctor: '',
    date: '',
    time: '10:00 - 12:00',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Canvas Confetti Celebration!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00A896', '#0284C7', '#10B981', '#F59E0B'],
    });

    // Format WhatsApp message
    let text = `Përshëndetje Klinika Kasmollari!\n\nDua të rezervoj një takim:\n`;
    text += `👤 Emri: ${formData.name}\n`;
    text += `📞 Tel: ${formData.phone}\n`;
    if (formData.service) text += `🦷 Shërbimi: ${formData.service}\n`;
    if (formData.doctor) text += `👨‍⚕️ Mjeku: ${formData.doctor}\n`;
    if (formData.date) text += `📅 Data: ${formData.date}\n`;
    if (formData.time) text += `⏰ Ora: ${formData.time}\n`;
    if (formData.notes) text += `📝 Shënim: ${formData.notes}\n`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/355692332227?text=${encoded}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        service: '',
        doctor: '',
        date: '',
        time: '10:00 - 12:00',
        notes: '',
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <span>{t('contact_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('contact_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl shrink-0 mt-0.5">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm mb-1">{t('contact_address_label')}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {t('contact_address_val')}
                </p>
                <a
                  href="https://maps.app.goo.gl/XZY5kEXzaxCG3Sqi6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-teal-600 hover:text-teal-700"
                >
                  <span>{t('contact_open_maps')}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0 mt-0.5">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm mb-1">{t('contact_phone_label')}</h4>
                <p className="text-slate-900 font-bold text-lg mb-2">+355 69 233 2227</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="tel:+355692332227"
                    className="inline-flex items-center text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5" />
                    <span>Telefono</span>
                  </a>
                  <a
                    href="https://wa.me/355692332227?text=P%C3%ABrsh%C3%ABndetje%20Klinika%20Kasmollari!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl shrink-0 mt-0.5">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm mb-2">{t('contact_hours_label')}</h4>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <p className="flex justify-between">
                    <span className="font-medium">E Hënë - E Premte:</span>
                    <span className="font-bold text-slate-900">10:00 - 19:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">E Shtunë:</span>
                    <span className="font-bold text-slate-900">09:00 - 14:00</span>
                  </p>
                  <p className="flex justify-between text-slate-400">
                    <span className="font-medium">E Dielë:</span>
                    <span className="font-bold">Mbyllur (Urgjencat)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/klinika.kasmollari?gwpx=bTV2a244b29ydjBo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-2xl">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm">@klinika.kasmollari</p>
                  <p className="text-xs text-purple-100">{t('contact_instagram')}</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {t('modal_title')}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {t('modal_subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('form_name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="p.sh. Alban Hoxha"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('form_phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+355 69..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('form_service')}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white"
                  >
                    <option value="">{t('form_service_select')}</option>
                    <option value="Punim Zirkoni & Kurora">Punim Zirkoni & Kurora</option>
                    <option value="Kirurgji Orale & Implante">Kirurgji Orale & Implante</option>
                    <option value="Ortodonci & Drejtim Dhëmbësh">Ortodonci & Drejtim Dhëmbësh</option>
                    <option value="Konsultë Mjekësore">Konsultë Mjekësore</option>
                    <option value="Estetikë Dentare & Fasetat">Estetikë Dentare & Fasetat</option>
                    <option value="Zbardhim Profesional">Zbardhim Profesional</option>
                    <option value="Pastrim & Higjienë">Pastrim & Higjienë</option>
                    <option value="Pedodonci (Fëmijë)">Pedodonci (Fëmijë)</option>
                    <option value="Turizëm Dentar">Turizëm Dentar</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('form_doctor')}
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white"
                  >
                    <option value="">{t('form_doctor_any')}</option>
                    <option value="Dr. Lorena Kasmollari (Ortodonci)">Dr. Lorena Kasmollari (Ortodonci)</option>
                    <option value="Dr. Enea Kasmollari (Kirurgji / Implante)">Dr. Enea Kasmollari (Kirurgji / Implante)</option>
                    <option value="Dr. Ylli Kasmollari (Mjekësi)">Dr. Ylli Kasmollari (Mjekësi)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('form_date')}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('form_time')}
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white"
                  >
                    <option value="10:00 - 12:00">Paradite: 10:00 - 12:00</option>
                    <option value="12:00 - 15:00">Drekë: 12:00 - 15:00</option>
                    <option value="15:00 - 19:00">Pasdite: 15:00 - 19:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t('form_message')}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Përshkruani shkurtimisht gjendjen ose kërkesën tuaj..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-600/30 hover:shadow-xl transition-all flex items-center justify-center space-x-2 text-base"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Po hapim WhatsApp...' : t('form_submit')}</span>
              </motion.button>

              <div className="text-center pt-2">
                <span className="text-xs text-slate-400">{t('form_or_whatsapp')} </span>
                <a
                  href="https://wa.me/355692332227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 ml-1"
                >
                  WhatsApp: +355 69 233 2227
                </a>
              </div>
            </form>
          </div>

        </div>

        {/* Google Maps Section */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white">
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="font-extrabold text-lg text-white">Vendndodhja në Pogradec</h4>
              <p className="text-xs text-slate-300">
                Rruga 1 Qershori, Pranë Teatrit të Kukullave (Pranë qendrës dhe liqenit)
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/XZY5kEXzaxCG3Sqi6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-colors space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Merr Udhëzimet e Rrugës</span>
            </a>
          </div>
          <div className="relative w-full h-[400px] bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.6459039017774!2d20.65588387654054!3d40.90233482598365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350e964ca658ebf%3A0x9d0563b7e71350a4!2sKlinika%20Kasmollari!5e0!3m2!1sen!2sal!4v1716300000000!5m2!1sen!2sal"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Klinika Kasmollari Google Maps Location"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
