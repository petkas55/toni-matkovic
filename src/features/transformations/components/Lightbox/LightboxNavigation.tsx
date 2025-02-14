import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxNavigationProps {
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxNavigation: React.FC<LightboxNavigationProps> = ({ onNext, onPrev }) => {
  return (
    <>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 md:p-4 rounded-full shadow-lg hover:bg-white transition-all duration-300 group hidden md:block"
        aria-label="Previous transformation"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 md:p-4 rounded-full shadow-lg hover:bg-white transition-all duration-300 group hidden md:block"
        aria-label="Next transformation"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform" />
      </button>
    </>
  );
}