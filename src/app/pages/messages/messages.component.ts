import { Component, OnInit } from '@angular/core';

import { SchoolNews } from '../../models/school-news';
import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  news: SchoolNews[];

  constructor(private headerService: HeaderService,
              private dataService: DataService
  ) {
    this.headerService.setPageTitle('Mitteilungen');
    this.dataService.getAllNews().subscribe(res => {
      this.news = res;
    });
  }

  ngOnInit(): void {
  }

}
