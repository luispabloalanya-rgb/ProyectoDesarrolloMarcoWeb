import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  isProcessing = false;

  constructor(private readonly router: Router) {
  }

  processPayment(): void {
    if (this.isProcessing) {
      return;
    }

    this.isProcessing = true;
    window.setTimeout(() => {
      window.alert('Pago procesado con exito. Se han anadido 5 creditos a tu cuenta.');
      void this.router.navigate(['/dashboard']);
    }, 2000);
  }
}
