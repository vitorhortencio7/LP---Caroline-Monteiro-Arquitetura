'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, Variants } from 'motion/react';

interface ScrollFloatProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  sensitivity?: number; // 0 for view-triggered, >0 for scroll-parallax
}

export function ScrollFloat({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  yOffset = 40,
  sensitivity = 0,
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isParallax = sensitivity > 0 && !shouldReduceMotion;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Calculate transform if parallax is active for floating effect
  const rawY = useTransform(scrollYProgress, [0, 1], [yOffset * sensitivity, -yOffset * sensitivity]);
  const springY = useSpring(rawY, { damping: 20, stiffness: 120 });

  const customYOffset = shouldReduceMotion ? 0 : yOffset;

  return (
    <motion.div
      ref={containerRef}
      initial={isParallax ? { opacity: 0 } : { opacity: 0, y: customYOffset }}
      whileInView={isParallax ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      style={isParallax ? { y: springY } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1], // Luxury cubic-bezier signature
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollFloatTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  yOffset?: number;
}

export function ScrollFloatText({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.04,
  yOffset = 30,
}: ScrollFloatTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: delay,
      }
    }
  };

  const childVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : yOffset,
      rotate: shouldReduceMotion ? 0 : 2
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      transition: {
        type: shouldReduceMotion ? 'tween' : 'spring',
        damping: 18,
        stiffness: 90,
        duration: shouldReduceMotion ? 0.3 : undefined,
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden py-1">
          <motion.span
            variants={childVariants}
            className={`inline-block origin-bottom-left ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
