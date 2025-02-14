import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { cn } from '@/utils/cn';

export const ContactLocation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden",
        "bg-black/5 backdrop-blur-[2px]",
        "border border-white/10",
        "rounded-2xl"
      )}
    >
      <div className="relative z-10">
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/10 rounded-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.25em] text-white/70 mb-1 font-heading">
                LOKACIJA
              </h3>
              <p className="text-lg text-white font-medium tracking-wide">
                Radauševa 3, Zagreb
              </p>
            </div>
          </div>
        </div>

        <div className="h-[400px] w-full relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.0935419037437!2d15.9663661!3d45.8133271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6c8e7494a85%3A0x3a2c9bf477b89a96!2sRadau%C5%A1eva%20ul.%206%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1707493169049!5m2!1sen!2shr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={cn(
              "grayscale transition-all duration-500",
              "group-hover:grayscale-0"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
        </div>
      </div>
      
      {/* Fallback background for Safari */}
      <div className="absolute inset-0 bg-black opacity-5 -z-10" />
    </motion.div>
  );
};