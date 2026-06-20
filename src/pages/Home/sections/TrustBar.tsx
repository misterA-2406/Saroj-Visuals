import React from 'react';
import { motion } from 'motion/react';

const logos = [
  "COACHING INC",
  "THE FOUNDER PODCAST",
  "REAL ESTATE PRO",
  "CREATOR LABS",
  "MODERN WEALTH",
  "GROWTH SYSTEMS"
];

export function TrustBar() {
  return (
    <section className="py-20 border-b border-white/5 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium uppercase tracking-[0.2em] text-bone/40 mb-12"
        >
          Engineered for top creators and brands
        </motion.p>
        
        {/* Marquee effect for logos */}
        <div className="relative flex overflow-x-hidden md:justify-center">
          <div className="flex animate-marquee md:hidden whitespace-nowrap gap-16 px-8">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-xl md:text-2xl font-display font-bold text-bone/20 tracking-wider">
                {logo}
              </span>
            ))}
          </div>
          <div className="hidden md:flex justify-between items-center w-full gap-8">
             {logos.map((logo, i) => (
              <span key={i} className="text-xl lg:text-2xl font-display font-bold text-bone/20 tracking-wider hover:text-bone/50 transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
