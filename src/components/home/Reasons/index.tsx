import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reasonsData } from './reasonsData';
import { cn } from '@/utils/cn';

const Reasons = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-none mb-4">
            33 FITNESS
          </h2>
          <p className="text-xl sm:text-2xl text-white/80 font-heading">
            I 33 RAZLOGA ZAŠTO
          </p>
        </motion.div>

        <div className={cn(
          "reasons-slider px-4 sm:px-0",
          // Custom styling for dots
          "[&_.slick-dots]:bottom-0 [&_.slick-dots]:relative [&_.slick-dots]:mt-8",
          "[&_.slick-dots_li_button:before]:text-white [&_.slick-dots_li.slick-active_button:before]:text-white",
          // Custom styling for slides
          "[&_.slick-slide]:px-2 sm:[&_.slick-slide]:px-4"
        )}>
          <Slider {...settings}>
            {reasonsData.map((category, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "bg-white/5 border border-white/10 p-6 sm:p-8",
                    "backdrop-blur-sm rounded-lg",
                    "h-[400px] sm:h-[450px] overflow-y-auto",
                    "scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                  )}
                >
                  <h3 className="text-lg sm:text-xl font-bold font-heading mb-6 text-white/90">
                    {category.title}
                  </h3>
                  <ul className="space-y-4">
                    {category.reasons.map((reason, reasonIndex) => (
                      <li 
                        key={reasonIndex}
                        className="flex items-start gap-3 text-white/70 text-sm sm:text-base"
                      >
                        <span className="flex-shrink-0 w-6 text-white/40 font-medium">
                          {reason.number}.
                        </span>
                        <span className="leading-relaxed">{reason.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reasons;