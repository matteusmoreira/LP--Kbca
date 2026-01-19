import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'Cursos', href: '#courses' },
    { name: 'Plataforma', href: '#platform' },
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
        <a href="#hero" className="flex items-center gap-2">
           <img 
            src="/logo.png" 
            alt="Team KBça" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback if logo is missing
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
           />
           {/* Text fallback if image fails or isn't present yet */}
           <div className="hidden text-2xl font-display font-bold text-white tracking-tighter">
             TEAM <span className="text-brand-blue">KBÇA</span>
           </div>
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
          href="#capture" 
          className="hidden md:inline-flex px-6 py-2 bg-brand-blue hover:bg-blue-700 text-white font-bold rounded-full transition-transform hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          Entrar Agora
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
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-darker border-b border-white/10 p-4 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white font-semibold text-lg py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a 
            href="#capture"
            className="w-full text-center py-3 bg-brand-blue text-white font-bold rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Começar Agora
          </a>
        </div>
      )}
    </header>
  );
};