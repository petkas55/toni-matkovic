import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { QuickLinks } from './QuickLinks';
import { ContactInfo } from './ContactInfo';
import { SocialLinks } from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Content */}
            <div className="space-y-16">
              {/* Logo and Description */}
              <div>
                <Logo />
                <p className="mt-8 text-white/70 leading-relaxed">
                  Profesionalni pristup transformaciji tijela kroz personalizirane programe 
                  treninga i prehrane. Više od 6 godina iskustva u fitness industriji.
                </p>
              </div>

              {/* Quick Links and Contact Info */}
              <div className="grid sm:grid-cols-2 gap-12">
                <QuickLinks />
                <ContactInfo />
              </div>

              {/* Social Links */}
              <SocialLinks />
            </div>

            {/* Right Column - Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black pointer-events-none z-10" />
              <div className="rounded-2xl overflow-hidden border border-white/10 h-full min-h-[400px] bg-white/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5561.1838948660325!2d16.026554!3d45.81943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d72b01c67b73%3A0xf22625a658621f02!2sMost%20Wanted!5e0!3m2!1shr!2shr!4v1738932290653!5m2!1shr!2shr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright and Lincforge Credit */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Toni Matković. Sva prava pridržana.
              </p>
            </div>
            <a 
              href="https://lincforge.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white/60 transition-colors duration-300 flex items-center gap-2"
            >
              Powered by
              <span className="font-bold tracking-wider">LINCFORGE</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;