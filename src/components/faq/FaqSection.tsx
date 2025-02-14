import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { FaqCategory } from './types';

interface FaqSectionProps {
  categories: FaqCategory[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="faq-content" className="py-32 bg-white relative">
      {/* Trainer Image */}
      <div className="absolute -left-[1%] top-[2%] sm:-left-[5%] sm:top-[5%] w-[20%] lg:w-[25%] z-10">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/services/matkoDown.png"
          alt="Personal Training"
          className="w-full h-auto"
        />
      </div>

      <div className="container-custom">
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center relative z-20">
          {categories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "px-6 py-3 font-heading uppercase tracking-wider text-sm transition-all duration-300",
                activeCategory === index
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto relative z-20">
          {categories[activeCategory].items.map((item, itemIndex) => {
            const isOpen = openItems[`${activeCategory}-${itemIndex}`];
            
            return (
              <motion.div
                key={itemIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: itemIndex * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleItem(activeCategory, itemIndex)}
                  className={cn(
                    "w-full text-left p-6 bg-gray-50",
                    "flex items-center justify-between",
                    "group transition-all duration-300",
                    "hover:bg-gray-100"
                  )}
                >
                  <span className="font-heading text-lg pr-8">{item.question}</span>
                  <div className={cn(
                    "p-2 bg-black text-white rounded-full",
                    "transition-transform duration-300",
                    isOpen && "rotate-45"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-gray-50 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};