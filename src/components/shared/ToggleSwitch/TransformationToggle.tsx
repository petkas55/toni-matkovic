import React from 'react';
import { cn } from '@/utils/cn';
import { Switch } from './Switch';

interface TransformationToggleProps {
  showAfter: boolean;
  onToggle: (value: boolean) => void;
  variant?: 'card' | 'lightbox';
}

export const TransformationToggle: React.FC<TransformationToggleProps> = ({
  showAfter,
  onToggle,
  variant = 'card'
}) => {
  const variants = {
    card: "absolute bottom-4 left-1/2 -translate-x-1/2 z-30",
    lightbox: "absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
  };

  return (
    <div className={cn(variants[variant])}>
      <Switch
        checked={showAfter}
        onChange={onToggle}
        size={variant === 'lightbox' ? 'lg' : 'md'}
      />
    </div>
  );
};