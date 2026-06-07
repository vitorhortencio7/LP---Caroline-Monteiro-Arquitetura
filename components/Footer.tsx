'use client';

import React from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A09] text-[#FAF8F5] py-20 px-6 lg:px-12 relative overflow-hidden select-none">
      
      {/* Decorative vertical/horizontal line grid structure (Baseland Style) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
         <div className="w-full h-px bg-white absolute top-1/4" />
         <div className="w-full h-px bg-white absolute top-2/4" />
         <div className="w-px h-full bg-white absolute left-1/4" />
         <div className="w-px h-full bg-white absolute left-3/4" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
         
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pb-16 border-b border-white/10">
            
            {/* Left Column Description (5 cols out of 12) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
               <div>
                  <h4 className="text-2xl sm:text-3xl font-serif text-white mb-6 leading-tight max-w-sm tracking-tight">
                     Moldando a arte de construir lares singulares.
                  </h4>
                  
                  <div className="flex items-center gap-2 group cursor-pointer mb-8">
                     <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/15 transition-all">
                        <Mail className="w-3.5 h-3.5 text-ocre" />
                     </div>
                     <span className="text-xs font-mono text-white/60 tracking-wider group-hover:text-white transition-colors">
                        atendimento@carolinemonteiro.com
                     </span>
                  </div>
               </div>

               <div>
                  <div className="font-mono text-[9px] text-[#A15C4C] uppercase tracking-[0.25em] mb-2 font-bold">
                     Caroline Monteiro Arquitetura
                  </div>
                  <p className="text-xs font-light text-white/50 leading-relaxed max-w-xs">
                     Estúdio autoral focado na orquestração inteligente de ponta a ponta: do rascunho de identidade às chaves entregues.
                  </p>
               </div>
            </div>

            {/* Quick Links Columns (7 cols out of 12 divided in 3 sub-columns) */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
               
               {/* Col 1 */}
               <div>
                  <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#CA8B6E] mb-6 font-semibold">
                     Estúdio
                  </h5>
                  <ul className="space-y-4 text-xs font-light text-white/70">
                     <li><a href="#" className="hover:text-ocre transition-colors">Início</a></li>
                     <li><a href="#sobre" className="hover:text-ocre transition-colors">Sobre</a></li>
                     <li><a href="#portfolio" className="hover:text-ocre transition-colors">Projetos</a></li>
                     <li><a href="#" className="hover:text-ocre transition-colors">Imprensa</a></li>
                  </ul>
               </div>

               {/* Col 2 */}
               <div>
                  <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#CA8B6E] mb-6 font-semibold">
                     Serviços
                  </h5>
                  <ul className="space-y-4 text-xs font-light text-white/70">
                     <li><a href="#" className="hover:text-ocre transition-colors">Residencial</a></li>
                     <li><a href="#" className="hover:text-ocre transition-colors">Comercial</a></li>
                     <li><a href="#" className="hover:text-ocre transition-colors">Luminotécnica</a></li>
                     <li><a href="#" className="hover:text-ocre transition-colors">Acompanhamento</a></li>
                  </ul>
               </div>

               {/* Col 3: Social Badges pills (como no print do Baseland) */}
               <div className="col-span-2 md:col-span-1">
                  <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#CA8B6E] mb-6 font-semibold">
                     Conexões
                  </h5>
                  <div className="flex flex-col gap-2">
                     <a 
                       href="#" 
                       className="font-mono text-[9px] uppercase tracking-wider text-center border border-white/10 hover:border-white/30 rounded-full py-2.5 px-4 bg-white/5 hover:bg-white/10 transition-all"
                     >
                        Instagram
                     </a>
                     <a 
                       href="#" 
                       className="font-mono text-[9px] uppercase tracking-wider text-center border border-white/10 hover:border-white/30 rounded-full py-2.5 px-4 bg-white/5 hover:bg-white/10 transition-all"
                     >
                        Pinterest
                     </a>
                     <a 
                       href="#" 
                       className="font-mono text-[9px] uppercase tracking-wider text-center border border-white/10 hover:border-white/30 rounded-full py-2.5 px-4 bg-white/5 hover:bg-white/10 transition-all"
                     >
                        LinkedIn
                     </a>
                  </div>
               </div>

            </div>

         </div>

         {/* Bottom row: Privacy links, Copyright, Developer Mark */}
         <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6 text-[10px] font-mono uppercase tracking-[0.15em] text-white/30 border-t border-white/5 pt-8 w-full">
            <span className="text-center md:text-left">
               Caroline Monteiro Arquitetura &copy; {new Date().getFullYear()} / Todos os direitos reservados
            </span>
            
            <a 
               href="https://vitorhortencio.com.br" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-3 hover:opacity-100 transition-all group py-1 active:scale-95"
               aria-label="Desenvolvido por VH Design"
            >
               <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">
                  Desenvolvido por VH Design
               </span>
               <div className="relative w-12 h-6 opacity-50 group-hover:opacity-100 transition-opacity">
                  <Image 
                     src="https://i.ibb.co/B5QnqfTc/Logo-VH.png" 
                     alt="VH Design Logo" 
                     fill
                     className="object-contain"
                     referrerPolicy="no-referrer"
                  />
               </div>
            </a>

            <div className="flex gap-4">
               <a href="#" className="hover:text-white transition-colors">Termos</a>
               <span>&bull;</span>
               <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
         </div>

      </div>

      {/* Massive elegant backdrop watermark spanning across the lower footer screen (Baseland Style) */}
      <div className="w-full text-center select-none pointer-events-none absolute -bottom-10 left-0 right-0 z-0">
         <h2 className="text-[14vw] font-bold text-white/[0.02] tracking-[0.08em] leading-none uppercase font-sans">
            MONTEIRO
         </h2>
      </div>

    </footer>
  );
}
