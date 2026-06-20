import React from 'react';
import { motion } from 'motion/react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Starter",
    price: "[PRICE: $1,500]",
    period: "/ month",
    positioning: "For growing creators needing to eliminate the editing bottleneck and maintain a consistent broadcast schedule.",
    features: [
      "4 Long-form videos / month",
      "Basic motion graphics",
      "Standard color grading",
      "5-7 day turnaround"
    ],
    cta: "Select Starter"
  },
  {
    name: "Growth Engine",
    price: "[PRICE: $3,200]",
    period: "/ month",
    positioning: "The complete system. We handle your long-form and extract the exact short-form volume you need to dominate social.",
    features: [
      "4 Long-form videos / month",
      "15 native short-form extractions",
      "Custom motion & VFX",
      "Priority 72-hour turnaround",
      "Dedicated strategist"
    ],
    cta: "Scale With Growth",
    popular: true
  },
  {
    name: "Enterprise Scale",
    price: "[PRICE: Custom]",
    period: "",
    positioning: "For multi-show networks and high-volume personal brands requiring a full embedded post-production team.",
    features: [
      "Unlimited editing volume",
      "Bespoke visual identity",
      "24-hour priority revisions",
      "Direct Slack access to entire team"
    ],
    cta: "Book Strategy Call"
  }
];

export function Pricing() {
  return (
    <section className="py-32 bg-bone text-charcoal border-t border-charcoal/5 bg-texture-grain" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display mb-6">Invest in the engine.</h2>
          <p className="text-charcoal/70 text-lg">
            Flat monthly retainers based on your volume requirements. No varying hourly rates. No surprise invoices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-8 lg:p-10 rounded-sm border ${tier.popular ? 'bg-charcoal text-bone border-charcoal shadow-2xl relative block scale-100 lg:scale-[1.02] z-10' : 'bg-white border-charcoal/10'}`}
            >
              {tier.popular && (
                 <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent text-charcoal text-xs font-bold uppercase tracking-widest px-4 py-1.5 overflow-hidden">
                    <span className="relative z-10 text-xs">Most Popular</span>
                 </div>
              )}
              
              <h3 className="text-2xl font-display mb-2">{tier.name}</h3>
              <div className="flex items-end gap-1 mb-4">
                 <span className={`text-4xl lg:text-5xl font-display ${tier.popular ? 'text-accent' : 'text-charcoal'}`}>{tier.price}</span>
                 <span className={`text-sm tracking-wider font-mono mb-2 ${tier.popular ? 'text-bone/50' : 'text-charcoal/50'}`}>{tier.period}</span>
              </div>
              <p className={`text-sm mb-8 min-h-[60px] ${tier.popular ? 'text-bone/70' : 'text-charcoal/70'}`}>
                {tier.positioning}
              </p>

              <div className="space-y-4 mb-10">
                {tier.features.map(feat => (
                   <div key={feat} className="flex items-start gap-3">
                      <div className={`mt-1 rounded-full p-0.5 ${tier.popular ? 'bg-white/10 text-accent' : 'bg-charcoal/5 text-charcoal'}`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className={`text-sm ${tier.popular ? 'text-bone/90' : 'text-charcoal/80'}`}>{feat}</span>
                   </div>
                ))}
              </div>

              <Link to={`/book?tier=${tier.name.toLowerCase().replace(' ', '-')}`} className="block">
                <button className={`w-full py-4 font-medium uppercase tracking-widest text-xs transition-all duration-300 ${tier.popular ? 'bg-accent text-charcoal hover:bg-white' : 'bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-bone'}`}>
                  {tier.cta}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
