
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';
import { WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-start">
            <div className="mb-6 transform -translate-x-4 scale-90 md:scale-100">
              <Logo className="h-16" light />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Serviços residenciais com agilidade, segurança e capricho. O seu "marido de aluguel" de confiança em Florianópolis e região.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors uppercase">Serviços</a></li>
              <li><a href="#por-que" className="hover:text-blue-400 transition-colors uppercase">Diferenciais</a></li>
              <li><a href="#como-funciona" className="hover:text-blue-400 transition-colors uppercase">Como Funciona</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors uppercase">Solicitar Orçamento</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest">
          <p>&copy; {new Date().getFullYear()} Lepre Reparos. Todos os direitos reservados.</p>
          <p>Profissionalismo em cada detalhe.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
