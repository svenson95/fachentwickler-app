import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-link',
  templateUrl: './post-link.component.html',
  styleUrls: ['./post-link.component.scss']
})
export class PostLinkComponent implements OnInit {

  @Input('post') post;
  @Input('title') title;

  constructor() {}

  ngOnInit(): void {
    console.log(this.post);
  }

}
