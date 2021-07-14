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

  searchTerm = '';
  searchedTerm: string;
  searchResults$: Subject<Post[]> = new Subject();
  redirectUrl: string;
  isSearching = false;

  constructor(private httpClient: HttpClient) { }

  searchPosts(searchTerm: string): Observable<Post[]> {
    this.searchedTerm = searchTerm;
    return this.httpClient.get<Post[]>(`${environment.baseUrl}/search?query=${searchTerm}`)
      .pipe(map((response) => {
        // console.log('response GET search post', response);
        return response;
      }));
  }

  setRedirectUrl(url): void {
      this.redirectUrl = url;
  }
}
