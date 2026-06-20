import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types';
import { Link } from 'react-router-dom';

export function ServiceCard({ service, index }: { service: Service, index: number }) {
  return (
    <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6, delay: index * 0.1 }}
       className="group relative p-8 md:p-12 border border-white/10 bg-charcoal/30 hover:bg-charcoal transition-all duration-500 rounded-sm hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,106,26,0.05)_inset]"
    >
      <div className="flex flex-col h-full">
         <div className="mb-8">
            <span className="text-accent font-mono text-xs tracking-widest uppercase mb-4 block">0{index + 1} — {service.title}</span>
            <h3 className="text-3xl font-display text-bone group-hover:text-amber-50 transition-colors mb-4">{service.outcomeHeader}</h3>
            <p className="text-bone/60">{service.description}</p>
         </div>
         
         <div className="mt-auto">
           <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-bone/50 group-hover:text-accent transition-colors">
             Learn More
             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
         </div>
      </div>
    </motion.div>
  );
}
