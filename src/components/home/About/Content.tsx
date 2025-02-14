import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export const Content: React.FC = () => {
  const paragraphs = [
    'Kao osobni trener koji trenutno završava kineziološki fakultet te ima 3 dodatno položena certifikata iza sebe, sa svojim znanjem i iskustvom smatram da vam mogu pružiti sve ono što vam treba kada tražite osobu koja će vam pomoći u vašim ciljevima kakvi god bili.',
    'Moj pristup kombinira najnovije znanstvene spoznaje s praktičnim iskustvom, stvarajući personalizirane programe koji donose željene rezultate.',
    'Vjerujem u cjelovit pristup zdravlju koji uključuje pravilnu prehranu, trening i mentalno zdravlje pojedinca.'
  ];

  return (
    <div className="max-w-2xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-5xl font-bold text-white mb-6 font-heading tracking-wider"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Toni Matković
          <motion.span 
            className="block text-3xl text-white/80 mt-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Profesionalni Osobni Trener
          </motion.span>
        </motion.h2>

        <div className="space-y-4 text-white/70 mb-8">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-lg leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/o-meni"
            className={cn(
              "group inline-flex items-center gap-2",
              "bg-white text-black px-8 py-4",
              "font-heading text-lg uppercase tracking-widest",
              "transition-all duration-300",
              "hover:bg-gray-100"
            )}
          >
            <span>Saznajte Više</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};