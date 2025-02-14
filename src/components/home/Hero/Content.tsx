import React from 'react';
import { motion } from 'framer-motion';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroButtons } from './HeroButtons';

export const Content = () => {
  return (
    <div className="container-custom relative z-10">
      <div className="min-h-[calc(100vh-5rem)] pt-24 flex flex-col justify-center items-start max-w-full lg:max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full"
        >
          <HeroTitle name="Toni Matković" />
          <HeroDescription />
          <HeroButtons />
        </motion.div>
      </div>
    </div>
  );
};