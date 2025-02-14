import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { NavLink } from './NavLink';
import { MobileNavigation } from './MobileNavigation';
import type { NavItem } from './types';

interface NavigationProps {
  items: NavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-black/95 backdrop-blur-lg shadow-lg py-2" 
        : "bg-black py-4"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-6" onClick={handleLogoClick}>
            <motion.img
              src="https://uvpjvwyagjcozaarxymm.supabase.co/storage/v1/object/public/images/logo/logo.png"
              alt="33 Fitness Logo"
              className="h-16 w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:block"
            >
              <h1 className="text-white font-heading text-xl tracking-wider">
                TONI MATKOVIĆ
              </h1>
              <p className="text-white/70 text-sm uppercase tracking-wider">
                Osobni trener
              </p>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {items.map((item, index) => (
              <NavLink 
                key={item.href} 
                to={item.href}
                delay={index * 0.1}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button 
            className="md:hidden p-2 rounded-lg text-white hover:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <MobileNavigation 
        items={items}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </nav>
  );
};