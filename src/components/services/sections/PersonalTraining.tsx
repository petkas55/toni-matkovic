import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

const benefits = [
  'Individualno prilagođeni programi',
  'Rehabilitacija te prevencija ozljeda',
  'Riješavanje bolova i problema u pojedinim djelovima tijela',
  'Razvijanje pojedinih sposobnosti (koordinacija, agilnost, jakost, eksplozivna jakost, mobilnost)',
  'Poboljšanje mentalnog zdravlja te sveukupno zadovoljstvo sobom',
  'Praćenje napretka uživo',
  'Korekcija tehnike izvođenja',
  'Fleksibilni termini treninga',
  'Nutricionističko savjetovanje',
];

export const PersonalTraining = () => {
  return (
    <section 
      id="individualni-treninzi" 
      className="min-h-screen flex items-center relative py-32 overflow-hidden"
      style={{
        backgroundImage: 'url("https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/services/privatni.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 23%',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
              <Dumbbell className="w-5 h-5 text-white" />
              <span className="text-sm uppercase tracking-widest font-heading">Personalizirani Pristup</span>
            </div>

            {/* Title */}
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold font-heading tracking-tight leading-[0.95] mb-6">
              INDIVIDUALNI TRENINZI
            </h2>

            {/* Description */}
            <p className="text-white/80 leading-relaxed text-lg max-w-xl mb-8">
              Individualni treninzi pružaju maksimalnu pažnju i prilagodbu vašim potrebama.
              Uz stručno vodstvo i kontinuirano praćenje, postižemo optimalne rezultate.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white/20 transition-colors duration-300 shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/80 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/kontakt"
              className={cn(
                "inline-flex items-center gap-2",
                "bg-white text-black px-8 py-4",
                "font-heading uppercase tracking-widest text-lg",
                "hover:bg-gray-100 transition-colors duration-300"
              )}
            >
              Kontaktirajte Me
            </Link>
          </motion.div>

          {/* Videos Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative space-y-6 mt-8 lg:mt-0"
          >
            {/* First Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-video relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/about/video1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

            {/* Second Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-video relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/about/video2.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-white/5 rounded-full filter blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-white/5 rounded-full filter blur-2xl animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};