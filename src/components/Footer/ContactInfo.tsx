import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    text: 'Radauševa 3, Zagreb',
  },
  {
    icon: Mail,
    text: 'fitness.matko33@gmail.com',
    href: 'mailto:fitness.matko33@gmail.com',
  },
  {
    icon: Phone,
    text: '+385 99 687 0224',
    href: 'tel:+385996870224',
  },
];

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="text-sm uppercase tracking-[0.25em] text-white/60 font-heading mb-8">
        Kontakt
      </h3>
      <ul className="space-y-4">
        {contactInfo.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center gap-4"
          >
            <item.icon className="w-5 h-5 text-white/40" />
            {item.href ? (
              <a
                href={item.href}
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-white/70">{item.text}</span>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};