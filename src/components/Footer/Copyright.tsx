import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Copyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-white/10"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/60 text-sm">
          © {currentYear} Toni Matković. Sva prava pridržana.
        </p>
      </div>
    </motion.div>
  );
};