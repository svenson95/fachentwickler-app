import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SchoolNews } from '../../../models/school-news';

@Component({
  selector: 'fe-news-card',
  templateUrl: './news-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsCardComponent implements OnInit {

  @Input() news: SchoolNews[];
  @Input() currentPage = 0;
  @Input() allNewsLength?: number;
  @Output() changePage = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }

  loadPage(pageNumber): number {
    if (this.currentPage === pageNumber) return;
    this.changePage.emit(pageNumber);
  }
}
