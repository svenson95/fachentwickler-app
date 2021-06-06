import { Component, Input, OnInit } from '@angular/core';
import { SchoolNews } from '../../models/school-news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html'
})
export class NewsCardComponent implements OnInit {

  @Input() news: SchoolNews[];
  @Input() onlyLastOne: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
