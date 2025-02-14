import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface NavProps {
  items: NavItem[];
}