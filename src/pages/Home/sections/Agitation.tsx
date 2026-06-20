import React from 'react';
import { motion } from 'motion/react';

export function Agitation() {
  const painPoints = [
    {
      title: 'The Consistency Trap',
      desc: 'You’re sitting on terabytes of raw footage, but inconsistent posting is starving your channel\'s algorithm.'
    },
    {
      title: 'The Bottleneck',
      desc: 'You’re spending 20 hours a week in Premiere Pro instead of recording, selling, or scaling your business.'
    },
    {
      title: 'The Retention Bleed',
      desc: 'Your current editor cuts to the beat, but ignores pacing triggers. You’re losing 60% of viewers in the first 10 seconds.'
    }
  ];

  return (
    <section className="py-32 bg-charcoal bg-texture-grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-[1.1] text-bone mb-8">
              Your workflow is killing your <span className="text-accent italic">growth</span>.
            </h2>
            <p className="text-lg md:text-xl text-bone/60 max-w-lg font-light leading-relaxed">
              Every day you spend tweaking Premiere timelines is a day you aren't creating new content. We know the feeling.
            </p>
          </motion.div>

          <div className="space-y-12 lg:pt-12">
            {painPoints.map((point, i) => (
              <motion.div 
                key={point.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 md:pl-12 border-l border-white/10"
              >
                <div className="absolute left-0 top-0 w-[1px] h-0 bg-accent transition-all duration-1000 group-hover:h-full" />
                <span className="text-accent font-mono text-sm tracking-wider mb-2 block">0{i + 1} //</span>
                <h3 className="text-2xl font-display text-bone mb-3">{point.title}</h3>
                <p className="text-bone/50 text-base md:text-lg font-light">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
