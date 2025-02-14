import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  delay?: number;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  to, 
  children, 
  onClick,
  delay = 0 
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        to={to}
        onClick={onClick}
        className={cn(
          "relative px-4 py-2",
          "font-heading tracking-widest uppercase text-base",
          "transition-all duration-300",
          "text-white/80 hover:text-white",
          isActive && "text-white"
        )}
      >
        {children}
        <motion.div 
          className={cn(
            "absolute -bottom-1 left-0 w-full h-[2px]",
            "origin-left",
            isActive ? "bg-white" : "bg-white/50"
          )}
          initial={false}
          animate={{ 
            scaleX: isActive ? 1 : 0,
            opacity: isActive ? 1 : 0
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
          layoutId="navIndicator"
        />
      </Link>
    </motion.div>
  );
};