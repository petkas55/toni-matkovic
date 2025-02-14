import React from 'react';
import { NavLink } from './NavLink';
import { motion } from 'framer-motion';

export const DesktopNav: React.FC = () => {
  return (
    <motion.nav 
      className="hidden md:flex items-center space-x-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavLink to="/o-meni" delay={0.1}>O Meni</NavLink>
      <NavLink to="/usluge" delay={0.2}>Usluge</NavLink>
      <NavLink to="/rezultati" delay={0.3}>Rezultati</NavLink>
      <NavLink to="/kontakt" delay={0.4}>Kontakt</NavLink>
    </motion.nav>
  );
};