import React from 'react';
import { PhoneFrame } from './PhoneFrame';
import { motion } from 'framer-motion';

export const AppPhone = () => (
  <PhoneFrame className="transform translate-y-8 lg:translate-y-12 relative z-20">
    <motion.div 
      className="relative h-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Workout Image */}
      <div className="absolute inset-0">
        <img
          src="https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/services/online_1.jpeg"
          alt="Workout Session"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  </PhoneFrame>
);