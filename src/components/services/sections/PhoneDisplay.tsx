import React from 'react';
import { motion } from 'framer-motion';

export const PhoneDisplay = () => {
  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="relative"
    >
      {/* Phone Frame */}
      <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-gray-700 bg-gray-800 shadow-2xl">
        {/* Screen Content */}
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-white">
          {/* Status Bar */}
          <div className="h-6 bg-gradient-to-r from-primary to-accent px-4 flex items-center justify-between">
            <span className="text-white/90 text-xs">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-white/90" />
              <div className="w-2 h-2 rounded-full bg-white/90" />
              <div className="w-2 h-2 rounded-full bg-white/90" />
            </div>
          </div>

          {/* App Content */}
          <div className="p-4 space-y-4">
            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Toni Matković</h3>
                <p className="text-sm text-gray-600">Osobni Trener</p>
              </div>
            </div>

            {/* Progress Cards */}
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-xl"
              >
                <div className="h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg mb-3 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Workout"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    style={{ width: `${(index + 1) * 40}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Highlight effect */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-transparent to-transparent" />
    </motion.div>
  );
};