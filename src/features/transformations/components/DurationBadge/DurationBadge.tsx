import React from 'react';
import { Timer } from 'lucide-react';

interface DurationBadgeProps {
  duration: string;
}

export const DurationBadge: React.FC<DurationBadgeProps> = ({ duration }) => {
  return (
    <div className="absolute bottom-4 left-4 flex items-center bg-black/70 text-white px-3 py-1 rounded-full text-sm z-10">
      <Timer className="w-4 h-4 mr-1" />
      {duration}
    </div>
  );
};