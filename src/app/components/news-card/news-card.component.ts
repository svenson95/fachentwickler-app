import {Component, Input, OnInit} from '@angular/core';
import {SchoolNews} from '../../models/school-news';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() onlyLastOne: boolean;

  newsList: SchoolNews[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNewsList().subscribe(response => {
      this.newsList = response;
    });
  }

}
