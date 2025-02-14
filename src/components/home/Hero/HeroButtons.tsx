import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export const HeroButtons = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('online-coaching');
    if (servicesSection) {
      const headerOffset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <Link 
        to="/kontakt"
        className={cn(
          "group relative overflow-hidden",
          "bg-white text-black px-6 sm:px-8 py-4",
          "font-heading text-base sm:text-lg uppercase tracking-widest",
          "transition-all duration-500",
          "hover:bg-gray-100",
          "w-full sm:w-auto text-center"
        )}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Započni Danas
          <motion.div
            className="relative"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </span>
        <motion.div
          className="absolute inset-0 bg-white"
          initial={false}
          whileHover={{ scale: 1.5, x: 50 }}
          transition={{ duration: 0.4 }}
        />
      </Link>

      <button
        onClick={scrollToServices}
        className={cn(
          "group relative",
          "border border-white/30 px-6 sm:px-8 py-4",
          "font-heading text-base sm:text-lg uppercase tracking-widest",
          "text-white hover:text-white",
          "transition-all duration-300",
          "hover:border-white",
          "overflow-hidden",
          "w-full sm:w-auto text-center"
        )}
      >
        <span className="relative z-10">Saznaj Više</span>
        <motion.div
          className="absolute inset-0 bg-white/5"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </button>
    </motion.div>
  );
};