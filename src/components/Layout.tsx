import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { SmoothScroll } from './SmoothScroll';
import { ExitIntentModal } from './ExitIntentModal';
import { useAnalytics } from '@/lib/useAnalytics';

export function Layout() {
  const { trackEvent } = useAnalytics();

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-charcoal text-bone selection:bg-accent selection:text-charcoal flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ExitIntentModal />
        
        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
           <a 
            href="/book" 
            onClick={() => trackEvent('CTA_CLICK', { location: 'mobile_sticky_cta' })}
            className="block text-center bg-accent text-charcoal font-medium py-4 px-6 rounded-full shadow-[0_4px_24px_rgba(255,106,26,0.3)] w-full relative overflow-hidden"
          >
            <span className="relative z-10">Book Free Strategy Call</span>
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </SmoothScroll>
  );
}
