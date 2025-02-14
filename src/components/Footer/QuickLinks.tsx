import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const links = [
  { label: 'Početna', href: '/' },
  { label: 'O Meni', href: '/o-meni' },
  { label: 'Usluge', href: '/usluge' },
  { label: 'Rezultati', href: '/rezultati' },
  { label: 'Pitanja', href: '/pitanja' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const QuickLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-sm uppercase tracking-[0.25em] text-white/60 font-heading mb-6">
        Brza Navigacija
      </h3>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
        {links.map((link, index) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Link
              to={link.href}
              className={cn(
                "text-white/70 hover:text-white transition-colors duration-300",
                "relative group overflow-hidden inline-block"
              )}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};