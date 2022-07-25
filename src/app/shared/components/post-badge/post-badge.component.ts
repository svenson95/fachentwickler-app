import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { PostType } from '@enums/post-type';

@Component({
  selector: 'fe-post-badge',
  template: `{{ typeString }}`,
  styleUrls: ['./post-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostBadgeComponent {
  @Input('type') public postType: PostType | string;

  @HostBinding('class') public get _(): string {
    switch (this.postType) {
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

  public PostType = PostType;

  public get typeString(): string {
    switch (this.postType) {
      case PostType.ARTICLE:
        return 'Artikel';
      case PostType.TASKS:
        return 'Aufgaben';
      case PostType.TEST:
        return 'Test';
      case PostType.QUIZ:
        return 'Quiz';
      case PostType.INDEX_CARDS:
        return 'Karteikarten';
      case PostType.MATCHING:
        return 'Matching';
      default:
        return 'unknown';
    }
  }
}
