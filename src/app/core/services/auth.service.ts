import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { AuthUser, RegisterUser } from '@models/user';
import { AuthNullResponse, AuthUserResponse, AuthUserTokenResponse } from '@models/auth-response';

/* eslint-disable quotes, quote-props, max-len */

export const CREDENTIALS_STORAGE_KEY = 'fachentwickler_auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token = 'jwt';

  public redirectUrl: string;

  private LOGIN_ENDPOINT = `${environment.baseUrl}/user/login`;

  private REGISTER_ENDPOINT = `${environment.baseUrl}/user/register`;

  private CONFIRMATION_ENDPOINT = `${environment.baseUrl}/user/confirmation`;

  private RESEND_VERIFICATION_ENDPOINT = `${environment.baseUrl}/user/resend-verification-code`;

  private FORGOT_PASSWORD_ENDPOINT = `${environment.baseUrl}/user/forgot-password`;

  private AUTHENTICATED_ENDPOINT = `${environment.baseUrl}/user/authenticated`;

  private LOGOUT_ENDPOINT = `${environment.baseUrl}/user/logout`;

  constructor(private http: HttpClient) {}

  public login(user: AuthUser): Observable<AuthUserTokenResponse> {
    return this.http.post<AuthUserTokenResponse>(this.LOGIN_ENDPOINT, user).pipe(
      map((response) => {
        // console.log('response POST login', response);
        return response;
      }),
    );
  }

  public register(user: RegisterUser): Observable<AuthUserResponse> {
    return this.http.post<AuthUserResponse>(this.REGISTER_ENDPOINT, user).pipe(
      map((response) => {
        // console.log('response POST register', response);
        return response;
      }),
    );
  }

  public verify(email: string, code: string, newEmail = null): Observable<AuthUserResponse> {
    let confirmationEndpoint = `${this.CONFIRMATION_ENDPOINT}/${email}/${code}`;
    if (newEmail !== null) confirmationEndpoint += `/${newEmail}`;

    return this.http.get<AuthUserResponse>(confirmationEndpoint).pipe(
      map((response) => {
        // console.log('response POST confirm-registration', response);
        return response;
      }),
    );
  }

  public resendVerificationCode(email: string): Observable<AuthNullResponse> {
    const headers = new HttpHeaders().set('Authorization', this.token);

    return this.http.post<AuthNullResponse>(`${this.RESEND_VERIFICATION_ENDPOINT}`, { email }, { headers }).pipe(
      map((response) => {
        // console.log('response POST resend-verification-code', response);
        return response;
      }),
    );
  }

  public forgotPassword(email: string): Observable<AuthNullResponse> {
    return this.http.post<AuthNullResponse>(`${this.FORGOT_PASSWORD_ENDPOINT}`, { email }).pipe(
      map((response) => {
        // console.log('response POST forgot-password', response);
        return response;
      }),
    );
  }

  public refresh(): Observable<AuthUserTokenResponse> {
    const headers = new HttpHeaders().set('Authorization', this.token);

    return this.http.get<AuthUserTokenResponse>(this.AUTHENTICATED_ENDPOINT, { headers }).pipe(
      map((response) => {
        // console.log('response POST authenticated', response);
        return response;
      }),
    );
  }

  public invalidate(): Observable<AuthNullResponse> {
    const headers = new HttpHeaders().set('Authorization', this.token);

    this.token = 'jwt';
    localStorage.removeItem(CREDENTIALS_STORAGE_KEY);

    return this.http.get<AuthNullResponse>(this.LOGOUT_ENDPOINT, { headers }).pipe(
      map((response) => {
        // console.log('response GET user/logout', response);
        return response;
      }),
    );
  }
}
