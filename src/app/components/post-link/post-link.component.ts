import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/post';

@Component({
  selector: 'fe-post-link',
  templateUrl: './post-link.component.html',
  styleUrls: ['./post-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostLinkComponent {
  @Input('post') public post: Post;

  @Input('title') public title: string;

  constructor(public router: Router) {}
}
