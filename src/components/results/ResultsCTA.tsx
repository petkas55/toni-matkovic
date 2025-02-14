import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload } from 'lucide-react';
import { cn } from '@/utils/cn';

export const ResultsCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6 md:mb-8">
                PRIDRUŽITE SE USPJEŠNIM TRANSFORMACIJAMA
              </h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg sm:text-xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0"
              >
                Započnite svoje putovanje prema boljoj verziji sebe uz profesionalno vodstvo 
                i dokazane rezultate.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                <Link
                  to="/kontakt"
                  className={cn(
                    "w-full sm:w-auto",
                    "group inline-flex items-center justify-center gap-3",
                    "bg-white text-black px-6 sm:px-8 py-4",
                    "font-heading text-base sm:text-lg uppercase tracking-widest",
                    "transition-all duration-300",
                    "hover:bg-gray-100"
                  )}
                >
                  <span>Započnite Danas</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>

                <Link
                  to="/usluge"
                  className={cn(
                    "w-full sm:w-auto",
                    "group inline-flex items-center justify-center gap-3",
                    "border border-white/30 px-6 sm:px-8 py-4",
                    "font-heading text-base sm:text-lg uppercase tracking-widest",
                    "text-white hover:text-white",
                    "transition-all duration-300",
                    "hover:border-white"
                  )}
                >
                  <span>Saznajte Više</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Transformation Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-white/5 rounded-2xl border-2 border-dashed border-white/20 p-8 flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
                <Upload className="w-16 h-16 text-white/30 mb-4" />
                <h3 className="text-xl font-heading mb-2">Vaša Transformacija</h3>
                <p className="text-white/60 max-w-sm">
                  Ovdje će biti vaša slika transformacije nakon što započnete svoje fitness putovanje s nama
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full filter blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full filter blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};