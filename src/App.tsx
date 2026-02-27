/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  ShieldCheck, 
  Briefcase, 
  Users, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  Gavel,
  Landmark,
  FileText
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Áreas de Atuação', href: '#practice' },
    { name: 'Diferenciais', href: '#why-us' },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-[#C5A880]" />
            <span className="font-serif text-2xl font-semibold tracking-tight">
              Velloso & <span className="text-[#C5A880]">Associados</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-brand-dark/80 hover:text-[#C5A880] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-[#1A1C20] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#C5A880] transition-colors flex items-center gap-2"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 right-0 bg-[#F9F7F4] border-b border-black/5 z-40 md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-brand-dark py-2 border-b border-black/5"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#1A1C20] text-white px-6 py-3 rounded-lg text-center font-medium mt-2"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[#A3875F] text-xs font-semibold uppercase tracking-widest mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Excelência & Segurança Jurídica</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
                Protegendo seus <br/>
                <span className="gold-gradient-text italic">direitos</span> com <br/>
                visão estratégica.
              </h1>
              <p className="text-lg text-brand-muted max-w-xl mb-10 leading-relaxed">
                Um escritório boutique focado em soluções jurídicas personalizadas, combinando tradição, segurança e as mais modernas práticas do direito.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="bg-[#1A1C20] text-white px-8 py-4 rounded-full font-medium hover:bg-[#C5A880] transition-colors flex items-center justify-center gap-2 group"
                >
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#practice"
                  className="px-8 py-4 rounded-full font-medium border border-brand-dark/20 hover:border-brand-dark transition-colors flex items-center justify-center"
                >
                  Nossas Áreas
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto"
            >
              <div className="absolute inset-0 bg-[#C5A880] rounded-t-full rounded-b-[2rem] translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200" 
                alt="Escritório de advocacia moderno" 
                className="w-full h-full object-cover rounded-t-full rounded-b-[2rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-10 -left-8 md:-left-16 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-black/5"
              >
                <div className="w-12 h-12 bg-[#F9F7F4] rounded-full flex items-center justify-center text-[#C5A880]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold leading-none">15+</p>
                  <p className="text-xs text-brand-muted uppercase tracking-wider mt-1">Anos de Experiência</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-24 bg-[#F9F7F4] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#C5A880]/10 rounded-3xl transform -rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1555322464-118e66336444?auto=format&fit=crop&q=80&w=1000" 
                    alt="Nossa equipe" 
                    className="w-full h-auto object-cover rounded-2xl shadow-lg relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2} className="order-1 md:order-2">
                <h2 className="text-sm font-semibold text-[#C5A880] uppercase tracking-widest mb-3">Sobre Nós</h2>
                <h3 className="text-4xl md:text-5xl font-serif mb-6">
                  Tradição que se <span className="italic text-[#C5A880]">renova</span> a cada caso.
                </h3>
                <p className="text-brand-muted text-lg leading-relaxed mb-6">
                  Fundado com o propósito de oferecer uma advocacia de excelência, nosso escritório se destaca pela abordagem artesanal em cada demanda. Não acreditamos em soluções padronizadas.
                </p>
                <p className="text-brand-muted text-lg leading-relaxed mb-8">
                  Nossa equipe é formada por profissionais com sólida formação acadêmica e vasta experiência prática, prontos para atuar nos cenários mais complexos e desafiadores, sempre com ética, transparência e foco absoluto no resultado.
                </p>
                
                <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-8">
                  <div>
                    <p className="text-4xl font-serif text-[#C5A880] mb-2">500+</p>
                    <p className="text-sm font-medium text-brand-dark">Casos de Sucesso</p>
                  </div>
                  <div>
                    <p className="text-4xl font-serif text-[#C5A880] mb-2">98%</p>
                    <p className="text-sm font-medium text-brand-dark">Clientes Satisfeitos</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section id="practice" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-2xl">
                  <h2 className="text-sm font-semibold text-[#C5A880] uppercase tracking-widest mb-3">Especialidades</h2>
                  <h3 className="text-4xl md:text-5xl font-serif">Áreas de Atuação</h3>
                </div>
                <p className="text-brand-muted max-w-md">
                  Nossa equipe de especialistas está preparada para atuar em casos complexos com a máxima discrição e eficiência.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Landmark, title: "Direito Empresarial", desc: "Assessoria completa para empresas, fusões, aquisições e governança corporativa." },
                { icon: Users, title: "Direito de Família", desc: "Tratamento humanizado em divórcios, sucessões, inventários e planejamento patrimonial." },
                { icon: Gavel, title: "Direito Penal", desc: "Defesa técnica especializada em crimes empresariais, tributários e compliance." },
                { icon: FileText, title: "Direito Civil", desc: "Resolução de conflitos, contratos complexos e responsabilidade civil." },
                { icon: Briefcase, title: "Direito Trabalhista", desc: "Consultoria preventiva e contencioso estratégico para empregadores e executivos." },
                { icon: ShieldCheck, title: "Direito Digital", desc: "LGPD, contratos de tecnologia, crimes cibernéticos e propriedade intelectual." },
              ].map((area, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group p-8 rounded-2xl border border-black/5 bg-[#F9F7F4] hover:bg-[#1A1C20] hover:text-white transition-all duration-500 cursor-pointer h-full flex flex-col">
                    <area.icon className="w-10 h-10 text-[#C5A880] mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    <h4 className="text-xl font-serif font-medium mb-3">{area.title}</h4>
                    <p className="text-brand-muted group-hover:text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                      {area.desc}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-medium text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us / Security */}
        <section id="why-us" className="py-24 bg-[#1A1C20] text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A880]/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h2 className="text-sm font-semibold text-[#C5A880] uppercase tracking-widest mb-3">Diferenciais</h2>
                <h3 className="text-4xl md:text-5xl font-serif mb-6">
                  Segurança e <span className="italic text-[#C5A880]">Inovação</span> na Prática Jurídica
                </h3>
                <p className="text-white/70 mb-8 text-lg leading-relaxed">
                  Entendemos que a advocacia moderna exige mais do que conhecimento técnico. Exige segurança da informação, agilidade e uma experiência transparente para o cliente.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Segurança de Dados", desc: "Infraestrutura tecnológica com criptografia de ponta para proteger suas informações sensíveis." },
                    { title: "Atendimento Personalizado", desc: "Acesso direto aos sócios e relatórios proativos sobre o andamento do seu caso." },
                    { title: "Visão Estratégica", desc: "Não apenas resolvemos problemas, mas antecipamos riscos e criamos oportunidades." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-[#C5A880]/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#C5A880]"></div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                        <p className="text-white/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2} className="relative">
                <div className="aspect-square rounded-full border border-white/10 p-4 relative">
                  <div className="absolute inset-0 border border-[#C5A880]/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1505664173615-04f1b0b23f08?auto=format&fit=crop&q=80&w=1000" 
                    alt="Detalhe arquitetônico" 
                    className="w-full h-full object-cover rounded-full grayscale opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Stats */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A1C20]/90 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center w-3/4 shadow-2xl">
                    <ShieldCheck className="w-10 h-10 text-[#C5A880] mx-auto mb-4" />
                    <p className="text-3xl font-serif mb-2">100%</p>
                    <p className="text-xs text-white/60 uppercase tracking-widest">Sigilo Absoluto</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#F9F7F4]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-black/5">
              <div className="grid md:grid-cols-2 gap-16">
                <FadeIn>
                  <h2 className="text-4xl font-serif mb-4">Inicie uma Conversa</h2>
                  <p className="text-brand-muted mb-10">
                    Agende uma consulta confidencial com nossa equipe. Estamos prontos para entender sua situação e propor a melhor estratégia.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F9F7F4] flex items-center justify-center text-[#C5A880] shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Nosso Escritório</h4>
                        <p className="text-brand-muted text-sm">Av. Brigadeiro Faria Lima, 3000<br/>15º Andar - Itaim Bibi<br/>São Paulo - SP</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F9F7F4] flex items-center justify-center text-[#C5A880] shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Telefone</h4>
                        <p className="text-brand-muted text-sm">+55 (11) 3000-0000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F9F7F4] flex items-center justify-center text-[#C5A880] shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">E-mail</h4>
                        <p className="text-brand-muted text-sm">contato@vellosoassociados.com.br</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-dark">Nome</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl bg-[#F9F7F4] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 transition-all"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-dark">Telefone</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-xl bg-[#F9F7F4] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 transition-all"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-dark">E-mail</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl bg-[#F9F7F4] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-dark">Mensagem Breve</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-[#F9F7F4] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 transition-all resize-none"
                        placeholder="Como podemos ajudar?"
                      ></textarea>
                    </div>
                    <button className="w-full bg-[#1A1C20] text-white py-4 rounded-xl font-medium hover:bg-[#C5A880] transition-colors">
                      Enviar Mensagem
                    </button>
                    <p className="text-xs text-center text-brand-muted mt-4">
                      Suas informações são tratadas com absoluto sigilo, de acordo com a LGPD.
                    </p>
                  </form>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1C20] text-white/60 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <Scale className="w-6 h-6 text-[#C5A880]" />
              <span className="font-serif text-xl font-semibold tracking-tight">
                Velloso & <span className="text-[#C5A880]">Associados</span>
              </span>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Velloso & Associados. Todos os direitos reservados.</p>
            <p className="text-xs">OAB/SP 00.000</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
