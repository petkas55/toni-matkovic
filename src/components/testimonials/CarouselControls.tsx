import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrev,
  onNext,
  canScrollPrev,
  canScrollNext,
}) => {
  return (
    <div className="flex justify-center gap-4 mt-12">
      <button
        onClick={onPrev}
        disabled={!canScrollPrev}
        className={cn(
          "p-3 rounded-full transition-all duration-300",
          "border border-white/20 hover:border-white",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "group"
        )}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={onNext}
        disabled={!canScrollNext}
        className={cn(
          "p-3 rounded-full transition-all duration-300",
          "border border-white/20 hover:border-white",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "group"
        )}
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};