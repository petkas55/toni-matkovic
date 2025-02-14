import React from 'react';
import { motion } from 'framer-motion';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutBio } from '@/components/about/AboutBio';
import { AboutStats } from '@/components/about/AboutStats';
import { Education } from '@/components/about/Education';

const AboutPage = () => {
  return (
    <main className="pt-24">
      <AboutHero />
      <AboutBio />
      <Education />
    </main>
  );
};

export default AboutPage;