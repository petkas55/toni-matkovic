import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip';
  delay?: number;
  duration?: number;
}

const animations = {
  'fade-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-left': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  'fade-right': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  'flip': {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 }
  }
};

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    animation = 'fade-up',
    delay = 0,
    duration = 0.5
  } = options;

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: '-50px'
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        ...animations[animation].visible,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }
      });
    }
  }, [controls, inView, animation, delay, duration]);

  return {
    ref,
    controls,
    variants: animations[animation],
    inView
  };
};