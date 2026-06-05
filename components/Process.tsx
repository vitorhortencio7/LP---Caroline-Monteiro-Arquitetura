'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, Home, Palette, Compass, Zap } from 'lucide-react';
import { ScrollFloat } from './ScrollFloat';

const services = [
  {
    icon: Home,
    idTag: '01 / ARQUITETURA PURA',
    title: 'Residências Autorais',
    desc: 'Projetos completos desenvolvidos do zero absoluto. Sintonizo seus hábitos de vida às melhores soluções bioclimáticas — tirando máximo proveito da luz e do vento locais do Ceará para criar uma casa com identidade, beleza e rigidez técnica, totalmente compatível com o seu bolso.',
    colorClass: 'text-terracota border-terracota/20'
  },
  {
    icon: Palette,
    idTag: '02 / DETALHES DE ALMA',
    title: 'Interiores & Reformas',
    desc: 'Renovação estética de espaços existentes. Planejo o layout com maestria, escolho materiais nobres, marcenaria inteligente, cores quentes, e iluminação acolhedora para transformar cômodos sem vida em refúgios calorosos de paz e aconchego prático.',
    colorClass: 'text-ocre border-ocre/20'
  },
  {
    icon: Compass,
    idTag: '03 / CANTEIRO PROTEGIDO',
    title: 'Gestão & Acompanhamento',
    desc: 'A tranquilidade do rascunho até a entrega das chaves. Caroline Monteiro imprime seu domínio de canteiro de obra organizando orçamentos, cronogramas e compatibilizando serviços elétricos/hidráulicos para que sua construção ande com precisão alemã e afeto brasileiro.',
    colorClass: 'text-[#5D6B54] border-[#5D6B54]/20'
  },
  {
    icon: Zap,
    idTag: '04 / DIRECIONAMENTO RÁPIDO',
    title: 'Consultoria Express',
    desc: 'Para quem busca transformação rápida e assertiva sem a necessidade de um projeto integral. Oriento você pessoalmente na escolha de acabamentos, paletas de cores, iluminação adequada ou no layout do seu ambiente de forma dinâmica e descomplicada.',
    colorClass: 'text-ocre border-ocre/20'
  }
];

const slides = [
  {
    title: 'Refúgio Terracota: Espaço & Identidade',
    desc: 'Um projeto acolhedor projetado de forma acessível para valorizar as texturas da terra e do linho, unindo a sensibilidade da alma à inteligência de custos.',
    tags: ['Interiores', 'Residencial', 'Acessível'],
    img: 'https://picsum.photos/seed/slide_refugio/800/500',
  },
  {
    title: 'Apartamento Itaim: Geometria Viva',
    desc: 'Combino cores quentes e materiais naturais para trazer personalidade única de moda ao imóvel, transformando cada metro quadrado em expressão pura de vida.',
    tags: ['Luminotécnico', 'Estilo Autoral', 'Personalidade'],
    img: 'https://picsum.photos/seed/slide_itaim/800/500',
  },
  {
    title: 'Cobertura SP: Sensibilidade & Rigor',
    desc: 'Rigor técnico de obra e acompanhamento próximo de canteiro, prestando tributo às formas fluidas e livres de arquitetura brasileira contemporânea.',
    tags: ['Gestão de Obra', 'Rigor Técnico', 'Clima Local'],
    img: 'https://picsum.photos/seed/slide_cobertura/800/500',
  },
];

export default function Process() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="metodo" className="py-24 lg:py-36 w-full max-w-7xl mx-auto px-6 lg:px-12 bg-creme select-none overflow-hidden">
      
      {/* 1. SERVICES GRID - Clareza de Landing Page */}
      <div className="mb-32">
         <ScrollFloat delay={0.1} yOffset={20}>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
               <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-terracota font-semibold mb-3 block">
                     Como Ajudo
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-preto max-w-2xl leading-[1.12] tracking-tight">
                     Sua jornada rumo a um espaço com <span className="italic text-terracota font-normal">significado</span>.
                  </h2>
               </div>
               <p className="text-sm font-light text-preto/60 max-w-sm leading-relaxed">
                  Elimino o desperdício financeiro e as dores de cabeça habituais em obras através de serviços estruturados para cada fase da sua jornada.
               </p>
            </div>
         </ScrollFloat>

         {/* Grid of 4 services */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, index) => {
               const IconComponent = srv.icon;
               return (
                  <motion.div 
                     key={index}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: '-50px' }}
                     transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: index * 0.1 }}
                     whileHover={{ y: -6, transition: { duration: 0.3 } }}
                     className="bg-white/95 border border-bege/60 rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-md transition-all group duration-300"
                  >
                     <div>
                        <div className="flex justify-between items-start mb-6">
                           <span className="font-mono text-[10px] tracking-widest text-preto/40 font-semibold uppercase">
                              {srv.idTag}
                           </span>
                           <div className={`p-4 rounded-full border bg-creme/30 ${srv.colorClass} group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="w-5 h-5 stroke-[1.5]" />
                           </div>
                        </div>
                        <h3 className="font-serif text-2xl lg:text-3xl text-preto mb-4 group-hover:text-terracota transition-colors">
                           {srv.title}
                        </h3>
                     </div>
                     <p className="text-sm font-light text-preto/70 leading-relaxed pr-2">
                        {srv.desc}
                     </p>
                  </motion.div>
               );
            })}
         </div>
      </div>

      {/* 2. SLIDER METHOD - Estudo de caso & Poesia */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
         {/* Left Column (5 out of 12 cols) */}
         <motion.div 
           initial={{ opacity: 0, x: -60 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.15 }}
           transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
           className="lg:col-span-5 flex flex-col justify-between h-full"
         >
           <div>
             <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-terracota font-semibold mb-3 block">
                Na Prática
             </span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-preto mb-8 leading-tight tracking-tight">
                Espaços <br className="hidden md:block" />
                Concebidos <br className="hidden md:block" />
                sob o <span className="italic text-[#5D6B54] font-normal">Afeto</span>.
             </h2>

             {/* Badges */}
             <div className="flex flex-wrap gap-2 mb-12">
                {['Planejamento Real', 'Clima & Conforto', 'Canteiro Rigoroso', 'Escuta Ativa'].map((tag, idx) => (
                  <span key={idx} className="font-mono text-[10px] uppercase tracking-wider border border-bege/80 text-preto/70 px-4 py-1.5 rounded-full bg-white/40">
                    {tag}
                  </span>
                ))}
             </div>
           </div>

           {/* Mini Card below the text */}
           <div className="border border-bege/80 rounded-[2rem] p-6 bg-white shadow-sm flex flex-col sm:flex-row gap-6 items-center">
             <div className="relative w-28 h-28 shrink-0 rounded-2xl overflow-hidden shadow-md">
                <Image 
                  src="https://picsum.photos/seed/brand_minimal/200/200" 
                  alt="Criatividade" 
                  fill 
                  sizes="112px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div>
                <h4 className="font-serif text-lg text-preto mb-2">Pessoas & Cenários</h4>
                <p className="text-xs font-light text-preto/70 leading-relaxed">
                   Antes de planejar paredes, leio as famílias, as rotinas e a insolação. Garanto conforto térmico sob o sol e vento nordestinos, de forma limpa e otimizada.
                </p>
             </div>
           </div>
         </motion.div>

         {/* Right Column (7 out of 12 cols) with Slider */}
         <motion.div 
           initial={{ opacity: 0, x: 60, scale: 0.96 }}
           whileInView={{ opacity: 1, x: 0, scale: 1 }}
           viewport={{ once: true, amount: 0.15 }}
           transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
           className="lg:col-span-7 bg-preto rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden text-creme cursor-pointer group/slider-img"
         >
            <div className="flex justify-between items-start mb-6 w-full">
               <div className="max-w-md">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-ocre">
                     Portfólio em Foco
                  </span>
                  <AnimatePresence mode="wait">
                     <motion.h3 
                       key={currentSlide}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       transition={{ duration: 0.3 }}
                       className="text-2xl font-serif text-white mt-1.5 mb-3"
                     >
                       {slides[currentSlide].title}
                     </motion.h3>
                  </AnimatePresence>
               </div>

               {/* Slider Arrows */}
               <div className="flex items-center gap-2 z-10 shrink-0">
                  <button 
                    onClick={handlePrev}
                    aria-label="Slide anterior"
                    className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center transition-colors text-white hover:bg-white/5 cursor-pointer"
                  >
                     <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleNext}
                    aria-label="Próximo slide"
                    className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center transition-colors text-white hover:bg-white/5 cursor-pointer"
                  >
                     <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </div>

            {/* Slide Desc */}
            <div className="min-h-[80px] mb-8">
               <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-light text-creme/70 leading-relaxed"
                  >
                    {slides[currentSlide].desc}
                  </motion.p>
               </AnimatePresence>
            </div>

            {/* Slide Tags */}
            <div className="flex gap-2 mb-8 select-none">
               <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentSlide}
                    className="flex gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                     {slides[currentSlide].tags.map((tg, i) => (
                        <span key={i} className="font-mono text-[9px] tracking-wider uppercase border border-white/10 bg-white/5 text-ocre/90 px-3 py-1 rounded-full">
                           {tg}
                        </span>
                     ))}
                  </motion.div>
               </AnimatePresence>
            </div>

            {/* Slide Image */}
            <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden shadow-inner bg-[#1A1A1A]">
              <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                     <Image 
                       src={slides[currentSlide].img} 
                       alt={slides[currentSlide].title}
                       fill
                       sizes="(max-width: 1024px) 100vw, 720px"
                       className={`object-cover ${shouldReduceMotion ? "" : "transition-transform duration-[1200ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover/slider-img:scale-108 group-hover/slider-img:-translate-y-1.5 group-hover/slider-img:-translate-x-1"}`}
                       referrerPolicy="no-referrer"
                     />
                  </motion.div>
               </AnimatePresence>
            </div>

            {/* Slide Index Counter */}
            <div className="mt-6 flex justify-end font-mono text-[10px] uppercase tracking-widest text-creme/40">
               {currentSlide + 1} / {slides.length}
            </div>

         </motion.div>

      </div>
    </section>
  );
}
