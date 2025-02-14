import React from 'react';

export const HeroBackground: React.FC = () => (
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm" />
  </div>
);