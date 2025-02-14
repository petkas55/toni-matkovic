import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

const CallToAction = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-heading tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              SPREMNI ZA PROMJENU?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/70 mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Započnite svoje fitness putovanje danas uz profesionalno vodstvo i podršku.
              Prvi korak prema vašim ciljevima je na dohvat ruke.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                to="/kontakt"
                className={cn(
                  "group relative overflow-hidden",
                  "bg-white text-black px-8 py-4",
                  "font-heading text-lg uppercase tracking-widest",
                  "transition-all duration-300",
                  "hover:bg-gray-100"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Započni Danas
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                to="/o-meni"
                className={cn(
                  "group relative",
                  "border border-white/30 px-8 py-4",
                  "font-heading text-lg uppercase tracking-widest",
                  "text-white hover:text-white",
                  "transition-all duration-300",
                  "hover:border-white"
                )}
              >
                <span className="relative z-10">Saznaj Više</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;