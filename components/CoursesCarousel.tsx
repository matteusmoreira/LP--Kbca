import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Course } from '../types';
import { ChevronRight, ChevronLeft, Activity, Shield, Target, Zap } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Lista de Cursos Atualizada
const COURSES: Course[] = [
  {
    id: 1,
    title: "Teorias",
    description: "Alicerce científico do que acreditamos ser importante para o treinador.",
    image: "",
    modules: 12,
    duration: "Conteúdo Técnico"
  },
  {
    id: 2,
    title: "Atividades na prancheta",
    description: "Atividades comentadas com explicação de objetivo, variações e observações.",
    image: "",
    modules: 50,
    duration: "Exercícios Práticos"
  },
  {
    id: 3,
    title: "Análises de jogo",
    description: "Entenda o “olhar do Kbça” através de análises de lances de jogos.",
    image: "",
    modules: 30,
    duration: "Estudos de Caso"
  },
  {
    id: 4,
    title: "Trilhas de aprendizagem",
    description: "Direcionamento de conteúdo adequado a cada contexto de atuação.",
    image: "",
    modules: 6,
    duration: "Direcionamento"
  },
  {
    id: 5,
    title: "Fórum",
    description: "Troque experiências com treinadores com vivências semelhantes.",
    image: "",
    modules: 1,
    duration: "Networking"
  }
];

// --- Artes e Padrões Visuais Avançados (Futsal Theme) ---

const NoiseTexture = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay pointer-events-none">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

const TacticalBlueprintArt = () => (
  <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full text-white" fill="none" stroke="currentColor">
    <path d="M0 0 L400 300 M400 0 L0 300" strokeWidth="0.5" opacity="0.1" />
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <g transform="translate(50, 50) scale(0.8)">
       <circle cx="50" cy="150" r="12" strokeWidth="2" opacity="0.8" />
       <text x="50" y="154" fontSize="10" textAnchor="middle" fill="white" stroke="none" fontWeight="bold">GK</text>
       <circle cx="150" cy="80" r="10" strokeWidth="2" opacity="0.6" />
       <circle cx="150" cy="220" r="10" strokeWidth="2" opacity="0.6" />
       <circle cx="250" cy="150" r="10" strokeWidth="2" opacity="0.6" />
       <path d="M162 85 Q 200 110 240 140" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arrow)" opacity="0.7" />
       <path d="M162 215 Q 200 190 240 160" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arrow)" opacity="0.7" />
    </g>
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
      </marker>
    </defs>
  </svg>
);

const AbstractBallArt = () => (
  <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full text-white" fill="none" stroke="currentColor">
    <path d="M-20 250 Q 50 250 80 180 T 180 180 T 280 250" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.4" />
    <circle cx="80" cy="180" r="15" strokeWidth="2" opacity="0.3" />
    <circle cx="180" cy="180" r="20" strokeWidth="1" opacity="0.2" />
    <circle cx="280" cy="250" r="10" strokeWidth="2" opacity="0.3" />
    <circle cx="350" cy="50" r="100" strokeWidth="0.5" opacity="0.1" />
    <path d="M300 0 A 100 100 0 0 1 400 100" strokeWidth="1" opacity="0.1" fill="none"/>
    <path d="M50 50 L70 60 L70 80 L50 90 L30 80 L30 60 Z" strokeWidth="1.5" opacity="0.15" />
    <path d="M350 250 L370 260 L370 280 L350 290 L330 280 L330 260 Z" strokeWidth="1.5" opacity="0.15" />
  </svg>
);

const CourtSpeedArt = () => (
  <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full text-white" fill="none" stroke="currentColor">
    <g transform="skewX(-20)">
      <rect x="50" y="-50" width="40" height="400" fill="currentColor" opacity="0.05" />
      <rect x="150" y="-50" width="20" height="400" fill="currentColor" opacity="0.03" />
      <rect x="250" y="-50" width="80" height="400" fill="currentColor" opacity="0.07" />
    </g>
    <line x1="0" y1="300" x2="150" y2="150" strokeWidth="1" opacity="0.2" />
    <line x1="400" y1="300" x2="250" y2="150" strokeWidth="1" opacity="0.2" />
    <line x1="0" y1="150" x2="400" y2="150" strokeWidth="1" opacity="0.1" />
    <ellipse cx="200" cy="250" rx="100" ry="30" strokeWidth="2" opacity="0.15" />
  </svg>
);

const DefenseNetArt = () => (
  <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full text-white" fill="none" stroke="currentColor">
    <defs>
      <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
        <path d="M25 0 L50 12.5 L50 37.5 L25 50 L0 37.5 L0 12.5 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.15"/>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" opacity="0.6" />
    <path d="M200 50 L 320 90 V 180 Q 200 260 200 260 Q 80 180 80 180 V 90 Z" 
          strokeWidth="4" opacity="0.1" fill="currentColor" fillOpacity="0.05" />
    <path d="M200 70 L 290 100 V 170 Q 200 230 200 230 Q 110 170 110 170 V 100 Z" 
          strokeWidth="2" opacity="0.3" />
  </svg>
);

const FutsalBallIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 17l-4.5-2.6 1.7-4.9h5.6l1.7 4.9z" />
    <path d="M12 17v5" />
    <path d="M7.5 14.4l-3.9 3.1" />
    <path d="M16.5 14.4l3.9 3.1" />
    <path d="M9.2 9.5L5 7" />
    <path d="M14.8 9.5L19 7" />
  </svg>
);

// Componente de Partículas Interativas
const InteractiveParticles: React.FC<{ mouseX: any, mouseY: any }> = ({ mouseX, mouseY }) => {
  // Gera partículas apenas uma vez
  const particles = useMemo(() => [...Array(8)].map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 4 + 2, // 2px a 6px
    duration: Math.random() * 3 + 3, // 3s a 6s
    depth: Math.random() * 20 + 5 // profundidade para paralaxe
  })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => {
        // Movimento de paralaxe reativo ao mouse
        const x = useTransform(mouseX, [-200, 200], [-p.depth, p.depth]);
        const y = useTransform(mouseY, [-200, 200], [-p.depth, p.depth]);
        
        // Animação contínua de flutuação vertical combinada com a paralaxe
        const yFloat = useTransform(y, (currentY) => currentY); 

        return (
          <motion.div
            key={p.id}
            style={{ 
              x, 
              y: yFloat, 
              top: `${p.top}%`, 
              left: `${p.left}%`, 
              width: p.size, 
              height: p.size 
            }}
            animate={{ 
              y: [0, -15, 0], // Flutuação suave
              opacity: [0.1, 0.3, 0.1] 
            }}
            transition={{ 
              y: { repeat: Infinity, duration: p.duration, ease: "easeInOut" },
              opacity: { repeat: Infinity, duration: p.duration * 1.5, ease: "easeInOut" }
            }}
            className="absolute bg-white rounded-full mix-blend-overlay shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        )
      })}
    </div>
  );
};

// Style Logic outside component for better performance
const getCardStyle = (index: number) => {
  const styles = [
    {
      gradient: "bg-[radial-gradient(100%_100%_at_top_right,_var(--tw-gradient-stops))] from-brand-blue via-blue-900 to-brand-darker",
      Art: TacticalBlueprintArt,
      icon: <Activity size={18} className="text-blue-100" />,
      tag: "Tática",
      borderColor: "group-hover:border-brand-blue/60"
    },
    {
      gradient: "bg-[radial-gradient(circle_at_10%_20%,_var(--tw-gradient-stops))] from-brand-cyan/80 via-blue-950 to-brand-darker",
      Art: AbstractBallArt,
      icon: <Target size={18} className="text-cyan-100" />,
      tag: "Técnica",
      borderColor: "group-hover:border-brand-cyan/60"
    },
    {
      gradient: "bg-[linear-gradient(to_bottom_right,_var(--tw-gradient-stops))] from-blue-600 via-slate-900 to-black",
      Art: CourtSpeedArt,
      icon: <Zap size={18} className="text-blue-200" />,
      tag: "Físico",
      borderColor: "group-hover:border-blue-500/60"
    },
    {
      gradient: "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-700 via-brand-darker to-black",
      Art: DefenseNetArt,
      icon: <Shield size={18} className="text-gray-200" />,
      tag: "Defesa",
      borderColor: "group-hover:border-slate-500/60"
    }
  ];
  return styles[index % styles.length];
};

// Subcomponente Isolado para Lazy Loading
const CourseCard: React.FC<{ course: Course; index: number; isDragging: boolean }> = ({ course, index, isDragging }) => {
  const style = getCardStyle(index);
  const ArtComponent = style.Art;
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse Motion Values para efeito de paralaxe interno
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible (load once)
        }
      },
      { rootMargin: '100px' } // Preload when close
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`snap-start min-w-[280px] sm:min-w-[320px] md:min-w-[360px] bg-brand-dark rounded-3xl overflow-hidden border border-white/5 ${style.borderColor} transition-all duration-500 ease-out flex flex-col group relative
      ${isDragging ? 'pointer-events-none transform-none' : 'hover:shadow-2xl hover:shadow-brand-blue/20 hover:-translate-y-3 hover:scale-[1.02]'}`}
    >
      {/* Header Artístico Premium */}
      <div className={`relative h-52 w-full overflow-hidden ${style.gradient}`}>
        
        {/* Lazy Loaded Visuals */}
        {isVisible && (
          <>
            {course.image ? (
               /* Image Mode: Renderiza imagem se disponível, com lazy loading */
               <>
                 <img 
                   src={course.image}
                   alt={course.title}
                   loading="lazy"
                   decoding="async"
                   className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                 />
                 <NoiseTexture />
               </>
            ) : (
               /* Vector Art Mode: Fallback para arte vetorial */
               <>
                <NoiseTexture />
                {/* Partículas Interativas Reativas ao Mouse */}
                <InteractiveParticles mouseX={mouseX} mouseY={mouseY} />
                
                <div className="text-white absolute inset-0 opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700">
                   <ArtComponent />
                </div>
               </>
            )}
          </>
        )}

        {/* Gradiente de Fusão na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        
        {/* Tag Flutuante Glassmorphism */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg z-10">
          {style.icon}
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">{style.tag}</span>
        </div>
        
        {/* Número do Curso Grande */}
        <div className="absolute -bottom-4 -left-2 text-9xl font-display font-black text-white/5 select-none pointer-events-none z-0">
          {index + 1}
        </div>
      </div>
      
      {/* Conteúdo do Card */}
      <div className="p-6 flex-1 flex flex-col relative bg-brand-dark">
        <div className="mb-3 min-h-[3.5rem] flex items-end relative z-10">
            <h3 className="font-display font-bold text-xl text-white leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 flex items-center gap-2">
            <motion.div 
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <FutsalBallIcon className="w-5 h-5 text-brand-blue transition-all duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            </motion.div>
            <span>{course.title}</span>
            </h3>
        </div>

        <div className="w-12 h-1 bg-brand-blue/30 rounded-full mb-4 group-hover:w-full group-hover:bg-brand-blue transition-all duration-500 relative z-10"></div>

        <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1 line-clamp-3 relative z-10">
          {course.description}
        </p>
        

      </div>
      
      <div className="absolute inset-0 z-20" aria-label={`Ver detalhes de ${course.title}`}>
           <a href="https://teamkbca.com.br/finalizar-compra/?add-to-cart=2646" className="block w-full h-full" onClick={(e) => isDragging && e.preventDefault()} />
      </div>
    </div>
  );
};

export const CoursesCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Drag State
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      const targetScroll = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
    checkScroll();
  };

  return (
    <section id="courses" className="py-24 bg-brand-darker relative overflow-hidden select-none">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 leading-tight">
              Estudo <span className="text-brand-blue">personalizado</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Escolha o que quer estudar: por onde começar e o que quer aprender.
            </p>
          </div>
          
          {/* Controles de Navegação Desktop */}
          <div className="hidden md:flex items-center gap-4">
             <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group ${
                  canScrollLeft 
                    ? 'bg-brand-darker border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] cursor-pointer' 
                    : 'bg-brand-darker border-white/5 text-gray-700 cursor-not-allowed opacity-50'
                }`}
                aria-label="Anterior"
             >
                <ChevronLeft size={28} className={canScrollLeft ? "group-hover:-translate-x-1 transition-transform" : ""} />
             </button>
             <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group ${
                  canScrollRight 
                    ? 'bg-brand-darker border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] cursor-pointer' 
                    : 'bg-brand-darker border-white/5 text-gray-700 cursor-not-allowed opacity-50'
                }`}
                aria-label="Próximo"
             >
                <ChevronRight size={28} className={canScrollRight ? "group-hover:translate-x-1 transition-transform" : ""} />
             </button>
          </div>
        </div>

        {/* Container do Carrossel */}
        <div className="relative group/carousel">
            
            {/* Botão Flutuante Esquerdo (Mobile) */}
            {canScrollLeft && (
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:hidden bg-brand-dark/90 backdrop-blur border border-brand-blue/50 text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-blue/20"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Botão Flutuante Direito (Mobile) */}
            {canScrollRight && (
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:hidden bg-brand-dark/90 backdrop-blur border border-brand-blue/50 text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-blue/20"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <div 
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onScroll={checkScroll}
              style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
              className={`flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-12 px-4 snap-x snap-mandatory ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
            >
              {COURSES.map((course, index) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  index={index} 
                  isDragging={isDragging} 
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};