import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ExchangeService } from '../../../core/services/exchange.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  private readonly exchanges = inject(ExchangeService);

  scheduled$ = this.exchanges.getSessions().pipe(map(items => items.filter(item => item.status === 'programada')));
  pendingSchedule$ = this.exchanges.getSessions().pipe(map(items => items.filter(item => item.status === 'por_agendar')));
}
