import { BookOpen, Award, Target, Globe } from 'lucide-react';

export const aboutContent = {
  hero: {
    title: 'O Meni',
    subtitle: 'Upoznajte svog osobnog trenera i fitness stručnjaka',
  },
  bio: {
    name: 'Toni Matković',
    role: 'Profesionalni Osobni Trener',
    experience: '8+ Godina Iskustva',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: [
      'Kao certificirani osobni trener s više od 8 godina iskustva, posvetio sam svoj profesionalni život pomaganju ljudima u postizanju njihovih fitness ciljeva.',
      'Moj pristup kombinira najnovije znanstvene spoznaje s praktičnim iskustvom, stvarajući personalizirane programe koji donose stvarne rezultate.',
      'Vjerujem u cjelovit pristup zdravlju koji uključuje pravilnu prehranu, trening i mentalno zdravlje.',
    ],
  },
  stats: [
    {
      value: '500+',
      label: 'Zadovoljnih Klijenata',
    },
    {
      value: '8+',
      label: 'Godina Iskustva',
    },
    {
      value: '95%',
      label: 'Uspješnost',
    },
    {
      value: '1000+',
      label: 'Transformacija',
    },
  ],
  timeline: [
    {
      year: '2015',
      title: 'Početak Karijere',
      description: 'Započeo rad kao osobni trener u vodećem fitness centru u Zagrebu.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      year: '2017',
      title: 'Specijalizacija',
      description: 'Stekao specijalizaciju za funkcionalnu rehabilitaciju i prevenciju ozljeda.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      year: '2019',
      title: 'Vlastiti Studio',
      description: 'Otvorio vlastiti fitness studio fokusiran na personalizirane treninge.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      year: '2021',
      title: 'Online Ekspanzija',
      description: 'Proširio poslovanje na online coaching i digitalne fitness programe.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ],
};