import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { User, AuthUser, RegisterUser, EditUser, UserProgress } from '../../models/user';
import { LoginResponse, RegisterResponse, LogoutResponse, AuthenticatedResponse, EditUserResponse, AddProgressResponse } from '../../models/fetch-response';
import { DashboardData } from '../../models/dashboard-data';
import { ThemeService } from '../theme.service';

const AUTH_STORAGE_KEY = 'fiappy_auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* -- Auth API links -- */
  private loginUrl = `${environment.baseUrl}/user/login`;
  private registerUrl = `${environment.baseUrl}/user/register`;
  private editUserUrl = `${environment.baseUrl}/user/edit-user`;
  private addProgressUrl = `${environment.baseUrl}/user/add-progress`;
  private logoutUrl = `${environment.baseUrl}/user/logout`;
  private authenticatedUrl = `${environment.baseUrl}/user/authenticated`;

  /* -- Auth Service  -- */
  public data: DashboardData | undefined;
  public user: User;
  public token = 'jwt';
  public isAuthenticated = false;
  public redirectUrl: string;

  constructor(private httpClient: HttpClient,
              private themeService: ThemeService,
              private router: Router
  ) {
    this.checkAuthentication();
  }

  /* -- Auth API requests -- */
  login(user: AuthUser): Observable<LoginResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.httpClient.post<LoginResponse>(this.loginUrl, JSON.stringify(user), httpOptions)
      .pipe(map(response => {
          // console.log('response POST login', response);
          this.isAuthenticated = response.isAuthenticated;

          if (response.isAuthenticated) {
            this.user = response.user;
            this.token = response.token;
            this.storeData();
          }
          return response;
      }));
  }

  register(user: RegisterUser): Observable<RegisterResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.httpClient.post<RegisterResponse>(this.registerUrl, JSON.stringify(user), httpOptions)
      .pipe(map(response => {
          // console.log('response POST register', response);
          this.isAuthenticated = response.success;
          if (response.success) {
            this.user = response.user;
            this.token = response.token;
            this.storeData();
          }
          return response;
      }));
  }

  editUser(updatedUser: EditUser): Observable<EditUserResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.httpClient.patch<EditUserResponse>(this.editUserUrl, JSON.stringify(updatedUser), httpOptions)
      .pipe(map(response => {
        // console.log('response PATCH edit-user', response);
        if (response.success) {
          this.user = response.user;
          this.storeData();
        }
        return response;
      }));
  }

  addProgress(progress: UserProgress): Observable<AddProgressResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.httpClient.post<AddProgressResponse>(this.addProgressUrl, JSON.stringify(progress), httpOptions)
      .pipe(map(response => {
        // console.log('response POST user/add-progress');
        if (response.success) {
          this.user = response.user;
          this.storeData();
        }
        return response;
      }));
  }

  invalidate(): Observable<LogoutResponse> {
    const httpOptions = {
      withCredentials: true
    };
    this.isAuthenticated = false;
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return this.httpClient.get<LogoutResponse>(this.logoutUrl, httpOptions)
      .pipe(map(response => {
          this.data = null;
          this.user = null;
          this.token = null;
          this.isAuthenticated = false;
          return response;
      }));
  }

  authenticated(): Observable<AuthenticatedResponse> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.httpClient.get<AuthenticatedResponse>(this.authenticatedUrl, httpOptions)
      .pipe(map(response => {
          // console.log('response POST authenticated', response);
          this.isAuthenticated = response.isAuthenticated;
          if (response.isAuthenticated) {
            this.user = response.user;
            this.storeData();
          }
          return response;
      }));
  }

  /* -- Service functions -- */
  async checkAuthentication(redirectUrl: string = null): Promise<boolean | AuthenticatedResponse> {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored === null) {
      return;
    }

    try {
      const data = JSON.parse(stored);
      this.user = data.user;
      this.token = data.token;
      if (this.themeService.getActiveTheme().name !== this.user.theme) {
        this.themeService.toggleTheme();
      }
      this.isAuthenticated = true;
      return data;
    } catch (err) {
      console.log('checking stored auth cookie ...', err);
      await this.authenticated().subscribe(
        (value) => {
          console.log('response authenticated', value);
          this.router.navigateByUrl(redirectUrl);
          return true;
        }, (error) => {
          console.log('ERROR authenticated', error);
          this.router.navigateByUrl('/');
          return false;
        }
      );
    }
  }

  storeData(): void {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({
      data: this.data,
      user: this.user,
      token: this.token,
      theme: this.themeService.getActiveTheme().name,
      isAuthenticated: this.isAuthenticated
    }));
  }

  alreadyRead(lesson: string): boolean {
    return this.user.progress.includes(lesson);
  }
}
