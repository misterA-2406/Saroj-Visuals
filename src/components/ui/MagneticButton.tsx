import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import { HTMLMotionProps } from 'motion/react';

interface MagneticButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function MagneticButton({
  children,
  className,
  variant = 'primary',
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-accent text-charcoal hover:bg-accent/90 focus:ring-accent",
    secondary: "bg-bone text-charcoal hover:bg-bone/90 focus:ring-bone",
    outline: "border border-bone text-bone hover:bg-bone hover:text-charcoal focus:ring-bone"
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative rounded-full px-8 py-4 font-sans font-medium text-sm tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal",
        variants[variant],
        className
      )}
      {...props}
    >
      <motion.span 
        animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
