import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { AuthUser, RegisterUser } from '@models/user';
import { AuthNullResponse, AuthUserResponse, AuthUserTokenResponse } from '@models/auth-response';
import { LoggingService } from '@services/logging.service';
import { Message } from '@models/message';
/* eslint-disable quotes, quote-props, max-len */

export const CREDENTIALS_STORAGE_KEY = 'fachentwickler_cache';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token: string;

  public redirectUrl: string;

  private LOGIN_ENDPOINT = `${environment.baseUrl}/user/login`;

  private REGISTER_ENDPOINT = `${environment.baseUrl}/user/register`;

  private CONFIRMATION_ENDPOINT = `${environment.baseUrl}/user/confirmation`;

  private RESEND_VERIFICATION_ENDPOINT = `${environment.baseUrl}/user/resend-verification-code`;

  private FORGOT_PASSWORD_ENDPOINT = `${environment.baseUrl}/user/forgot-password`;

  private AUTHENTICATED_ENDPOINT = `${environment.baseUrl}/user/authenticated`;

  private LOGOUT_ENDPOINT = `${environment.baseUrl}/user/logout`;

  constructor(private http: HttpClient, private logging: LoggingService) {}

  public login(user: AuthUser): Observable<AuthUserTokenResponse> {
    const endpoint = this.LOGIN_ENDPOINT;
    const payload = user;

    return this.http.post<AuthUserTokenResponse>(endpoint, payload).pipe(
      map((response) => {
        this.logging.debug(new Message(`response POST ${endpoint}`), `payload: ${payload}`, response);
        return response;
      }),
    );
  }

  public register(user: RegisterUser): Observable<AuthUserResponse> {
    const endpoint = this.REGISTER_ENDPOINT;
    const payload = user;

    return this.http.post<AuthUserResponse>(endpoint, payload).pipe(
      map((response) => {
        this.logging.debug(new Message(`response POST ${endpoint}`), `payload: ${payload}`, response);
        return response;
      }),
    );
  }

  public verify(email: string, code: string, newEmail = null): Observable<AuthUserResponse> {
    let endpoint = `${this.CONFIRMATION_ENDPOINT}/${email}/${code}`;
    if (newEmail !== null) endpoint += `/${newEmail}`;

    return this.http.get<AuthUserResponse>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public resendVerificationCode(email: string): Observable<AuthNullResponse> {
    const endpoint = `${this.RESEND_VERIFICATION_ENDPOINT}`;
    const payload = { email };
    const headers = new HttpHeaders().set('Authorization', this.token);

    return this.http.post<AuthNullResponse>(endpoint, payload, { headers }).pipe(
      map((response) => {
        this.logging.debug(new Message(`response POST ${endpoint}`), `payload: ${payload}`, response);
        return response;
      }),
    );
  }

  public forgotPassword(email: string): Observable<AuthNullResponse> {
    const endpoint = `${this.FORGOT_PASSWORD_ENDPOINT}`;
    const payload = { email };

    return this.http.post<AuthNullResponse>(endpoint, payload).pipe(
      map((response) => {
        this.logging.debug(new Message(`response POST ${endpoint}`), `payload: ${payload}`, response);
        return response;
      }),
    );
  }

  public refresh(): Observable<AuthUserTokenResponse> {
    const endpoint = this.AUTHENTICATED_ENDPOINT;
    const headers = new HttpHeaders().set('Authorization', this.token);

    return this.http.get<AuthUserTokenResponse>(endpoint, { headers }).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public invalidate(): Observable<AuthNullResponse> {
    const endpoint = this.LOGOUT_ENDPOINT;
    const headers = new HttpHeaders().set('Authorization', this.token);

    this.token = undefined;
    localStorage.removeItem(CREDENTIALS_STORAGE_KEY);

    return this.http.get<AuthNullResponse>(endpoint, { headers }).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }
}
