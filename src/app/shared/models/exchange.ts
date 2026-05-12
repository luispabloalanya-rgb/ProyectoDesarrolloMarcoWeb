export type ExchangeStatus = 'pendiente' | 'aceptado' | 'rechazado' | 'programado' | 'finalizado';
export type ExchangeDirection = 'recibida' | 'enviada';

export interface Exchange {
  id: string;
  direction: ExchangeDirection;
  userId: string;
  userName: string;
  avatarUrl: string;
  requestedSkill: string;
  offeredSkill: string;
  message: string;
  status: ExchangeStatus;
  createdAt: string;
}

export interface LearningSession {
  id: string;
  exchangeId: string;
  userName: string;
  avatarUrl: string;
  skill: string;
  role: 'ensenas' | 'aprendes';
  status: 'programada' | 'por_agendar' | 'finalizada';
  date?: string;
  time?: string;
  durationMinutes: number;
  location: string;
}

export interface ChatMessage {
  id: string;
  exchangeId: string;
  from: 'me' | 'them';
  text: string;
  sentAt: string;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  badge?: string;
  highlighted: boolean;
  current: boolean;
  features: string[];
}
