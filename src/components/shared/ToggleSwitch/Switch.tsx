import React from 'react';
import { cn } from '@/utils/cn';
import { SwitchLabel } from './SwitchLabel';
import type { SwitchSize } from './types';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  leftLabel?: string;
  rightLabel?: string;
  size?: SwitchSize;
  disabled?: boolean;
  variant?: 'light' | 'dark';
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  leftLabel = 'Prije',
  rightLabel = 'Poslije',
  size = 'md',
  disabled = false,
  variant = 'light'
}) => {
  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      className={cn(
        "relative flex items-stretch rounded-full select-none",
        "transition-all duration-300 ease-out transform",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        variant === 'light' ? [
          "bg-white/95 backdrop-blur-sm shadow-lg",
          "hover:shadow-xl active:shadow-md",
          "border border-black/5"
        ] : [
          "bg-black/90 backdrop-blur-sm shadow-lg",
          "hover:bg-black active:bg-black/95",
          "border border-white/10"
        ],
        disabled && "opacity-50 cursor-not-allowed"
      )}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      data-toggle-button
    >
      <SwitchLabel
        active={!checked}
        label={leftLabel}
        position="left"
        size={size}
        variant={variant}
      />
      <SwitchLabel
        active={checked}
        label={rightLabel}
        position="right"
        size={size}
        variant={variant}
      />
    </button>
  );
};