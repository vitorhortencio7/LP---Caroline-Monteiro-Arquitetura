'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ScrollFloat } from './ScrollFloat';
import { useSafeReducedMotion } from '@/hooks/useSafeReducedMotion';

const featuredProjects = [
  {
    title: 'Casa Terracota: Refúgio de Luz & Afeto',
    subtitle: 'Arquitetura Autoral — Ceará',
    tags: ['Construção do Zero', 'Materiais Locais', 'Conforto Climático'],
    desc: 'DESAFIO (LP): Erguer uma moradia de alto padrão estético otimizando materiais e custos regionais, sob o sol forte do Ceará. SENSAÇÃO (Editorial): Paredes de argila esculpidas por raios dourados de sol que flertam com móveis de linho cru, exalando uma brisa fresca, calma e de acolhimento genuíno.',
    img: 'https://picsum.photos/seed/arch_minimalist_house/1200/900',
  },
  {
    title: 'Apartamento Meireles: Geometria & Bossa',
    subtitle: 'Interiores & Luminotécnica — Fortaleza, CE',
    tags: ['Reforma Rápida', 'Marcenaria Inteligente', 'Cores Quentes'],
    desc: 'DESAFIO (LP): Reorganizar a planta retangular integrada sem quebras estruturais, maximizando espaços de armazenamento e respeitando o teto financeiro do cliente. SENSAÇÃO (Editorial): Estilo contemporâneo e despretensioso com iluminação quente que evoca a sensação tátil constante de um hotel boutique de veraneio.',
    img: 'https://picsum.photos/seed/arch_minimalist_inside/1200/900',
  }
];

const categories = [
  { title: 'Residências Autorais', count: '12 Projetos', img: 'https://picsum.photos/seed/arch_cat_res/600/800' },
  { title: 'Interiores & Luminotécnica', count: '18 Projetos', img: 'https://picsum.photos/seed/arch_cat_int/600/800' },
  { title: 'Gestão Técnica de Obras', count: '22 Projetos', img: 'https://picsum.photos/seed/arch_cat_const/600/800' },
  { title: 'Reformas Comerciais', count: '7 Projetos', img: 'https://picsum.photos/seed/arch_cat_com/600/800' },
];

export default function Portfolio() {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useSafeReducedMotion();

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % featuredProjects.length);
  };
  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="portfolio" className="bg-white text-preto py-20 lg:py-32">
      
      {/* SECTION 1: Crafting Spaces, Crafting Stories (Deep Dark Featured Section) */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 mb-28">
         <div className="bg-[#121110] rounded-[1.8rem] xs:rounded-[2.5rem] lg:rounded-[3rem] p-5 xs:p-8 lg:p-14 text-white relative overflow-hidden shadow-2xl">
            
            {/* Header with Navigation arrows */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-6 sm:pb-8 mb-6 sm:mb-10 gap-4 sm:gap-6">
               <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ocre mb-2 block font-semibold">
                     Voz das Obras
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                     O Desafio Prático & A Emoção do Espaço
                  </h3>
               </div>

               {/* Arrows */}
               <div className="flex items-center gap-2">
                  <button 
                    onClick={handlePrev} 
                    aria-label="Projeto anterior"
                    className="w-11 h-11 rounded-full border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
                  >
                     <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleNext} 
                    aria-label="Próximo projeto"
                    className="w-11 h-11 rounded-full border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
                  >
                     <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
               
               {/* Left (Image, 7 cols) */}
               <div className="lg:col-span-7 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg group bg-[#111]">
                  <AnimatePresence mode="wait">
                       <motion.div
                         key={activeIdx}
                         initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.05 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                         transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                         className="absolute inset-0 w-full h-full"
                       >
                          <Image 
                            src={featuredProjects[activeIdx].img} 
                            alt={featuredProjects[activeIdx].title} 
                            fill 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                            className={`object-cover ${shouldReduceMotion ? '' : 'transition-transform duration-[4000ms] ease-out group-hover:scale-105'}`}
                            referrerPolicy="no-referrer"
                          />
                       </motion.div>
                  </AnimatePresence>
               </div>

               {/* Right (Detail block, 5 cols) */}
               <div className="lg:col-span-5 flex flex-col justify-center min-h-[350px]">
                  <AnimatePresence mode="wait">
                       <motion.div
                         key={activeIdx}
                         initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
                         transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                         className="flex flex-col h-full"
                       >
                          <span className="font-mono text-[10px] text-ocre uppercase tracking-[0.25em]">
                             {featuredProjects[activeIdx].subtitle}
                          </span>
                          
                          <h4 className="text-3xl md:text-4xl font-serif text-white mt-2 mb-4 leading-tight tracking-tight">
                             {featuredProjects[activeIdx].title}
                          </h4>

                          {/* Badges */}
                          <div className="flex flex-wrap gap-2 mb-6">
                             {featuredProjects[activeIdx].tags.map((t, idx) => (
                               <span key={idx} className="font-mono text-[9px] uppercase tracking-wider bg-white/5 border border-white/10 px-3.5 py-1 rounded-full text-white/80">
                                 {t}
                               </span>
                             ))}
                          </div>

                          <p className="text-sm font-light text-creme/65 leading-relaxed mb-8">
                             {featuredProjects[activeIdx].desc}
                          </p>

                          {/* Terracota premium CTA button */}
                          <motion.a 
                            href="#contato"
                            whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            className="self-start inline-flex items-center gap-3 bg-terracota hover:bg-ocre text-white px-8 py-4 rounded-full font-medium text-xs tracking-wide uppercase transition-all duration-300 group"
                          >
                             Quero um Estudo Assim
                             <span className="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                          </motion.a>
                       </motion.div>
                  </AnimatePresence>
               </div>

            </div>

         </div>
      </div>

      {/* SECTION 2: Designing the Future (Category standing Grid) */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 mt-20">
         
         {/* Sub head with view-all action (Baseland Style) */}
         <ScrollFloat delay={0.1} yOffset={25}>
            <div className="flex justify-between items-end border-b border-bege pb-6 mb-12 gap-8">
               <h3 className="text-2xl sm:text-4xl font-serif text-preto tracking-tight">
                  Desenhando o Futuro de <br className="sm:hidden" />
                  <span className="italic text-terracota font-normal">Seus Ambientes</span>
               </h3>
               
               <a href="#contato" className="border border-[#FAF8F5]/30 hover:border-[#FAF8F5] md:border-preto/30 md:hover:border-preto font-mono text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-full transition-colors flex items-center gap-2 group whitespace-nowrap text-preto">
                  Iniciar Projeto
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform">↗</span>
               </a>
            </div>
         </ScrollFloat>

         {/* 4 Standing Vertical Card Columns */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none font-sans">
            {categories.map((cat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40, scale: shouldReduceMotion ? 1 : 0.97 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 viewport={{ once: true, margin: '-20px' }}
                 transition={{ duration: 1.0, ease: [0.33, 1, 0.68, 1], delay: i * 0.12 }}
                 className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group shadow-sm bg-[#FAF8F5] cursor-pointer"
               >
                  {/* Category Image */}
                  <Image 
                    src={cat.img} 
                    alt={cat.title} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    className={`object-cover scale-100 ${shouldReduceMotion ? '' : 'group-hover:scale-[1.05] transition-transform duration-[1200ms] ease-[cubic-bezier(0.33,1,0.68,1)]'}`}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-preto/80 via-preto/20 to-transparent opacity-90 transition-opacity duration-500" />
                  
                  {/* Category Text (Align at the bottom, Baseland style) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10">
                     <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#CA8B6E] mb-1.5 font-semibold">
                        {cat.count}
                     </p>
                     <h4 className="font-serif text-xl sm:text-2xl text-white tracking-tight leading-tight group-hover:text-ocre transition-colors font-light">
                        {cat.title}
                     </h4>
                  </div>
                  
                  {/* Decorative fine borders visible on hover */}
                  <div className="absolute inset-4 border border-white/10 rounded-[1.5rem] pointer-events-none group-hover:border-white/30 transition-colors duration-500" />

               </motion.div>
            ))}
         </div>

      </div>

    </section>
  );
}
