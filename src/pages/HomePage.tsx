import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Reasons from '../components/home/Reasons';
import Goals from '../components/home/Goals';
import About from '../components/home/About';
import Services from '../components/home/Services';
import ResultsPreview from '../components/home/ResultsPreview';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Reasons />
      <Goals />
      <About />
      <Services />
      <ResultsPreview />
      <CallToAction />
    </motion.main>
  );
};

export default HomePage;