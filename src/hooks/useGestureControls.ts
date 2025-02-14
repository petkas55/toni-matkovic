import { useState, useCallback } from 'react';

interface TouchState {
  startX: number;
  startY: number;
  startTime: number;
}

interface UseGestureControlsProps {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onTap?: () => void;
  swipeThreshold?: number;
  tapThreshold?: number;
  timeThreshold?: number;
}

export const useGestureControls = ({
  onSwipeLeft,
  onSwipeRight,
  onTap,
  swipeThreshold = 50,
  tapThreshold = 10,
  timeThreshold = 300,
}: UseGestureControlsProps) => {
  const [touchState, setTouchState] = useState<TouchState | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchState({
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      startTime: Date.now(),
    });
    setIsScrolling(false);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchState) return;

    const deltaY = Math.abs(e.touches[0].clientY - touchState.startY);
    const deltaX = Math.abs(e.touches[0].clientX - touchState.startX);

    // If vertical movement is greater than horizontal, user is probably scrolling
    if (deltaY > deltaX) {
      setIsScrolling(true);
    }
  }, [touchState]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchState || isScrolling) return;

    const deltaX = e.changedTouches[0].clientX - touchState.startX;
    const deltaY = Math.abs(e.changedTouches[0].clientY - touchState.startY);
    const deltaTime = Date.now() - touchState.startTime;

    // Check if the movement was primarily horizontal
    const isHorizontalMove = Math.abs(deltaX) > deltaY;

    if (deltaTime < timeThreshold) {
      if (isHorizontalMove && Math.abs(deltaX) > swipeThreshold) {
        // Swipe gesture
        if (deltaX > 0) {
          onSwipeRight?.();
        } else {
          onSwipeLeft?.();
        }
      } else if (Math.abs(deltaX) < tapThreshold && deltaY < tapThreshold) {
        // Tap gesture
        onTap?.();
      }
    }

    setTouchState(null);
  }, [touchState, isScrolling, onSwipeLeft, onSwipeRight, onTap, swipeThreshold, tapThreshold, timeThreshold]);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    isScrolling,
  };
};