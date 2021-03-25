import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../../models/subject';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { Post } from '../../models/post';
import { IndexCards } from '../../models/index-cards';
import { Quiz } from '../../models/quiz';
import { DashboardData } from '../../models/dashboard-data';
import { SchoolWeek } from '../../models/school-week';
import { ExamDate } from '../../models/exam-date';
import { SchoolNews } from '../../models/school-news';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Settings
  public schoolWeekValue = 23;

  public dashboard: DashboardData;
  public schoolWeek: SchoolWeek;
  public openExams: ExamDate[] = [];

  constructor(private httpClient: HttpClient) { }

  // Subject component - GET subject
  getSubject(subjectUrl: string): Observable<Subject> {
    return this.httpClient.get<Subject>(`${environment.baseUrl}/subjects/${subjectUrl}/populated`)
      .pipe(map((response) => {
        // console.log('response GET subject', response);
        return response;
      }));
  }

  // Subject component - GET subject-post
  getSubjectPost(postId: string): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.baseUrl}/posts/${postId}`)
      .pipe(map((response) => {
        // console.log('response GET subjects/post', response);
        return response;
      }));
  }

  // Exam-Item component - GET subject-posts
  getSubjectPosts(postIdsString: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.baseUrl}/posts/multiple/${postIdsString}`)
      .pipe(map((response) => {
        // console.log('response GET subjects/posts/(:arr)* (exam-item posts)', response);
        return response;
      }));
  }

  // Post component - GET post
  getPost(postUrl: string): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.baseUrl}/posts/${postUrl}`)
      .pipe(map((response) => {
        // console.log('response GET post', response);
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

  // Image Manager component - GET images
  getImages(page = 0, imagesPerPage = 10): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'image/png');
    return this.httpClient.get<any>(`${environment.baseUrl}/images/all?page=${page}&page_size=${imagesPerPage}`, {headers})
      .pipe(map((response) => {
        // console.log('response GET images', response);
        return response;
      }));
  }

  // Edit-Post page - POST image
  async uploadImage(file: any): Promise<Observable<any>> {
    console.log('file', file);
    // const headers = new HttpHeaders()
    //   .set('Content-Type', 'image/png');
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<any>(`${environment.baseUrl}/images/upload`, {formData})
      .pipe(map((response) => {
        // console.log('response POST image', response);
        return response;
      }));
  }

  // Quiz component - GET quiz
  getQuiz(url: string): Observable<Quiz> {
    return this.httpClient.get<Quiz>(`${environment.baseUrl}/quiz/${url}`)
      .pipe(map((response) => {
        // console.log('response GET quiz', response);
        return response;
      }));
  }

  // Index Cards component - GET index-cards
  getIndexCards(url: string): Observable<IndexCards> {
    return this.httpClient.get<IndexCards>(`${environment.baseUrl}/index-cards/${url}`)
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
    return this.httpClient.get<SchoolWeek>(`${environment.baseUrl}/school-week/number/` + week)
      .pipe(map((response) => {
        // console.log('response GET posts/school-week/:number', response);
        return response;
    }));
  }

  // Curriculum component - GET all school-week cards
  getAllWeeks(): Observable<SchoolWeek[]> {
    return this.httpClient.get<SchoolWeek[]>(`${environment.baseUrl}/school-week/all`)
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
