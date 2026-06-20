import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { caseStudies } from '@/data/caseStudies';
import { VideoCard } from '@/components/ui/VideoCard';

export function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-charcoal min-h-screen pt-32 pb-24">
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display text-bone mb-6"
        >
          Our Proof
        </motion.h1>
        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-bone/60 text-lg max-w-2xl"
        >
          We build content systems that drive actual business outcomes. Don't take our word for it—look at the data.
        </motion.p>
      </section>

      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {caseStudies.map((caseStudy, i) => (
            <motion.div
               key={caseStudy.slug}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-100px' }}
               transition={{ duration: 0.6, delay: (Object.keys(caseStudies).length > 2 ? i % 2 * 0.2 : i * 0.2) }}
            >
              <VideoCard caseStudy={caseStudy} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

