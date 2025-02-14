import React from 'react';
import { cn } from '@/utils/cn';
import { switchSizes } from './constants';
import type { SwitchSize } from './types';

interface SwitchLabelProps {
  active: boolean;
  label: string;
  position: 'left' | 'right';
  size: SwitchSize;
  variant: 'light' | 'dark';
}

export const SwitchLabel: React.FC<SwitchLabelProps> = ({
  active,
  label,
  position,
  size,
  variant
}) => (
  <div
    className={cn(
      "relative flex items-center justify-center z-0",
      "font-medium tracking-wide transition-all duration-300",
      position === 'left' ? 'rounded-l-full' : 'rounded-r-full',
      switchSizes[size],
      variant === 'light' ? [
        active && "bg-black text-white",
        !active && "text-gray-600 hover:text-gray-900"
      ] : [
        active && "bg-white text-black",
        !active && "text-white/70 hover:text-white"
      ],
      // Hover effect
      "group",
      !active && "hover:bg-black/5 dark:hover:bg-white/5",
      // Active state animation
      active && "scale-[1.02]"
    )}
  >
    {/* Background animation */}
    <div className={cn(
      "absolute inset-0 rounded-full transition-opacity duration-300",
      active ? "opacity-100" : "opacity-0",
      variant === 'light' ? "bg-black" : "bg-white"
    )} />
    
    {/* Label text */}
    <span className="relative z-10">
      {label}
    </span>
  </div>
);