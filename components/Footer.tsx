import React from 'react';
import { Instagram } from 'lucide-react';
import { Logo } from './Header';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/kbcafutsal/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-brand-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2026 Team KBÇA. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};