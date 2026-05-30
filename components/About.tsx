import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-blue/10 border border-white/10">
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay"></div>
              {/* Imagem do Treinador KBça */}
              <img 
                src="/kbca.jpg" 
                alt="Treinador KBça" 
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-blue p-6 rounded-xl shadow-xl hidden md:block">
              <p className="font-display font-black text-4xl text-white">25+</p>
              <p className="font-medium text-white/90 text-xs uppercase tracking-wide">anos de <br/>experiência no futsal</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
              Quem é o <span className="text-brand-blue">Kbça?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Kbça é treinador de futsal, mentor e criador do Team Kbça. Ao longo da carreira, construiu uma metodologia baseada na prática, na leitura do jogo e na formation de treinadores mais preparados para a realidade da quadra.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Mais do que entregar exercícios prontos, o objetivo dele é ensinar o treinador a pensar o jogo e seus atletas: entender o porquê de cada atividade, desenvolver um trabalho contínuo e conduzir equipes com mais segurança.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Na Comunidade Team Kbça, você aprende com quem conhece a rotina, os problemas e as exigências de quem está à frente de uma equipe.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Treinador com experiência prática de quadra",
                "Especialista em futsal, tática e formação de atletas",
                "Metodologia aplicada em categorias da iniciação ao alto rendimento",
                "Mentor de treinadores em diferentes níveis",
                "Conteúdo direto, prático e sem enrolação"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="text-brand-blue w-5 h-5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="https://teamkbca.com.br/finalizar-compra/?add-to-cart=2646"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:via-red-400 hover:to-rose-500 text-white font-display font-black py-4 md:py-5 px-8 md:px-10 rounded-xl shadow-xl shadow-red-600/35 transition-all duration-300 border border-white/10 hover:border-white/20 animate-pulse-red group"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-sm md:text-base uppercase tracking-wider">
                    Entrar para comunidade - R$65,00
                  </span>
                  <span className="font-sans font-medium text-xs md:text-sm text-white/90 normal-case mt-0.5">
                    (Pagamento Recorrente)
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};