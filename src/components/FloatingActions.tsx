import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Call button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+355692332227"
        className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-lg transition-transform duration-200"
        title="Telefono: +355 69 233 2227"
      >
        <Phone className="w-5 h-5 text-white" />
      </motion.a>

      {/* Instagram button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.instagram.com/klinika.kasmollari?gwpx=bTV2a244b29ydjBo"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white flex items-center justify-center shadow-lg transition-all duration-200"
        title="Instagram: @klinika.kasmollari"
      >
        <Instagram className="w-5 h-5 text-white" />
      </motion.a>

      {/* Pulsing WhatsApp button */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/355692332227?text=P%C3%ABrsh%C3%ABndetje%20Klinika%20Kasmollari!"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-all"
        title="WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  );
};
