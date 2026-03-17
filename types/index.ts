// types/index.ts
export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  accomplishments: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  details: string;
}