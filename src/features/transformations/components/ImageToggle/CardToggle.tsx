import React from 'react';
import { cn } from '@/utils/cn';

interface CardToggleProps {
  showAfter: boolean;
  onToggle: (value: boolean) => void;
}

export const CardToggle: React.FC<CardToggleProps> = ({ showAfter, onToggle }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle(!showAfter);
  };

  const handleTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle(!showAfter);
  };

  return (
    <button 
      onClick={handleClick}
      onTouchEnd={handleTouch}
      data-toggle-button
      className={cn(
        "absolute bottom-4 right-4",
        "flex items-center bg-white rounded-full",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "cursor-pointer z-30",
        "border border-primary/10",
        "h-8 text-sm"
      )}
    >
      <div className={cn(
        "px-3 py-1 rounded-full font-medium transition-colors",
        !showAfter ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
      )}>
        Prije
      </div>
      <div className={cn(
        "px-3 py-1 rounded-full font-medium transition-colors",
        showAfter ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
      )}>
        Poslije
      </div>
    </button>
  );
};