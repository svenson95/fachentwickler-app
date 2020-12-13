import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../../models/subject';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Post } from '../../models/post';
import { IndexCardsData } from '../../models/index-cards';
import { QuizData } from '../../models/quiz';
import { DashboardData } from '../../models/dashboard-data';
import { SchoolWeek } from '../../models/school-week';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dashboard: DashboardData;
  public schoolWeek = 17;

  constructor(private httpClient: HttpClient) { }

  // Subject component - GET subject
  getSubject(subjectUrl: string): Observable<Subject> {
    return this.httpClient.get<Subject>(`${environment.baseUrl}/subjects/${subjectUrl}`)
      .pipe(map((response) => {
        // console.log('response GET subject', response);
        return response;
      }));
  }

  // Post component - GET post
  getPost(postUrl: string): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.baseUrl}/posts/${postUrl}`)
      .pipe(map((response) => {
        console.log('response GET post', response);
        return response;
      }));
  }

  // Element component - GET image
  getImage(imageUrl: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'image/png');
    return this.httpClient.get<any>(imageUrl, {headers})
      .pipe(map((response) => {
        // console.log('response GET image', response);
        return response;
      }));
  }

  // Quiz component - GET quiz
  getQuiz(postUrl: string): Observable<QuizData> {
    return this.httpClient.get<QuizData>(`${environment.baseUrl}/quiz/${postUrl}`)
      .pipe(map((response) => {
        console.log('response GET quiz', response);
        return response;
      }));
  }

  // Index Cards component - GET index-cards
  getIndexCards(postUrl: string): Observable<IndexCardsData> {
    return this.httpClient.get<IndexCardsData>(`${environment.baseUrl}/index-cards/${postUrl}`)
      .pipe(map((response) => {
        // console.log('response GET index-cards', response);
        return response;
      }));
  }

  // Dashboard component - GET posts/all          // TODO: rename backend-route
  getAllLessons(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.baseUrl}/posts/all-lessons`)
      .pipe(map((response) => {
        // console.log('response GET posts/all-lessons', response);
        return response;
      }));
  }

  // Dashboard component - GET posts/school-week/:number
  getSchoolWeek(week: number): Observable<SchoolWeek> {
    return this.httpClient.get<SchoolWeek>(`${environment.baseUrl}/posts/school-week/` + week)
      .pipe(map((response) => {
        console.log('response GET posts/school-week/:number', response);
        return response;
    }));
  }

  // Dashboard component - GET posts/all-school-weeks
  getAllWeeks(): Observable<SchoolWeek[]> {
    return this.httpClient.get<SchoolWeek[]>(`${environment.baseUrl}/posts/all-school-weeks`)
      .pipe(map((response) => {
        // console.log('response GET posts/all-school-weeks', response);
        return response;
      }));
  }

  storeDashboard(dashboard): void {
    this.dashboard = dashboard;
  }
}
