import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { TabNavigation } from './TabNavigation';
import { StatusBadge } from './StatusBadge';

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
  const touchRef = useRef({ startX: 0, startTime: 0 });

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current = {
      startX: e.touches[0].clientX,
      startTime: Date.now()
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const deltaX = touchEnd - touchRef.current.startX;
    const deltaTime = Date.now() - touchRef.current.startTime;
    
    // Only handle swipe if it was quick enough and long enough
    if (Math.abs(deltaX) > 50 && deltaTime < 300) {
      const views: ('front' | 'side' | 'back')[] = ['front', 'side', 'back'];
      const currentIndex = views.indexOf(currentView);
      
      if (deltaX > 0) { // Swipe right
        const prevIndex = currentIndex === 0 ? views.length - 1 : currentIndex - 1;
        setCurrentView(views[prevIndex]);
      } else { // Swipe left
        const nextIndex = (currentIndex + 1) % views.length;
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

        {/* Main Image */}
        <motion.div 
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={images[currentView]}
            alt={`Transformacija - ${currentView} pogled`}
            className="w-full h-full object-cover"
            loading="lazy"
            onLoad={handleImageLoad}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </motion.div>

        {/* Status Badge */}
        <StatusBadge view={currentView} />

        {/* Tab Navigation */}
        <TabNavigation 
          currentView={currentView} 
          onViewChange={setCurrentView} 
        />

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