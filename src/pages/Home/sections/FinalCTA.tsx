import React from 'react';
import { motion } from 'motion/react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="py-40 bg-accent relative overflow-hidden flex items-center justify-center text-center bg-texture-grain">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-8xl font-display text-charcoal mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to scale your output?
        </motion.h2>
        
        <motion.p 
          className="text-charcoal/80 text-xl md:text-2xl mb-12 font-medium max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stop editing. Start recording. Book a mapping session to see exactly how our systems deploy into your business.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/book">
            <MagneticButton variant="secondary" className="px-12 py-6 text-lg">
              Book Your Strategy Call
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
