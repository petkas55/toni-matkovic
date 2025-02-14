import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TransformationCard from '@/components/shared/TransformationCard';
import { cn } from '@/utils/cn';
import type { Transformation } from '@/types';

interface ResultsCarouselProps {
  transformations: Transformation[];
}

export const ResultsCarousel: React.FC<ResultsCarouselProps> = ({ transformations }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    dragFree: true,
    skipSnaps: false,
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
      '(min-width: 1280px)': { slidesToScroll: 4 },
    }
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div 
        className={cn(
          "max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8",
          "touch-pan-x touch-pan-y",
          "overflow-visible"
        )}
      >
        <div 
          className="overflow-hidden -mx-4 px-4"
          ref={emblaRef}
        >
          <div className="flex -ml-6">
            {transformations.map((transformation, index) => (
              <div
                key={index}
                className={cn(
                  "flex-[0_0_100%] min-w-0 pl-6",
                  "sm:flex-[0_0_50%]",
                  "lg:flex-[0_0_33.333%]",
                  "xl:flex-[0_0_25%]",
                  "snap-center"
                )}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "transform-gpu transition-all duration-500",
                    activeIndex === index ? "scale-100" : "scale-95 opacity-50"
                  )}
                >
                  <TransformationCard 
                    {...transformation}
                    className="aspect-[3/4] w-full"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className={cn(
            "absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10",
            "bg-white/10 backdrop-blur-sm text-white rounded-full p-4",
            "border border-white/10",
            "transition-all duration-300 hover:bg-white/20",
            "group shadow-lg",
            !canScrollPrev && "opacity-0 pointer-events-none",
            "hidden md:block"
          )}
          disabled={!canScrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:scale-110" />
        </button>

        <button
          onClick={scrollNext}
          className={cn(
            "absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10",
            "bg-white/10 backdrop-blur-sm text-white rounded-full p-4",
            "border border-white/10",
            "transition-all duration-300 hover:bg-white/20",
            "group shadow-lg",
            !canScrollNext && "opacity-0 pointer-events-none",
            "hidden md:block"
          )}
          disabled={!canScrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:scale-110" />
        </button>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {transformations.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === activeIndex 
                  ? "bg-white w-8" 
                  : "bg-white/20 w-2 hover:bg-white/40"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="mt-8 flex justify-center md:hidden">
          <motion.div 
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Povucite za više transformacija
          </motion.div>
        </div>
      </div>
    </div>
  );
};