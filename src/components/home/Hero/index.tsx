import React from 'react';
import { VideoBackground } from './VideoBackground';
import { Content } from './Content';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <VideoBackground />
      <Content />
    </section>
  );
};

export default Hero;