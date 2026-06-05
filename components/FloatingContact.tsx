'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring, AnimatePresence } from 'motion/react';

export default function FloatingContact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // High quality coordinate attraction springs
  const springConfig = { stiffness: 80, damping: 12, mass: 0.8 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate relative distance vectors from center
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    
    // Magnetize with a 35% gravity pull multiplier
    springX.set(dx * 0.4);
    springY.set(dy * 0.4);
  };

  const handleMouseLeave = () => {
    // Return smoothly to rest origin point
    springX.set(0);
    springY.set(0);
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className="fixed bottom-8 right-8 z-40 p-4 select-none pointer-events-auto"
    >
      <motion.a
        href="https://wa.me/5585999999999"
        target="_blank"
        rel="noreferrer"
        style={{ x: springX, y: springY }}
        whileTap={{ scale: 0.95 }}
        className="relative block w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-terracota text-white shadow-2xl flex items-center justify-center cursor-pointer group"
      >
        {/* Pulsing ring feedback */}
        <span className="absolute inset-x-0 inset-y-0 rounded-full border border-terracota/60 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-[1000ms] ease-out pointer-events-none" />
        <span className="absolute inset-x-0 inset-y-0 rounded-full border-2 border-ocre/40 group-hover:scale-150 opacity-0 group-hover:opacity-0 transition-all duration-[1500ms] delay-100 ease-out pointer-events-none" />

        {/* Elegant centered WhatsApp icon */}
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300 shrink-0" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.906-6.99C16.246 1.875 13.762 1.84 11.13 1.84c-5.437 0-9.861 4.419-9.865 9.864 0 1.902.498 3.755 1.44 5.394L1.708 21.05l4.039-1.496z" />
          <path d="M17.487 14.394c-.29-.14-1.716-.844-1.98-.94-.265-.096-.458-.14-.65.14-.191.28-.743.94-.91 1.13-.167.19-.335.21-.624.07-2.905-1.45-3.807-2.54-4.63-3.953-.167-.285-.017-.44.123-.58.125-.124.28-.323.42-.483.14-.16.19-.27.285-.45.095-.18.047-.34-.024-.48-.07-.14-.65-1.565-.89-2.14-.233-.56-.47-.48-.65-.49-.17-.006-.365-.007-.56-.007-.195 0-.513.073-.78.365-.268.29-1.023 1.002-1.023 2.445 0 1.443 1.05 2.836 1.196 3.03.145.193 2.066 3.154 5.006 4.43.7.3 1.246.48 1.672.615.702.223 1.34.192 1.845.117.563-.083 1.716-.702 1.96-1.38.243-.678.243-1.26.17-1.38-.073-.12-.266-.19-.556-.33z" />
        </svg>

        {/* Magnetic luxury tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 15, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-preto/90 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-[0.25em] px-4 py-2.5 rounded-full border border-white/10 shadow-lg pointer-events-none whitespace-nowrap"
            >
               Consultoria do meu sonho <span className="text-[#CA8B6E] ml-1">↗</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
}
