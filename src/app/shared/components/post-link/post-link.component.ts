import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '@models/post';
import { UserData } from '@models/user';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-post-link',
  templateUrl: './post-link.component.html',
  styleUrls: ['./post-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostLinkComponent {
  @Input('post') public post: Post;

  @Input('title') public title: string;

  public userData: UserData;

  public get postRouterLink(): string {
    const subject = this.post.subject ? this.post.subject : this.router.url;
    return `/${subject}/${this.post.url}`;
  }

  constructor(public router: Router, private user: UserService) {
    this.user.data$.subscribe((data) => {
      this.userData = data;
    });
  }
}
