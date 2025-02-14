import React from 'react';
import { FaqHero } from '@/components/faq/FaqHero';
import { FaqSection } from '@/components/faq/FaqSection';
import { TestimonialsCarousel } from '@/components/testimonials/TestimonialsCarousel';
import { faqData } from '@/components/faq/faqData';

const FaqPage = () => {
  return (
    <main className="pt-24">
      <FaqHero />
      <FaqSection categories={faqData} />
      <TestimonialsCarousel />
    </main>
  );
};

export default FaqPage;