import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';
import { cn } from '@/utils/cn';
import type { NavItem } from './types';

interface MobileNavigationProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  }
};

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  items, 
  isOpen, 
  onClose 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className={cn(
            "fixed inset-0 top-[73px] z-50",
            "bg-black/95 backdrop-blur-lg",
            "flex flex-col items-center pt-12",
            "h-[calc(100dvh-73px)]"
          )}
        >
          <Link to="/" className="mb-8" onClick={onClose}>
            <motion.img
              src="https://uvpjvwyagjcozaarxymm.supabase.co/storage/v1/object/public/images/logo/logo.png"
              alt="33 Fitness Logo"
              className="h-12 w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          <nav className="flex flex-col items-center space-y-8">
            {items.map((item, index) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                delay={index * 0.1}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <motion.div 
            className="mt-12 px-6 py-4 border border-white/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-white/80 font-medium mb-2">
              Započnite svoju transformaciju danas
            </p>
            <NavLink to="/kontakt" onClick={onClose}>
              Besplatne konzultacije
            </NavLink>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};