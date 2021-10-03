import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post';

@Component({
  selector: 'fe-post-link',
  templateUrl: './post-link.component.html',
  styleUrls: ['./post-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostLinkComponent implements OnInit {

  @Input('post') post: Post;
  @Input('title') title;

  constructor(public router: Router) {}

  ngOnInit(): void {
  }

}
