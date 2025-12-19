
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const waLink = getWhatsAppLink("Olá! Estou no site e gostaria de tirar uma dúvida sobre um reparo.");
  
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60] flex flex-col items-end">
      {/* Tooltip/Label only visible after some time or on hover */}
      <div className="mb-2 bg-white text-blue-900 text-[10px] md:text-xs font-black py-1.5 px-3 rounded-full shadow-lg border border-green-500/30 animate-bounce hidden sm:block">
        Especialista Online! 👋
      </div>
      
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl shadow-green-200 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-white" />
        
        {/* Animated Rings */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25 -z-10"></span>
        <span className="absolute inset-0 rounded-full bg-green-500/20 animate-pulse -z-10 scale-125"></span>
        
        {/* Online Indicator */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
