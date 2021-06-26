import { Component, Input, OnInit } from '@angular/core';

import { PostType } from '../../models/post-type';
import { Post } from '../../models/post';
import { IndexCards } from '../../models/index-cards';
import { Matching } from '../../models/matching-piece';

@Component({
  selector: 'fe-post-badge',
  templateUrl: './post-badge.component.html'
})
export class PostBadgeComponent implements OnInit {

  @Input('post') post: Post | IndexCards | Matching;
  PostType = PostType;

  constructor() { }

  ngOnInit(): void {
  }

  badgeTranslator(text: PostType): string {
    if (text === PostType.ARTICLE) {
      return 'Artikel';
    } else if (text === PostType.TASKS) {
      return 'Aufgaben';
    } else if (text === PostType.INDEX_CARDS) {
      return 'Karteikarten';
    } else if (text === PostType.QUIZ) {
      return 'Quiz';
    } else if (text === PostType.MATCHING) {
      return 'Matchings';
    } else if (text === PostType.TEST) {
      return 'Test';
    }
  }

}
