import React from 'react';
import { cn } from '@/utils/cn';

interface VideoPlayerProps {
  videoId: string;
  platform: 'youtube' | 'vimeo';
  title: string;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoId,
  platform,
  title,
  className
}) => {
  const getEmbedUrl = () => {
    switch (platform) {
      case 'youtube':
        return `https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0`;
      case 'vimeo':
        return `https://player.vimeo.com/video/${videoId}?autoplay=0&title=0&byline=0&portrait=0`;
      default:
        return '';
    }
  };

  return (
    <div className={cn(
      "relative w-full overflow-hidden bg-black rounded-lg",
      "aspect-video shadow-lg",
      className
    )}>
      <iframe
        src={getEmbedUrl()}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
        loading="lazy"
      />
    </div>
  );
};