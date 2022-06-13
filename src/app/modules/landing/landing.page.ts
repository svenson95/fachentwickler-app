import { Component } from '@angular/core';

import { HeaderService } from '@services/header.service';

@Component({
  selector: 'fe-landing-page',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Start');
  }
}
