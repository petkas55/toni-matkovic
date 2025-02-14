import React from 'react';
import { cn } from '@/utils/cn';
import { CardToggle } from './CardToggle';
import { LightboxToggle } from './LightboxToggle';

interface ImageToggleProps {
  beforeImage: string;
  afterImage: string;
  showAfter: boolean;
  name: string;
  onToggle?: (value: boolean) => void;
  aspectRatio?: 'square' | 'video' | '3/4';
  fit?: 'cover' | 'contain';
  variant?: 'card' | 'lightbox';
}

export const ImageToggle: React.FC<ImageToggleProps> = ({
  beforeImage,
  afterImage,
  showAfter,
  name,
  onToggle,
  aspectRatio = '3/4',
  fit = 'cover',
  variant = 'card',
}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const aspectRatioClasses = {
    'square': 'aspect-square',
    'video': 'aspect-video',
    '3/4': 'aspect-[3/4]',
  };

  const fitClasses = {
    'cover': 'object-cover',
    'contain': 'object-contain',
  };

  return (
    <div className={cn("relative w-full", aspectRatioClasses[aspectRatio])}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <div className="relative w-full h-full overflow-hidden bg-gray-100">
        <img
          src={beforeImage}
          alt={`${name} prije transformacije`}
          className={cn(
            "absolute inset-0 w-full h-full transition-all duration-700",
            fitClasses[fit],
            showAfter ? "opacity-0" : "opacity-100"
          )}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />

        <img
          src={afterImage}
          alt={`${name} poslije transformacije`}
          className={cn(
            "absolute inset-0 w-full h-full transition-all duration-700",
            fitClasses[fit],
            showAfter ? "opacity-100" : "opacity-0"
          )}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />

        {onToggle && variant === 'card' && (
          <CardToggle showAfter={showAfter} onToggle={onToggle} />
        )}

        {onToggle && variant === 'lightbox' && (
          <LightboxToggle showAfter={showAfter} onToggle={onToggle} />
        )}
      </div>
    </div>
  );
};