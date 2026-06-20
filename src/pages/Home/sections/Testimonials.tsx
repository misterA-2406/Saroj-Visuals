import React from 'react';
import { motion } from 'motion/react';
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

export function Testimonials() {
  return (
    <section className="py-32 bg-bone text-charcoal bg-texture-grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-accent font-mono text-micro mb-6 block"
        >
          CLIENT FEEDBACK
        </motion.p>
        <motion.h2 
          className="text-4xl md:text-6xl font-display mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Voices of Growth
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
             <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
