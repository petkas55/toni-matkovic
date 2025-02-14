import React from 'react';
import { cn } from '@/utils/cn';

export const VideoBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/landing/hero.jpeg")',
            backgroundPosition: 'center 25%', // Adjusted from 44% to 25% to show more of the top/forehead
            backgroundSize: 'cover',
            backgroundColor: 'black'
          }}
        />
      </div>
      
      {/* Simple dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
    </div>
  );
};