import React, { useEffect } from 'react';
import { Hero } from './sections/Hero';
import { TrustBar } from './sections/TrustBar';
import { Agitation } from './sections/Agitation';
import { Services } from './sections/Services';
import { ProofShowcase } from './sections/ProofShowcase';
import { Process } from './sections/Process';
import { CaseStudies } from './sections/CaseStudies';
import { Testimonials } from './sections/Testimonials';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { SEO } from '@/components/SEO';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-charcoal min-h-screen">
      <SEO />
      <Hero />
      <TrustBar />
      <Agitation />
      <Services />
      <ProofShowcase />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
