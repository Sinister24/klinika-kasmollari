import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck, X, MessageCircle, Phone, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
    doctor: '',
    date: '',
    time: '10:00 - 12:00',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initialService if changed
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00A896', '#0284C7', '#10B981', '#F59E0B'],
    });

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
      onClose();
    }, 700);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto z-10"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">{t('modal_title')}</h3>
              <p className="text-xs text-slate-500 mt-1">{t('modal_subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('form_name')} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="p.sh. Alban Hoxha"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('form_phone')} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+355 69..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('form_service')}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('form_doctor')}
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">{t('form_doctor_any')}</option>
                    <option value="Dr. Lorena Kasmollari">Dr. Lorena Kasmollari</option>
                    <option value="Dr. Enea Kasmollari">Dr. Enea Kasmollari</option>
                    <option value="Dr. Ylli Kasmollari">Dr. Ylli Kasmollari</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('form_date')}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('form_time')}
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="10:00 - 12:00">10:00 - 12:00</option>
                    <option value="12:00 - 15:00">12:00 - 15:00</option>
                    <option value="15:00 - 19:00">15:00 - 19:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('form_message')}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Shënime shtesë..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal-600/30 transition-all flex items-center justify-center space-x-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Po lidhemi me WhatsApp...' : t('form_submit')}</span>
              </motion.button>

              <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
                <a
                  href="https://wa.me/355692332227?text=P%C3%ABrsh%C3%ABndetje%20Klinika%20Kasmollari!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Bisedo direkt në WhatsApp (+355 69 233 2227)</span>
                </a>
                <a
                  href="tel:+355692332227"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Telefono (+355 69 233 2227)</span>
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
