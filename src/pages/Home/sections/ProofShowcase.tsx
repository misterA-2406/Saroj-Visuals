import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

export function ProofShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-display text-bone mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Raw to <span className="text-accent italic">Retained</span>.
        </motion.h2>
        <p className="text-bone/60 max-w-2xl mx-auto text-lg">
          Slide to see how we apply retention science and cinematic grading to flat footage.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div style={{ y }} className="w-full relative rounded-sm overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
           <BeforeAfterSlider 
             beforeImage="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?q=80&w=2000&auto=format&fit=crop&saturate=0" 
             afterImage="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?q=80&w=2000&auto=format&fit=crop&saturate=2" 
           />
        </motion.div>
      </div>
    </section>
  );
}
