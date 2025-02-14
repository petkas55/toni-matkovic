import React from 'react';
import { Timer, TrendingUp } from 'lucide-react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface TransformationCardProps {
  name: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  onClick?: () => void;
}

const TransformationCard: React.FC<TransformationCardProps> = ({
  name,
  duration,
  description,
  beforeImage,
  afterImage,
  onClick,
}) => {
  const [showAfter, setShowAfter] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isToggleButton = target.closest('[data-toggle-button]');
    
    if (!isToggleButton && onClick) {
      onClick();
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={cn(
        "bg-white rounded-xl shadow-xl overflow-hidden h-full",
        "cursor-pointer group",
        isHovered && "z-10"
      )}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4]">
        <img
          src={showAfter ? afterImage : beforeImage}
          alt={`${name} ${showAfter ? 'poslije' : 'prije'} transformacije`}
          className="w-full h-full object-cover"
        />
        
        <div className={cn(
          "absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full",
          "text-sm font-medium transform transition-all duration-300",
          "flex items-center gap-2"
        )}>
          <TrendingUp className="w-4 h-4" />
          {showAfter ? 'Poslije' : 'Prije'}
        </div>

        <div className="absolute bottom-4 left-4 flex items-center bg-black/70 text-white px-3 py-1 rounded-full text-sm z-10">
          <Timer className="w-4 h-4 mr-1" />
          {duration}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowAfter(!showAfter);
          }}
          data-toggle-button
          className={cn(
            "absolute bottom-4 right-4",
            "flex items-center bg-white rounded-full",
            "shadow-lg hover:shadow-xl transition-all duration-300",
            "cursor-pointer z-30",
            "border border-primary/10",
            "h-8 text-sm"
          )}
        >
          <div className={cn(
            "px-3 py-1 rounded-full font-medium transition-colors",
            !showAfter ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
          )}>
            Prije
          </div>
          <div className={cn(
            "px-3 py-1 rounded-full font-medium transition-colors",
            showAfter ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
          )}>
            Poslije
          </div>
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{name}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default TransformationCard;