import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  private readonly users = inject(UserService);

  notifications = true;
  publicProfile = true;
  modality = 'Mixto';
  user$ = this.users.getCurrentUser();
}
