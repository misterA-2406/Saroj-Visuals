import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

export function StatCounter({ value, suffix = '', duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          // Easing: easeOutExpo
          const currentCount = value * (1 - Math.pow(2, -10 * progress));
          setCount(Math.floor(currentCount));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, duration]);

  const formattedCount = new Intl.NumberFormat().format(count);

  return <span ref={ref}>{formattedCount}{suffix}</span>;
}
