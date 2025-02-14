import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TransformationCard from '@/components/shared/TransformationCard';
import { ResultsLightbox } from './ResultsLightbox';
import { cn } from '@/utils/cn';
import type { Transformation } from '@/types';

interface ResultsGridProps {
  transformations: Transformation[];
}

export const ResultsGrid: React.FC<ResultsGridProps> = ({ transformations }) => {
  const [selectedTransformation, setSelectedTransformation] = useState<number | null>(null);

  return (
    <div className={cn(
      "relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8",
      "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
      "gap-8 lg:gap-12"
    )}>
      {transformations.map((transformation, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (index % 3) * 0.1 }}
          className={cn(
            "group relative",
            "transform transition-all duration-500",
            "hover:z-10"
          )}
          onClick={() => setSelectedTransformation(index)}
        >
          <TransformationCard
            images={transformation.images}
            className={cn(
              "aspect-[4/5] w-full",
              "transform transition-all duration-500",
              "group-hover:scale-[1.02] group-hover:shadow-2xl"
            )}
          />
        </motion.div>
      ))}

      {selectedTransformation !== null && (
        <ResultsLightbox
          transformations={transformations}
          currentIndex={selectedTransformation}
          onClose={() => setSelectedTransformation(null)}
          onNext={() => setSelectedTransformation((prev) => 
            prev === null ? null : (prev + 1) % transformations.length
          )}
          onPrev={() => setSelectedTransformation((prev) => 
            prev === null ? null : (prev - 1 + transformations.length) % transformations.length
          )}
        />
      )}
    </div>
  );
};