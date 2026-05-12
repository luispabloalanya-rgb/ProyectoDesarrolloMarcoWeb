import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ExchangeService } from '../../../core/services/exchange.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  private readonly exchanges = inject(ExchangeService);

  history$ = this.exchanges.getSessionHistory();
}
