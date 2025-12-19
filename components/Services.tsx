
import React from 'react';
import { SERVICES, getWhatsAppLink, WHATSAPP_LINK } from '../constants';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 bg-blue-50 w-fit px-4 py-1 rounded-full">Nossas Especialidades</h2>
            <p className="text-4xl md:text-6xl font-black text-blue-900 uppercase">Soluções que <span className="text-blue-600">Funcionam</span></p>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-black flex items-center gap-2 group hover:gap-4 transition-all uppercase tracking-tighter">
            Ver todos os serviços <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-blue-600 hover:bg-white hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              {/* Icon Container: Blue by default, Blue Dark on Hover */}
              <div className="mb-6 p-4 bg-blue-100 w-fit rounded-2xl group-hover:bg-blue-600 transition-all duration-300 border border-blue-200">
                {React.cloneElement(service.icon as React.ReactElement, {
                  className: "w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
                })}
              </div>
              
              <h3 className="text-xl font-black text-blue-900 mb-3 uppercase tracking-tighter">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <a 
                href={getWhatsAppLink(service.waText)} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest border-b-2 border-blue-100 group-hover:border-blue-600 transition-all w-fit py-1"
              >
                <MessageCircle className="w-4 h-4 fill-blue-600 group-hover:fill-blue-600" />
                Orçamento rápido
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
