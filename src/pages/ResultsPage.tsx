import React from 'react';
import { motion } from 'framer-motion';
import { ResultsHero } from '@/components/results/ResultsHero';
import { ResultsCarousel } from '@/components/results/ResultsCarousel';
import { ResultsCTA } from '@/components/results/ResultsCTA';
import { siteContent } from '@/constants/content';

const ResultsPage = () => {
  const { transformations } = siteContent.results;

  return (
    <main className="pt-24">
      <ResultsHero />
      
      <section 
        id="results-grid" 
        className="relative py-32 min-h-screen overflow-visible"
        style={{
          backgroundImage: 'url("https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/transformations/images/resultsHero.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background Overlays */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
        
        {/* Animated Gradient Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container-custom relative z-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm uppercase tracking-widest text-white/60 mb-4 block font-heading">
              Transformacije
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
              REZULTATI OD NEKIH KLIJENATA
            </h2>
            <p className="text-lg text-white/70">
              Pogledajte transformacije naših klijenata. Svaka priča je jedinstvena, 
              ali sve dijele istu predanost i trud prema ostvarenju ciljeva.
            </p>
          </motion.div>
        </div>

        <ResultsCarousel transformations={transformations} />
      </section>

      <ResultsCTA />
    </main>
  );
};

export default ResultsPage;