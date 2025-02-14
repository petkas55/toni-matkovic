import React from 'react';
import { motion } from 'framer-motion';

export const ProgressGraph = () => {
  const data = [
    { day: 'Pon', value: 65, target: 70 },
    { day: 'Uto', value: 85, target: 70 },
    { day: 'Sri', value: 75, target: 70 },
    { day: 'Čet', value: 90, target: 70 },
    { day: 'Pet', value: 80, target: 70 },
    { day: 'Sub', value: 95, target: 70 },
    { day: 'Ned', value: 85, target: 70 },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="h-40 relative">
        {/* Target Line */}
        <div 
          className="absolute left-0 right-0 border-t-2 border-dashed border-primary/20"
          style={{ top: '30%' }}
        >
          <span className="absolute -top-6 right-0 text-xs text-gray-400">
            Cilj
          </span>
        </div>

        {/* Bars */}
        <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between">
          {data.map((item, i) => (
            <div key={i} className="flex-1 px-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${item.value}%` }}
                transition={{ 
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                className="w-full bg-gradient-to-t from-primary/80 to-accent/80 rounded-t-sm relative group"
              >
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.value}%
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="mt-2 flex justify-between">
        {data.map((item, i) => (
          <span key={i} className="text-xs text-gray-500">
            {item.day}
          </span>
        ))}
      </div>
    </div>
  );
};