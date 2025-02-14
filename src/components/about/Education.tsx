import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Simple Development - Jakost i Snaga',
    image: 'https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/Certificate/cert1.jpeg',
  },
  {
    title: 'Strongfist Kettlebell Instruction Certification',
    image: 'https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/Certificate/cert2.jpeg',
  },
  {
    title: 'Stručna Radionica - Fiziološka Pozadina Mišićnih Kontrakcija',
    subtitle: 'Primjena u treningu sportaša, rekreativaca i rehabilitaciji',
    image: 'https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/Certificate/cert3.jpeg',
  },
];

export const Education = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-widest text-gray-500 mb-4 block font-heading">
            Edukacija i Profesionalnost
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight leading-tight mb-6">
            STRUČNOST I ISKUSTVO
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kontinuirano usavršavanje i praćenje najnovijih trendova u fitness industriji.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative bg-white border border-black/5 rounded-2xl shadow-lg overflow-hidden">
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Certificate Title */}
                <div className="p-6 bg-white relative z-10">
                  <h3 className="text-lg font-bold font-heading leading-tight mb-2">
                    {cert.title}
                  </h3>
                  {cert.subtitle && (
                    <p className="text-sm text-gray-600">
                      {cert.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};