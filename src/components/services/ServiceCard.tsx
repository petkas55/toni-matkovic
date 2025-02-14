import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          {service.price && (
            <span className="bg-primary px-3 py-1 rounded-full text-sm font-semibold">
              Od {service.price}€
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div 
            className="bg-primary/10 p-3 rounded-full"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <service.icon className="w-6 h-6 text-primary" />
          </motion.div>
          <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
        </div>

        <p className="text-gray-600 mb-6">{service.description}</p>

        {service.features && (
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {service.link ? (
          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center inline-block"
          >
            Pogledaj Raspored
          </a>
        ) : (
          <Link 
            to="/kontakt" 
            className="btn-primary w-full text-center inline-block"
          >
            Kontaktirajte Me
          </Link>
        )}
      </div>
    </motion.div>
  );
};