import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { environment } from '@env/environment';
import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { AddProgressBody, EditBodyTypes, UserData } from '@models/user';
import { AuthUserProgressResponse, AuthUserResponse } from '@models/auth-response';

import { AuthService, CREDENTIALS_STORAGE_KEY } from './auth.service';
import { ThemeService } from './theme.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public data: UserData;

  public isAuthenticated = false;

  private CHANGE_PASSWORD_ENDPOINT = `${environment.baseUrl}/user/change-password`;

  private EDIT_USER_ENDPOINT = `${environment.baseUrl}/user/edit-user`;

  private ADD_PROGRESS_ENDPOINT = `${environment.baseUrl}/user/add-progress`;

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar,
    private auth: AuthService,
    private theme: ThemeService,
  ) {}

  public restore(): void {
    const stored = localStorage.getItem(CREDENTIALS_STORAGE_KEY);
    if (stored === null) return;

    const data = JSON.parse(stored);
    this.data = data.user;
    this.auth.token = data.token;
    this.isAuthenticated = true;
    if (this.theme.getActiveTheme() !== data.theme) this.theme.toggleTheme();

    this.auth.refresh().subscribe(
      (response) => {
        if (response.success) {
          this.data = response.data.user;
          this.auth.token = response.data.token;

          if (this.theme.getActiveTheme() !== response.data.user.theme) {
            this.theme.toggleTheme();
          }

          this.storeData();
        }
      },
      (error) => {
        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: `Fehler aufgetreten!${error.error.message}`,
        });
        // console.log('ERROR authenticated', error);
        // this.invalidate();
      },
    );
  }

  public storeData(): void {
    localStorage.setItem(
      CREDENTIALS_STORAGE_KEY,
      JSON.stringify({
        user: this.data,
        token: this.auth.token,
        theme: this.theme.getActiveTheme(),
      }),
    );
  }

  public setLessonSolved(id: string): Promise<void> {
    if (this.data.progress.includes(id)) return;

    const lesson: AddProgressBody = {
      userId: this.data._id,
      postId: id,
    };

    this.addProgress(lesson).subscribe(
      () => {
        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Lektion als gelesen markiert',
        });
      },
      (error) => {
        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: `Fehler: ${typeof error === 'string' ? error : error.message}`,
        });
      },
    );
  }

  public changePassword(code: string, newPassword: string): Observable<AuthUserResponse> {
    const body = { code, newPassword };

    return this.httpClient.post<AuthUserResponse>(`${this.CHANGE_PASSWORD_ENDPOINT}`, body).pipe(
      map((response) => {
        // console.log('response POST forgot-password', response);
        return response;
      }),
    );
  }

  public edit(user: EditBodyTypes): Observable<AuthUserResponse> {
    const headers = new HttpHeaders().set('Authorization', this.auth.token);

    return this.httpClient
      .patch<AuthUserResponse>(this.EDIT_USER_ENDPOINT, user, {
        headers,
      })
      .pipe(
        map((response) => {
          if (response.success) {
            this.storeData();
          }
          return response;
        }),
      );
  }

  private addProgress(progress: AddProgressBody): Observable<AuthUserProgressResponse> {
    const headers = new HttpHeaders().set('Authorization', this.auth.token);

    return this.httpClient.post<AuthUserProgressResponse>(this.ADD_PROGRESS_ENDPOINT, progress, { headers }).pipe(
      map((response) => {
        // console.log('response POST user/add-progress', response);
        if (response.success) {
          this.data = response.data.user;
          this.storeData();
        }
        return response;
      }),
    );
  }
}
