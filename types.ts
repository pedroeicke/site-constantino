
import { ReactNode } from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}
