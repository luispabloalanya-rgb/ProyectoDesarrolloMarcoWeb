import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly users = inject(UserService);

  user$ = this.route.paramMap.pipe(
    map(params => params.get('id') ?? 'me'),
    switchMap(id => id === 'me' ? this.users.getCurrentUser() : this.users.getUserById(id))
  );

  currentUser$ = this.users.getCurrentUser();
}
