import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SchoolNews } from '../../../models/school-news';

@Component({
  selector: 'fe-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent {
  @Input() public news: SchoolNews[];

  @Input() public currentPage = 0;

  @Input() public allNewsLength?: number;

  @Input() public isLoading?: boolean;

  @Output() public changePage = new EventEmitter<number>();

  public loadPage(pageNumber): number {
    if (this.currentPage === pageNumber) return;
    this.changePage.emit(pageNumber);
  }
}
