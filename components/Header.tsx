import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Logo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => (
  <svg viewBox="0 0 160 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="15" stroke="#2563EB" strokeWidth="2.5" />
    <circle cx="20" cy="20" r="6" stroke="#06B6D4" strokeWidth="1.5" />
    <path d="M20 5v30M5 20h30" stroke="#2563EB" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
    <circle cx="20" cy="20" r="1.5" fill="#F97316" />
    <text x="45" y="27" fill="white" fontSize="18" fontWeight="bold" fontFamily="Montserrat, sans-serif" letterSpacing="-0.5">
      TEAM <tspan fill="#2563EB">KBÇA</tspan>
    </text>
  </svg>
);

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Aprendizagem', href: '#courses' },
    { name: 'Comunidade', href: '#platform' },
    { name: 'Sobre', href: '#about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-darker/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#hero" className="flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-95" aria-label="Voltar ao início">
           <Logo className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-gray-300 hover:text-brand-blue transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href="https://teamkbca.com.br/finalizar-compra/?add-to-cart=2646" 
          className="hidden md:inline-flex px-6 py-2 bg-brand-blue hover:bg-blue-700 text-white font-bold rounded-full transition-transform hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          Quero Fazer parte
        </a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-brand-darker border-b border-white/10 p-4 flex flex-col space-y-4 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white font-semibold text-lg py-2 border-b border-white/5 transition-colors hover:text-brand-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a 
              href="https://teamkbca.com.br/finalizar-compra/?add-to-cart=2646"
              className="w-full text-center py-3 bg-brand-blue text-white font-bold rounded-lg transition-transform active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quero Fazer parte
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};