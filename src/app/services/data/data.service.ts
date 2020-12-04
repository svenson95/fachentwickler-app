import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../../models/subject';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Post } from '../../models/post';
import { IndexCardsData } from '../../models/index-cards';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getSubject(subjectUrl: string): Observable<Subject> {
    return this.httpClient.get<Subject>(`${environment.baseUrl}/subjects/${subjectUrl}`)
      .pipe(map((response) => {
        // console.log('response getSubject');
        // console.log(response);
        return response;
      }));
  }

  getPost(postUrl: string): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.baseUrl}/posts/${postUrl}`)
      .pipe(map((response) => {
        console.log('response getPost');
        console.log(response);
        return response;
      }));
  }

  getImage(imageUrl: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'image/png');
    return this.httpClient.get<any>(imageUrl, {headers})
      .pipe(map((response) => {
        // console.log('response getImage');
        // console.log(response);
        return response;
      }));
  }
}
