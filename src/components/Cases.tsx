import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CasesProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Cases: React.FC<CasesProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const cases = [
    {
      id: 'zirconia-full',
      badge: 'Punim Zirkoni',
      titleKey: 'case2_title',
      descKey: 'case2_desc',
      image: '/images/before-after-zirconia.jpg',
      tag: 'Punim Zirkoni',
      hasAfterOnly: false,
    },
    {
      id: 'veneers-makeover',
      badge: 'Estetikë & Zbardhim',
      titleKey: 'case1_title',
      descKey: 'case1_desc',
      image: '/images/before-after-1.jpg',
      tag: 'Estetikë Dentare',
      hasAfterOnly: false,
    },
    {
      id: 'zirconia-details',
      badge: 'Kurora Zirkoni',
      titleKey: 'case3_title',
      descKey: 'case3_desc',
      image: '/images/case-result.jpg',
      tag: 'Kurora Zirkoni',
      hasAfterOnly: true,
    },
  ];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <span>{t('cases_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('cases_title')}
          </h2>
          <p className="text-slate-600 text-base">
            {t('cases_subtitle')}
          </p>
        </div>

        {/* 3 Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {cases.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50 rounded-3xl p-5 border border-slate-200/90 shadow-md flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-inner bg-slate-950">
                  <img
                    src={cs.image}
                    alt={t(cs.titleKey)}
                    className="w-full h-80 object-cover"
                  />
                  {!cs.hasAfterOnly ? (
                    <div className="absolute top-3 left-3 bg-slate-900/85 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-full">
                      PARA &bull; PAS
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 bg-teal-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-lg">
                      PAS
                    </div>
                  )}
                </div>

                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-2">
                    {cs.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {t(cs.titleKey)}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t(cs.descKey)}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex justify-between items-center">
                <span className="text-[11px] font-semibold text-slate-400">
                  Klinika Kasmollari
                </span>
                <button
                  type="button"
                  onClick={() => onOpenBooking(cs.tag)}
                  className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center space-x-1"
                >
                  <span>Konsultohu</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
