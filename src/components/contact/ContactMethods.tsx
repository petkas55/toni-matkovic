import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';
import { cn } from '@/utils/cn';

const contactMethods = [
  {
    icon: Phone,
    title: 'TELEFON',
    value: '+385 99 123 4567',
    href: 'tel:+385991234567',
    color: 'text-primary group-hover:text-primary/80',
  },
  {
    icon: Mail,
    title: 'EMAIL',
    value: 'info@toni-matkovic.hr',
    href: 'mailto:info@toni-matkovic.hr',
    color: 'text-primary group-hover:text-primary/80',
  },
  {
    icon: Clock,
    title: 'RADNO VRIJEME',
    value: 'Po dogovoru',
    color: 'text-primary group-hover:text-primary/80',
  },
];

export const ContactMethods = () => {
  return (
    <div className="grid gap-6">
      {contactMethods.map((method, index) => (
        <motion.div
          key={method.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={cn(
            "group flex items-center p-8 bg-white",
            "transform transition-all duration-300",
            "hover:shadow-lg hover:-translate-y-1",
            method.href && "cursor-pointer"
          )}
          onClick={() => method.href && window.open(method.href, '_blank')}
        >
          <method.icon className={cn(
            "w-10 h-10 mr-8 transition-colors duration-300",
            method.color
          )} />
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-2 font-heading">
              {method.title}
            </p>
            <p className="text-xl font-medium tracking-[0.05em]">{method.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};