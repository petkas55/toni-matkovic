import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppPhone } from './online-coaching/AppPhone';
import { StatsPhone } from './online-coaching/StatsPhone';
import { Features } from './online-coaching/Features';
import { cn } from '@/utils/cn';

export const OnlineCoaching = () => {
  return (
    <section id="online-coaching" className="min-h-screen flex items-center bg-black text-white relative overflow-hidden py-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-none">
              ONLINE COACHING
            </h2>

            <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">
              Online coaching program pruža vam slobodu treniranja prema vlastitom rasporedu,
              uz profesionalno vodstvo i stalnu podršku kroz našu naprednu aplikaciju.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Features />
            </div>

            <Link
              to="/kontakt"
              className={cn(
                "group inline-flex items-center justify-center gap-3",
                "bg-white text-black px-6 py-4",
                "font-heading text-base uppercase tracking-widest",
                "transition-all duration-300",
                "hover:bg-gray-100",
                "w-full sm:w-auto"
              )}
            >
              <span>Započnite Danas</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>

          {/* Phone Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-2 lg:order-1 px-4 sm:px-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-none">
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse delay-1000" />

              {/* Phones Display */}
              <div className="flex flex-col sm:flex-row items-center justify-center relative z-10">
                <div className="relative z-20 transform scale-90 sm:scale-100">
                  <AppPhone />
                </div>
                <div className="mt-[-120px] sm:mt-0 sm:-ml-20 relative z-10 transform scale-90 sm:scale-100">
                  <StatsPhone />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};