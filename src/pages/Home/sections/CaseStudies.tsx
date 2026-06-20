import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    client: 'The Personal Finance Creator',
    metric: '+[212%]',
    metricLabel: 'Average Watch Time [PLACEHOLDER METRIC]',
    image: '/assets/images/case_study_frame_1781945393167.jpg'
  },
  {
    client: 'The Luxury Real Estate Team',
    metric: '+[85%]',
    metricLabel: 'Organic Lead Volume [PLACEHOLDER METRIC]',
    image: '/assets/images/case_study_frame_1781945393167.jpg'
  },
  {
    client: 'The High-Ticket Consultant',
    metric: '[4.2x]',
    metricLabel: 'Return on Ad Spend (ROAS) [PLACEHOLDER METRIC]',
    image: '/assets/images/case_study_frame_1781945393167.jpg'
  }
];

export function CaseStudies() {
  return (
    <section className="py-32 bg-charcoal bg-texture-grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
             <h2 className="text-4xl md:text-6xl font-display text-bone mb-6">Proven Returns</h2>
             <p className="text-bone/60 text-lg max-w-md">We don't sell edits. We sell audience growth and monetization.</p>
          </div>
          <Link to="/work" className="inline-flex items-center gap-2 font-medium uppercase tracking-widest text-sm text-bone hover:text-accent transition-colors">
            View All Work <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((feat, i) => (
             <motion.div
               key={feat.client}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="group cursor-pointer"
             >
                <div className="w-full aspect-[4/5] relative overflow-hidden bg-gray-900 mb-6">
                  <img 
                    src={feat.image} 
                    alt={feat.client} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 saturate-0 group-hover:saturate-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-charcoal to-transparent">
                    <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">{feat.client}</p>
                    <div className="text-5xl font-display text-bone">{feat.metric}</div>
                    <div className="text-bone/70 text-sm mt-1">{feat.metricLabel}</div>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
