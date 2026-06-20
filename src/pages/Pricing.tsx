import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Link } from 'react-router-dom';
import { pricingTiers } from '@/data/pricingTiers';
import { faqs } from '@/data/faqs';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-charcoal min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-mono text-micro mb-6 block"
        >
          PLANS & PRICING
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-display text-bone mb-6"
        >
          Scale your output. <br className="hidden md:block"/> Keep your sanity.
        </motion.h1>
        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-bone/60 text-lg max-w-2xl mx-auto"
        >
          Stop paying per video and wondering what it will cost. Predictable, unlimited revision models designed for volume.
        </motion.p>
      </section>

      {/* Pricing Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={cn(
                "relative flex flex-col p-8 border",
                tier.isPopular ? "border-accent bg-charcoal shadow-accent-glow" : "border-white/10 bg-charcoal/30"
              )}
            >
              {tier.isPopular && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-charcoal text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                    Most Popular
                 </div>
              )}
              <h3 className="text-2xl font-display text-bone mb-2">{tier.name}</h3>
              <p className="text-bone/50 text-sm mb-6 h-12">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-display text-bone">{tier.price}</span>
                <span className="text-bone/40 text-sm">/{tier.priceNote}</span>
              </div>

              <Link to="/book" className="w-full mb-8">
                <MagneticButton variant={tier.isPopular ? 'primary' : 'outline'} className="w-full block py-4 text-center">
                  Select {tier.name}
                </MagneticButton>
              </Link>

              <div className="space-y-4 mb-8 flex-grow">
                {tier.features.map(feat => (
                  <div key={feat} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-bone/70 text-sm leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-white/10 space-y-2 mt-auto">
                 <div className="flex justify-between text-sm">
                   <span className="text-bone/50">Turnaround</span>
                   <span className="text-bone">{tier.turnaroundTime}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-bone/50">Revisions</span>
                   <span className="text-bone">{tier.revisions}</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 lg:px-12 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-bone mb-6">Frequently Asked</h2>
        </div>
        <FAQAccordion faqs={faqs} />
      </section>
    </div>
  );
}
