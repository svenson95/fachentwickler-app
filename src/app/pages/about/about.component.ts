import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('About');
  }

  ngOnInit(): void {
  }

}
