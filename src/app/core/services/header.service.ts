import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public pageTitle = 'Loading';

  public setPageTitle(title: string): void {
    this.pageTitle = title;
  }
}
