import React from 'react';
import { Users, Video, MessageSquare, Award, Target, Layout } from 'lucide-react';
import { Feature } from '../types';

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Comunidade Exclusiva",
    description: "Acesso a grupos VIPs para troca de experiências diárias com treinadores de todo o Brasil.",
    icon: <Users className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 2,
    title: "Encontros Ao Vivo",
    description: "Mentorias mensais via Zoom para tirar dúvidas, analisar jogos e discutir tendências.",
    icon: <Video className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 3,
    title: "Fórum de Discussão",
    description: "Espaço organizado por temas para debater táticas, exercícios e gestão de carreira.",
    icon: <MessageSquare className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 4,
    title: "Certificados Oficiais",
    description: "Emissão de certificado de conclusão válido para horas complementares em todos os cursos.",
    icon: <Award className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 5,
    title: "Exercícios Práticos",
    description: "Biblioteca de exercícios animados e filmados para você aplicar no seu treino amanhã.",
    icon: <Target className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 6,
    title: "Plataforma Intuitiva",
    description: "Assista onde e quando quiser. App compatível com celular, tablet e computador.",
    icon: <Layout className="w-8 h-8 text-brand-blue" />
  }
];

export const PlatformFeatures: React.FC = () => {
  return (
    <section id="platform" className="py-24 bg-brand-darker relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Muito Mais que <span className="text-brand-blue">Apenas Vídeos</span>
          </h2>
          <p className="text-gray-400 text-lg">
            O Team KBça é um ecossistema completo desenhado para acelerar sua carreira no futsal.
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