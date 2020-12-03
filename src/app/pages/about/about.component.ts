import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('About');
  }

  ngOnInit(): void {
  }

}
