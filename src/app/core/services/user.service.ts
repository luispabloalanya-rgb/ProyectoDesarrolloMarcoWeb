import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../shared/models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly api: ApiService) {
  }

  getCurrentUser(): Observable<User> {
    return this.api.get<User>('current-user');
  }

  getUsers(): Observable<User[]> {
    return this.api.get<User[]>('users');
  }

  getUserById(id: string): Observable<User | undefined> {
    return this.getUsers().pipe(map(users => users.find(user => user.id === id)));
  }
}
