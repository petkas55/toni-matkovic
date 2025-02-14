import React from 'react';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactLocation } from '@/components/contact/ContactLocation';
import { ContactSocial } from '@/components/contact/ContactSocial';

const ContactPage = () => {
  return (
    <main className="pt-24 pb-16 bg-black">
      <ContactHero />
      
      <section id="contact-info" className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Info and Social */}
            <div className="lg:col-span-7 space-y-8">
              <ContactInfo />
              <ContactSocial />
            </div>

            {/* Map */}
            <div className="lg:col-span-5">
              <ContactLocation />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;