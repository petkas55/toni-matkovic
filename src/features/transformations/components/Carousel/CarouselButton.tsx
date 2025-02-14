import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface CarouselButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
  className?: string;
}

export const CarouselButton: React.FC<CarouselButtonProps> = ({
  direction,
  onClick,
  disabled,
  className,
}) => {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  const position = direction === 'prev' ? '-left-4 md:-left-8' : '-right-4 md:-right-8';

  return (
    <button
      onClick={onClick}
      className={cn(
        'absolute top-1/2 -translate-y-1/2 z-10',
        position,
        'bg-white rounded-full p-4 shadow-lg',
        'transition-all duration-300',
        'hover:bg-primary hover:text-white',
        'group',
        disabled ? 'opacity-0 cursor-not-allowed' : 'opacity-100',
        className
      )}
      disabled={disabled}
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
    >
      <Icon className={cn(
        "w-6 h-6 transition-transform duration-300",
        "group-hover:scale-110"
      )} />
    </button>
  );
};