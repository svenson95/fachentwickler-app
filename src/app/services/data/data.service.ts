import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Subject } from '../../models/subject';
import { Post } from '../../models/post';
import { ImageData, ImageFile } from '../../models/image-data';
import { DashboardData } from '../../models/dashboard-data';
import { SchoolWeek } from '../../models/school-week';
import { ExamDate } from '../../models/exam-date';
import { SchoolNews } from '../../models/school-news';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private SUBJECTS_ENDPOINT = environment.baseUrl + '/subjects';
    private POSTS_ENDPOINT = environment.baseUrl + '/posts';
    private IMAGES_ENDPOINT = environment.baseUrl + '/images';
    private SCHOOL_WEEK_ENDPOINT = environment.baseUrl + '/school-week';
    private EXAM_DATES_ENDPOINT = environment.baseUrl + '/exam-dates';
    private NEWS_ENDPOINT = environment.baseUrl + '/news';

    public currentSchoolWeek = 26;
    public schoolWeeksLength = 39;

    public dashboard: DashboardData;
    public schoolWeek: SchoolWeek;

    constructor(private httpClient: HttpClient) { }

    getSubject(subjectUrl: string): Observable<Subject> {
        return this.httpClient.get<Subject>(`${this.SUBJECTS_ENDPOINT}/${subjectUrl}/populated`)
            .pipe(map((response) => {
                // console.log('response GET subject', response);
                return response;
            }));
    }

    getPostById(postId: string): Observable<Post> {
        return this.httpClient.get<Post>(`${this.POSTS_ENDPOINT}/${postId}`)
            .pipe(map((response) => {
                // console.log('response GET subjects/post', response);
                return response;
            }));
    }

    getPost(postUrl: string): Observable<Post> {
        return this.httpClient.get<Post>(`${this.POSTS_ENDPOINT}/${postUrl}`)
            .pipe(map((response) => {
                // console.log('response GET post', response);
                return response;
            }));
    }

    getMultiplePosts(postIdsString: string): Observable<Post[]> {
        return this.httpClient.get<Post[]>(`${this.POSTS_ENDPOINT}/multiple/${postIdsString}`)
            .pipe(map((response) => {
                // console.log('response GET subjects/posts/(:arr)* (exam-item posts)', response);
                return response;
            }));
    }

    getAllLessons(): Observable<string[]> {
        return this.httpClient.get<string[]>(`${this.POSTS_ENDPOINT}/all-lessons`)
            .pipe(map((response) => {
                // console.log('response GET posts/all-lessons', response);
                return response;
            }));
    }

    getImage(imageUrl: string): Observable<ImageData> {
        const imageId = imageUrl.substr(imageUrl.lastIndexOf('/'), imageUrl.length);
        const url = 'http://localhost:3000/images' + imageId;
        return this.httpClient.get<ImageData>(url)
            .pipe(map((response) => {
                // console.log('response GET image', response);
                return response;
            }));
    }

    getImageById(id: string): Observable<ImageData> {
        return this.httpClient.get<ImageData>(`${this.IMAGES_ENDPOINT}/${id}`)
            .pipe(map((response) => {
                // console.log('response GET image', response);
                return response;
            }));
    }

    getMultipleImages(page = 0, imagesPerPage = 10, sorting = 'descending'): Observable<ImageFile[]> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
        const params = new HttpParams()
            .set('page', String(page))
            .set('size', String(imagesPerPage))
            .set('sort', sorting);

        return this.httpClient.get<ImageFile[]>(`${this.IMAGES_ENDPOINT}/all`, {headers, params})
            .pipe(map((response) => {
                // console.log('response GET images', response);
                return response;
            }));
    }

    getAllImagesLength(): Observable<number> {
        return this.httpClient.get<number>(`${this.IMAGES_ENDPOINT}/count`)
            .pipe(map((response) => {
                // console.log('response GET images count', response);
                return response;
            }));
    }

    uploadImage(file: any): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);

        return this.httpClient.post<any>(`${this.IMAGES_ENDPOINT}/upload`, formData)
            .pipe(map((response) => {
                // console.log('response POST image', response);
                return response;
            }));
    }

    deleteImageById(id: string): Observable<any> {
        return this.httpClient.delete<any>(`${this.IMAGES_ENDPOINT}/${id}/delete`)
            .pipe(map((response) => {
                console.log('response DELETE image', response);
                return response;
            }));
    }

    getSchoolWeek(week: number): Observable<SchoolWeek> {
        return this.httpClient.get<SchoolWeek>(`${this.SCHOOL_WEEK_ENDPOINT}/number/${week}`)
            .pipe(map((response) => {
                // console.log('response GET posts/school-week/:number', response);
                return response;
            }));
    }

    getAllSchoolWeeks(): Observable<SchoolWeek[]> {
        return this.httpClient.get<SchoolWeek[]>(`${this.SCHOOL_WEEK_ENDPOINT}/all`)
            .pipe(map((response) => {
                // console.log('response GET posts/all-school-weeks', response);
                return response;
            }));
    }

    getAllExamDates(): Observable<ExamDate[]> {
        return this.httpClient.get<ExamDate[]>(this.EXAM_DATES_ENDPOINT)
            .pipe(map((response) => {
                // console.log('response GET exam-dates', response);
                return response;
            }));
    }

    getAllNews(page = 0, itemsPerPage = 10): Observable<SchoolNews[]> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
        const params = new HttpParams()
            .set('page', String(page))
            .set('size', String(itemsPerPage));

        return this.httpClient.get<SchoolNews[]>(`${this.NEWS_ENDPOINT}/all`, {headers, params})
            .pipe(map((response) => {
                // console.log('response GET news', response);
                return response;
            }));
    }

    getAllNewsLength(): Observable<number> {
        return this.httpClient.get<number>(`${this.NEWS_ENDPOINT}/count`)
            .pipe(map((response) => {
                // console.log('response GET news count', response);
                return response;
            }));
    }

    getNewsObject(url: string): Observable<SchoolNews> {
        return this.httpClient.get<SchoolNews>(`${this.NEWS_ENDPOINT}/${url}`)
            .pipe(map((response) => {
                // console.log('response GET news object', response);
                return response;
            }));
    }
}
