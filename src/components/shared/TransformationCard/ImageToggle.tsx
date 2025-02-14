import React from 'react';
import { cn } from '@/utils/cn';
import { TransformationToggle } from '../ToggleSwitch/TransformationToggle';

interface ImageToggleProps {
  showAfter: boolean;
  onToggle: () => void;
  beforeImage: string;
  afterImage: string;
  name: string;
}

export const ImageToggle: React.FC<ImageToggleProps> = ({
  showAfter,
  onToggle,
  beforeImage,
  afterImage,
  name,
}) => (
  <>
    {/* Images Container */}
    <div className="relative w-full h-full">
      {/* Before Image */}
      <div 
        className={cn(
          "absolute inset-0 transition-transform duration-500 ease-in-out",
          showAfter ? "-translate-x-full" : "translate-x-0"
        )}
      >
        <img
          src={beforeImage}
          alt={`${name} prije transformacije`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* After Image */}
      <div 
        className={cn(
          "absolute inset-0 transition-transform duration-500 ease-in-out",
          showAfter ? "translate-x-0" : "translate-x-full"
        )}
      >
        <img
          src={afterImage}
          alt={`${name} poslije transformacije`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <TransformationToggle
      showAfter={showAfter}
      onToggle={() => onToggle()}
    />
  </>
);