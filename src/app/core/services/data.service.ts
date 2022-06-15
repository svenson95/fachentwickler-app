import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { SchoolWeek } from '@models/school-week';
import { SubjectPopulated } from '@models/subject';
import { Post, PostTypes } from '@models/post';
import { ExamDate } from '@models/exam-date';
import { ImageFile, ImageData } from '@models/image-data';
import { SchoolNews } from '@models/school-news';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private SUBJECTS_ENDPOINT = `${environment.baseUrl}/subjects`;

  private POSTS_ENDPOINT = `${environment.baseUrl}/posts`;

  private IMAGES_ENDPOINT = `${environment.baseUrl}/images`;

  private SCHOOL_WEEK_ENDPOINT = `${environment.baseUrl}/school-week`;

  private EXAM_DATES_ENDPOINT = `${environment.baseUrl}/exam-dates`;

  private NEWS_ENDPOINT = `${environment.baseUrl}/news`;

  constructor(private httpClient: HttpClient) {}

  public getSubject(subjectUrl: string): Observable<SubjectPopulated> {
    return this.httpClient.get<SubjectPopulated>(`${this.SUBJECTS_ENDPOINT}/${subjectUrl}/populated`).pipe(
      map((response) => {
        // console.log('response GET subject', response);
        return response;
      }),
    );
  }

  public getPostById(postId: string): Observable<PostTypes> {
    return this.httpClient.get<PostTypes>(`${this.POSTS_ENDPOINT}/${postId}`).pipe(
      map((response) => {
        // console.log('response GET subjects/post', response);
        return response;
      }),
    );
  }

  public getPost(postUrl: string): Observable<PostTypes> {
    return this.httpClient.get<PostTypes>(`${this.POSTS_ENDPOINT}/${postUrl}`).pipe(
      map((response) => {
        // console.log('response GET post', response);
        return response;
      }),
    );
  }

  public getMultiplePosts(postIdsString: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.POSTS_ENDPOINT}/multiple/${postIdsString}`).pipe(
      map((response) => {
        // console.log('response GET subjects/posts/(:arr)* (exam-item posts)', response);
        return response;
      }),
    );
  }

  public getAllLessons(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.POSTS_ENDPOINT}/all-lessons`).pipe(
      map((response) => {
        // console.log('response GET posts/all-lessons', response);
        return response;
      }),
    );
  }

  public getImage(imageId: string): Observable<ImageData> {
    return this.httpClient.get<ImageData>(`${this.IMAGES_ENDPOINT}/${imageId}`).pipe(
      map((response) => {
        // console.log('response GET image', response);
        return response;
      }),
    );
  }

  public getImageById(id: string): Observable<ImageData> {
    return this.httpClient.get<ImageData>(`${this.IMAGES_ENDPOINT}/${id}`).pipe(
      map((response) => {
        // console.log('response GET image', response);
        return response;
      }),
    );
  }

  public getMultipleImages(page = 0, imagesPerPage = 10, sorting = 'descending'): Observable<ImageFile[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('page', String(page)).set('size', String(imagesPerPage)).set('sort', sorting);

    return this.httpClient.get<ImageFile[]>(`${this.IMAGES_ENDPOINT}/all`, { headers, params }).pipe(
      map((response) => {
        // console.log('response GET images', response);
        return response;
      }),
    );
  }

  public getAllImagesLength(): Observable<number> {
    return this.httpClient.get<number>(`${this.IMAGES_ENDPOINT}/count`).pipe(
      map((response) => {
        // console.log('response GET images count', response);
        return response;
      }),
    );
  }

  public uploadImage(file: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.httpClient.post<any>(`${this.IMAGES_ENDPOINT}/upload`, formData).pipe(
      map((response) => {
        // console.log('response POST image', response);
        return response;
      }),
    );
  }

  public deleteImageById(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.IMAGES_ENDPOINT}/${id}/delete`).pipe(
      map((response) => {
        // console.log('response DELETE image', response);
        return response;
      }),
    );
  }

  public getSchoolWeek(week: number): Observable<SchoolWeek> {
    return this.httpClient.get<SchoolWeek>(`${this.SCHOOL_WEEK_ENDPOINT}/number/${week}`).pipe(
      map((response) => {
        // console.log('response GET posts/school-week/:number', response);
        return response;
      }),
    );
  }

  public getAllSchoolWeeks(): Observable<SchoolWeek[]> {
    return this.httpClient.get<SchoolWeek[]>(`${this.SCHOOL_WEEK_ENDPOINT}/all`).pipe(
      map((response) => {
        // console.log('response GET posts/all-school-weeks', response);
        return response;
      }),
    );
  }

  public getAllExamDates(): Observable<ExamDate[]> {
    return this.httpClient.get<ExamDate[]>(this.EXAM_DATES_ENDPOINT).pipe(
      map((response) => {
        // console.log('response GET exam-dates', response);
        return response;
      }),
    );
  }

  public getNews(page = 0, itemsPerPage = 10): Observable<SchoolNews[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('page', String(page)).set('size', String(itemsPerPage));

    return this.httpClient.get<SchoolNews[]>(`${this.NEWS_ENDPOINT}/all`, { headers, params }).pipe(
      map((response) => {
        // console.log('response GET news', response);
        return response;
      }),
    );
  }

  public getLatestNews(): Observable<SchoolNews[]> {
    return this.httpClient.get<SchoolNews[]>(`${this.NEWS_ENDPOINT}/latest`).pipe(
      map((response) => {
        // console.log('response GET latest news', response);
        return response;
      }),
    );
  }

  public getAllNewsLength(): Observable<number> {
    return this.httpClient.get<number>(`${this.NEWS_ENDPOINT}/count`).pipe(
      map((response) => {
        // console.log('response GET news count', response);
        return response;
      }),
    );
  }

  public getNewsObject(url: string): Observable<SchoolNews> {
    return this.httpClient.get<SchoolNews>(`${this.NEWS_ENDPOINT}/${url}`).pipe(
      map((response) => {
        // console.log('response GET news object', response);
        return response;
      }),
    );
  }
}
