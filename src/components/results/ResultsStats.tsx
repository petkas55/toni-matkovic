import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Target } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: "500+",
    label: "Zadovoljnih klijenata",
  },
  {
    icon: Clock,
    value: "8+",
    label: "Godina iskustva",
  },
  {
    icon: Target,
    value: "100%",
    label: "Posvećenost cilju",
  },
];

export const ResultsStats = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white p-8 border border-black/5 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 font-heading">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};