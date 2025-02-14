import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface TransformationCardProps {
  images: {
    front: string;
    side: string;
    back: string;
  };
  className?: string;
}

const TransformationCard: React.FC<TransformationCardProps> = ({
  images,
  className
}) => {
  const [currentView, setCurrentView] = useState<'front' | 'side' | 'back'>('front');
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(difference) > minSwipeDistance) {
      const views: ('front' | 'side' | 'back')[] = ['front', 'side', 'back'];
      const currentIndex = views.indexOf(currentView);
      
      if (difference > 0) { // Swipe left
        const nextIndex = (currentIndex + 1) % views.length;
        setCurrentView(views[nextIndex]);
      } else { // Swipe right
        const nextIndex = currentIndex === 0 ? views.length - 1 : currentIndex - 1;
        setCurrentView(views[nextIndex]);
      }
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={cn(
        "group relative bg-black rounded-2xl shadow-xl overflow-hidden",
        "transform transition-all duration-500",
        "hover:shadow-2xl",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative aspect-[3/4]">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-30">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Image Container */}
        <motion.div 
          className="absolute inset-0 bg-black flex items-center justify-center"
          initial={false}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image Wrapper */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={images[currentView]}
              alt={`Transformacija - ${currentView} pogled`}
              className="max-w-full max-h-full w-auto h-auto object-contain"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
        </motion.div>

        {/* View Label */}
        <div className={cn(
          "absolute top-4 left-4 z-20",
          "bg-black/90 backdrop-blur-sm text-white",
          "px-4 py-2 rounded-xl",
          "text-xs sm:text-sm font-bold tracking-wider font-heading",
          "transform transition-all duration-300",
          "border border-white/10"
        )}>
          {currentView === 'front' ? 'NAPRIJED' : currentView === 'side' ? 'SA STRANE' : 'STRAGA'}
        </div>

        {/* Tab Navigation */}
        <div className="absolute bottom-0 inset-x-0 p-4 z-20">
          <div className="relative flex bg-black/90 backdrop-blur-md rounded-xl shadow-lg border border-white/10 p-1">
            {/* Active Tab Background */}
            <motion.div
              className="absolute h-full top-0 rounded-lg bg-white"
              layoutId="activeTabBackground"
              transition={{ 
                type: "spring", 
                bounce: 0.15,
                duration: 0.5
              }}
              style={{
                width: `${100 / 3}%`,
                left: `${(['front', 'side', 'back'].indexOf(currentView) * 100) / 3}%`
              }}
            />

            {/* Tab Buttons */}
            {[
              { id: 'front' as const, label: 'Naprijed' },
              { id: 'side' as const, label: 'Sa Strane' },
              { id: 'back' as const, label: 'Straga' }
            ].map((tab) => (
              <button
                key={tab.id}
                data-tab
                onClick={() => setCurrentView(tab.id)}
                className={cn(
                  "relative z-10 flex-1 px-4 py-3",
                  "text-xs sm:text-sm font-medium transition-colors duration-200",
                  "font-heading tracking-wider",
                  currentView === tab.id
                    ? "text-black"
                    : "text-white/70 hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none md:hidden z-10">
          <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TransformationCard;