import { Component } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'fe-about-page',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('About');
  }
}
