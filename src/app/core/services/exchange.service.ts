import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ChatMessage, Exchange, LearningSession } from '../../shared/models/exchange';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  constructor(private readonly api: ApiService) {
  }

  getExchanges(): Observable<Exchange[]> {
    return this.api.get<Exchange[]>('exchanges');
  }

  getSessions(): Observable<LearningSession[]> {
    return this.api.get<LearningSession[]>('sessions');
  }

  getMessages(): Observable<ChatMessage[]> {
    return this.api.get<ChatMessage[]>('messages');
  }

  getPendingRequests(): Observable<Exchange[]> {
    return this.getExchanges().pipe(map(items => items.filter(item => item.status === 'pendiente')));
  }

  getSessionHistory(): Observable<LearningSession[]> {
    return this.getSessions().pipe(map(items => items.filter(item => item.status === 'finalizada')));
  }
}
