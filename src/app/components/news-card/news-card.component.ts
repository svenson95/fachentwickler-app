import { Component, Input, OnInit } from '@angular/core';

import { SchoolNews } from '../../models/school-news';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html'
})
export class NewsCardComponent implements OnInit {

  @Input() news: SchoolNews[];
  @Input() onlyLastOne = false;
  @Input() currentPage = 0;
  @Input() allNewsLength?: number;
  @Input() loadPage?: (args) => void;

  isLoading: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
