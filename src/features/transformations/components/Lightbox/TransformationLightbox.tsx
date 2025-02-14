import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { ImageToggle } from '../ImageToggle';
import { DurationBadge } from '../DurationBadge';
import { LightboxNavigation } from './LightboxNavigation';
import { useGestureControls } from '@/hooks/useGestureControls';
import type { Transformation } from '../../types';

interface TransformationLightboxProps {
  transformation: Transformation;
  onClose: () => void;
  transformations: Transformation[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const TransformationLightbox: React.FC<TransformationLightboxProps> = ({
  transformation,
  onClose,
  transformations,
  currentIndex,
  onNext,
  onPrev,
}) => {
  const [showAfter, setShowAfter] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useGestureControls({
    onSwipeLeft: onNext,
    onSwipeRight: onPrev,
    swipeThreshold: 100,
  });

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape': onClose(); break;
        case 'ArrowLeft': onPrev(); break;
        case 'ArrowRight': onNext(); break;
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyboard);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
        onClick={handleBackdropClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div 
          ref={contentRef}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
          className="w-full max-w-7xl mx-auto flex flex-col justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 bg-white/90 p-2.5 rounded-full shadow-lg hover:bg-white transition-all duration-300 group"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </button>

            <div className="grid md:grid-cols-[1.5fr,1fr]">
              <div className="relative bg-gray-100">
                <div className="max-h-[85vh] md:max-h-[80vh] flex items-center justify-center">
                  <ImageToggle
                    beforeImage={transformation.beforeImage}
                    afterImage={transformation.afterImage}
                    showAfter={showAfter}
                    name={transformation.name}
                    onToggle={setShowAfter}
                    aspectRatio="square"
                    fit="contain"
                    variant="lightbox"
                  />
                </div>
                <DurationBadge duration={transformation.duration} />
              </div>

              <div className="p-6 md:p-8 flex flex-col bg-gray-50 max-h-[50vh] md:max-h-[80vh] overflow-y-auto">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3 font-['Oswald'] uppercase tracking-wide">
                    {transformation.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {transformation.duration}
                    </span>
                  </div>
                  <div className="prose prose-lg">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {transformation.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2">
                  {transformations.map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        index === currentIndex 
                          ? "bg-primary w-8" 
                          : "bg-gray-200 w-2 hover:bg-gray-300 cursor-pointer"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <LightboxNavigation onNext={onNext} onPrev={onPrev} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransformationLightbox;