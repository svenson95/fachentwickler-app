import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '@models/post';

@Component({
  selector: 'fe-post-link',
  templateUrl: './post-link.component.html',
  styleUrls: ['./post-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostLinkComponent {
  @Input('post') public post: Post;

  @Input('title') public title: string;

  public get postRouterLink(): string {
    const subject = this.post.subject ? this.post.subject : this.router.url;
    return `/${subject}/${this.post.url}`;
  }

  constructor(public router: Router) {}
}
