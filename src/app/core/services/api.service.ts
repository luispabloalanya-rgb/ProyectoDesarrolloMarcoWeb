import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'mock-data';

  constructor(private readonly http: HttpClient) {
  }

  get<T>(resource: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${resource}.json`).pipe(shareReplay(1));
  }
}
