import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { cn } from '@/utils/cn';

const contactInfo = [
  {
    icon: MapPin,
    text: 'Radauševa 3, Zagreb',
    href: 'https://maps.google.com/?q=Radauševa+3,+Zagreb',
    label: 'Lokacija',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Mail,
    text: 'fitness.matko33@gmail.com',
    href: 'mailto:fitness.matko33@gmail.com',
    label: 'Email',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Phone,
    text: '+385 99 687 0224',
    href: 'tel:+385996870224',
    label: 'Telefon',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    text: 'Prema dogovoru',
    label: 'Radno vrijeme',
    color: 'from-orange-500 to-amber-500'
  },
];

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className={cn(
        "relative overflow-hidden",
        "bg-black/5 backdrop-blur-[2px]",
        "border border-white/10",
        "p-8 rounded-2xl"
      )}
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-8 font-heading">KONTAKT INFORMACIJE</h3>
        <div className="grid gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={cn(
                "group relative overflow-hidden",
                "p-4 bg-black/5 backdrop-blur-[2px]",
                "border border-white/10 rounded-lg",
                "hover:bg-white/5",
                "transition-all duration-300",
                "transform hover:-translate-y-1",
                item.href && "cursor-pointer"
              )}
              onClick={() => item.href && window.open(item.href, '_blank')}
            >
              {/* Gradient Background */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                "bg-gradient-to-r",
                item.color
              )} />

              <div className="flex items-start gap-3">
                <div className={cn(
                  "p-3 rounded-lg transition-colors duration-300",
                  "bg-gradient-to-br",
                  item.color,
                  "group-hover:scale-110 transform transition-transform duration-300"
                )}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-sm tracking-wider text-white">
                    {item.label}
                  </h3>
                  <p className="text-white/70 text-lg">
                    {item.text}
                  </p>
                </div>
                {item.href && (
                  <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Fallback background for Safari */}
      <div className="absolute inset-0 bg-black opacity-5 -z-10" />
    </motion.div>
  );
};