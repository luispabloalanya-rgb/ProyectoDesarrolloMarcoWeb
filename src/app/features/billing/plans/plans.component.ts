import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BillingService } from '../../../core/services/billing.service';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, RouterLink],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  private readonly billing = inject(BillingService);

  plans$ = this.billing.getPlans();
}
