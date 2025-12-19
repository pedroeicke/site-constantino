
import React from 'react';
import { BENEFITS, WHATSAPP_LINK } from '../constants';
import { CheckCircle } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="por-que" className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-blue-500 font-black tracking-widest uppercase text-sm mb-4">Diferenciais Lepre</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase leading-tight">
              O Único que Resolve de <span className="text-blue-500">Verdade</span>
            </h3>
            
            <div className="space-y-8">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all border border-blue-600/20">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xl mb-2 uppercase tracking-tight">{benefit.title}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {['Casas', 'Apartamentos', 'Escritórios', 'Lojas'].map(item => (
                <div key={item} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl text-white font-bold text-xs uppercase border border-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 absolute -inset-4 rounded-3xl -rotate-2 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800" 
              alt="Mão de obra qualificada" 
              className="relative z-10 rounded-3xl shadow-2xl border-4 border-gray-800 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
