import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public pageTitle = 'Loading';

  constructor() { }

  setPageTitle(title): void {
    this.pageTitle = title;
  }
}
