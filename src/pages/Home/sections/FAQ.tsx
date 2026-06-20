import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How fast is your turnaround time?",
    a: "Standard long-form edits are delivered within 5-7 business days. For clients on our Growth or Scale tiers, we guarantee a 72-hour turnaround for first cuts, and 24 hours for revisions."
  },
  {
    q: "What happens if I don't like the edit?",
    a: "We don't stop until it performs. Our Growth tier includes unlimited revisions during the active project week. You leave precise, time-stamped feedback via Frame.io, and we execute immediately."
  },
  {
    q: "Do you work with my specific niche?",
    a: "While we specialize in Real Estate, Coaches, and YouTubers, our methodology—Retention Science—is universal. We edit based on audience psychology and watch-time data, which applies to any industry relying on video to convert."
  },
  {
    q: "How does your pricing structure work?",
    a: "We operate on flat monthly retainers based on your volume requirements. No varying hourly rates. No surprise invoices. You pay for a predictable output engine."
  },
  {
    q: "How do we communicate?",
    a: "You get a dedicated private Slack channel. No lengthy email chains. You drop footage, ping your strategist, and we start cutting."
  },
  {
    q: "What are your raw footage requirements?",
    a: "We work with standard formats (mp4, mov, raw). Upon onboarding, you receive a secure cloud drop link. We prefer a minimum of 1080p, but our colorists are adept at salvaging sub-optimal lighting when necessary."
  },
  {
    q: "Am I locked into a long-term contract?",
    a: "All retainers operate on a month-to-month basis after an initial 90-day alignment period. We retain clients by delivering ROI, not by legally enforcing it."
  },
  {
    q: "Do you guarantee views or ROI?",
    a: "Be wary of any agency that guarantees algorithmic virality. We guarantee execution, turnaround, and the application of proven retention mechanics. The algorithm ultimately judges the content itself."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-bone border-t border-charcoal/5 bg-texture-grain" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-charcoal mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Clear answers. No agency fluff.
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: i * 0.05 }}
               className="border border-charcoal/10 rounded-sm bg-white overflow-hidden"
             >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-charcoal/5"
                  aria-expanded={openIndex === i}
                >
                   <span className="font-display text-lg text-charcoal pr-8">{faq.q}</span>
                   <span className="text-charcoal/40 shrink-0">
                     {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                   </span>
                </button>
                <AnimatePresence>
                   {openIndex === i && (
                      <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.3 }}
                      >
                         <div className="px-6 pb-6 pt-0">
                            <p className="text-charcoal/70 leading-relaxed font-light">{faq.a}</p>
                         </div>
                      </motion.div>
                   )}
                </AnimatePresence>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
