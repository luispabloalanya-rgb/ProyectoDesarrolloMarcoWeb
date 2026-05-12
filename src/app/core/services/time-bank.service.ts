import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TimeBankService {

  constructor(private readonly users: UserService) {
  }

  getCreditBalance(): Observable<number> {
    return this.users.getCurrentUser().pipe(map(user => user.credits));
  }
}
