import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export const AboutBio = () => {
  const paragraphs = [
    'Kao osobni trener koji trenutno završava kineziološki fakultet, sa svojim znanjem i iskustvom smatram da vam mogu pružiti sve ono što vam treba kada tražite osobu koja će vam pomoći u vašim ciljevima kakvi god bili.',
    'Moj pristup kombinira najnovije znanstvene spoznaje s praktičnim iskustvom, stvarajući personalizirane programe koji donose željene rezultate.',
    'Vjerujem u cijelovit pristup treniranju koji uključuje pravilnu prehranu, trening i mentalno zdravlje pojedinca.',
    'Bavio sam se košarkom 9 godina, uz kratko iskustvo u borilačkim sportovima. Sve to zajedno mi je dalo vrlo dobre temelje za početak rada u ovoj branši. Tokom godina suočio sam se s izazovima poput problema s leđima (blaga skolioza) i bolovima u koljenu, što me motiviralo i natjeralo da kroz fitness i trening pomognem sebi povratiti funkcionalnost i kvalitetan život bez bolova. Također sam sudjelovao na dosta istraživanja koja su se provodila na kineziološkom fakultetu te skupljao praktično i teorijsko znanje koje je potrebno, te imam 3 dodatno završene edukacije iza sebe.',
    'Isto to želim pružiti i vama – pomoć u postizanju zdravog, snažnog i funkcionalnog tijela. Kroz edukacije, studije na Kineziološkom fakultetu i bogato vlastito iskustvo, stekao sam duboko znanje o fitnessu, kondicionoj pripremi i kineziterapiji. Kroz pravilan trening, balansiranu prehranu te stil života, moj cilj je da vam omogućim kvalitetniji i aktivniji život te izgled o kojem maštate svaki put kada se pogledate u ogledalo.'
  ];

  return (
    <section id="about-bio" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://ogkfexxkpzgkkvfxrwxl.supabase.co/storage/v1/object/public/tonimatkovic/about/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/80" />
      </div>

      <div className="container-custom relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-8"
        >
          {/* Section Label */}
          <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2">
            <span className="text-sm uppercase tracking-widest font-heading text-white">O Meni</span>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading tracking-tight leading-none">
              Toni Matković
            </h2>
            <p className="text-xl text-white/80 font-heading tracking-wider">
              Profesionalni Osobni Trener
            </p>
          </div>

          {/* Description */}
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-lg text-white/70 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <Link
            to="/kontakt"
            className={cn(
              "group inline-flex items-center gap-2",
              "bg-white text-black px-8 py-4",
              "font-heading text-lg uppercase tracking-widest",
              "transition-all duration-300",
              "hover:bg-gray-100"
            )}
          >
            <span>Započnite Danas</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};