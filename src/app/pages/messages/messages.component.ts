import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data/data.service';
import { SchoolNews } from '../../models/school-news';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  news: SchoolNews[];

  constructor(private headerService: HeaderService,
              private dataService: DataService
  ) {
    this.headerService.setPageTitle('Mitteilungen');
    this.dataService.getNewsList().subscribe(res => {
      this.news = res;
    });
  }

  ngOnInit(): void {
  }

}
