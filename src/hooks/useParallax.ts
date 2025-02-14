import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  disabled?: boolean;
  maxOffset?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { 
    speed = 0.2, 
    direction = 'up', 
    disabled = false,
    maxOffset = 30 
  } = options;
  
  const elementRef = useRef<HTMLElement>(null);
  const initialPositionRef = useRef<number | null>(null);

  useEffect(() => {
    if (disabled || !elementRef.current) return;

    const element = elementRef.current;
    const updateParallax = () => {
      if (!element) return;

      // Get element's position relative to viewport
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Only apply parallax when element is in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate how far the element is from the center of the viewport
        const centerOffset = (viewportHeight / 2) - (rect.top + rect.height / 2);
        const factor = direction === 'up' ? -1 : 1;
        
        // Calculate parallax offset with limits
        const offset = Math.min(
          Math.max(centerOffset * speed * factor, -maxOffset),
          maxOffset
        );

        element.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };

    window.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);
    
    // Initial position
    updateParallax();

    return () => {
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
      if (element) {
        element.style.transform = '';
      }
    };
  }, [speed, direction, disabled, maxOffset]);

  return elementRef;
};