import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-about-page',
  templateUrl: './about.page.html'
})
export class AboutPage implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('About');
  }

  ngOnInit(): void {
  }

}
