import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-about-page',
  templateUrl: './about.page.html',
})
export class AboutPage {
  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('About');
  }
}
