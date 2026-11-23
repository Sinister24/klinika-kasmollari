import React from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TopBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a
            href="https://maps.app.goo.gl/XZY5kEXzaxCG3Sqi6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-teal-400 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-teal-400 mr-1.5" />
            <span>{t('topbar_address')}</span>
          </a>
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 text-teal-400 mr-1.5" />
            <span>{t('topbar_hours')}</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://www.instagram.com/klinika.kasmollari?gwpx=bTV2a244b29ydjBo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-teal-400 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-teal-400 mr-1.5" />
            <span>@klinika.kasmollari</span>
          </a>
          <a
            href="tel:+355692332227"
            className="flex items-center text-white font-semibold hover:text-teal-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-teal-400 mr-1.5" />
            <span>+355 69 233 2227</span>
          </a>
        </div>
      </div>
    </div>
  );
};
