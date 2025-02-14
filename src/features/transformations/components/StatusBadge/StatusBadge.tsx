import React from 'react';
import { TrendingUp } from 'lucide-react';
import { cn } from '@/utils/cn';

interface StatusBadgeProps {
  showAfter: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ showAfter }) => {
  return (
    <div 
      className={cn(
        "absolute top-4 left-4 z-20",
        "bg-primary text-white px-4 py-2 rounded-full",
        "text-sm font-medium",
        "transform transition-all duration-500",
        "flex items-center gap-2",
        showAfter ? "translate-x-0" : "-translate-x-2",
        "hover:bg-secondary"
      )}
    >
      <TrendingUp className={cn(
        "w-4 h-4 transition-transform duration-500",
        showAfter ? "rotate-45" : "rotate-0"
      )} />
      <span className="transition-opacity duration-300">
        {showAfter ? 'Poslije' : 'Prije'}
      </span>
    </div>
  );
};