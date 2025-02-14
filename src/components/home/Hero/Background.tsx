import React from 'react';

export const Background = () => {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/95" />
      </div>

      {/* Subtle accent gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl opacity-30" />
      </div>
    </>
  );
};