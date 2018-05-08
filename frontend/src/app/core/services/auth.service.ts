import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '@app/models';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  private TOKEN_KEY = 'access_token';

  login(credentials: Credentials): Observable<Credentials> {
    return this.httpClient.post<Credentials>('login', credentials)
      .pipe(
        tap((response) => {
          this.router.navigateByUrl('');
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
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
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }


}
