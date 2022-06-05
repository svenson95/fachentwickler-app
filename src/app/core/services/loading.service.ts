import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loading$: Subject<boolean> = new Subject();

  public startLoading(): void {
    this.loading$.next(true);
  }

  public stopLoading(): void {
    this.loading$.next(false);
  }
}
