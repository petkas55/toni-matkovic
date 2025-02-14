import React from 'react';
import { ServicesHero } from '@/components/services/ServicesHero';
import { OnlineCoaching } from '@/components/services/sections/OnlineCoaching';
import { PersonalTraining } from '@/components/services/sections/PersonalTraining';
import { ServiceCTA } from '@/components/services/ServiceCTA';

const ServicesPage = () => {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <ServicesHero />
      <OnlineCoaching />
      <PersonalTraining />
      <ServiceCTA />
    </main>
  );
};

export default ServicesPage;