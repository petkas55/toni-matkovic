import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { pageContent } from '@/constants/pageContent';

export const ServiceComparison = () => {
  return (
    <div className="mb-20">
      <h2 className="heading-secondary text-center mb-12">Usporedba Usluga</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">Značajke</th>
              {pageContent.services.items.map((service) => (
                <th key={service.title} className="p-4 text-center">{service.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageContent.services.comparison.map((row, index) => (
              <motion.tr
                key={row.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-gray-200"
              >
                <td className="p-4 text-gray-600">{row.feature}</td>
                {row.availability.map((available, idx) => (
                  <td key={idx} className="p-4 text-center">
                    {available && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};