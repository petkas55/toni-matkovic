import React from 'react';
import { cn } from '@/utils/cn';

interface DurationBadgeProps {
  duration: string;
}

export const DurationBadge: React.FC<DurationBadgeProps> = ({ duration }) => (
  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm z-10">
    {duration}
  </div>
);