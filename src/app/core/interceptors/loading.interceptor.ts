import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor {
  private activeRequests = 0;

  constructor(private loadingService: LoadingService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loadingService.startLoading();
    }
    this.activeRequests += 1;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests -= 1;
        if (this.activeRequests === 0) {
          this.loadingService.stopLoading();
        }
      }),
    );
  }
}
