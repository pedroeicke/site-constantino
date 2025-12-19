
import React from 'react';
import Logo from './Logo';
import { WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b-2 border-blue-600/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2 py-2 h-full">
            <Logo className="h-10 md:h-12" />
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-4 py-2 md:px-6 md:py-3 rounded-full font-black text-[10px] md:text-xs uppercase tracking-tight transition-all shadow-md active:scale-95 group overflow-hidden border-2 border-yellow-500/20"
          >
            <span className="relative z-10 text-center leading-tight">PEDIR<br className="md:hidden"/> ORÇAMENTO</span>
            <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
