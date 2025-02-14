import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://instagram.com/toni.matkovic.fitness',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://facebook.com/toni.matkovic.fitness',
    label: 'Facebook',
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/385991234567',
    label: 'WhatsApp',
  },
];

export const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-sm uppercase tracking-[0.25em] text-white/60 font-heading mb-8">
        Pratite Me
      </h3>
      <div className="flex gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 + index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
          </motion.a>
        ))}
      </div>
      <p className="mt-6 text-white/70">
        Pratite me na društvenim mrežama za najnovije savjete i transformacije
      </p>
    </motion.div>
  );
};