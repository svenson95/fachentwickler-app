import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';

import { environment } from '../../../environments/environment';
import { User, AuthUser, RegisterUser, EditUser, UserProgress } from '../../models/user';
import { LoginResponse, RegisterResponse, LogoutResponse, AuthenticatedResponse, EditUserResponse, AddProgressResponse } from '../../models/fetch-response';
import { ThemeService } from '../theme.service';
import { DataService } from '../data/data.service';

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
  public user: User;
  public token = 'jwt';
  public isAuthenticated = false;
  public redirectUrl: string;

  constructor(private httpClient: HttpClient,
              private themeService: ThemeService,
              private dataService: DataService,
              private router: Router,
              private matSnackBar: MatSnackBar,
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

  /* -- Get all lessons for user progress analysis (lesson progress & next lesson) -- */
  fetchAllLessons(): void {
    this.dataService.getAllLessons().subscribe(
        (lessons) => {
          this.dataService.dashboard.allLessons = lessons;
          this.fetchNextLesson(lessons);
        }, (error) => {
          console.log('error while GET all-lessons', error);
        }
    );
  }

  /* -- Get next lesson & lessons percentage for user progress module -- */
  fetchNextLesson(lessons: string[]): void {
    // '605a469942f5481a20c97627' is a test article
    const nextLessonId = lessons.find(lessonId => lessonId !== '605a469942f5481a20c97627' && !this.user.progress.includes(lessonId));
    this.dataService.getPostById(nextLessonId).subscribe(
        (nextLesson) => {
          this.dataService.dashboard.nextLesson = nextLesson;
          this.dataService.dashboard.lessonsPercentage = (this.user.progress.length / lessons.length) * 100;
        }, (error) => {
          console.log('error while GET next-lesson', error);
        }
    );
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
          this.fetchAllLessons();
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
            await this.authenticated().subscribe(
            (response) => {
                console.log('SUCCESS authenticated', response);
                if (response.user) {
                    this.user = response.user;
                    this.token = response.token;
                    this.isAuthenticated = true;
                    if (this.themeService.getActiveTheme().name !== response.user.theme) {
                        this.themeService.toggleTheme();
                    }
                    this.storeData();
                    return response;
                }
            }, (error) => {
                console.log('ERROR authenticated', error);
            });

            if (this.user === undefined) {
                const data = JSON.parse(stored);
                this.user = data.user;
                this.token = data.token;
                this.isAuthenticated = true;
                if (this.themeService.getActiveTheme().name !== this.user.theme) {
                    this.themeService.toggleTheme();
                }
                return data;
            }
        } catch (err) {
            console.log('error while check authentication cookie ...', err);
        }
    }

  storeData(): void {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({
      user: this.user,
      token: this.token,
      theme: this.themeService.getActiveTheme().name,
      isAuthenticated: this.isAuthenticated
    }));
  }

  alreadyRead(lesson: string): boolean {
    return this.user.progress.includes(lesson);
  }

  /* -- Component functions -- */
  setLessonSolved(id): void {
    const lesson = {
      userId: this.user._id,
      postId: id
    } as UserProgress;

    this.addProgress(lesson).subscribe(
        (response) => {
            this.user = response.user;
            this.storeData();
            this.matSnackBar.openFromComponent(SnackbarComponent, {
                duration: 3000,
                data: 'Lektion als gelesen markiert'
            });
        }, (error) => {
            this.matSnackBar.openFromComponent(SnackbarComponent, {
                duration: 3000,
                data: 'Fehler: ' + (typeof error === 'string' ? error : error.message)
            });
        }
    );
  }
}
