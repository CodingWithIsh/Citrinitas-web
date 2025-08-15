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
      } else {
        // Only show if it wasn't manually hidden by a click
        // This logic is now handled by the click handler directly
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsVisible(false); // Hide button on click
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
    });
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
