import React from 'react';
import { motion } from 'motion/react';
import { Hero3DScene } from '@/components/3d/Hero3DScene';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Link } from 'react-router-dom';

import { StatCounter } from '@/components/ui/StatCounter';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-charcoal">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center" 
        style={{ backgroundImage: 'url("/assets/images/hero_background_1781945351104.jpg")' }}
      />
      {/* Dynamic Background Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal/20 via-charcoal/80 to-charcoal z-10" />
      <Hero3DScene />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-bone/70 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
            Premium Video Editing Agency
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl xl:text-[7.5rem] leading-[1.05] font-display tracking-tight text-bone mb-8 max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Cinematic edits that engineer your raw footage into your next <span className="text-accent italic"><StatCounter value={100000} duration={3} /></span> followers.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-bone/60 max-w-2xl mb-12 font-sans font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We deploy data-backed retention editing systems for real estate agents, coaches, and creators who refuse to be ignored.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/book">
            <MagneticButton variant="primary" className="px-10 py-5 text-base">
              Book Free Strategy Call
            </MagneticButton>
          </Link>
          <Link to="#process" className="group flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-bone/70 hover:text-bone transition-colors">
            <span className="w-10 h-[1px] bg-bone/30 group-hover:bg-bone group-hover:w-16 transition-all duration-300" />
            See Our Systems
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-bone/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-bone/40 to-transparent" />
      </motion.div>
    </section>
  );
}
