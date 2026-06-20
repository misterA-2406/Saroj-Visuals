import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '@/types';
import { Link } from 'react-router-dom';

export function VideoCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/work/${caseStudy.slug}`} 
      className="group block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      <div className="w-full aspect-[4/3] bg-charcoal/50 overflow-hidden relative border border-white/5 shadow-cinematic-sm group-hover:shadow-cinematic transition-all duration-500 rounded-sm">
        <motion.img 
          src={caseStudy.image} 
          alt={caseStudy.client}
          className="w-full h-full object-cover saturate-50 transition-all duration-700"
          animate={{ scale: isHovered ? 1.05 : 1, filter: isHovered ? 'saturate(1.2) contrast(1.1)' : 'saturate(0.5) contrast(1)' }}
        />
        
        {/* Niche tag */}
        <div className="absolute top-6 left-6 z-20">
          <span className="bg-charcoal/80 backdrop-blur-md border border-white/10 text-bone text-micro px-3 py-1.5 rounded-full shadow-cinematic-sm">
            {caseStudy.niche}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

        <AnimatePresence>
          {isHovered && (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
               transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
               className="absolute inset-0 z-20 flex flex-col justify-end p-8"
             >
                <p className="text-accent text-sm font-mono tracking-widest uppercase mb-2">Outcome</p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl lg:text-5xl font-display text-bone font-medium">{caseStudy.heroMetric}</span>
                  <span className="text-bone/70 text-sm font-medium uppercase tracking-wide">{caseStudy.heroMetricLabel}</span>
                </div>
                <h3 className="text-xl font-display text-bone">{caseStudy.client}</h3>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
}
