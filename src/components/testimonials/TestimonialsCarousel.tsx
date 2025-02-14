import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { cn } from '@/utils/cn';
import { testimonials } from './testimonialData';
import { CarouselControls } from './CarouselControls';

export const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        {/* Trainer Image - Up */}
        <div className="absolute -right-[1%] bottom-[2%] sm:-right-[5%] sm:bottom-[5%] w-[20%] lg:w-[25%] z-10">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/services/matkoUp.png"
            alt="Personal Training"
            className="w-full h-auto"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-white/60 mb-4 block font-heading">
            Iskustva Klijenata
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight leading-none">
            ŠTO KAŽU O NAMA
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <motion.div 
                    className="px-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Quote className="w-12 h-12 mx-auto mb-6 text-white/20" />
                    <div className={cn(
                      "relative max-h-[400px] overflow-y-auto mb-8",
                      "scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent",
                      "px-4 py-2"
                    )}>
                      <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed whitespace-pre-line">
                        {testimonial.quote.split('\n').map((paragraph, i) => (
                          <React.Fragment key={i}>
                            {paragraph}
                            {i < testimonial.quote.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </blockquote>
                    </div>
                    <div className="text-white/60">
                      <motion.p 
                        className="text-sm uppercase tracking-wider font-heading"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        {testimonial.achievement}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12">
            <CarouselControls
              onPrev={scrollPrev}
              onNext={scrollNext}
              canScrollPrev={canScrollPrev}
              canScrollNext={canScrollNext}
            />
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === selectedIndex 
                      ? "bg-white w-8" 
                      : "bg-white/20 w-2 hover:bg-white/40"
                  )}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};