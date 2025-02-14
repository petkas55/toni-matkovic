import React from 'react';

export const BackgroundImage: React.FC = () => (
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: 'url("https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/landing/about1.jpeg")',
        backgroundPosition: 'center 25%', // Adjusted from 44% to 25% to show more of the top/forehead
        backgroundSize: 'cover',
        backgroundColor: 'black'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/75 to-black/70" />
  </div>
);