import React, { useRef } from 'react';
import { ChevronRight, PlayCircle, Star, Users, Hand, Move } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FutsalCourtLines = () => (
  <svg viewBox="0 0 400 240" className="w-full h-full opacity-30 stroke-white pointer-events-none" fill="none" strokeWidth="2">
    {/* Contorno Quadra */}
    <rect x="10" y="10" width="380" height="220" rx="4" />
    
    {/* Linha Central */}
    <line x1="200" y1="10" x2="200" y2="230" />
    <circle cx="200" cy="120" r="30" />
    <circle cx="200" cy="120" r="2" fill="white" />
    
    {/* Áreas Esquerda */}
    <path d="M10,80 Q50,80 50,120 T10,160" />
    <path d="M10,95 L15,95" strokeWidth="4" /> {/* Trave */}
    <path d="M10,145 L15,145" strokeWidth="4" /> {/* Trave */}
    
    {/* Áreas Direita */}
    <path d="M390,80 Q350,80 350,120 T390,160" />
    <path d="M390,95 L385,95" strokeWidth="4" /> {/* Trave */}
    <path d="M390,145 L385,145" strokeWidth="4" /> {/* Trave */}
    
    {/* Escanteios */}
    <path d="M10,20 A10,10 0 0,1 20,10" />
    <path d="M390,20 A10,10 0 0,0 380,10" />
    <path d="M10,220 A10,10 0 0,0 20,230" />
    <path d="M390,220 A10,10 0 0,1 380,230" />
  </svg>
);

interface PlayerTokenProps {
  color: string;
  top: string;
  left: string;
  label?: string;
  delay: number;
  constraintsRef: React.RefObject<HTMLDivElement>;
}

const PlayerToken = ({ color, top, left, label, delay, constraintsRef }: PlayerTokenProps) => (
  <motion.div 
    drag
    dragConstraints={constraintsRef}
    dragElastic={0.2} // Elasticidade aumentada para sensação natural
    dragMomentum={false}
    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} // Retorno físico suave
    whileHover={{ scale: 1.2, cursor: 'grab', zIndex: 50 }}
    whileDrag={{ scale: 1.3, cursor: 'grabbing', zIndex: 50 }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: delay, duration: 0.5, type: "spring" }}
    className={`absolute w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-[10px] font-bold text-white z-10 ${color}`}
    style={{ top, left }}
  >
    {label}
  </motion.div>
);

export const Hero: React.FC = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  
  // Parallax Setup
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]); // Move o fundo 300px para baixo enquanto rola 1000px
  const opacityBg = useTransform(scrollY, [0, 800], [1, 0.4]); // Leve transparência ao rolar

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-darker pt-20 pb-10">
      
      {/* --- Background Immersive com Parallax --- */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        {/* Imagem de Futsal/Estádio Escura */}
        <img 
          src="https://images.unsplash.com/photo-1516567838555-81786e8211a7?q=80&w=2070&auto=format&fit=crop" 
          alt="Quadra de Futsal Background" 
          className="w-full h-full object-cover opacity-20 scale-110 origin-center" // Scale aumentado para evitar bordas brancas no paralaxe
        />
        {/* Overlay Gradiente Forte */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-brand-blue/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-brand-darker/50"></div>
        
        {/* Grid Tático Decorativo no Fundo */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* --- Conteúdo Texto (Esquerda) --- */}
        <div className="flex-1 max-w-3xl lg:text-left text-center pointer-events-none">
          <div className="pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-brand-blue/30 rounded-full bg-brand-blue/10 backdrop-blur-md"
            >
              <Star size={14} className="text-brand-orange fill-brand-orange" />
              <span className="text-brand-blue font-bold text-xs md:text-sm tracking-widest uppercase">
                Metodologia de Campeões
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-6"
            >
              DOMINE CADA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-blue">
                CENTÍMETRO
              </span> DA <br/>
              QUADRA
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              A prancheta não mente. Aprenda tática, gestão de elenco e leitura de jogo 
              com quem vive o futsal de alto nível. Do sub-7 ao profissional.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a 
                href="#capture" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/25 text-lg group"
              >
                Quero Evoluir Agora
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#courses"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/10 transition-all text-lg"
              >
                <PlayCircle size={20} className="text-brand-cyan" />
                Ver Cursos
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400 border-t border-white/5 pt-6"
            >
              <div className="flex items-center gap-2">
                  <Users size={18} className="text-brand-blue" />
                  <span>Junte-se a <strong className="text-white">1.200+</strong> treinadores</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center gap-1">
                  <div className="flex text-brand-orange">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span className="text-white font-bold ml-1">5.0</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- Visual "A Prancheta Interativa" (Direita) --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block flex-1 relative perspective-1000 z-20"
        >
          {/* Instrução de Interatividade */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-brand-cyan text-sm font-semibold bg-brand-darker/80 px-3 py-1 rounded-full border border-brand-cyan/20 shadow-lg pointer-events-none"
          >
            <Hand size={14} className="animate-pulse" />
            <span>Prancheta Interativa: Arraste os jogadores!</span>
          </motion.div>

          {/* Card Glassmorphism simulando a Prancheta */}
          <motion.div 
             ref={boardRef}
             whileHover={{ rotateY: 0, scale: 1.02 }}
             className="relative w-full max-w-lg aspect-[4/3] mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-brand-blue/20 overflow-hidden transform rotate-y-6 transition-all duration-500 cursor-crosshair"
          >
             
             {/* Cabeçalho da Prancheta */}
             <div className="absolute top-0 left-0 right-0 h-12 bg-black/40 border-b border-white/10 flex items-center justify-between px-6 pointer-events-none">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Move size={12} /> Team KBça Tactics
                </span>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                   <span className="text-xs text-red-500 font-bold">AO VIVO</span>
                </div>
             </div>

             {/* Corpo da Quadra */}
             <div className="absolute inset-0 top-12 p-6 bg-brand-blue/90">
                <FutsalCourtLines />
                
                {/* Jogadores (Tokens) - Arrastáveis */}
                
                {/* Time Azul (Defesa) */}
                <PlayerToken color="bg-blue-600" top="45%" left="15%" label="GK" delay={1.0} constraintsRef={boardRef} />
                <PlayerToken color="bg-blue-600" top="30%" left="30%" label="2" delay={1.1} constraintsRef={boardRef} />
                <PlayerToken color="bg-blue-600" top="60%" left="30%" label="3" delay={1.2} constraintsRef={boardRef} />
                <PlayerToken color="bg-blue-600" top="45%" left="40%" label="4" delay={1.3} constraintsRef={boardRef} />

                {/* Time Laranja (Ataque - Movimentação) */}
                <PlayerToken color="bg-brand-orange" top="20%" left="60%" label="9" delay={1.5} constraintsRef={boardRef} />
                <PlayerToken color="bg-brand-orange" top="70%" left="60%" label="7" delay={1.6} constraintsRef={boardRef} />
                <PlayerToken color="bg-brand-orange" top="45%" left="75%" label="10" delay={1.7} constraintsRef={boardRef} />
                
                {/* Bola (Também arrastável) */}
                <motion.div
                  drag
                  dragConstraints={boardRef}
                  dragElastic={0.2} // Elasticidade aumentada
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} // Retorno físico suave
                  whileHover={{ scale: 1.2, cursor: 'grab' }}
                  whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2, type: "spring" }}
                  className="absolute w-4 h-4 bg-white rounded-full shadow-lg z-20 flex items-center justify-center"
                  style={{ top: '50%', left: '50%' }}
                >
                  <div className="w-full h-full border border-black/20 rounded-full"></div>
                </motion.div>

             </div>

             {/* Reflexo de Vidro */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
          </motion.div>

          {/* Elementos Flutuantes Decorativos */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 bg-brand-dark border border-white/10 p-4 rounded-xl shadow-xl z-20 pointer-events-none"
          >
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                 <img src="/logo.png" className="w-6 h-6 object-contain opacity-80" alt="" onError={(e) => e.currentTarget.style.display = 'none'} />
                 <Star size={20} className="absolute" />
               </div>
               <div>
                 <p className="text-white font-bold text-sm">Coach KBça</p>
                 <p className="text-xs text-gray-400">Analista Tático</p>
               </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};