import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { AuthResponse, BasicResponse, TokenResponse, UserProgressResponse } from '@models/fetch-response';
import { AuthUser, EditUser, RegisterUser, User, UserProgress } from '@models/user';
import { environment } from '@env/environment';

import { ThemeService } from './theme.service';

/* eslint-disable quotes, quote-props, max-len */

const CREDENTIALS_STORAGE_KEY = 'fachentwickler_auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User;

  public token = 'jwt';

  public isAuthenticated = false;

  public redirectUrl: string;

  private LOGIN_ENDPOINT = `${environment.baseUrl}/user/login`;

  private REGISTER_ENDPOINT = `${environment.baseUrl}/user/register`;

  private CONFIRMATION_ENDPOINT = `${environment.baseUrl}/user/confirmation`;

  private RESEND_VERIFICATION_ENDPOINT = `${environment.baseUrl}/user/resend-verification-code`;

  private FORGOT_PASSWORD_ENDPOINT = `${environment.baseUrl}/user/forgot-password`;

  private CHANGE_PASSWORD_ENDPOINT = `${environment.baseUrl}/user/change-password`;

  private EDIT_USER_ENDPOINT = `${environment.baseUrl}/user/edit-user`;

  private ADD_PROGRESS_ENDPOINT = `${environment.baseUrl}/user/add-progress`;

  private LOGOUT_ENDPOINT = `${environment.baseUrl}/user/logout`;

  private AUTHENTICATED_ENDPOINT = `${environment.baseUrl}/user/authenticated`;

  constructor(private httpClient: HttpClient, private themeService: ThemeService, private matSnackBar: MatSnackBar) {
    this.restore();
  }

  public login(user: AuthUser): Observable<TokenResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .post<TokenResponse>(this.LOGIN_ENDPOINT, JSON.stringify(user), {
        headers,
      })
      .pipe(
        map((response) => {
          // console.log('response POST login', response);
          this.isAuthenticated = response.success;

          if (response.success) {
            this.user = response.user;
            this.token = response.token;
            this.storeData();
          }
          return response;
        }),
      );
  }

  public register(user: RegisterUser): Observable<TokenResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .post<TokenResponse>(this.REGISTER_ENDPOINT, JSON.stringify(user), {
        headers,
      })
      .pipe(
        map((response) => {
          // console.log('response POST register', response);
          if (response.success) {
            this.isAuthenticated = response.success;
            this.user = response.user;
            this.token = response.token;
            this.storeData();
          }
          return response;
        }),
      );
  }

  public verifyUser(email: string, code: string, newEmail = null): Observable<AuthResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let confirmationEndpoint = `${this.CONFIRMATION_ENDPOINT}/${email}/${code}`;

    if (newEmail !== null) {
      confirmationEndpoint += `/${newEmail}`;
    }

    return this.httpClient.get<AuthResponse>(confirmationEndpoint, { headers }).pipe(
      map((response) => {
        // console.log('response POST confirm-registration', response);
        if (response.success) {
          this.user = response.user;
          this.storeData();
        }
        return response;
      }),
    );
  }

  public resendVerificationCode(email: string): Observable<TokenResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

    return this.httpClient
      .post<TokenResponse>(`${this.RESEND_VERIFICATION_ENDPOINT}`, JSON.stringify({ email }), { headers })
      .pipe(
        map((response) => {
          // console.log('response POST resend-verification-code', response);
          if (response.success) {
            this.user.active = true;
            this.storeData();
          }
          return response;
        }),
      );
  }

  public forgotPassword(email: string): Observable<TokenResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .post<TokenResponse>(`${this.FORGOT_PASSWORD_ENDPOINT}`, JSON.stringify({ email }), { headers })
      .pipe(
        map((response) => {
          // console.log('response POST forgot-password', response);
          return response;
        }),
      );
  }

  public changePassword(code: string, newPassword: string): Observable<AuthResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const body = { code, newPassword };

    return this.httpClient
      .post<AuthResponse>(`${this.CHANGE_PASSWORD_ENDPOINT}`, JSON.stringify(body), { headers })
      .pipe(
        map((response) => {
          // console.log('response POST forgot-password', response);
          return response;
        }),
      );
  }

  public editUser(user: EditUser): Observable<AuthResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

    return this.httpClient
      .patch<AuthResponse>(this.EDIT_USER_ENDPOINT, JSON.stringify(user), {
        headers,
      })
      .pipe(
        map((response) => {
          if (response.success) {
            this.user = response.user;
            this.storeData();
          }
          return response;
        }),
      );
  }

  public addProgress(progress: UserProgress): Observable<UserProgressResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

    return this.httpClient
      .post<UserProgressResponse>(this.ADD_PROGRESS_ENDPOINT, JSON.stringify(progress), { headers })
      .pipe(
        map((response) => {
          // console.log('response POST user/add-progress', response);
          if (response.success) {
            this.user = response.user;
          }
          return response;
        }),
      );
  }

  public invalidate(): Observable<BasicResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

    this.user = undefined;
    this.token = 'jwt';
    this.isAuthenticated = undefined;
    localStorage.removeItem(CREDENTIALS_STORAGE_KEY);

    return this.httpClient.get<BasicResponse>(this.LOGOUT_ENDPOINT, { headers }).pipe(
      map((response) => {
        // console.log('response GET user/logout', response);
        return response;
      }),
    );
  }

  public refresh(): Observable<TokenResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

    return this.httpClient.get<TokenResponse>(this.AUTHENTICATED_ENDPOINT, { headers }).pipe(
      map((response) => {
        // console.log('response POST authenticated', response);
        if (response.success) {
          this.user = response.user;
          this.isAuthenticated = true;
          this.token = response.token;
          this.storeData();
        }
        return response;
      }),
    );
  }

  public async restore(): Promise<boolean | TokenResponse> {
    const stored = localStorage.getItem(CREDENTIALS_STORAGE_KEY);
    if (stored === null) return;

    const data = JSON.parse(stored);
    this.user = data.user;
    this.token = data.token;
    this.isAuthenticated = true;
    if (this.themeService.getActiveTheme().name !== data.theme) this.themeService.toggleTheme();
    if (this.token === undefined) return;

    this.refresh().subscribe(
      (response) => {
        if (response.user) {
          this.user = response.user;
          this.token = response.token;
          this.isAuthenticated = true;

          if (this.themeService.getActiveTheme().name !== response.user.theme) {
            this.themeService.toggleTheme();
          }

          this.storeData();
        }
      },
      (error) => {
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: `Fehler aufgetreten!${error.error.message}`,
        });
        // console.log('ERROR authenticated', error);
        // this.invalidate();
      },
    );
  }

  public async setLessonSolved(id: string): Promise<void> {
    if (this.user.progress.includes(id)) return;

    const lesson = {
      userId: this.user._id,
      postId: id,
    } as UserProgress;

    this.addProgress(lesson).subscribe(
      () => {
        this.storeData();

        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Lektion als gelesen markiert',
        });
      },
      (error) => {
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: `Fehler: ${typeof error === 'string' ? error : error.message}`,
        });
      },
    );
  }

  private storeData(): void {
    localStorage.setItem(
      CREDENTIALS_STORAGE_KEY,
      JSON.stringify({
        user: this.user,
        token: this.token,
        theme: this.themeService.getActiveTheme().name,
      }),
    );
  }
}
