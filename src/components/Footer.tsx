import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Linkedin, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/lib/useAnalytics';

function FooterAccordionItem({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10 py-4 md:border-none md:py-0 md:block">
      <button 
        className="flex justify-between items-center w-full md:cursor-auto md:pointer-events-none group" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-display text-lg text-bone group-hover:text-accent md:group-hover:text-bone transition-colors">{title}</h3>
        <span className="md:hidden text-bone/50 group-hover:text-accent transition-colors">
          <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
            <Plus className="w-5 h-5" />
          </motion.div>
        </span>
      </button>
      
      <div className="md:block hidden mt-6">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Footer() {
  const { trackEvent } = useAnalytics();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('FORM_SUBMISSION', { form: 'newsletter_footer' });
    // Process form
  };

  return (
    <footer className="bg-charcoal border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-display font-medium text-bone mb-6">
              Not ready for a call?
            </h2>
            <form onSubmit={handleSubscribe} className="flex gap-4">
              <input 
                type="email" 
                required
                placeholder="Enter your email" 
                className="bg-transparent border border-white/20 rounded-full px-6 py-3 text-bone focus:outline-none focus:border-accent w-full max-w-sm"
              />
              <button 
                type="submit" 
                className="bg-bone text-charcoal rounded-full px-6 py-3 font-medium hover:bg-bone/90 transition-colors shrink-0"
              >
                Send the Framework
              </button>
            </form>
            <p className="text-sm text-bone/50 mt-4 max-w-sm">
              Download "The 10-Second Hook Checklist" – the exact framework we use to stop the scroll.
            </p>
          </div>

          <FooterAccordionItem title="Navigation">
            <ul className="space-y-4 flex flex-col items-start">
              <li><Link to="/work" className="text-bone/60 hover:text-accent transition-colors">Work</Link></li>
              <li><Link to="/services" className="text-bone/60 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/process" className="text-bone/60 hover:text-accent transition-colors">Process</Link></li>
              <li><Link to="/pricing" className="text-bone/60 hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-bone/60 hover:text-accent transition-colors">About</Link></li>
            </ul>
          </FooterAccordionItem>

          <FooterAccordionItem title="Social">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </FooterAccordionItem>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-bone/40 pt-8 border-t border-white/5 gap-4">
          <p>© {new Date().getFullYear()} Saroj Visuals. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-bone leading-none border-b border-transparent hover:border-bone transition-all pb-0.5">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-bone leading-none border-b border-transparent hover:border-bone transition-all pb-0.5">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
