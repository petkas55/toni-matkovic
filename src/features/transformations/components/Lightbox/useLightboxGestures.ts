import { useState } from 'react';

interface UseLightboxGesturesProps {
  onNext: () => void;
  onPrev: () => void;
}

export const useLightboxGestures = ({ onNext, onPrev }: UseLightboxGesturesProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNext();
    }
    if (isRightSwipe) {
      onPrev();
    }
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};