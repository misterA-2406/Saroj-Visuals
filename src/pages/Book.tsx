import React, { useEffect } from 'react';
import { BookingWidget } from '@/components/BookingWidget';

export function Book() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-charcoal">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display text-bone mb-6">
            Book Your Strategy Call
          </h1>
          <p className="text-bone/60 text-lg max-w-xl mx-auto">
            Let's dissect your current content workflow and map out a bespoke retention engine for your brand.
          </p>
        </div>

        <BookingWidget />
      </div>
    </div>
  );
}
