import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { ExchangeService } from '../../../core/services/exchange.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [AsyncPipe, DatePipe, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  private readonly exchanges = inject(ExchangeService);

  draft = '';
  activeExchangeId = 'ex-002';
  conversations$ = this.exchanges.getExchanges();
  messages$ = this.exchanges.getMessages().pipe(map(messages => messages.filter(message => message.exchangeId === this.activeExchangeId)));

  selectConversation(exchangeId: string): void {
    this.activeExchangeId = exchangeId;
    this.messages$ = this.exchanges.getMessages().pipe(map(messages => messages.filter(message => message.exchangeId === this.activeExchangeId)));
  }

  sendMessage(): void {
    this.draft = '';
  }
}
