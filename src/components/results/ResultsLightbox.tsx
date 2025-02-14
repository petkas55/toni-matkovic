import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { Transformation } from '@/types';

interface ResultsLightboxProps {
  transformations: Transformation[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ResultsLightbox: React.FC<ResultsLightboxProps> = ({
  transformations,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [currentView, setCurrentView] = React.useState<'front' | 'side' | 'back'>('front');

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

  const transformation = transformations[currentIndex];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
          className="relative max-w-7xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div className="relative bg-black rounded-lg overflow-hidden">
            <div className="max-h-[85vh] flex items-center justify-center">
              <img
                src={transformation.images[currentView]}
                alt={`Transformacija - ${currentView} pogled`}
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full hover:bg-white transition-colors duration-300 group hidden md:block"
            >
              <ChevronLeft className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full hover:bg-white transition-colors duration-300 group hidden md:block"
            >
              <ChevronRight className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
            </button>

            {/* View Navigation */}
            <div className="absolute bottom-0 inset-x-0 p-4">
              <div className="relative flex bg-black/90 backdrop-blur-md rounded-xl shadow-lg border border-white/10 p-1">
                {/* Active Tab Background */}
                <motion.div
                  className="absolute h-full top-0 rounded-lg bg-white"
                  layoutId="lightboxActiveTab"
                  transition={{ 
                    type: "spring", 
                    bounce: 0.15,
                    duration: 0.5
                  }}
                  style={{
                    width: `${100 / 3}%`,
                    left: `${(['front', 'side', 'back'].indexOf(currentView) * 100) / 3}%`
                  }}
                />

                {/* Tab Buttons */}
                {[
                  { id: 'front' as const, label: 'Naprijed' },
                  { id: 'side' as const, label: 'Sa Strane' },
                  { id: 'back' as const, label: 'Straga' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setCurrentView(tab.id)}
                    className={cn(
                      "relative z-10 flex-1 px-4 py-3",
                      "text-sm font-medium transition-colors duration-200",
                      "font-heading tracking-wider",
                      currentView === tab.id
                        ? "text-black"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};