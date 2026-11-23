export type Language = 'sq' | 'en' | 'it' | 'de' | 'es';

export interface Doctor {
  id: string;
  name: string;
  specialtyKey: string;
  roleKey: string;
  descKey: string;
  image: string;
  badge: string;
}

export interface ServiceItem {
  id: string;
  titleKey: string;
  descKey: string;
  drKey: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  titleKey: string;
  descKey: string;
  badge: string;
  image: string;
  isAfterOnly?: boolean;
}

export interface Testimonial {
  id: string;
  textKey: string;
  authorKey: string;
  subKey: string;
  initials: string;
  rating: number;
}
