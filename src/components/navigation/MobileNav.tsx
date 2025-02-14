import React from 'react';
import { NavLink } from './NavLink';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
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

const itemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
            "h-[calc(100dvh-73px)]",
            "touch-pan-y"
          )}
        >
          <nav className="flex flex-col items-center space-y-8 w-full px-6">
            {['Pocetna', 'O Meni', 'Usluge', 'Rezultati', 'Pitanja i Savjeti', 'Kontakt'].map((item, index) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="w-full"
              >
                <NavLink
                  to={item === 'Pocetna' ? '/' : `/${item.toLowerCase().replace(/ i /g, '-').replace(/ /g, '-')}`}
                  onClick={onClose}
                  delay={index * 0.1}
                  className="text-2xl block w-full text-center py-3"
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          <motion.div 
            className="mt-12 px-6 py-4 border border-white/20 text-center mx-6 w-[calc(100%-3rem)]"
            variants={itemVariants}
            transition={{ delay: 0.6 }}
          >
            <p className="text-white/80 font-medium mb-4">
              Započnite svoju transformaciju danas
            </p>
            <NavLink 
              to="/kontakt" 
              onClick={onClose}
              className="bg-white text-black px-6 py-3 inline-block w-full hover:bg-gray-100 transition-colors"
            >
              Besplatne Konzultacije
            </NavLink>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};