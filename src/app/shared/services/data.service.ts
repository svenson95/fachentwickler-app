import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { SchoolWeek } from '@models/school-week';
import { SubjectResponse } from '@models/subject';
import { Post } from '@models/post';
import { ExamDate } from '@models/exam-date';
import { ImageFile, ImageData } from '@models/image-data';
import { SchoolNews } from '@models/school-news';
import { Message } from '@models/message';

import { PostType } from '../../core/types/post-type';

import { LoggingService } from './logging.service';

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

  constructor(private httpClient: HttpClient, private logging: LoggingService) {}

  public getSubject(subjectUrl: string): Observable<SubjectResponse> {
    const endpoint = `${this.SUBJECTS_ENDPOINT}/${subjectUrl}/populated`;

    return this.httpClient.get<SubjectResponse>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getPostById(postId: string): Observable<PostType> {
    const endpoint = `${this.POSTS_ENDPOINT}/id/${postId}`;

    return this.httpClient.get<PostType>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getPost(postUrl: string): Observable<PostType> {
    const endpoint = `${this.POSTS_ENDPOINT}/url/${postUrl}`;

    return this.httpClient.get<PostType>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getMultiplePosts(postIdsString: string): Observable<Post[]> {
    const endpoint = `${this.POSTS_ENDPOINT}/multiple/${postIdsString}`;

    return this.httpClient.get<Post[]>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getAllLessons(): Observable<string[]> {
    const endpoint = `${this.POSTS_ENDPOINT}/all-lessons`;

    return this.httpClient.get<string[]>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getImage(imageId: string): Observable<ImageData> {
    const endpoint = `${this.IMAGES_ENDPOINT}/${imageId}`;

    return this.httpClient.get<ImageData>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getImageById(id: string): Observable<ImageData> {
    const endpoint = `${this.IMAGES_ENDPOINT}/${id}`;

    return this.httpClient.get<ImageData>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getMultipleImages(page = 0, imagesPerPage = 10, sorting = 'descending'): Observable<ImageFile[]> {
    const endpoint = `${this.IMAGES_ENDPOINT}/all`;
    const params = new HttpParams().set('page', String(page)).set('size', String(imagesPerPage)).set('sort', sorting);

    return this.httpClient.get<ImageFile[]>(endpoint, { params }).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getAllImagesLength(): Observable<number> {
    const endpoint = `${this.IMAGES_ENDPOINT}/count`;

    return this.httpClient.get<number>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public uploadImage(file: any): Observable<any> {
    const endpoint = `${this.IMAGES_ENDPOINT}/upload`;
    const payload = new FormData();
    payload.append('file', file);

    // TODO: replace any by (new) type 'ImageInput' & 'ImageData
    return this.httpClient.post<any>(endpoint, payload).pipe(
      map((response) => {
        this.logging.debug(new Message(`response POST ${endpoint}`), `payload: ${payload}`, response);
        return response;
      }),
    );
  }

  public deleteImageById(id: string): Observable<any> {
    const endpoint = `${this.IMAGES_ENDPOINT}/${id}/delete`;

    return this.httpClient.delete<any>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response DELETE ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getSchoolWeek(week: number): Observable<SchoolWeek> {
    const endpoint = `${this.SCHOOL_WEEK_ENDPOINT}/week/${week}`;

    return this.httpClient.get<SchoolWeek>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getAllSchoolWeeks(): Observable<SchoolWeek[]> {
    const endpoint = `${this.SCHOOL_WEEK_ENDPOINT}/all`;

    return this.httpClient.get<SchoolWeek[]>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getAllExamDates(): Observable<ExamDate[]> {
    const endpoint = this.EXAM_DATES_ENDPOINT;

    return this.httpClient.get<ExamDate[]>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getNews(page = 0, itemsPerPage = 10): Observable<SchoolNews[]> {
    const endpoint = `${this.NEWS_ENDPOINT}/all`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('page', String(page)).set('size', String(itemsPerPage));

    return this.httpClient.get<SchoolNews[]>(endpoint, { headers, params }).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getLatestNews(): Observable<SchoolNews[]> {
    const endpoint = `${this.NEWS_ENDPOINT}/latest`;

    return this.httpClient.get<SchoolNews[]>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getAllNewsLength(): Observable<number> {
    const endpoint = `${this.NEWS_ENDPOINT}/count`;

    return this.httpClient.get<number>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }

  public getNewsObject(url: string): Observable<SchoolNews> {
    const endpoint = `${this.NEWS_ENDPOINT}/${url}`;

    return this.httpClient.get<SchoolNews>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response GET ${endpoint}`), response);
        return response;
      }),
    );
  }
}
