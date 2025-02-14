import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { services } from './serviceData';

const Services = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-widest text-white/60 mb-4 block font-heading">
            Usluge
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tight leading-none">
            USLUGE
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 relative max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;