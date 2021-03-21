import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post';

@Injectable({
  providedIn: 'root'
})
export class SearchPostService {

  searchValue = '';
  searchResults$: Subject<Post[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  // Search component - GET post
  searchPosts(text: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.baseUrl}/search/${text}`)
      .pipe(map((response) => {
        console.log('response GET search post', response);
        return response;
      }));
  }
}
