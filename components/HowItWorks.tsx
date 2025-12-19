
import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-black tracking-widest uppercase text-[10px] mb-3">Processo Prático</h2>
          <p className="text-3xl md:text-5xl font-black text-blue-900 mb-4 uppercase tracking-tighter">Como Funciona?</p>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-lg">
            Simples, direto e sem burocracia para resolver o seu problema hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative">
          {STEPS.map((step) => (
            <div key={step.number} className="relative z-10 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-blue-100 transform -rotate-3 group-hover:rotate-0 transition-transform">
                {step.number}
              </div>
              <h3 className="text-lg font-black text-blue-900 mb-2 uppercase tracking-tight">{step.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
