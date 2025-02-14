import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: {
    front: string;
    side: string;
    back: string;
  };
  currentView: 'front' | 'side' | 'back';
  onViewChange: (view: 'front' | 'side' | 'back') => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentView,
  onViewChange,
}) => {
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const views: ('front' | 'side' | 'back')[] = ['front', 'side', 'back'];
        const currentIndex = views.indexOf(currentView);
        const prevIndex = currentIndex === 0 ? views.length - 1 : currentIndex - 1;
        onViewChange(views[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const views: ('front' | 'side' | 'back')[] = ['front', 'side', 'back'];
        const currentIndex = views.indexOf(currentView);
        const nextIndex = (currentIndex + 1) % views.length;
        onViewChange(views[nextIndex]);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyboard);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, currentView, onViewChange]);

  return (
    <AnimatePresence>
      {isOpen && (
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
                  src={images[currentView]}
                  alt={`Transformacija - ${currentView} pogled`}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const views: ('front' | 'side' | 'back')[] = ['front', 'side', 'back'];
                  const currentIndex = views.indexOf(currentView);
                  const prevIndex = currentIndex === 0 ? views.length - 1 : currentIndex - 1;
                  onViewChange(views[prevIndex]);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full hover:bg-white transition-colors duration-300 group hidden md:block"
              >
                <ChevronLeft className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const views: ('front' | 'side' | 'back')[] = ['front', 'side', 'back'];
                  const currentIndex = views.indexOf(currentView);
                  const nextIndex = (currentIndex + 1) % views.length;
                  onViewChange(views[nextIndex]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full hover:bg-white transition-colors duration-300 group hidden md:block"
              >
                <ChevronRight className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
              </button>

              {/* View Label */}
              <div className="absolute top-4 left-4 bg-black/90 text-white px-6 py-3 rounded-lg font-heading tracking-wider">
                {currentView === 'front' ? 'NAPRIJED' : currentView === 'side' ? 'SA STRANE' : 'STRAGA'}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};