import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const AboutHero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-bio');
    if (aboutSection) {
      const headerOffset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col h-[calc(100vh-5rem)] justify-center">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-white/20" />
                <span className="text-sm uppercase tracking-[0.35em] text-white/70 font-heading">
                  O Meni
                </span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-[clamp(1.5rem,7vw,5rem)] font-bold mb-6 font-heading tracking-tight leading-[0.85]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="overflow-hidden">
                <motion.span 
                  className="block bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  PROFESIONALNI
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  className="block text-white/70"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  PRISTUP
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  className="block bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  TRENINGU
                </motion.span>
              </div>
            </motion.h1>

            <motion.div 
              className="relative pl-6 md:pl-8 max-w-2xl mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
              <p className="text-lg text-white/60 leading-relaxed">
                Upoznajte svog osobnog trenera i fitness stručnjaka s dugogodišnjim iskustvom.
                <span className="block mt-3 text-white/80 font-medium">
                  Kroz edukaciju, iskustvo i predanost pomažem klijentima ostvariti njihove fitness ciljeve.
                </span>
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button
                onClick={scrollToAbout}
                className="group flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
              >
                <span className="text-sm uppercase tracking-[0.35em] font-heading text-center">
                  Saznajte Vise
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="p-2 rounded-full bg-white/5 backdrop-blur-sm"
                >
                  <ArrowDown className="w-5 h-5 transition-transform group-hover:scale-110" />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};