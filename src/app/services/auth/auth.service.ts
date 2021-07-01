import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';

import { environment } from '../../../environments/environment';
import { User, AuthUser, RegisterUser, EditUser, UserProgress } from '../../models/user';
import {
    LoginResponse,
    RegisterResponse,
    LogoutResponse,
    AuthenticatedResponse,
    EditUserResponse,
    AddProgressResponse,
    ConfirmationResponse
} from '../../models/fetch-response';
import { ThemeService } from '../theme.service';
import { DataService } from '../data/data.service';

const CREDENTIALS_STORAGE_KEY = 'fachentwickler_auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private LOGIN_ENDPOINT = environment.baseUrl + '/user/login';
    private REGISTER_ENDPOINT = environment.baseUrl + '/user/register';
    private CONFIRMATION_ENDPOINT = environment.baseUrl + '/user/confirmation';
    private RESEND_VERIFICATION_ENDPOINT = environment.baseUrl + '/user/resend-verification-link';
    private EDIT_USER_ENDPOINT = environment.baseUrl + '/user/edit-user';
    private ADD_PROGRESS_ENDPOINT = environment.baseUrl + '/user/add-progress';
    private LOGOUT_ENDPOINT = environment.baseUrl + '/user/logout';
    private AUTHENTICATED_ENDPOINT = environment.baseUrl + '/user/authenticated';

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
        this.restore();
    }

    login(user: AuthUser): Observable<LoginResponse> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');

        return this.httpClient.post<LoginResponse>(this.LOGIN_ENDPOINT, JSON.stringify(user), {headers})
            .pipe(map(response => {
                // console.log('response POST login', response);
                this.isAuthenticated = response.isAuthenticated;

                if (response.isAuthenticated) {
                    this.user = response.user;
                    this.token = response.token;
                    this.storeData();

                    if (this.redirectUrl) {
                        this.router.navigateByUrl(this.redirectUrl);
                    }
                }
                return response;
            }));
    }

    register(user: RegisterUser): Observable<RegisterResponse> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');

        return this.httpClient.post<RegisterResponse>(this.REGISTER_ENDPOINT, JSON.stringify(user), {headers})
            .pipe(map(response => {
                // console.log('response POST register', response);
                if (response.success) {
                    this.isAuthenticated = response.success;
                    this.user = response.user;
                    this.token = response.token;
                    this.storeData();
                }
                return response;
            }));
    }

    confirmRegistration(email: string, code: string, newEmail = null): Observable<ConfirmationResponse> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
        let confirmationEndpoint = `${this.CONFIRMATION_ENDPOINT}/${email}/${code}`;

        if (newEmail !== null) {
            confirmationEndpoint += `/${newEmail}`;
        }

        return this.httpClient.get<ConfirmationResponse>(confirmationEndpoint, {headers})
            .pipe(map(response => {
                // console.log('response POST register', response);
                if (response.success) {
                    this.user.active = true;
                    this.storeData();
                } else if (response.error) {
                    console.log('error...', response);
                }
                return response;
            }));
    }

    resendVerificationLink(email: string): Observable<ConfirmationResponse> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.token);

        return this.httpClient.post<ConfirmationResponse>(`${this.RESEND_VERIFICATION_ENDPOINT}`, JSON.stringify({ email }), {headers})
            .pipe(map(response => {
                // console.log('response POST register', response);
                if (response.success) {
                    this.user.active = true;
                    this.storeData();
                } else if (response.error) {
                    console.log('error...', response);
                }
                return response;
            }));
    }

    async fetchAllLessons(): Promise<void> {
        this.dataService.getAllLessons().subscribe(
            (lessons) => {
                this.dataService.dashboard.allLessons = lessons;
                this.fetchNextLesson(lessons);
            }, (error) => {
                console.log('error while GET all-lessons', error);
            }
        );
    }

    fetchNextLesson(lessons: string[]): void {
        // '605a469942f5481a20c97627' is a test article
        const nextLessonId = lessons.find(lessonId => lessonId !== '605a469942f5481a20c97627' && !this.user.progress.includes(lessonId));

        this.dataService.getPostById(nextLessonId).subscribe(
            (nextLesson) => {
                this.dataService.dashboard.nextLesson = nextLesson;
                this.dataService.dashboard.lessonsPercentage = (this.user.progress.length / lessons.length) * 100;

                this.dataService.getSchoolWeek(Number(nextLesson.schoolWeek)).subscribe((response) => {
                    this.dataService.schoolWeek = response;
                });
            }, (error) => {
                console.log('error while GET next-lesson', error);
            }
        );
    }

    editUser(updatedUser: EditUser): Observable<EditUserResponse> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.token);

        return this.httpClient.patch<EditUserResponse>(this.EDIT_USER_ENDPOINT, JSON.stringify(updatedUser), {headers})
            .pipe(map(response => {
                console.log('response PATCH edit-user', response);
                if (response.success) {
                    this.user = response.user;
                    this.storeData();
                }
                return response;
            }));
    }

    addProgress(progress: UserProgress): Observable<AddProgressResponse> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.token);

        return this.httpClient.post<AddProgressResponse>(this.ADD_PROGRESS_ENDPOINT, JSON.stringify(progress), {headers})
            .pipe(map(response => {
                // console.log('response POST user/add-progress', response);
                if (response.success) {
                    this.user = response.user;
                    this.fetchNextLesson(this.dataService.dashboard.allLessons);
                }
                return response;
            }));
    }

    invalidate(): Observable<LogoutResponse> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.token);

        this.user = undefined;
        this.token = 'jwt';
        this.isAuthenticated = undefined;
        this.dataService.dashboard = undefined;
        this.dataService.schoolWeek = undefined;
        localStorage.removeItem(CREDENTIALS_STORAGE_KEY);

        return this.httpClient.get<LogoutResponse>(this.LOGOUT_ENDPOINT, {headers})
            .pipe(map(response => {
                // console.log('response GET user/logout', response);
                return response;
            }));
    }

    authenticated(): Observable<AuthenticatedResponse> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.token);

        return this.httpClient.get<AuthenticatedResponse>(this.AUTHENTICATED_ENDPOINT, {headers})
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

    async restore(): Promise<boolean | AuthenticatedResponse> {
        const stored = localStorage.getItem(CREDENTIALS_STORAGE_KEY);
        if (stored === null) {
            return;
        }

        const data = JSON.parse(stored);
        this.user = data.user;
        this.token = data.token;
        this.isAuthenticated = true;
        if (this.themeService.getActiveTheme().name !== this.user.theme) {
            this.themeService.toggleTheme();
        }

        if (this.token === undefined) {
            return;
        }

        await this.authenticated().subscribe(
        (response) => {
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
            // console.log('ERROR authenticated', error);
            this.invalidate();
        });

    }

    storeData(): void {
        localStorage.setItem(CREDENTIALS_STORAGE_KEY, JSON.stringify({
            user: this.user,
            token: this.token,
            theme: this.themeService.getActiveTheme().name,
            isAuthenticated: this.isAuthenticated
        }));
    }

    alreadyRead(lesson: string): boolean {
        return this.user.progress.includes(lesson);
    }

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
