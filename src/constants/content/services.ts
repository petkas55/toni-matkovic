import { Users, Dumbbell, Crosshair } from 'lucide-react';

export const servicesContent = {
  hero: {
    title: 'Usluge',
    subtitle: 'Prilagođeni programi treninga za postizanje vaših fitness ciljeva',
  },
  items: [
    {
      title: 'Individualni Treninzi',
      description: 'Personalizirani treninzi prilagođeni vašim ciljevima i trenutnoj formi.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '50',
      icon: Dumbbell,
      features: [
        'Individualna pažnja',
        'Prilagođeni program',
        'Praćenje napretka',
        'Fleksibilno vrijeme',
      ],
    },
    {
      title: 'Grupni Treninzi',
      description: 'Motivirajući grupni treninzi u MostWantedZG teretani.',
      image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      icon: Users,
      link: 'https://mostwantedzg.hr/schedule',
      features: [
        'Energična atmosfera',
        'Različiti termini',
        'Stručno vodstvo',
        'Pristupačna cijena',
      ],
    },
    {
      title: 'Online Coaching',
      description: 'Profesionalno vođenje i podrška bez obzira na lokaciju.',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '100',
      icon: Crosshair,
      features: [
        'Fleksibilnost lokacije',
        'Stalna podrška',
        'Prilagođeni plan',
        '24/7 konzultacije',
      ],
    },
  ],
  comparison: [
    {
      feature: 'Individualna pažnja',
      availability: [true, false, true],
    },
    {
      feature: 'Prilagođeni program treninga',
      availability: [true, false, true],
    },
    {
      feature: 'Plan prehrane',
      availability: [true, false, true],
    },
    {
      feature: 'Online podrška',
      availability: [true, false, true],
    },
    {
      feature: 'Praćenje napretka',
      availability: [true, true, true],
    },
    {
      feature: 'Fleksibilno vrijeme',
      availability: [true, false, true],
    },
    {
      feature: 'Grupna atmosfera',
      availability: [false, true, false],
    },
    {
      feature: 'Video konzultacije',
      availability: [false, false, true],
    },
  ],
  cta: {
    title: 'Spremni za Početak?',
    description: 'Odaberite program koji najbolje odgovara vašim ciljevima i započnite svoje fitness putovanje danas.',
    buttonText: 'Kontaktirajte Me',
  },
};