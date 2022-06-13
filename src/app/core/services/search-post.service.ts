import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class SearchPostService {
  public searchTerm = '';

  public searchedTerm: string;

  public searchResults$: Subject<Post[]> = new Subject();

  public redirectUrl: string;

  public isSearching = false;

  constructor(private httpClient: HttpClient) {}

  public searchPosts(searchTerm: string): Observable<Post[]> {
    this.isSearching = true;
    this.searchedTerm = searchTerm;
    return this.httpClient.get<Post[]>(`${environment.baseUrl}/search?query=${searchTerm}`).pipe(
      map((response) => {
        // console.log('response GET search post', response);
        this.isSearching = false;
        return response;
      }),
    );
  }

  public setRedirectUrl(url): void {
    this.redirectUrl = url;
  }
}
