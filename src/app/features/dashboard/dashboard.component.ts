import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ExchangeService } from '../../core/services/exchange.service';
import { TimeBankService } from '../../core/services/time-bank.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe, FormsModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private readonly users = inject(UserService);
  private readonly exchanges = inject(ExchangeService);
  private readonly timeBank = inject(TimeBankService);

  searchTerm = '';
  currentUser$ = this.users.getCurrentUser();
  credits$ = this.timeBank.getCreditBalance();
  pendingRequests$ = this.exchanges.getPendingRequests().pipe(map(items => items.length));
  nextSessions$ = this.exchanges.getSessions().pipe(map(items => items.filter(item => item.status === 'programada').slice(0, 2)));
}
