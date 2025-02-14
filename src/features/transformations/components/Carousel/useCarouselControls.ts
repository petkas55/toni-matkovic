import { useState, useCallback, useEffect } from 'react';
import type { EmblaCarouselType as CarouselType } from 'embla-carousel';

export const useCarouselControls = (emblaApi: CarouselType | undefined) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('pointerDown', () => setIsDragging(false));
    emblaApi.on('dragStart', () => setIsDragging(true));
    emblaApi.on('dragEnd', () => {
      setTimeout(() => setIsDragging(false), 100);
    });

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('pointerDown', () => setIsDragging(false));
      emblaApi.off('dragStart', () => setIsDragging(true));
      emblaApi.off('dragEnd', () => setIsDragging(false));
    };
  }, [emblaApi, onSelect]);

  return {
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
    isDragging
  };
};