import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { Post } from '../../models/post';

@Component({
  selector: 'fe-post-link',
  templateUrl: './post-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostLinkComponent implements OnInit {

  @Input('post') post: Post;
  @Input('title') title;

  constructor(private authService: AuthService,
              public router: Router
  ) {
  }

  ngOnInit(): void {
  }

  isAlreadyCompleted(postId): boolean {
    if (this.authService.user && this.authService.user.progress.includes(postId)) {
      return true;
    } else {
      return false;
    }
  }

}
