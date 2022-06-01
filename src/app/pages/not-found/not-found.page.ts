import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-not-found-page',
  templateUrl: './not-found.page.html',
})
export class NotFoundPage {
  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Not Found');
  }
}
