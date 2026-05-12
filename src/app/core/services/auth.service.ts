import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../../shared/models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'skillswap_token';

  constructor(private readonly users: UserService, private readonly router: Router) {
  }

  login(email: string, password: string): Observable<User> {
    return this.users.getCurrentUser().pipe(
      tap(() => {
        localStorage.setItem(this.tokenKey, btoa(`${email}:${password || 'demo'}`));
      })
    );
  }

  register(user: Pick<User, 'name' | 'email'>): Observable<User> {
    return this.users.getCurrentUser().pipe(
      tap(() => {
        localStorage.setItem(this.tokenKey, btoa(`${user.email}:registro`));
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    void this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem(this.tokenKey));
  }
}
