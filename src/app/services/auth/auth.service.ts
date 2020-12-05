import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User, AuthUser } from '../../models/user';
import { AuthResponse } from '../../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${environment.baseUrl}/user/login`;
  private authenticatedUrl = `${environment.baseUrl}/user/authenticated`;

  // private clientId = 'id';
  // private clientSecret = 'secret';
  private token = 'jwt';

  public data: any | undefined;
  public user: User;
  public isAuthenticated = false;
  public redirectUrl: string;

  constructor(private httpClient: HttpClient) {}

  login(user: AuthUser): Observable<AuthResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.httpClient.post<AuthResponse>(this.loginUrl, JSON.stringify(user), httpOptions)
      .pipe(
        map(authResponseData => {
          this.data = authResponseData;
          this.user = authResponseData.user;
          this.token = authResponseData.token;
          this.isAuthenticated = true;
          this.storeToken();
          return authResponseData;
        })
      );
  }

  logout(): void {
    console.log('log out');
  }

  authenticated(): Observable<AuthResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.httpClient.get<any>(this.authenticatedUrl, httpOptions)
      .pipe(
        map(authResponseData => {
          this.data = authResponseData;
          this.user = authResponseData.user;
          this.isAuthenticated = true;
          if (authResponseData.token) {
            this.token = authResponseData.token;
            this.storeToken();
          }
          return authResponseData;
        })
      );
  }

  storeToken(): void {
    localStorage.setItem('fia_token', this.token);
    console.log('token stored');
  }
}
