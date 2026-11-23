import React from 'react';
import { ShieldCheck, Cpu, HeartPulse, Globe2 } from 'lucide-react';

export const Highlights: React.FC = () => {
  const items = [
    {
      icon: ShieldCheck,
      title: "Garanci & Siguri",
      desc: "Protokolle mjekësore strikte"
    },
    {
      icon: Cpu,
      title: "Pajisje Digjitale",
      desc: "Diagnostikim i saktë"
    },
    {
      icon: HeartPulse,
      title: "Pa Dhimbje",
      desc: "Anestezi komode & moderne"
    },
    {
      icon: Globe2,
      title: "Turizëm Dentar",
      desc: "Paketa për pacientët e huaj"
    }
  ];

  return (
    <section className="border-y border-slate-100 bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center space-x-3.5 justify-center md:justify-start">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-lg shrink-0">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
