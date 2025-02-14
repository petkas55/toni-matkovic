import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const sectionId = service.title.toLowerCase().includes('online') 
    ? 'online-coaching'
    : 'individualni-treninzi';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative"
    >
      <div className={cn(
        "relative p-8 md:p-10 h-full flex flex-col",
        "border border-white/10 backdrop-blur-sm",
        "transition-all duration-500",
        service.primary 
          ? "bg-white/10 hover:bg-white/15" 
          : "bg-white/5 hover:bg-white/10",
        "group-hover:border-white/20 group-hover:translate-y-[-4px]",
        "overflow-hidden"
      )}>
        {/* Background Image with Gradient */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: service.title.toLowerCase().includes('online')
              ? 'url("https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/services/services.jpeg")'
              : 'url("https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/services/servicePrivate.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.4, // Increased from 0.15 to 0.4
            backgroundColor: 'black'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/60 z-0" /> {/* Reduced opacity from 90% to 60% */}

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className={cn(
            "p-4 w-fit mb-6 transition-all duration-300",
            "border border-white/10 rounded-xl",
            service.primary 
              ? "bg-white/20 group-hover:bg-white/30" 
              : "bg-white/10 group-hover:bg-white/20"
          )}>
            <service.icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading tracking-wide">{service.title}</h3>
          
          <p className={cn(
            "text-lg leading-relaxed mb-8",
            service.primary ? "text-white/90" : "text-white/80"
          )}>{service.description}</p>

          <div className="mt-auto">
            <ul className="space-y-4 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className={cn(
                  "flex items-center gap-3 text-base",
                  service.primary ? "text-white/90" : "text-white/80"
                )}>
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
              to={`/usluge#${sectionId}`}
              className={cn(
                "inline-flex justify-between items-center w-full",
                "font-heading text-lg uppercase tracking-widest",
                "transition-all duration-300 group/btn",
                "border border-white/20 backdrop-blur-sm",
                "text-white hover:bg-white/10 px-6 py-3",
                "text-center"
              )}
            >
              <span>Saznaj Više</span>
              <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover/btn:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};