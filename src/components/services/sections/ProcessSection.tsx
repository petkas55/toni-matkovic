import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, MessageCircle, Dumbbell, LineChart } from 'lucide-react';

const processSteps = [
  {
    icon: MessageCircle,
    title: 'Inicijalne Konzultacije',
    description: 'Detaljan razgovor o vašim ciljevima, trenutnom stanju i životnim navikama.',
    details: [
      'Analiza trenutnog stanja',
      'Definiranje ciljeva',
      'Procjena vremenskog okvira',
    ]
  },
  {
    icon: ClipboardCheck,
    title: 'Plan i Program',
    description: 'Izrada personaliziranog programa treninga i plana prehrane.',
    details: [
      'Program treninga',
      'Plan prehrane',
      'Raspored aktivnosti',
    ]
  },
  {
    icon: Dumbbell,
    title: 'Implementacija',
    description: 'Početak treninga uz stručno vodstvo i kontinuiranu podršku.',
    details: [
      'Demonstracija vježbi',
      'Korekcija tehnike',
      'Praćenje izvedbe',
    ]
  },
  {
    icon: LineChart,
    title: 'Praćenje Napretka',
    description: 'Redovito praćenje rezultata i prilagodba programa prema potrebi.',
    details: [
      'Mjerenje napretka',
      'Prilagodba programa',
      'Evaluacija rezultata',
    ]
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-widest text-white/60 mb-4 block font-heading">
            Proces
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight leading-tight mb-6">
            ETAPE RADA SA KLIJENTOM
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Strukturirani pristup koji osigurava optimalne rezultate kroz jasno definirane korake.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Connecting Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-white/10 z-0">
                  <div className="absolute top-0 left-0 h-full bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              )}

              <div className="relative bg-white/5 border border-white/10 p-8 h-full backdrop-blur-sm">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black flex items-center justify-center text-sm font-heading">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 p-4 bg-white/10 w-fit rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 font-heading">{step.title}</h3>
                <p className="text-white/70 mb-6">{step.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li 
                      key={detailIndex}
                      className="flex items-center text-white/60"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};