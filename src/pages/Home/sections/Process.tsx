import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  { id: '01', title: 'Intake & Sync', desc: 'You record. You drop it in your dedicated secure drive. You notify us in Slack.' },
  { id: '02', title: 'The Rough Assembly', desc: 'We cull the fat, establish the narrative spine, and lock the pacing structure.' },
  { id: '03', title: 'The Polish', desc: 'We apply cinematic color grading, custom motion graphics, and psychological sound design.' },
  { id: '04', title: 'Deploy & Review', desc: 'Final assets delivered. You review via Frame.io. We iterate instantly.' },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 bg-bone text-charcoal border-t border-charcoal/5 bg-texture-grain" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-8">Not a freelancer. A content engine.</h2>
          <p className="text-charcoal/70 text-lg md:text-xl leading-relaxed text-left md:text-center font-light mb-12">
            You don't need another freelancer who goes missing on Fridays. You need a content engine. Saroj Visuals operates as an embedded post-production partner. We don't just splice clips; we engineer retention. Every cut, color grade, and sound cue is justified by watch-time data and psychological triggers. You record the raw material. You drop it in a folder. We deploy a repeatable system that turns your footage into high-converting assets engineered for the modern doom-scroll. Predictable turnaround. Cinematic quality. Zero bottleneck. 
          </p>
          <div className="w-12 h-[1px] bg-charcoal/20 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Progress Line Background */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-charcoal/10 md:-translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-[27px] md:left-1/2 top-0 w-[2px] bg-accent md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={step.id} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Number Indicator */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-bone border-2 border-charcoal/10 flex items-center justify-center font-display text-xl z-10 text-charcoal transition-colors duration-500 delay-100">
                   {step.id}
                </div>

                {/* Content */}
                <motion.div 
                  className={`pl-20 md:pl-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl md:text-3xl font-display mb-4">{step.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed font-light text-lg">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
