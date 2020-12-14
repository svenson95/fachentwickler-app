import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { transformDate } from '../../app-common/transform-date';

@Component({
  selector: 'app-post-link',
  templateUrl: './post-link.component.html',
  styleUrls: ['./post-link.component.scss']
})
export class PostLinkComponent implements OnInit {

  @Input('post') post: Post;
  @Input('title') title;

  transformDate = transformDate;

  constructor() {
  }

  ngOnInit(): void {
  }

}
