import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export function ComingSoon({ title }: { title: string }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-charcoal text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Building</span>
        <h1 className="text-5xl md:text-7xl font-display text-bone mb-6">{title}</h1>
        <p className="text-bone/50 text-lg max-w-md mx-auto">
          We are currently crafting this experience. Check back soon.
        </p>
      </motion.div>
    </div>
  );
}
