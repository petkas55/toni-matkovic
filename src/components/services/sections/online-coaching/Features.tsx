import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Video, Clock } from 'lucide-react';
import { cn } from '@/utils/cn';

const features = [
  {
    title: 'Trening od kuće',
    description: 'Mogućnost treniranja od kuće te uz minimalno opreme',
    icon: Home,
  },
  {
    title: 'Video demonstracije',
    description: 'Videodemonstracija te detaljan opis svake vježbe',
    icon: Video,
  },
  {
    title: 'Detaljan program',
    description: 'Detaljno napisan volumen i intenzitet treninga, kao i vrijeme odmora u toku treninga',
    icon: Clock,
  },
  {
    title: '24/7 Podrška',
    description: 'Stalna komunikacija kroz aplikaciju',
    icon: CheckCircle,
  },
  {
    title: 'Personalizirani Plan',
    description: 'Program prilagođen vašim ciljevima',
    icon: CheckCircle,
  },
  {
    title: 'Plan Prehrane',
    description: 'Nutricionistički plan po mjeri',
    icon: CheckCircle,
  },
  {
    title: 'Komunikacija putem aplikacije',
    description: 'Direktna komunikacija i brzi odgovori kroz našu aplikaciju',
    icon: CheckCircle,
  },
];

export const Features = () => (
  <>
    {features.map((feature, index) => (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={cn(
          "group relative",
          "p-4 bg-white/5 border border-white/10 backdrop-blur-sm",
          "hover:bg-white/10 transition-all duration-300",
          "transform hover:-translate-y-1"
        )}
      >
        <div className="flex items-start gap-3">
          <div className="p-2 bg-white/10 rounded-lg shrink-0">
            <feature.icon className="w-5 h-5 text-white" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading text-sm tracking-wider text-white">
              {feature.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </>
);