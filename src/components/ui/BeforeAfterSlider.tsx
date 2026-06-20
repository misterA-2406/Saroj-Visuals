import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

export function BeforeAfterSlider({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleDrag(e.clientX);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging) return;
    handleDrag(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    } else {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] bg-charcoal select-none overflow-hidden touch-none"
      onPointerDown={handlePointerDown}
    >
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
      />
      
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" 
          style={{ width: containerRef.current ? containerRef.current.clientWidth : '100vw' }}
        />
      </div>

      <motion.div 
        className="absolute top-0 bottom-0 min-w-10 flex items-center justify-center -translate-x-1/2 cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%` }}
        animate={{ scale: isDragging ? 1.05 : 1 }}
      >
        <div className="w-[2px] h-full bg-white relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
             <MoveHorizontal className="w-5 h-5 text-charcoal" />
           </div>
        </div>
      </motion.div>
      
      <div className="absolute top-6 left-6 pointer-events-none">
        <span className="bg-charcoal/80 backdrop-blur-md text-bone text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-sm">Before</span>
      </div>
      <div className="absolute top-6 right-6 pointer-events-none">
        <span className="bg-accent/90 backdrop-blur-md text-charcoal font-medium text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-accent-glow">After</span>
      </div>
    </div>
  );
}
