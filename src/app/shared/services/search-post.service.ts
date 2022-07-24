import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Post } from '@models/post';
import { Message } from '@models/message';

import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class SearchPostService {
  public searchTerm = '';

  public searchedTerm: string;

  public searchResults$: Subject<Post[]> = new Subject();

  public redirectUrl: string;

  public isSearching = false;

  constructor(private httpClient: HttpClient, private logging: LoggingService) {}

  public searchPosts(searchTerm: string): Observable<Post[]> {
    const endpoint = `${environment.baseUrl}/search?query=${searchTerm}`;
    this.isSearching = true;
    this.searchedTerm = searchTerm;

    return this.httpClient.get<Post[]>(endpoint).pipe(
      map((response) => {
        this.logging.debug(new Message(`response POST ${endpoint}`), response);
        this.isSearching = false;
        return response;
      }),
    );
  }

  public setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
}
