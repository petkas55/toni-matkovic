import React from 'react';
import { motion } from 'framer-motion';
import { GoalCard } from './GoalCard';
import { goalsData } from './GoalsData';

const Goals = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-gray-500 mb-4 block font-heading">
            Ciljevi
          </span>
          <h2 className="heading-primary mb-6">
            Ostvarite svoje fitness ciljeve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Bez obzira na vaš cilj, uz stručno vodstvo i predani rad, 
            zajedno ćemo ga ostvariti.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {goalsData.map((goal, index) => (
            <GoalCard
              key={goal.title}
              title={goal.title}
              description={goal.description}
              icon={goal.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;