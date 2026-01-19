import React, { useState } from 'react';
import { Mail, User, ArrowRight, Lock } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Captured:", { name, email });
    setSubmitted(true);
  };

  return (
    <section id="capture" className="py-24 bg-brand-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-brand-dark border border-brand-blue/30 rounded-3xl p-8 md:p-16 max-w-4xl mx-auto shadow-2xl shadow-brand-blue/10 flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Entre para o <br/>
              <span className="text-brand-blue">Time de Elite</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Cadastre-se para receber ofertas exclusivas dos cursos, conteúdos gratuitos de tática semanalmente e acesso antecipado a novas turmas.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                 {/* Mock avatars */}
                 <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-brand-dark"></div>
                 <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-brand-dark"></div>
                 <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-brand-dark"></div>
              </div>
              <p>Junte-se à nossa comunidade</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-brand-darker/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Seu Nome</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Silva"
                      className="w-full bg-brand-dark border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Seu Melhor E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="carlos@exemplo.com"
                      className="w-full bg-brand-dark border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group mt-4 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  Quero Acessar Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1 mt-2">
                  <Lock className="w-3 h-3" /> Seus dados estão seguros. Livre de SPAM.
                </p>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Sucesso!</h3>
                <p className="text-gray-400">Verifique seu e-mail para confirmar sua inscrição no Team KBça.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};