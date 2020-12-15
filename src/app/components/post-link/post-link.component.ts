import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { transformDate } from '../../app-common/transform-date';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-post-link',
  templateUrl: './post-link.component.html',
  styleUrls: ['./post-link.component.scss']
})
export class PostLinkComponent implements OnInit {

  @Input('post') post: Post;
  @Input('title') title;

  transformDate = transformDate;

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
