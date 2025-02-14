import React from 'react';
import { motion } from 'framer-motion';
import { pageContent } from '@/constants/pageContent';
import { ServiceCard } from './ServiceCard';

export const ServiceCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {pageContent.services.items.map((service, index) => (
        <ServiceCard
          key={service.title}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
};