
import React from 'react';
import { 
  Droplets, 
  Zap, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Construction, 
  Lightbulb, 
  Wind, 
  Layers, 
  Scissors,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star,
  Users,
  Award
} from 'lucide-react';
import { ServiceItem, BenefitItem, StepItem } from './types';

export const PHONE_NUMBER = "5548996755003";
export const PHONE_DISPLAY = "(48) 99675-5003";

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_LINK = getWhatsAppLink("Olá! Vi seu site e gostaria de solicitar um orçamento para serviços residenciais.");

export const STATS = [
  { label: 'Clientes Satisfeitos', value: '1.200+', icon: <Users className="w-5 h-5" /> },
  { label: 'Anos de Experiência', value: '12+', icon: <Award className="w-5 h-5" /> },
  { label: 'Avaliação Google', value: '4.9/5', icon: <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /> },
];

export const SERVICES = [
  {
    id: 'hidraulica',
    title: 'Hidráulica',
    description: 'Vazamentos, infiltrações, instalação de torneiras e registros.',
    icon: <Droplets />,
    waText: 'Olá! Gostaria de um orçamento para serviço de HIDRÁULICA.'
  },
  {
    id: 'eletrica',
    title: 'Elétrica',
    description: 'Chuveiros, tomadas, disjuntores e fiação completa.',
    icon: <Zap />,
    waText: 'Olá! Gostaria de um orçamento para serviço de ELÉTRICA.'
  },
  {
    id: 'caixa-dagua',
    title: 'Caixas d’água',
    description: 'Limpeza técnica, reparos em boias e vedação completa.',
    icon: <Layers />,
    waText: 'Olá! Gostaria de um orçamento para manutenção em CAIXA D\'ÁGUA.'
  },
  {
    id: 'instalacao',
    title: 'Instalações',
    description: 'TVs, quadros, prateleiras, varais e acessórios.',
    icon: <Hammer />,
    waText: 'Olá! Gostaria de um orçamento para INSTALAÇÕES diversas.'
  },
  {
    id: 'pintura',
    title: 'Pintura & Textura',
    description: 'Reparos em paredes, massas e pintura de acabamento.',
    icon: <Paintbrush />,
    waText: 'Olá! Gostaria de um orçamento para PINTURA.'
  },
  {
    id: 'reformas',
    title: 'Pequenas Reformas',
    description: 'Alvenaria leve, pisos, azulejos e reparos estruturais.',
    icon: <Construction />,
    waText: 'Olá! Gostaria de um orçamento para PEQUENAS REFORMAS.'
  },
  {
    id: 'luminarias',
    title: 'Iluminação',
    description: 'Spots, fitas LED, pendentes e painéis modernos.',
    icon: <Lightbulb />,
    waText: 'Olá! Gostaria de um orçamento para ILUMINAÇÃO/LUMINÁRIAS.'
  },
  {
    id: 'ventilador',
    title: 'Ventiladores',
    description: 'Instalação e manutenção de ventiladores de teto e parede.',
    icon: <Wind />,
    waText: 'Olá! Gostaria de um orçamento para instalação de VENTILADOR.'
  },
  {
    id: 'rejunte',
    title: 'Rejuntamento',
    description: 'Troca de rejunte em banheiros, cozinhas e piscinas.',
    icon: <Wrench />,
    waText: 'Olá! Gostaria de um orçamento para troca de REJUNTE.'
  },
  {
    id: 'cortinas',
    title: 'Cortinas & Persianas',
    description: 'Instalação de trilhos, varões e persianas sob medida.',
    icon: <Scissors />,
    waText: 'Olá! Gostaria de um orçamento para instalação de CORTINAS/PERSIANAS.'
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Especialista Qualificado',
    description: 'Profissional treinado com as melhores ferramentas do mercado.',
    icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />
  },
  {
    title: 'Garantia de 90 Dias',
    description: 'Segurança total: se não ficar bom, nós voltamos e refazemos.',
    icon: <Award className="w-6 h-6 text-yellow-500" />
  },
  {
    title: 'Atendimento Express',
    description: 'Chegamos rápido para emergências em toda a região.',
    icon: <Clock className="w-6 h-6 text-yellow-500" />
  }
];

export const STEPS: StepItem[] = [
  {
    number: 1,
    title: 'WhatsApp',
    description: 'Envie sua necessidade'
  },
  {
    number: 2,
    title: 'Fotos',
    description: 'Mande fotos do local'
  },
  {
    number: 3,
    title: 'Orçamento',
    description: 'Valor enviado na hora'
  },
  {
    number: 4,
    title: 'Execução',
    description: 'Serviço pronto e limpo'
  }
];
