import React from 'react';
import { BackgroundImage } from './BackgroundImage';
import { Content } from './Content';

const About = () => {
  return (
    <section id="o-meni" className="relative py-32 overflow-hidden">
      <BackgroundImage 
        imageUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
      />
      <div className="container-custom">
        <Content />
      </div>
    </section>
  );
};

export default About;