import { Component, Input } from '@angular/core';

import { PostType } from '../../../core/enums/post-type';

@Component({
  selector: 'fe-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public title: string;

  @Input() public date: string;

  @Input() public type: PostType | string;

  @Input() public buttonLink: string;

  @Input() public buttonLabel: string;

  @Input() public lastUpdate: string;

  public get className(): string {
    switch (this.type) {
      case PostType.ARTICLE:
        return 'article';
      case PostType.TASKS:
        return 'tasks';
      case PostType.TEST:
        return 'test';
      case PostType.QUIZ:
        return 'quiz';
      case PostType.INDEX_CARDS:
        return 'index-cards';
      case PostType.MATCHING:
        return 'matching';
      default:
        return 'unknown';
    }
  }
}
