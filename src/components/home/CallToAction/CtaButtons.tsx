import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { CtaContent } from './types';

interface CtaButtonsProps {
  content: CtaContent;
}

export const CtaButtons: React.FC<CtaButtonsProps> = ({ content }) => (
  <motion.div 
    className="flex flex-wrap gap-4"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <Link 
      to={content.primaryCta.link}
      className="btn-primary"
    >
      {content.primaryCta.text}
    </Link>
    <Link
      to={content.secondaryCta.link}
      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold 
                hover:bg-white hover:text-primary transition-colors"
    >
      {content.secondaryCta.text}
    </Link>
  </motion.div>
);