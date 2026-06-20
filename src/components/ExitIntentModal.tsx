import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useAnalytics } from '@/lib/useAnalytics';

export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Check if they've seen it this session (could also use localStorage for longer term)
    const hasSeenModal = sessionStorage.getItem('hasSeenExitIntent');
    if (hasSeenModal) return;

    let timer: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // If cursor leaves top of screen
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem('hasSeenExitIntent', 'true');
        trackEvent('EXIT_INTENT_SHOWN');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Only activate listener after 15 seconds
    timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 15000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [trackEvent]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('FORM_SUBMISSION', { form: 'newsletter_exit_intent' });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <React.Fragment>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-bone text-charcoal max-w-lg w-full rounded-sm p-8 md:p-12 relative shadow-2xl"
            >
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-display mb-4">Not ready for a call?</h2>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                Download "The 10-Second Hook Checklist" – the exact framework we use to stop the scroll and engineer retention.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                   <input 
                     type="email" 
                     placeholder="Enter your best email" 
                     required
                     className="w-full bg-white border border-charcoal/10 rounded-sm px-4 py-3 focus:outline-none focus:border-accent font-sans"
                   />
                </div>
                <button type="submit" className="w-full bg-accent text-charcoal font-medium py-4 px-6 rounded-sm uppercase tracking-widest text-sm transition-transform hover:-translate-y-1 block">
                  Send the Framework
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsVisible(false)}
                  className="w-full mt-4 text-xs font-mono text-charcoal/40 hover:text-charcoal uppercase tracking-widest"
                >
                  No thanks, I prefer low retention
                </button>
              </form>
            </motion.div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
