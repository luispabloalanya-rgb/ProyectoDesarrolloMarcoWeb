export interface Skill {
  name: string;
  level: string;
  category: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  shortName: string;
  email: string;
  location: string;
  avatarUrl: string;
  rating: number;
  exchanges: number;
  credits: number;
  plan: string;
  bio: string;
  teaches: Skill[];
  wants: Skill[];
  availability: string[];
  modality: 'Online' | 'Presencial' | 'Mixto';
}
