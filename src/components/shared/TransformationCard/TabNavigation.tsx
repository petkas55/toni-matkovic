import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface TabNavigationProps {
  currentView: 'front' | 'side' | 'back';
  onViewChange: (view: 'front' | 'side' | 'back') => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  currentView,
  onViewChange
}) => {
  const tabs = [
    { id: 'front' as const, label: 'Naprijed' },
    { id: 'side' as const, label: 'Sa Strane' },
    { id: 'back' as const, label: 'Straga' }
  ];

  return (
    <div className="absolute bottom-0 inset-x-0 p-4 z-20">
      <motion.div 
        className="relative flex bg-black/90 backdrop-blur-md rounded-xl shadow-lg border border-white/10 p-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Active Tab Background */}
        <motion.div
          className="absolute h-full top-0 rounded-lg bg-white"
          initial={false}
          animate={{
            left: `${(tabs.findIndex(tab => tab.id === currentView) * 100) / tabs.length}%`,
            width: `${100 / tabs.length}%`
          }}
          transition={{ 
            type: "spring", 
            bounce: 0.15,
            duration: 0.4
          }}
        />

        {/* Tab Buttons */}
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            data-tab
            onClick={() => onViewChange(tab.id)}
            className={cn(
              "relative z-10 flex-1 px-4 py-3",
              "text-xs sm:text-sm font-medium transition-colors duration-200",
              "font-heading tracking-wider",
              currentView === tab.id
                ? "text-black"
                : "text-white/70 hover:text-white"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              initial={false}
              animate={{ 
                opacity: currentView === tab.id ? 1 : 0.7,
                y: currentView === tab.id ? 0 : 2
              }}
              transition={{ duration: 0.2 }}
            >
              {tab.label}
            </motion.span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};