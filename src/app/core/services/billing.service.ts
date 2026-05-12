import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../../shared/models/exchange';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  constructor(private readonly api: ApiService) {
  }

  getPlans(): Observable<Plan[]> {
    return this.api.get<Plan[]>('plans');
  }
}
