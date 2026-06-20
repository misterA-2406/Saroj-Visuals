import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';
import { Testimonial } from '@/types';

export function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial, index?: number }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const isVideo = !!testimonial.videoThumb;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 lg:p-10 border border-charcoal/5 shadow-[0_16px_48px_rgba(10,10,11,0.05)] rounded-sm group hover:-translate-y-2 transition-transform duration-500 overflow-hidden relative flex flex-col h-full"
    >
      {isVideo ? (
        <div className="mb-6 relative aspect-[9/16] w-full bg-gray-900 rounded-sm overflow-hidden" onClick={() => setIsPlaying(true)}>
           <img 
              src={testimonial.videoThumb} 
              alt={`Testimonial from ${testimonial.author}`}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
           />
           {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors cursor-pointer z-10">
                 <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                 </div>
              </div>
           )}
           {/* In reality, we would swap out for a play iframe when isPlaying is true */}
           <AnimatePresence>
             {isPlaying && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black flex items-center justify-center z-20">
                   <p className="text-white text-xs">Video Player Frame</p>
                </motion.div>
             )}
           </AnimatePresence>
        </div>
      ) : (
        <div className="text-6xl font-display text-accent opacity-20 mb-6 leading-none block">"</div>
      )}
      
      {!isVideo && (
        <p className="text-lg lg:text-xl font-medium leading-relaxed mb-8 flex-grow">
          {testimonial.quote}
        </p>
      )}

      <div className="mt-auto pt-4">
         <p className="font-display font-medium text-lg">{testimonial.author}</p>
         <p className="text-sm font-mono text-charcoal/50 uppercase tracking-widest mt-1">{testimonial.role}</p>
      </div>
    </motion.div>
  );
}
