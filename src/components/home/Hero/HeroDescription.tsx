import React from 'react';
import { motion } from 'framer-motion';

export const HeroDescription = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1 }}
    className="relative mb-8 sm:mb-12 px-4 sm:px-0"
  >
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
      Jedina potrebna osoba za postizanje vaših ciljeva uz personalizirani plan treninga i prehrane.
      <span className="block mt-4 text-white/90">
        Profesionalno vodstvo i podrška na svakom koraku vašeg putovanja prema boljem životu.
      </span>
      <span className="block mt-4 text-white/80">
        Bez obzira na vaše iskustvo, uz moje vodstvo te predani rad, zajedno ćemo ostvariti vaš cilj kakav god on bio.
      </span>
    </p>
  </motion.div>
);