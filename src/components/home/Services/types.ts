import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  features: string[];
  primary?: boolean;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
}