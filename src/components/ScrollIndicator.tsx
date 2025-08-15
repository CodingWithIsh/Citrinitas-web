'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  targetId: string;
  className?: string;
}

export default function ScrollIndicator({ targetId, className }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator if user has scrolled more than 50px
      if (window.scrollY > 50) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsVisible(false); // Hide button on click
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 64; // h-16 = 4rem = 64px
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className={cn(
        'absolute bottom-8 left-1/2 -translate-x-1/2 z-30 transition-opacity duration-500',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        className
      )}
    >
      <button
        onClick={handleClick}
        className="animate-bounce-slow rounded-full p-2 bg-white/50 border-2 border-foreground/30 shadow-lg"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-8 w-8 text-foreground" />
      </button>
    </div>
  );
}
