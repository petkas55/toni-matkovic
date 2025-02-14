import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import TransformationCard from '@/components/shared/TransformationCard';
import { CarouselButton } from './CarouselButton';
import { useCarouselControls } from './useCarouselControls';
import { cn } from '@/utils/cn';
import type { Transformation } from '../../types';

interface TransformationCarouselProps {
  transformations: Transformation[];
  onCardClick: (transformation: Transformation) => void;
}

const TransformationCarousel: React.FC<TransformationCarouselProps> = ({
  transformations,
  onCardClick,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    }
  });

  const { 
    canScrollPrev, 
    canScrollNext, 
    scrollPrev, 
    scrollNext,
    isDragging 
  } = useCarouselControls(emblaApi);

  const handleCardClick = (transformation: Transformation) => {
    if (!isDragging) {
      onCardClick(transformation);
    }
  };

  return (
    <div className="relative px-4 md:px-8">
      <div 
        className={cn(
          "overflow-hidden rounded-xl",
          "touch-pan-x"
        )}
        ref={emblaRef}
      >
        <div className="flex -ml-4 py-8">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className={cn(
                "flex-[0_0_100%] min-w-0 pl-4",
                "sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
                "snap-center"
              )}
            >
              <div 
                className="transform transition-all duration-300 hover:scale-[0.98]"
                onClick={() => handleCardClick(transformation)}
              >
                <TransformationCard {...transformation} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <CarouselButton
        direction="prev"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="hidden md:block"
      />

      <CarouselButton
        direction="next"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="hidden md:block"
      />
    </div>
  );
};

export default TransformationCarousel;