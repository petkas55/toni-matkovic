import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://instagram.com/toni.matkovic.fitness',
    label: 'Instagram',
    username: '@toni.matkovic.fitness',
    description: 'Pratite najnovije transformacije i savjete',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Facebook,
    href: 'https://facebook.com/toni.matkovic.fitness',
    label: 'Facebook',
    username: 'Toni Matković Fitness',
    description: 'Budite u toku s novostima i događanjima',
    color: 'from-blue-600 to-blue-500'
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/385991234567',
    label: 'WhatsApp',
    username: '+385 99 123 4567',
    description: 'Direktna komunikacija i brzi odgovori',
    color: 'from-green-500 to-emerald-500'
  },
];

export const ContactSocial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden",
        "bg-black/5 backdrop-blur-[2px]",
        "border border-white/10",
        "p-8 rounded-2xl"
      )}
    >
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white mb-8 font-heading">DRUŠTVENE MREŽE</h2>
        
        <div className="space-y-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative block overflow-hidden",
                "p-6 bg-black/5 backdrop-blur-[2px]",
                "border border-white/10 rounded-lg",
                "hover:bg-white/5",
                "transition-all duration-300",
                "transform hover:-translate-y-1"
              )}
            >
              {/* Gradient Background */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                "bg-gradient-to-r",
                social.color
              )} />

              <div className="flex items-start gap-4">
                <div className={cn(
                  "p-3 rounded-lg transition-colors duration-300",
                  "bg-gradient-to-br",
                  social.color,
                  "group-hover:scale-110 transform transition-transform duration-300"
                )}>
                  <social.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {social.label}
                  </h3>
                  <p className="text-white/90 font-medium mb-2">
                    {social.username}
                  </p>
                  <p className="text-white/60 text-sm">
                    {social.description}
                  </p>
                </div>

                <div className="self-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Fallback background for Safari */}
              <div className="absolute inset-0 bg-black opacity-5 -z-10" />
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Fallback background for Safari */}
      <div className="absolute inset-0 bg-black opacity-5 -z-10" />
    </motion.div>
  );
};