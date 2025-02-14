import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

const ResultsPreview = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-left">
            <motion.span 
              className="text-sm uppercase tracking-widest text-white/60 mb-4 block font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Transformacije
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              REZULTATI MOJIH KLIJENATA
            </motion.h2>
            <motion.p 
              className="text-xl text-white/70 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Pogledajte transformacije mojih klijenata i uvjerite se u moć predanog rada i stručnog vodstva.
              Svaka transformacija je jedinstvena priča uspjeha koja pokazuje što je moguće postići uz pravu podršku i predanost cilju.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                to="/rezultati"
                className={cn(
                  "group inline-flex items-center gap-3",
                  "bg-white text-black px-8 py-4",
                  "font-heading text-lg uppercase tracking-widest",
                  "transition-all duration-300",
                  "hover:bg-gray-100"
                )}
              >
                <span>Pogledajte Transformacije</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative flex items-end justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-none">
              {/* Trainer with Laptop Image */}
              <div className="absolute -right-[60%] -top-[30%] w-[120%] aspect-[4/3] rounded-3xl overflow-hidden opacity-30 blur-sm">
                <img
                  src="https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/services/services.jpeg"
                  alt="Online Coaching"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse delay-1000" />

              {/* Trainer Image */}
              <div className="relative z-10 flex justify-center">
                <img
                  src="https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/landing/transformationsMatko.png"
                  alt="Personal Trainer"
                  className="w-auto h-[600px] lg:h-[700px] xl:h-[800px] object-contain mx-auto"
                />
              </div>

              {/* Stats Card */}
              <div className="absolute bottom-12 -left-8 right-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 z-20">
                <div className="text-center">
                  <p className="text-white/90 font-heading text-lg mb-2">
                    TRANSFORMACIJE KOJE INSPIRIRAJU
                  </p>
                  <p className="text-white/70">
                    Svaka transformacija je putovanje prema boljoj verziji sebe
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsPreview;