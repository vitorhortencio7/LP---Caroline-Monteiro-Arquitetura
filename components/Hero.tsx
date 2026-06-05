'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Create smooth parallax for the gorgeous background image
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={containerRef} className="relative w-full h-[98vh] min-h-[700px] overflow-hidden bg-[#151413] flex flex-col justify-between p-6 md:p-12 text-white">
      {/* Immersive Parallax Background Image */}
      <motion.div 
        style={shouldReduceMotion ? undefined : { y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full z-0 opacity-80"
      >
        {/* Cinematic Zoom Out on page load */}
        <motion.div
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.12 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 5, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full relative"
        >
          <Image 
            src="https://picsum.photos/seed/arch_minimalist_red/1920/1080" 
            alt="Inspirado pela Emoção, Definido pela Excelência" 
            fill 
            priority
            sizes="100vw"
            className="object-cover object-bottom brightness-[0.75] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Deep, rich lighting overlays for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151413] via-transparent to-black/50" />
      </motion.div>

      {/* Top Margin Buffer (For the Floating Absolute Navbar) */}
      <div className="w-full h-16 z-10" />

      {/* Center Block: High Impact Header & Sub-labels */}
      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col justify-end flex-grow pb-12">
        
        {/* Top badges & Details */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-12 gap-6">
          <div className="flex items-center gap-2.5">
             <span className="font-mono text-[9px] uppercase tracking-[0.25em] border border-white/20 rounded-full px-4 py-1.5 bg-black/10 backdrop-blur-sm">
                Caroline Monteiro
             </span>
             <span className="font-mono text-[9px] uppercase tracking-[0.25em] border border-white/20 rounded-full px-4 py-1.5 bg-black/10 backdrop-blur-sm">
                Arquitetura
             </span>
          </div>

          <div className="text-right max-w-xs hidden md:block">
             <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 mb-1.5">
                Filosofia
             </p>
             <p className="text-xs font-light text-white/70 leading-relaxed">
                A arquitetura autoral é um investimento real. Unimos o afeto e a poesia do design ao rigor técnico do canteiro.
             </p>
          </div>
        </div>

        {/* Massive Baseland-style Headline with Luxury Masking & Staggered Cadence */}
        <div className="mb-12 overflow-hidden select-none">
          <h1 className="text-[38px] sm:text-7xl lg:text-[92px] leading-[1.08] font-serif font-light tracking-tight max-w-6xl">
            <div className="overflow-hidden block py-1.5">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%" }}
                animate={shouldReduceMotion ? { opacity: 1 } : { y: 0 }}
                transition={{ duration: 1.3, ease: [0.33, 1, 0.68, 1], delay: 0.15 }}
                className="block"
              >
                Nós projetamos para <span className="italic font-normal text-ocre">Pessoas</span>,
              </motion.span>
            </div>
            <div className="overflow-hidden block py-1.5">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%" }}
                animate={shouldReduceMotion ? { opacity: 1 } : { y: 0 }}
                transition={{ duration: 1.3, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
                className="block"
              >
                Dando vida a lares com{" "}
                <span className="font-medium text-white/95 relative inline-block pb-1">
                  Alma & Arte
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1], delay: 1.0 }}
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-terracota origin-left"
                  />
                </span>
                .
              </motion.span>
            </div>
          </h1>
        </div>

        {/* Bottom Block: Informative details and CTA Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 gap-8">
           
           {/* Detailed statement */}
           <div className="max-w-2xl flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-terracota animate-ping shrink-0" />
              <p className="text-xs sm:text-sm font-light text-white/70 leading-relaxed">
                 Unimos a sofisticação da arquitetura autoral com a precisão de quem domina o canteiro de obras há 5 anos. Projetos extraordinários, repletos de luz, identidade e perfeitamente viáveis para a sua realidade em Fortaleza e região.
              </p>
           </div>

           {/* Large floating bubble Contact button */}
           <motion.a
             href="#contato"
             initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.6 }}
             whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
             className="relative overflow-hidden bg-terracota text-white hover:bg-ocre transition-all duration-500 px-10 py-5 rounded-full font-medium flex items-center justify-center gap-3 shadow-2xl shrink-0 group self-stretch md:self-auto text-center"
           >
              <span className="relative z-10 font-medium tracking-wide text-sm flex items-center gap-2 font-mono uppercase text-xs">
                 Começar meu Projeto
                 <span className="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
              </span>
              <div className="absolute inset-0 bg-[#A15C4C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
           </motion.a>

        </div>

      </div>

      {/* Decorative slider pagination lines at the bottom (Baseland Style) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 opacity-45 pointer-events-none">
        <span className="w-10 h-[2px] bg-white rounded-full" />
        <span className="w-2 h-[2px] bg-white/40 rounded-full" />
        <span className="w-2 h-[2px] bg-white/40 rounded-full" />
      </div>

    </section>
  );
}
