import React from 'react';
import { cn } from '@/utils/cn';

interface LightboxToggleProps {
  showAfter: boolean;
  onToggle: (value: boolean) => void;
}

export const LightboxToggle: React.FC<LightboxToggleProps> = ({ showAfter, onToggle }) => {
  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle(!showAfter);
  };

  return (
    <button 
      onClick={handleClick}
      data-toggle-button
      className={cn(
        "absolute bottom-6 left-1/2 -translate-x-1/2",
        "flex items-center bg-white rounded-full",
        "shadow-xl hover:shadow-2xl transition-all duration-300",
        "cursor-pointer z-30",
        "border border-primary/10",
        "h-10 md:h-12 text-sm md:text-base"
      )}
    >
      <div className={cn(
        "px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300",
        !showAfter ? "bg-primary text-white scale-105" : "text-gray-600 hover:text-primary"
      )}>
        Prije
      </div>
      <div className={cn(
        "px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300",
        showAfter ? "bg-primary text-white scale-105" : "text-gray-600 hover:text-primary"
      )}>
        Poslije
      </div>
    </button>
  );
};