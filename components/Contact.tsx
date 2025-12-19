
import React from 'react';
import { Phone, MessageCircle, ShieldCheck, CheckSquare } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_DISPLAY } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-yellow-400 rounded-[40px] p-8 md:p-16 text-center shadow-2xl transform hover:scale-[1.01] transition-transform">
          <h2 className="text-4xl md:text-6xl font-black text-blue-900 mb-8 uppercase leading-none">
            Não Tente Consertar <br/><span className="text-red-600">Sozinho!</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center gap-4 bg-white/40 p-4 rounded-2xl text-blue-900 font-bold">
              <CheckSquare className="w-6 h-6 flex-shrink-0" />
              <span>Orçamento Grátis e Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-4 bg-white/40 p-4 rounded-2xl text-blue-900 font-bold">
              <ShieldCheck className="w-6 h-6 flex-shrink-0" />
              <span>Garantia por escrito do serviço</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-xs font-black text-blue-800 uppercase tracking-widest mb-2">Ligue agora:</span>
              <a 
                href={`tel:${PHONE_DISPLAY.replace(/\D/g, '')}`}
                className="flex items-center gap-3 text-3xl md:text-5xl font-black text-blue-900 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-8 h-8 md:w-12 md:h-12 fill-blue-900" />
                {PHONE_DISPLAY}
              </a>
            </div>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-3xl font-black text-2xl shadow-2xl transition-all transform hover:-translate-y-2 active:scale-95 w-full sm:w-auto uppercase tracking-tighter"
            >
              <MessageCircle className="w-8 h-8 fill-white" />
              Pedir Especialista Agora
            </a>
            
            <p className="text-blue-900 font-black text-sm uppercase opacity-70">
              * Atendimento rápido em toda a grande Florianópolis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
