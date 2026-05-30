import React from 'react';
import { Users, Video, MessageSquare, RefreshCw, Target, Layout } from 'lucide-react';
import { Feature } from '../types';

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Comunidade exclusiva",
    description: "Participe de um grupo com treinadores de diferentes categorias, níveis e realidades. Troque ideias, dúvidas, exercícios e experiências que ajudam no dia a dia.",
    icon: <Users className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 2,
    title: "Encontros ao vivo",
    description: "Encontros online para aprofundar temas, analisar situações de jogo, discutir treinos e responder dúvidas dos participantes.",
    icon: <Video className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 3,
    title: "Espaço de discussão",
    description: "Um ambiente organizado para falar de futsal de verdade: metodologia, comportamento, gestão de grupo, tática, formação e carreira.",
    icon: <MessageSquare className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 4,
    title: "Aprendizagem contínua",
    description: "Plataforma atualizada constantemente com novos conteúdos.",
    icon: <RefreshCw className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 5,
    title: "Exercícios práticos",
    description: "Tenha acesso a atividades para estudar e ajudar no seu treino, com explicações mais claras sobre objetivo, organização e correções.",
    icon: <Target className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 6,
    title: "Plataforma intuitiva",
    description: "Acesse os conteúdos pelo celular, tablet ou computador, no seu ritmo e de acordo com a sua rotina.",
    icon: <Layout className="w-8 h-8 text-brand-blue" />
  }
];

export const PlatformFeatures: React.FC = () => {
  return (
    <section id="platform" className="pt-10 pb-16 md:pt-12 md:pb-20 bg-brand-darker relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
            Não é mais um curso de futsal. <br />
            <span className="text-brand-blue">
              Uma comunidade para treinadores <br className="hidden md:inline" /> que vivem o futsal.
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            O Team Kbça é um ecossistema criado para quem quer aprender, trocar experiências, tirar dúvidas e crescer com outros treinadores que enfrentam os mesmos desafios de quadra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-all hover:-translate-y-1 group"
            >
              <div className="bg-brand-darker w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5 group-hover:border-brand-blue/20">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};