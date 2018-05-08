import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '@app/models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  private TOKEN_KEY = 'access_token';

  login(credentials: Credentials): Observable<Credentials> {
    return this.httpClient.post<Credentials>('login', credentials);
  }

  setUser(credentials: Credentials) {
    const token = JSON.stringify(credentials);
    this.setToken(token);
  }

  getUser(): Credentials {
    return JSON.parse(this.getToken());
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
