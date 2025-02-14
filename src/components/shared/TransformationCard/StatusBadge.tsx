import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface StatusBadgeProps {
  view: 'front' | 'side' | 'back';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ view }) => {
  const labels = {
    front: 'NAPRIJED',
    side: 'SA STRANE',
    back: 'STRAGA'
  };

  return (
    <motion.div
      layout
      className={cn(
        "absolute top-4 left-4 z-20",
        "bg-black/90 backdrop-blur-sm text-white",
        "px-4 py-2 rounded-xl",
        "text-xs sm:text-sm font-bold tracking-wider font-heading",
        "transform transition-all duration-300",
        "border border-white/10",
        "flex items-center gap-2"
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        key={view}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {labels[view]}
      </motion.div>
      
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-white"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  );
};