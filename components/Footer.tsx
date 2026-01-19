import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Team KBça" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-2xl font-display font-bold text-white tracking-tighter">
              TEAM <span className="text-brand-blue">KBÇA</span>
            </div>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Youtube /></a>
            <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Facebook /></a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Team KBça. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};