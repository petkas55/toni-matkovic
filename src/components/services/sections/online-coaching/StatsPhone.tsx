import React from 'react';
import { PhoneFrame } from './PhoneFrame';
import { motion } from 'framer-motion';

export const StatsPhone = () => (
  <PhoneFrame className="transform -translate-y-8 lg:-translate-y-12 relative z-10 -ml-20">
    <div className="relative h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <img
          src="https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/services/online_2.jpeg"
          alt="App Stats"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  </PhoneFrame>
);