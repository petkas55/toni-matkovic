import { Smartphone, Dumbbell } from 'lucide-react';
import type { Service } from '@/types';

export const services: Service[] = [
  {
    icon: Smartphone,
    title: 'Online Coaching',
    description: 'Profesionalno vođenje i podrška 24/7 kroz našu naprednu aplikaciju. Trenirajte bilo gdje, bilo kada uz personalizirani program.',
    features: [
      'Personalizirani program treninga',
      'Prilagođeni plan prehrane',
      'Video demonstracije vježbi',
      '24/7 podrška kroz aplikaciju',
      'Tjedne online konzultacije',
      'Poboljšanje mentalnog zdravlja',
      'Komunikacija putem aplikacije'
    ],
    primary: true
  },
  {
    icon: Dumbbell,
    title: 'Individualni Treninzi',
    description: 'Personalizirani treninzi uživo uz stručno vodstvo i kontinuirano praćenje napretka. Maksimalna pažnja i rezultati.',
    features: [
      'Individualna pažnja',
      'Korekcija tehnike',
      'Praćenje napretka',
      'Rehabilitacija i prevencija ozljeda',
      'Riješavanje bolova i problema',
      'Razvijanje sposobnosti',
      'Poboljšanje mentalnog zdravlja',
      'Plan prehrane'
    ]
  }
];