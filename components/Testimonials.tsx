'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const reviewsArea = [
  { name: 'Ana Flávia & Marcos', location: 'Casa Terracota, Cariri', text: 'A Caroline entendeu perfeitamente que queríamos um lar acolhedor, acessível e com personalidade única. A obra foi super tranquila e a presença constante dela no canteiro nos trouxe imensa economia e confiança.' },
  { name: 'Juliana Fernandes', location: 'Showroom Meireles, Fortaleza', text: 'Sinto profundo orgulho em ver um escritório local liderado por mulheres com tanta competência operacional. O projeto traduziu meu estilo de vida, dando alma nova ao apartamento sem estourar nosso orçamento.' },
  { name: 'Família Souza Vitti', location: 'Residência Integrada, Ceará', text: 'A escuta atenta de Caroline faz toda a diferença: o projeto é realista e focado em pessoas de verdade, com volumes elegantes, materiais fáceis de manter e que aproveitam o melhor da nossa luz regional.' }
];

export default function Testimonials() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Spotlight Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const spotlightY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(250, 248, 245, 0.16) 0%, rgba(255, 255, 255, 0) 80%)`
  );

  // Magnetic Button Motion Values
  const magneticRef = useRef<HTMLDivElement>(null);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const magX = useSpring(mX, { stiffness: 120, damping: 20 });
  const magY = useSpring(mY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMagMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !magneticRef.current) return;
    const rect = magneticRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < 140) { // Hover interaction radius
      mX.set(distanceX * 0.35);
      mY.set(distanceY * 0.35);
    } else {
      mX.set(0);
      mY.set(0);
    }
  };

  const handleMagMouseLeave = () => {
    mX.set(0);
    mY.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>
      {/* 1. TESTIMONIALS SECTION */}
      <section id="depoimentos" className="bg-creme py-24 lg:py-36 px-6 lg:px-12 w-full relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-center relative z-10">
             
             {/* Section Title */}
             <div className="lg:w-1/3">
                 <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#A15C4C] block mb-3 font-semibold">
                    Relacionamento
                 </span>
                 <h2 className="text-4xl lg:text-[56px] leading-[1.1] font-serif text-preto mb-6 tracking-tight">
                    Parcerias de <span className="italic text-terracota font-normal">Confiança</span>
                 </h2>
                 <p className="text-preto/70 mb-8 font-light text-base leading-relaxed">
                    Tratamos o seu espaço com o afeto que ele merece. Cada projeto resulta de escuta ativa, controle técnico rígido de materiais e profunda transparência financeira.
                 </p>
             </div>

             {/* Cards Grid */}
             <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {reviewsArea.map((review, i) => (
                    <div key={i} className={`bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 relative border border-bege/50 flex flex-col justify-between ${i === 2 ? 'md:col-span-2 md:w-3/4 md:mx-auto lg:w-2/3' : ''}`}>
                        <div className="text-7xl leading-none text-ocre font-serif absolute -top-1 left-6 opacity-20 pointer-events-none">&quot;</div>
                        
                        <div className="text-preto/80 font-light italic mb-8 relative z-10 pt-4 text-sm sm:text-base leading-relaxed">
                           {review.text}
                        </div>

                        <div className="flex items-center gap-4 border-t border-bege/30 pt-6">
                           <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-bege shrink-0">
                              <Image 
                                src={`https://picsum.photos/seed/portrait_new${i + 8}/100/100`} 
                                fill 
                                sizes="48px"
                                alt={review.name} 
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                                referrerPolicy="no-referrer" 
                              />
                           </div>
                           <div>
                              <p className="font-serif font-medium text-base text-preto leading-none mb-1">{review.name}</p>
                              <p className="font-mono text-[9px] text-[#A15C4C] uppercase tracking-widest">{review.location}</p>
                           </div>
                        </div>
                    </div>
                ))}
             </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION: Call to Action Final (Rodapé da LP) - High-End Editorial Full-Width Block */}
      <section 
        id="contato" 
        className="w-full bg-terracota relative overflow-hidden py-32 lg:py-48 px-6 lg:px-12 select-none flex flex-col justify-center min-h-[90vh] z-10"
        onMouseMove={handleMouseMove}
      >
        {/* Spotlight light of architecture (only active on non-mobile devices) */}
        {!isMobile && (
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-30 z-0 mix-blend-screen"
            style={{ background: spotlightBg }}
          />
        )}

        {/* Dynamic Abstract lines background for extra premiumness */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" />
             <line x1="10" y1="0" x2="10" y2="100" stroke="white" strokeWidth="0.2" />
             <line x1="90" y1="0" x2="90" y2="100" stroke="white" strokeWidth="0.2" />
          </svg>
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
           
           {/* Editorial Badge */}
           <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 border border-white/10 px-4 py-2 rounded-full mb-10 inline-block bg-white/5 backdrop-blur-sm">
              Próximo Passo / Contato
           </span>

           {/* Typography as Protagonist */}
           <div className="max-w-5xl mb-16">
              <h2 className="font-sans font-light tracking-tight text-white/90 text-2xl sm:text-4xl lg:text-5xl leading-none uppercase mb-2">
                 Seu refúgio autoral está a um
              </h2>
              <h3 className="font-serif italic font-normal text-white text-[11vw] sm:text-[8vw] lg:text-[7vw] leading-[0.95] tracking-tight block">
                 diálogo de distância.
              </h3>
           </div>

           {/* Primary Magnetic WhatsApp CTA */}
           <div 
             ref={magneticRef}
             onMouseMove={handleMagMouseMove}
             onMouseLeave={handleMagMouseLeave}
             className="relative p-8 mb-20 flex items-center justify-center pointer-events-auto"
           >
              <motion.a
                href="https://wa.me/5585999999999"
                target="_blank"
                rel="noreferrer"
                style={{ x: magX, y: magY }}
                whileTap={{ scale: 0.96 }}
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-white/20 bg-[#121110]/20 hover:bg-[#FAF8F5] hover:text-preto text-white hover:border-transparent transition-colors duration-500 backdrop-blur-sm flex flex-col justify-center items-center gap-1.5 shadow-2xl shrink-0 group text-center cursor-pointer"
              >
                 {/* Elegantly placed WhatsApp Custom Icon inside CTA */}
                 <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#A15C4C]/10 flex items-center justify-center transition-colors mb-1 shrink-0">
                    <svg 
                      className="w-5 h-5 text-ocre group-hover:text-[#A15C4C] transition-colors duration-300 shrink-0" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.906-6.99C16.246 1.875 13.762 1.84 11.13 1.84c-5.437 0-9.861 4.419-9.865 9.864 0 1.902.498 3.755 1.44 5.394L1.708 21.05l4.039-1.496z" />
                      <path d="M17.487 14.394c-.29-.14-1.716-.844-1.98-.94-.265-.096-.458-.14-.65.14-.191.28-.743.94-.91 1.13-.167.19-.335.21-.624.07-2.905-1.45-3.807-2.54-4.63-3.953-.167-.285-.017-.44.123-.58.125-.124.28-.323.42-.483.14-.16.19-.27.285-.45.095-.18.047-.34-.024-.48-.07-.14-.65-1.565-.89-2.14-.233-.56-.47-.48-.65-.49-.17-.006-.365-.007-.56-.007-.195 0-.513.073-.78.365-.268.29-1.023 1.002-1.023 2.445 0 1.443 1.05 2.836 1.196 3.03.145.193 2.066 3.154 5.006 4.43.7.3 1.246.48 1.672.615.702.223 1.34.192 1.845.117.563-.083 1.716-.702 1.96-1.38.243-.678.243-1.26.17-1.38-.073-.12-.266-.19-.556-.33z" />
                    </svg>
                 </div>
                 <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-semibold text-white/50 group-hover:text-preto/40 transition-colors">
                    Iniciar Projeto
                 </span>
                 <span className="font-serif text-lg sm:text-xl font-light text-white group-hover:text-preto transition-colors max-w-[130px] leading-tight">
                    Falar no WhatsApp
                 </span>
                 <span className="text-ocre group-hover:text-terracota group-hover:translate-y-0.5 transition-all text-xs font-mono mt-1">
                    ↓
                 </span>
              </motion.a>
           </div>

           {/* Secondary Conversion: Underlined Minimalist Email Container */}
           <div className="w-full max-w-md mx-auto pt-8 border-t border-white/10 flex flex-col gap-4 items-center justify-center">
              <p className="text-xs sm:text-sm font-light text-white/70 max-w-sm mb-4 leading-relaxed">
                 Ter um projeto autoral é um investimento acessível. Se preferir e-mail, envie suas especificações abaixo:
              </p>

              <div className="w-full relative px-4">
                 {subscribed ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="text-sm font-mono tracking-wide text-ocre text-center py-2"
                    >
                       Mensagem enviada com sucesso! Logo entraremos em contato. ✨
                    </motion.div>
                 ) : (
                    <form onSubmit={handleSubmit} className="relative w-full pb-3 flex items-center justify-between">
                       <input 
                         type="email" 
                         required
                         placeholder="Escreva seu melhor e-mail..." 
                         className="bg-transparent border-none py-2.5 outline-none text-white font-serif italic text-base placeholder:text-white/30 tracking-wide w-full pr-12 focus:ring-x focus:border-none focus:outline-none ring-0"
                         value={email}
                         onFocus={() => setIsFocused(true)}
                         onBlur={() => setIsFocused(false)}
                         onChange={(e) => setEmail(e.target.value)}
                       />

                       {/* Interactive underline expanding on focus */}
                       <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
                       <motion.div 
                         className="absolute bottom-0 left-0 h-[1.5px] bg-[#FAF8F5]"
                         initial={{ width: "0%" }}
                         animate={{ width: isFocused ? "100%" : "0%" }}
                         transition={{ duration: 0.4, ease: "easeInOut" }}
                       />
                       
                       {/* Elegant icon button appearing on typing */}
                       <AnimatePresence>
                          {email.length > 0 && (
                             <motion.button 
                               type="submit"
                               initial={{ opacity: 0, x: -10 }}
                               animate={{ opacity: 1, x: 0 }}
                               exit={{ opacity: 0, x: -10 }}
                               transition={{ duration: 0.3 }}
                               aria-label="Registrar e-mail para contato"
                               className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-ocre text-white/60 transition-colors cursor-pointer shrink-0"
                             >
                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
                             </motion.button>
                          )}
                       </AnimatePresence>
                    </form>
                 )}
              </div>
           </div>

        </div>
      </section>
    </>
  );
}
