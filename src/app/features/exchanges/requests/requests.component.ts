import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ExchangeService } from '../../../core/services/exchange.service';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  private readonly exchanges = inject(ExchangeService);

  received$ = this.exchanges.getExchanges().pipe(map(items => items.filter(item => item.direction === 'recibida')));
  sent$ = this.exchanges.getExchanges().pipe(map(items => items.filter(item => item.direction === 'enviada')));
}
