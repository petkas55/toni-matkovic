import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/utils/cn';

interface StatsCardProps {
  title: string;
  label: string;
  value: string;
  progress: number;
  trend?: string;
  color?: 'primary' | 'accent' | 'success';
}

const colors = {
  primary: 'from-primary to-primary/80',
  accent: 'from-accent to-accent/80',
  success: 'from-green-500 to-green-600',
};

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  label,
  value,
  progress,
  trend,
  color = 'primary'
}) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
      <span className="text-lg font-bold text-primary">{value}</span>
    </div>

    <div className="space-y-2">
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          className={cn(
            "h-full rounded-full bg-gradient-to-r",
            colors[color]
          )}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {trend && (
        <div className="flex items-center gap-1 text-xs">
          <TrendingUp className="w-3 h-3 text-green-500" />
          <span className="text-gray-600">{trend}</span>
        </div>
      )}
    </div>
  </div>
);