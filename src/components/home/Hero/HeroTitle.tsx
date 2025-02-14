import React from 'react';
import { motion } from 'framer-motion';

interface HeroTitleProps {
  name: string;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ name }) => {
  return (
    <h1 className="relative mb-6">
      <div className="flex flex-col items-start">
        {name.split(' ').map((word, wordIndex) => (
          <div key={wordIndex} className="overflow-hidden w-full">
            <motion.span
              className="relative block text-5xl xs:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter uppercase font-heading break-words"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 1,
                delay: wordIndex * 0.2,
                ease: [0.215, 0.610, 0.355, 1.000]
              }}
            >
              <span className="relative z-10 block bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                {word}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/0 to-transparent bg-clip-text text-transparent blur-lg transform -translate-y-1">
                {word}
              </span>
            </motion.span>
          </div>
        ))}
      </div>
    </h1>
  );
};