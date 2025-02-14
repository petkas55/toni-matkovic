import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6"
      >
        <img
          src="https://uvpjvwyagjcozaarxymm.supabase.co/storage/v1/object/public/images/logo/logo.png"
          alt="33 Fitness Logo"
          className="h-16 w-auto"
        />
        <div>
          <h3 className="text-xl font-heading tracking-wider">TONI MATKOVIĆ</h3>
          <p className="text-sm uppercase tracking-wider text-white/70">Osobni Trener</p>
        </div>
      </motion.div>
    </Link>
  );
};