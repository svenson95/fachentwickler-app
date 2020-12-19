import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { Post } from '../../models/post';
import { SubjectPost } from '../../models/subject';

@Component({
  selector: 'app-post-link',
  templateUrl: './post-link.component.html',
  styleUrls: ['./post-link.component.scss']
})
export class PostLinkComponent implements OnInit {

  @Input('post') post: Post | SubjectPost;
  @Input('title') title;

  constructor(private authService: AuthService) {
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
