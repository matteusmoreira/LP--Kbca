import React from 'react';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-blue/10 border border-white/10">
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay"></div>
              {/* Placeholder for Coach Image */}
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop" 
                alt="Treinador KBça" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-blue p-6 rounded-xl shadow-xl hidden md:block">
              <p className="font-display font-black text-4xl text-white">15+</p>
              <p className="font-medium text-white/90 text-sm uppercase tracking-wide">Anos de <br/>Experiência</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
              Quem é o <span className="text-brand-blue">Coach?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Olá, eu sou o criador do Team KBça. Minha missão é elevar o nível do futsal brasileiro através do conhecimento compartilhado.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Com passagens por grandes clubes e títulos estaduais e nacionais, desenvolvi uma metodologia que une a teoria acadêmica à realidade prática da quadra. Não ensino apenas "jogadinhas", ensino a pensar o jogo.
            </p>

            <ul className="space-y-4">
              {[
                "Treinador Licenciado CBFS",
                "Especialista em Tática e Pedagogia do Esporte",
                "Metodologia validada em categorias de base e profissional",
                "Mais de 1000 alunos formados"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="text-brand-blue w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};