import { useEffect } from 'react';

type EventType = 'CTA_CLICK' | 'FORM_SUBMISSION' | 'SCROLL_DEPTH' | 'VIDEO_PLAY' | 'EXIT_INTENT_SHOWN';

export function useAnalytics() {
  const trackEvent = (eventName: EventType, params?: Record<string, any>) => {
    // In a production environment, this would integrate with GA4, Mixpanel, or Meta Pixel.
    // e.g. window.gtag('event', eventName, params);
    
    // For now, we simulate the instrumentation gracefully to console.
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event] ${eventName}`, params);
    }
  };

  useEffect(() => {
    let fired25 = false;
    let fired50 = false;
    let fired75 = false;
    let fired100 = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = (scrollY / height) * 100;

      if (percentage >= 25 && !fired25) { trackEvent('SCROLL_DEPTH', { depth: 25 }); fired25 = true; }
      if (percentage >= 50 && !fired50) { trackEvent('SCROLL_DEPTH', { depth: 50 }); fired50 = true; }
      if (percentage >= 75 && !fired75) { trackEvent('SCROLL_DEPTH', { depth: 75 }); fired75 = true; }
      if (percentage >= 99 && !fired100) { trackEvent('SCROLL_DEPTH', { depth: 100 }); fired100 = true; }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { trackEvent };
}
