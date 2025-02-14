import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GoalCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export const GoalCard: React.FC<GoalCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-black/5 -rotate-2 rounded-lg transform-gpu transition-transform duration-300 group-hover:rotate-0" />
      <div className="relative bg-white p-8 rounded-lg shadow-sm transition-all duration-300 group-hover:translate-y-1">
        <div className="flex items-start justify-between mb-8">
          <div className="relative">
            <div className="w-16 h-16 flex items-center justify-center">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                {icon}
                <div className="absolute inset-0 bg-primary/5 rounded-lg -z-10 transform transition-all duration-300 group-hover:scale-110" />
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.h3 
          className="text-xl font-bold text-primary mb-4 font-heading tracking-wider"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  );
};