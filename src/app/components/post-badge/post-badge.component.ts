import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostType } from '../../models/post-type';

@Component({
  selector: 'fe-post-badge',
  templateUrl: './post-badge.component.html',
  styleUrls: ['./post-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostBadgeComponent {
  @Input('post') public post: Post;

  public PostType = PostType;

  // eslint-disable-next-line class-methods-use-this
  public badgeTranslator(text: PostType | string): string {
    if (text === PostType.ARTICLE) {
      return 'Artikel';
    }
    if (text === PostType.TASKS) {
      return 'Aufgaben';
    }
    if (text === PostType.INDEX_CARDS) {
      return 'Karteikarten';
    }
    if (text === PostType.QUIZ) {
      return 'Quiz';
    }
    if (text === PostType.MATCHING) {
      return 'Matchings';
    }
    if (text === PostType.TEST) {
      return 'Test';
    }
    return '';
  }
}
