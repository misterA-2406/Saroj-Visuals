import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'motion/react';
import { useAnalytics } from '@/lib/useAnalytics';

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  niche: z.string().min(2, "Platform/Niche is required"),
  volume: z.string().min(1, "Please select volume")
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function BookingWidget() {
  const [step, setStep] = React.useState<1 | 2>(1);
  const { trackEvent } = useAnalytics();

  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  });

  const onSubmit = (data: BookingFormData) => {
    trackEvent('FORM_SUBMISSION', { form: 'booking_qualifier', ...data });
    setStep(2);
  };

  return (
    <div className="bg-charcoal/50 border border-white/10 p-8 md:p-12 shadow-[0_32px_64px_rgba(0,0,0,0.5)] max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-bone/70 text-micro mb-2">Full Name</label>
                <input 
                  {...register('fullName')}
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-bone focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                  placeholder="Jane Doe"
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
              </div>
              <div>
                <label className="block text-bone/70 text-micro mb-2">Email</label>
                <input 
                  {...register('email')}
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-bone focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                  placeholder="jane@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-bone/70 text-micro mb-2">Primary Platform / Niche</label>
              <input 
                {...register('niche')}
                type="text" 
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-bone focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                placeholder="e.g., Real Estate Agent / YouTube"
              />
              {errors.niche && <p className="text-red-400 text-xs mt-1">{errors.niche.message}</p>}
            </div>

            <div>
              <label className="block text-bone/70 text-micro mb-4">Monthly Content Volume</label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {['1-4 videos', '5-10 videos', '10-20 videos', '20+ videos'].map(v => (
                  <label key={v} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" {...register('volume')} value={v} className="hidden peer" />
                    <div className="w-4 h-4 rounded-full border border-white/30 peer-checked:border-accent peer-checked:bg-accent/20 flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 rounded-full bg-accent scale-0 peer-checked:scale-100 transition-transform" />
                    </div>
                    <span className="text-bone/60 peer-checked:text-bone text-sm group-hover:text-bone transition-colors">{v}</span>
                  </label>
                ))}
              </div>
              {errors.volume && <p className="text-red-400 text-xs mt-2">{errors.volume.message}</p>}
            </div>

            <div className="pt-8 text-center">
              <button 
                type="submit" 
                className="bg-accent text-charcoal font-medium px-10 py-4 rounded-full w-full sm:w-auto hover:bg-accent/90 transition-colors cursor-pointer"
              >
                Continue to Calendar
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="calendar"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col flex-1 items-center justify-center min-h-[400px]"
          >
            <div className="w-full h-full min-h-[500px] border border-white/5 bg-charcoal/30 flex items-center justify-center rounded-sm relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />
               <div className="text-center z-10 p-6">
                  <div className="w-16 h-16 mx-auto bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mb-6">
                     <span className="text-accent text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-display text-bone mb-4">You're on the list.</h3>
                  <p className="text-bone/60 text-base max-w-sm mx-auto mb-8 leading-relaxed">
                    We've received your details. Please check your email to select a time for your strategy call via our calendar. 
                  </p>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="text-sm font-medium uppercase tracking-widest text-bone/60 hover:text-bone border-b border-bone/60 hover:border-bone pb-1 transition-all"
                  >
                     Return to Home
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
