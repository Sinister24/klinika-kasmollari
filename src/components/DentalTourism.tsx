import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Check, Languages, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DentalTourism: React.FC = () => {
  const { t } = useLanguage();

  const tourismPoints = [
    t('tourism_f1'),
    t('tourism_f2'),
    t('tourism_f3'),
    t('tourism_f4'),
  ];

  return (
    <section id="tourism" className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-850 to-teal-950 text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Plane className="w-4 h-4 mr-1 text-teal-400" />
              <span>{t('tourism_badge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {t('tourism_title')}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {t('tourism_desc')}
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {tourismPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-200">{point}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/355692332227?text=P%C3%ABrsh%C3%ABndetje!%20Jam%20i%20interesuar%20p%C3%ABr%20turizmin%20dentar%20n%C3%AB%20Pogradec."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('tourism_cta')}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Pogradec & Savings Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">🏖️</span>
                <div>
                  <h4 className="font-bold text-white text-lg">Pogradec, Shqipëri</h4>
                  <p className="text-xs text-teal-300">Liqeni i Ohrit — Trashëgimi e UNESCO</p>
                </div>
              </div>
              
              <p className="text-xs text-slate-300 leading-relaxed">
                Qyteti i qetë i Pogradecit ofron peizazhe magjepsëse liqenore, gastronomi të pasur tradicionale dhe mikpritje të ngrohtë, duke e kthyer vizitën tuaj dentare në një pushim relaksues.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-center">
                <div className="bg-black/30 rounded-xl p-3 border border-white/10">
                  <p className="text-2xl font-black text-teal-400">-70%</p>
                  <p className="text-[11px] text-slate-300">Kursim krahasuar me BE</p>
                </div>
                <div className="bg-black/30 rounded-xl p-3 border border-white/10">
                  <p className="text-2xl font-black text-teal-400">0 Dhimbje</p>
                  <p className="text-[11px] text-slate-300">Rehabilitim i shpejtë</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-teal-500/15 border border-teal-500/30 text-xs text-teal-200 flex items-center space-x-2.5">
                <Languages className="w-5 h-5 shrink-0" />
                <span>Parliamo Italiano • We speak English • Wir sprechen Deutsch</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
