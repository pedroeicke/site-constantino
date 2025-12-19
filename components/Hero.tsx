
import React from 'react';
import { MessageCircle, Star, ShieldCheck, Zap } from 'lucide-react';
import { getWhatsAppLink, STATS } from '../constants';

const Hero: React.FC = () => {
  const heroWaLink = getWhatsAppLink("Olá! Preciso de um reparo urgente em minha residência. Poderia me ajudar?");

  return (
    <section className="relative pt-32 pb-12 md:pt-56 md:pb-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-400/90 text-blue-900 rounded-full text-[10px] md:text-sm font-black mb-6 shadow-sm border border-yellow-500/20 uppercase tracking-wide">
              <Zap className="w-3 h-3 md:w-4 md:h-4 fill-blue-900" />
              Atendimento hoje em Floripa
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-blue-900 leading-[1.1] mb-6 uppercase tracking-tight">
              Reparos Rápidos e <br className="hidden md:block" />
              <span className="text-blue-600 italic">Sem Enrolação.</span>
            </h1>
            
            <p className="text-base md:text-2xl text-gray-600 mb-8 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Chega de dor de cabeça! Resolvemos tudo com <span className="text-blue-900 font-bold border-b-2 border-yellow-400">preço justo e limpeza total.</span>
            </p>
            
            <div className="flex flex-col gap-4 mb-12 max-w-md mx-auto lg:mx-0">
              <a
                href={heroWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl shadow-xl shadow-green-200 transition-all hover:scale-[1.02] active:scale-95 border-b-4 border-green-700/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-white" />
                <span className="uppercase tracking-tighter">Orçamento no WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-8 bg-white/50 backdrop-blur-sm p-4 rounded-3xl border border-blue-100/50 shadow-sm">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-center gap-1 mb-0.5">
                    {React.cloneElement(stat.icon as React.ReactElement, { className: "w-3 h-3 md:w-5 md:h-5 text-blue-600" })}
                    <span className="text-lg md:text-3xl font-black text-blue-900 tracking-tighter">{stat.value}</span>
                  </div>
                  <span className="text-[8px] md:text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0 hidden sm:block">
            <div className="relative z-10 bg-white p-3 rounded-[32px] md:rounded-[40px] shadow-2xl rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800" 
                alt="Profissional Lepre Reparos" 
                className="rounded-[24px] md:rounded-[30px] w-full h-[300px] md:h-[500px] object-cover"
              />
              
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 -rotate-3 hidden md:block">
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="font-bold text-xs text-blue-900">"Serviço nota 10!"</p>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-5 rounded-2xl shadow-xl rotate-2 hidden md:block border-4 border-white">
                <ShieldCheck className="w-8 h-8 mb-1" />
                <p className="font-black text-sm uppercase">Garantia Total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
