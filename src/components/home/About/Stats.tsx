import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '8+', label: 'Godina Iskustva' },
  { value: '500+', label: 'Klijenata' },
  { value: '95%', label: 'Uspješnost' }
];

export const Stats: React.FC = () => (
  <div className="flex items-center gap-8 text-white">
    {stats.map((stat, index) => (
      <React.Fragment key={stat.label}>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-3xl font-bold font-heading tracking-wider">{stat.value}</div>
          <div className="text-sm opacity-70 uppercase tracking-wider">{stat.label}</div>
        </motion.div>
        {index < stats.length - 1 && (
          <div className="h-8 w-px bg-white/20" />
        )}
      </React.Fragment>
    ))}
  </div>
);