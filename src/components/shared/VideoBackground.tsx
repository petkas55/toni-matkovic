import React from 'react';
import { cn } from '@/utils/cn';

interface VideoBackgroundProps {
  videoUrl: string;
  posterUrl: string;
  className?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoUrl,
  posterUrl,
  className
}) => {
  return (
    <div className={cn("absolute inset-0 z-0", className)}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={posterUrl}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
    </div>
  );
};