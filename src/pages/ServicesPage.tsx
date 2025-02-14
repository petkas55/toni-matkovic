import React from 'react';
import { ServicesHero } from '@/components/services/ServicesHero';
import { OnlineCoaching } from '@/components/services/sections/OnlineCoaching';
import { PersonalTraining } from '@/components/services/sections/PersonalTraining';
import { ProcessSection } from '@/components/services/sections/ProcessSection';

const ServicesPage = () => {
  return (
    <main className="pt-24">
      <ServicesHero />
      <OnlineCoaching />
      <PersonalTraining />
      <ProcessSection />
    </main>
  );
};

export default ServicesPage;