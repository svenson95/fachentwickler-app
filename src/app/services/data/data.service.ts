import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject, SubjectPost } from '../../models/subject';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { Post } from '../../models/post';
import { IndexCardsData } from '../../models/index-cards';
import { QuizData } from '../../models/quiz';
import { DashboardData } from '../../models/dashboard-data';
import { SchoolWeek } from '../../models/school-week';
import { ExamDate } from '../../models/exam-date';
import { SchoolNews } from '../../models/school-news';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Settings
  public schoolWeekValue = 19;

  public dashboard: DashboardData;
  public schoolWeek: SchoolWeek;
  public openExams: ExamDate[] = [];

  constructor(private httpClient: HttpClient) { }

  // Subject component - GET subject
  getSubject(subjectUrl: string): Observable<Subject> {
    return this.httpClient.get<Subject>(`${environment.baseUrl}/subjects/${subjectUrl}`)
      .pipe(map((response) => {
        // console.log('response GET subject', response);
        return response;
      }));
  }

  // Subject component - GET subject-post
  getSubjectPost(postId: string): Observable<SubjectPost> {
    return this.httpClient.get<SubjectPost>(`${environment.baseUrl}/subjects/post/${postId}`)
      .pipe(map((response) => {
        // console.log('response GET subjects/post', response);
        return response;
      }));
  }

  // Exam-Item component - GET subject-posts
  getSubjectPosts(postIdsString: string): Observable<SubjectPost[]> {
    return this.httpClient.get<SubjectPost[]>(`${environment.baseUrl}/subjects/posts/${postIdsString}`)
      .pipe(map((response) => {
        // console.log('response GET subjects/posts/(:arr)* (exam-item posts)', response);
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
        // console.log('response GET quiz', response);
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

  // Dashboard component - GET posts/all-ids          // TODO: rename backend-route
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
        // console.log('response GET posts/school-week/:number', response);
        return response;
    }));
  }

  // Curriculum component - GET all school-week cards
  getAllWeeks(): Observable<SchoolWeek[]> {
    return this.httpClient.get<SchoolWeek[]>(`${environment.baseUrl}/posts/all-school-weeks`)
      .pipe(map((response) => {
        // console.log('response GET posts/all-school-weeks', response);
        return response;
      }));
  }

  // Exams page & Next-exams-card component - GET all exam dates
  getExamDates(): Observable<ExamDate[]> {
    return this.httpClient.get<ExamDate[]>(`${environment.baseUrl}/exam-dates`)
      .pipe(map((response) => {
        // console.log('response GET exam-dates', response);
        return response;
      }));
  }

  // Messages & Dashboard page - GET all news
  getNewsList(): Observable<SchoolNews[]> {
    return this.httpClient.get<SchoolNews[]>(`${environment.baseUrl}/news`)
      .pipe(map((response) => {
        // console.log('response GET news', response);
        return response;
      }));
  }

  // Messages & Dashboard page - GET specific news object
  getNewsObject(url: string): Observable<SchoolNews> {
    return this.httpClient.get<SchoolNews>(`${environment.baseUrl}/news/${url}`)
      .pipe(map((response) => {
        // console.log('response GET news object', response);
        return response;
      }));
  }
}
