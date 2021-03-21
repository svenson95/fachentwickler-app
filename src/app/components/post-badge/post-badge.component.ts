import { Component, Input, OnInit } from '@angular/core';
import { PostType } from '../../models/post-type';

@Component({
  selector: 'app-post-badge',
  templateUrl: './post-badge.component.html',
  styleUrls: ['./post-badge.component.scss']
})
export class PostBadgeComponent implements OnInit {

  @Input('post') post;
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
    } else if (text === PostType.TEST) {
      return 'Test';
    }
  }

}
