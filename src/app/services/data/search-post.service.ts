import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { SubjectPost } from '../../models/subject';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchPostService {

  searchValue: string;
  searchResults$: Subject<SubjectPost[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  // Search component - GET post
  searchPost(text: string): Observable<SubjectPost[]> {
    return this.httpClient.get<SubjectPost[]>(`${environment.baseUrl}/search/${text}`)
      .pipe(map((response) => {
        console.log('response GET search post', response);
        return response;
      }));
  }
}
