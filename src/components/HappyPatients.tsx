import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smile, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HappyPatients: React.FC = () => {
  const { t } = useLanguage();

  const patientSmiles = [
    {
      id: 'mirror',
      image: '/images/happy-patient-mirror.jpg',
      quote: '"We love our patients!"',
      sub: 'Moment pas trajtimit ortodontik',
      icon: Heart,
    },
    {
      id: 'happy-male',
      image: '/images/happy-patient-1.jpg',
      quote: '"Happy Client"',
      sub: 'Buzëqeshje e re & vetëbesim',
      icon: Smile,
    },
    {
      id: 'thumbsup',
      image: '/images/happy-patient-thumbsup.jpg',
      quote: '"Zgjidhni Më të Mirët!"',
      sub: 'Për shëndetin tuaj dental',
      icon: ThumbsUp,
    },
  ];

  return (
    <section id="patients" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <span>{t('patients_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('patients_title')}
          </h2>
          <p className="text-slate-600 text-base">
            {t('patients_subtitle')}
          </p>
        </div>

        {/* 3 Real Patient Pictures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {patientSmiles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 bg-white"
              >
                <div className="h-96 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.quote}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white flex items-center justify-between">
                  <div>
                    <p className="font-extrabold text-slate-900 text-sm">{item.quote}</p>
                    <p className="text-xs text-teal-600 font-semibold mt-0.5">{item.sub}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-base">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
